import { Countdown } from '@/components/countdown';
import { Newsletter } from '@/components/newsletter';
import { BrandIntro } from '@/components/brand-intro';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-neutral-800 bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl">
          <code className="font-mono font-bold">UNWEAR</code>
        </p>
      </div>

      <div className="relative flex place-items-center">
        <Countdown targetDate="2024-05-01T00:00:00" />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left gap-8">
        <BrandIntro />
        <Newsletter />
      </div>
    </div>
  );
}