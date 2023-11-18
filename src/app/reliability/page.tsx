import Image from 'next/image';

import reliabilityImg from 'public/reliability.jpg';

export default function ReliabilityPage() {
  return (
    <div>
      <h1 className="text-heading">اعتبار</h1>

      <div className="absolute -z-10 inset-0">
        <Image
          src={reliabilityImg}
          alt="hero img"
          className="inset-0 -z-10 object-cover"
          fill
        />
      </div>
    </div>
  );
}
