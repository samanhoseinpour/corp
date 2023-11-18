import Image from 'next/image';

import performanceImg from 'public/performance.jpg';

export default function PerformancePage() {
  return (
    <div>
      <h1 className="text-heading">کارایی</h1>

      <div className="absolute -z-10 inset-0">
        <Image
          src={performanceImg}
          alt="hero img"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
}
