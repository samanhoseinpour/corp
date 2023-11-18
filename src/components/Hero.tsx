import Image from 'next/image';

import { HeroProps } from '@/types';

export default function Hero({ imgData, imgAlt, title }: HeroProps) {
  return (
    <div>
      <div className="absolute -z-10 inset-0">
        <Image src={imgData} alt={imgAlt} className="object-cover" fill />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800"></div>
      </div>

      <h1 className="text-heading">{title}</h1>
    </div>
  );
}
