import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';
import LogoutButton from '@/components/LogoutButton';

const DashboardPage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-[#E8DDD0] overflow-hidden">
        <div className="h-2 bg-linear-to-r from-[#5C3D2E] to-[#C17B4A]" />
        <div className="p-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-[#5C3D2E] flex items-center justify-center">
              <span className="text-white text-2xl font-bold">{user.username?.[0]?.toUpperCase()}</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#5C3D2E]">Dashboard</h1>
              <p className="text-[#7C6355]">Welcome back!</p>
            </div>
          </div>

          <div className="bg-[#86C5A4]/10 rounded-xl p-6 border border-[#86C5A4]/20 mb-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#A89080] w-20">Username</span>
                <span className="font-medium text-[#5C3D2E]">{user.username}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#A89080] w-20">Email</span>
                <span className="font-medium text-[#5C3D2E]">{user.email}</span>
              </div>
            </div>
          </div>

          <LogoutButton />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;