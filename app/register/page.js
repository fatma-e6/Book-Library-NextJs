'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const RegisterPage = () => {
  const router = useRouter();
  const [serverErrors, setServerErrors] = useState('');
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  async function submitLogic(data) {
    try {
      setLoading(true);
      setServerErrors('');
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        setServerErrors(result.message);
        return;
      }
      router.push('/login');
    } catch (error) {
      setServerErrors('Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/60 backdrop-blur-sm rounded-2xl p-10 border border-[#E8DDD0] shadow-sm">
        <h1 className="text-3xl font-bold text-[#5C3D2E] mb-2 text-center">Create Account</h1>
        <p className="text-[#7C6355] text-center mb-8 text-sm">Enter your information below to register</p>
        <form onSubmit={handleSubmit(submitLogic)} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-[#5C3D2E] mb-1 block">Username</label>
            <Input
              type="text"
              placeholder="Enter your username"
              className="border-[#E8DDD0] focus:border-[#C17B4A]"
              {...register('username', { required: 'Username is required' })}
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-[#5C3D2E] mb-1 block">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="border-[#E8DDD0] focus:border-[#C17B4A]"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-[#5C3D2E] mb-1 block">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="border-[#E8DDD0] focus:border-[#C17B4A]"
              {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Minimum 8 characters' } })}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>
          {serverErrors && <p className="text-red-600 text-sm">{serverErrors}</p>}
          <Button type="submit" disabled={loading} className="bg-[#C17B4A] hover:bg-[#A0622E] text-white rounded-full mt-2">
            {loading ? 'Loading...' : 'Register'}
          </Button>
          <p className="text-center text-sm text-[#7C6355]">
            Already have an account? <Link href="/login" className="text-[#C17B4A] hover:underline font-medium">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;