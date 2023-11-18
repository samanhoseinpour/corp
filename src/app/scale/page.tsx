import Image from 'next/image';

import scaleImg from 'public/scale.jpg';

export default function ScalePage() {
  return (
    <div>
      <h1 className="text-heading"> مقیاس پذیری</h1>

      <div className="absolute -z-10 inset-0">
        <Image
          src={scaleImg}
          alt="hero factory"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
}
