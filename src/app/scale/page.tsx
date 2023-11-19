import { Hero } from '@/components';
import scaleImg from 'public/scale.jpg';

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="scale hero"
      title="برنامه خود را تا بی نهایت مقیاس پذیر کنید"
    />
  );
}
