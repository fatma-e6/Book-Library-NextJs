'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const LogoutButton = () => {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
    router.refresh();
  }

  return (
    <Button onClick={handleLogout} className="border border-[#C17B4A] text-[#C17B4A] bg-transparent hover:bg-[#C17B4A] hover:text-white rounded-full transition-colors">
      Logout
    </Button>
  );
}

export default LogoutButton;