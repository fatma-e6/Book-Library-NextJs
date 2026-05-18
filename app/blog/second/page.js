import BackButton from "@/components/BackButton";

const SecondPostPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <BackButton />
      <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-[#E8DDD0] overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-[#5C3D2E] to-[#C17B4A]" />
        <div className="p-10">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#86C5A4]/20 text-[#5C3D2E] border border-[#86C5A4]/30 mb-6 inline-block">
            Tips & Tricks
          </span>
          <h1 className="text-4xl font-bold text-[#5C3D2E] mb-6 tracking-tight">How to Build a Reading Habit</h1>
          <p className="text-[#7C6355] leading-relaxed text-lg">
            Simple tips to help you read more books every month. Start small, stay consistent, and let the stories carry you away.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondPostPage;