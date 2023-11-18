import Image from 'next/image';

import { HeroProps } from '@/types';

export default function Hero({ imgData, imgAlt, title }: HeroProps) {
  return (
    <div>
      <h1 className="text-heading">{title}</h1>

      <div className="absolute -z-10 inset-0">
        <Image src={imgData} alt={imgAlt} className="object-cover" fill />
      </div>
    </div>
  );
}
