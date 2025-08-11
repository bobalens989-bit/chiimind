#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Netlify Deployment Verification');
console.log('=====================================\n');

let hasErrors = false;

function checkFile(filePath, description) {
    if (fs.existsSync(filePath)) {
        console.log(`✅ ${description} exists: ${filePath}`);
        return true;
    } else {
        console.log(`❌ ${description} missing: ${filePath}`);
        hasErrors = true;
        return false;
    }
}

function checkPackageJson() {
    const packagePath = './package.json';
    if (!checkFile(packagePath, 'package.json')) return;

    try {
        const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

        console.log('\n📦 Package.json verification:');

        // Check build script
        if (pkg.scripts && pkg.scripts.build) {
            console.log(`✅ Build script found: ${pkg.scripts.build}`);
        } else {
            console.log('❌ Build script missing');
            hasErrors = true;
        }

        // Check engines
        if (pkg.engines && pkg.engines.node) {
            console.log(`✅ Node engine specified: ${pkg.engines.node}`);
        } else {
            console.log('⚠️  Node engine not specified');
        }

        // Check Next.js version
        if (pkg.dependencies && pkg.dependencies.next) {
            console.log(`✅ Next.js version: ${pkg.dependencies.next}`);
        } else {
            console.log('❌ Next.js dependency missing');
            hasErrors = true;
        }

    } catch (error) {
        console.log(`❌ Error reading package.json: ${error.message}`);
        hasErrors = true;
    }
}

function checkNextConfig() {
    const configPath = './next.config.js';
    if (!checkFile(configPath, 'next.config.js')) return;

    try {
        const configContent = fs.readFileSync(configPath, 'utf8');

        console.log('\n⚙️  Next.js configuration verification:');

        if (configContent.includes("output: 'export'")) {
            console.log('✅ Static export enabled');
        } else {
            console.log('❌ Static export not configured');
            hasErrors = true;
        }

        if (configContent.includes('unoptimized: true')) {
            console.log('✅ Image optimization disabled for static export');
        } else {
            console.log('⚠️  Image optimization may cause issues with static export');
        }

    } catch (error) {
        console.log(`❌ Error reading next.config.js: ${error.message}`);
        hasErrors = true;
    }
}

function checkNetlifyConfig() {
    const netlifyPath = './netlify.toml';
    if (!checkFile(netlifyPath, 'netlify.toml')) return;

    try {
        const netlifyContent = fs.readFileSync(netlifyPath, 'utf8');

        console.log('\n🌐 Netlify configuration verification:');

        if (netlifyContent.includes('publish = "out"')) {
            console.log('✅ Publish directory set to "out"');
        } else {
            console.log('❌ Publish directory not set to "out" for static export');
            hasErrors = true;
        }

        if (netlifyContent.includes('npm ci && npm run build') || netlifyContent.includes('npm run build')) {
            console.log('✅ Build command configured');
        } else {
            console.log('❌ Build command missing or incorrect');
            hasErrors = true;
        }

        if (netlifyContent.includes('NODE_VERSION')) {
            console.log('✅ Node version specified');
        } else {
            console.log('⚠️  Node version not explicitly set');
        }

    } catch (error) {
        console.log(`❌ Error reading netlify.toml: ${error.message}`);
        hasErrors = true;
    }
}

function checkBuildOutput() {
    const outDir = './out';
    console.log('\n📁 Build output verification:');

    if (fs.existsSync(outDir)) {
        console.log('✅ Output directory exists: out/');

        const indexPath = path.join(outDir, 'index.html');
        if (fs.existsSync(indexPath)) {
            console.log('✅ index.html generated');
        } else {
            console.log('❌ index.html missing');
            hasErrors = true;
        }

        const nextDir = path.join(outDir, '_next');
        if (fs.existsSync(nextDir)) {
            console.log('✅ _next directory with static assets exists');
        } else {
            console.log('❌ _next directory missing');
            hasErrors = true;
        }

        // Check file count
        try {
            const files = fs.readdirSync(outDir);
            const htmlFiles = files.filter(f => f.endsWith('.html'));
            console.log(`✅ Generated ${htmlFiles.length} HTML files`);
        } catch (error) {
            console.log(`❌ Error reading output directory: ${error.message}`);
        }

    } else {
        console.log('❌ Output directory missing - run npm run build first');
        hasErrors = true;
    }
}

function checkLockFiles() {
    console.log('\n🔒 Dependency lock file verification:');

    const hasPackageLock = fs.existsSync('./package-lock.json');
    const hasBunLock = fs.existsSync('./bun.lock') || fs.existsSync('./bun.lockb');

    if (hasPackageLock && !hasBunLock) {
        console.log('✅ Using npm (package-lock.json only)');
    } else if (!hasPackageLock && hasBunLock) {
        console.log('⚠️  Using bun - may cause Netlify issues');
    } else if (hasPackageLock && hasBunLock) {
        console.log('❌ Mixed lock files detected - this will cause conflicts');
        hasErrors = true;
    } else {
        console.log('⚠️  No lock file found');
    }
}

function checkNodeVersion() {
    console.log('\n🔧 Node version verification:');

    const nvmrcPath = './.nvmrc';
    if (fs.existsSync(nvmrcPath)) {
        const version = fs.readFileSync(nvmrcPath, 'utf8').trim();
        console.log(`✅ .nvmrc specifies Node ${version}`);
    } else {
        console.log('⚠️  .nvmrc file missing');
    }
}

// Run all checks
checkPackageJson();
checkNextConfig();
checkNetlifyConfig();
checkBuildOutput();
checkLockFiles();
checkNodeVersion();

console.log('\n=====================================');
if (hasErrors) {
    console.log('❌ Deployment verification failed');
    console.log('Please fix the issues above before deploying to Netlify.');
    process.exit(1);
} else {
    console.log('✅ Deployment verification passed');
    console.log('Configuration looks good for Netlify deployment!');
    process.exit(0);
}
