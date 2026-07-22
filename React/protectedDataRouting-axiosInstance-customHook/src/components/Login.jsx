import React, { useContext } from 'react'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
  
  const {navigate,register,onLogin,handleSubmit,errors} = useAuth()


  return (
    <div className="relative w-full max-w-md bg-stone-900/60 backdrop-blur-xl border border-stone-800 rounded-2xl p-8 shadow-2xl shadow-orange-950/20">
      
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-orange-500/20 to-amber-500/20 border border-orange-500/30 mb-4 text-orange-400">
          {/* Lock Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Welcome back</h1>
        <p className="text-sm text-stone-400 mt-1">Please enter your details to sign in.</p>
      </div>

      {/* Form UI */}
      <form className="space-y-5" onSubmit={handleSubmit(onLogin)}>
        
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-stone-300 mb-2">
            Email Address
          </label>
          <input 
            {...register('email', {
              required: 'Email address is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            type="email" 
            id="email" 
            placeholder="name@example.com"
            className={`w-full px-4 py-3 bg-stone-950/60 border rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-none transition-all duration-200 ${
              errors.email
                ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                : 'border-stone-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500'
            }`}
          />
          {errors.email && (
            <p className="text-xs text-rose-400 mt-1.5">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="password" className="block text-xs font-medium uppercase tracking-wider text-stone-300">
              Password
            </label>
            <a href="#forgot" className="text-xs text-amber-400 hover:text-amber-300 transition-colors">
              Forgot password?
            </a>
          </div>
          <input 
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            type="password" 
            id="password" 
            placeholder="••••••••"
            className={`w-full px-4 py-3 bg-stone-950/60 border rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-none transition-all duration-200 ${
              errors.password
                ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                : 'border-stone-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500'
            }`}
          />
          {errors.password && (
            <p className="text-xs text-rose-400 mt-1.5">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-stone-950 font-semibold text-sm rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-stone-900"
        >
          Sign In
        </button>

      </form>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-stone-500">
        Don't have an account?{' '}
        <button
          type="button"
          onClick={() => { navigate('/register') }} 
          className="text-amber-400 font-medium hover:text-amber-300 transition-colors"
        >
          Sign up
        </button>
      </div>

    </div>
  )
}

export default Login