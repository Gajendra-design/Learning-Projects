import React, { useContext, useState } from 'react';
import { ArrowRight, Eye, EyeOff, Lock, Mail, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { MyStore } from '../../Context/MyStore';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const { handelLogin } = useContext(MyStore);

  return (
    <div className="w-full max-w-md bg-slate-900/90 border border-slate-800/80 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-8">
      
      {/* ================= FORM HEADER ================= */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Sign in
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Enter your credentials to continue
        </p>
      </div>

      {/* ================= FORM INPUTS ================= */}
      <form onSubmit={handleSubmit(handelLogin)} className="space-y-5" noValidate>
        
        {/* Email Field */}
        <div className="space-y-1">
          <div className="relative">
            <Mail className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${errors.email ? 'text-rose-400' : 'text-slate-500'}`} />
            <input
              {...register('email', {
                required: 'Email address is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
                required: 'Password is required',  //now we dont need min length check kyu ki user login kar raha hai na usko yaad honge credentials
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3.5 rounded-xl transition duration-200 shadow-lg shadow-indigo-500/20 active:scale-[0.98] cursor-pointer mt-2"
        >
          <span>Sign in</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </form>

      {/* ================= FOOTER LINK ================= */}
      <div className="text-center pt-2">
        <p className="text-xs text-slate-400">
          Don't have an account?{' '}
          <Link to="/auth/register" className="text-indigo-400 hover:text-indigo-300 font-bold transition">
            Create one
          </Link>
        </p>
      </div>

    </div>
  );
};

export default Login;