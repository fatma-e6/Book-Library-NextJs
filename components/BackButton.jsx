'use client'
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className="mb-6 border border-[#C17B4A] text-[#C17B4A] bg-transparent hover:bg-[#C17B4A] hover:text-white rounded-full transition-colors"
    >
      ← Back
    </Button>
  );
}

export default BackButton;