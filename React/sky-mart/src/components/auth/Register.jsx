import React, { useContext, useState } from 'react';
import { Store, User, Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle } from 'lucide-react';
import { Link } from 'react-router';
import { useForm } from 'react-hook-form';
import { MyStore } from '../../Context/MyStore';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,  //ye ai se pata chala hai isme hum live confirem password chck kar sakthe hai
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const { handelRegister } = useContext(MyStore);

  // sabse phale watch se password field ki value lenge apan
  const passwordValue = watch('password');
  

  return (
    <div className="w-full max-w-md bg-slate-900/90 border border-slate-800/80 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
      
      {/* ================= FORM HEADER ================= */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Create an account
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Enter your details below to get started
        </p>
      </div>

      {/* ================= FORM INPUTS ================= */}
      <form onSubmit={handleSubmit(handelRegister)} className="space-y-4" noValidate>
        
        {/* Full Name Field */}
        <div className="space-y-1">
          <div className="relative">
            <User className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${errors.fullName ? 'text-rose-400' : 'text-slate-500'}`} />
            <input
              {...register('fullName', {
                required: 'Full name is required',
                minLength: {
                  value: 3,
                  message: 'Name must be at least 3 characters',
                },
                pattern: {
                  //value ko string me mat le lena nahi tho pata bhi nahi chalega code kha phata hai
                  value: /^[a-zA-Z\s]+$/,  //ye apan ne ai se liya hai 
                  message: 'Name can only contain letters and spaces',
                },
              })}
              type="text"
              placeholder="Full name"
              className={`w-full bg-slate-950/80 border rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition duration-200 ${
                errors.fullName
                  ? 'border-rose-500/80 focus:border-rose-500'
                  : 'border-slate-800 focus:border-indigo-500'
              }`}
            />
          </div>
          {errors.fullName && (
            <p className="text-[11px] font-medium text-rose-400 flex items-center gap-1 pl-1 pt-0.5">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.fullName.message}</span>
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-1">
          <div className="relative">
            <Mail className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${errors.email ? 'text-rose-400' : 'text-slate-500'}`} />
            <input
              {...register('email', {
                required: 'Email address is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, //ye apan ne ai se liya hai
                  message: 'Please enter a valid email address',
                },
              })}
              type="email"
              placeholder="Email address"
              className={`w-full bg-slate-950/80 border rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition duration-200 ${
                errors.email
                  ? 'border-rose-500/80 focus:border-rose-500'
                  : 'border-slate-800 focus:border-indigo-500'
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-[11px] font-medium text-rose-400 flex items-center gap-1 pl-1 pt-0.5">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.email.message}</span>
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-1">
          <div className="relative">
            <Lock className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${errors.password ? 'text-rose-400' : 'text-slate-500'}`} />
            <input
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long',
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/, //ye apan ne ai se liya hai
                  message: 'Must include uppercase, lowercase, number & special character (@$!%*?&#)',
                },
              })}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className={`w-full bg-slate-950/80 border rounded-xl pl-10 pr-10 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition duration-200 ${
                errors.password
                  ? 'border-rose-500/80 focus:border-rose-500'
                  : 'border-slate-800 focus:border-indigo-500'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.password && (
            <p className="text-[11px] font-medium text-rose-400 flex items-center gap-1 pl-1 pt-0.5">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.password.message}</span>
            </p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="space-y-1">
          <div className="relative">
            <Lock className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${errors.confirmPassword ? 'text-rose-400' : 'text-slate-500'}`} />
            <input
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                //ye hai sabe bhadiya tarika confirmpassword handel karne ka no extra js and using react-hook-for at its maximum and validate bhi refiste ke ander hi hai phale bhar use kar rahe the
                validate: (value) =>
                  value === passwordValue || 'Passwords do not match',
              })}
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm password"
              className={`w-full bg-slate-950/80 border rounded-xl pl-10 pr-10 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition duration-200 ${
                errors.confirmPassword
                  ? 'border-rose-500/80 focus:border-rose-500'
                  : 'border-slate-800 focus:border-indigo-500'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition"
            >
              {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-[11px] font-medium text-rose-400 flex items-center gap-1 pl-1 pt-0.5">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.confirmPassword.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3.5 rounded-xl transition duration-200 shadow-lg shadow-indigo-500/20 active:scale-[0.98] cursor-pointer mt-3"
        >
          <span>Create account</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </form>

      {/* ================= FOOTER LINK ================= */}
      <div className="text-center pt-2">
        <p className="text-xs text-slate-400">
          Already have an account?{' '}
          <Link to="/auth" className="text-indigo-400 hover:text-indigo-300 font-bold transition">
            Sign in
          </Link>
        </p>
      </div>

    </div>
  );
}