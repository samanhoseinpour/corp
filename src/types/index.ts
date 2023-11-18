import { StaticImageData } from 'next/image';

export type HeroProps = {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
};
