import React, { useContext } from 'react'
import { useAuth } from '../hooks/useAuth'

const Register = () => {
  
  const {navigate,register,password,onRegister,handleSubmit,errors} = useAuth()

  return (
    <div className="relative w-full max-w-md bg-stone-900/60 backdrop-blur-xl border border-stone-800 rounded-2xl p-8 shadow-2xl shadow-orange-950/20">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-orange-500/20 to-amber-500/20 border border-orange-500/30 mb-4 text-orange-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Create an account</h1>
        <p className="text-sm text-stone-400 mt-1">Start your journey with us today.</p>
      </div>

      {/* Form UI */}
      <form className="space-y-4" onSubmit={handleSubmit(onRegister)}>
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider text-stone-300 mb-2">
            Full Name
          </label>
          <input
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Minimum 3 characters required',
              },
            })}
            type="text"
            id="name"
            placeholder="John Doe"
            className={`w-full px-4 py-3 bg-stone-950/60 border rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-none transition-all duration-200 ${
              errors.name ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-stone-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500'
            }`}
          />
          {errors.name && <p className="text-xs text-rose-400 mt-1.5">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-stone-300 mb-2">
            Email Address
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            type="email"
            id="email"
            placeholder="name@example.com"
            className={`w-full px-4 py-3 bg-stone-950/60 border rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-none transition-all duration-200 ${
              errors.email ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-stone-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500'
            }`}
          />
          {errors.email && <p className="text-xs text-rose-400 mt-1.5">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-xs font-medium uppercase tracking-wider text-stone-300 mb-2">
            Password
          </label>
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Minimum 6 characters required',
              },
            })}
            type="password"
            id="password"
            placeholder="••••••••"
            className={`w-full px-4 py-3 bg-stone-950/60 border rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-none transition-all duration-200 ${
              errors.password ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-stone-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500'
            }`}
          />
          {errors.password && <p className="text-xs text-rose-400 mt-1.5">{errors.password.message}</p>}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label htmlFor="confirmPassword" className="block text-xs font-medium uppercase tracking-wider text-stone-300 mb-2">
            Confirm Password
          </label>
          <input
            {...register('confirmPassword', {
              required: 'Confirm password is required',
              validate: (value) => value === password || 'Passwords do not match',
            })}
            type="password"
            id="confirmPassword"
            placeholder="••••••••"
            className={`w-full px-4 py-3 bg-stone-950/60 border rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-none transition-all duration-200 ${
              errors.confirmPassword ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-stone-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500'
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-xs text-rose-400 mt-1.5">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 mt-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-stone-950 font-semibold text-sm rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-stone-900"
        >
          Create Account
        </button>
      </form>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-stone-500">
        Already have an account?{' '}
        <button
          onClick={() => {
            navigate('/')
          }}
          className="text-amber-400 font-medium hover:text-amber-300 transition-colors"
        >
          Sign in
        </button>
      </div>
    </div>
  )
}

export default Register