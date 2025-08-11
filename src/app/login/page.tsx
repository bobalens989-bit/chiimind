import LoginForm from '@/components/LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Brand and Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
        <div
          className="w-full h-full flex flex-col justify-center items-start p-12 relative"
          style={{
            backgroundImage: "url('https://ext.same-assets.com/976212896/2354893612.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Logo */}
          <div className="mb-10">
            <img
              src="https://ext.same-assets.com/976212896/3573053692.png"
              alt="千机号"
              className="h-9"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-3xl font-semibold mb-10 max-w-md">
            新一代AI内容创作
            <span className="text-blue-600">生产力平台</span>
          </h1>

          {/* Product Illustration */}
          <div className="mb-10">
            <img
              src="https://ext.same-assets.com/976212896/3402511485.png"
              alt="千机号 Dashboard"
              className="max-w-md h-auto"
            />
          </div>

          {/* Description */}
          <div className="text-gray-700 space-y-2 max-w-md">
            <p>整合专业级内容创作AI Agent和一站式内容创意工具</p>
            <p>支持行业自定义模板，帮你更加高效、智能地完成创作</p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <LoginForm />
      </div>
    </div>
  )
}
