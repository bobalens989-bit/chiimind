import RegisterForm from '@/components/RegisterForm'

export default function RegisterPage() {
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
            加入千机号
            <span className="text-blue-600">开启AI创作之旅</span>
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
            <p>立即注册，体验智能内容创作的无限可能</p>
            <p>与数万创作者一起，用AI提升内容生产效率</p>
          </div>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <RegisterForm />
      </div>
    </div>
  )
}
