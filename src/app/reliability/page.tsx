import { Hero } from '@/components';
import reliabilityImg from 'public/reliability.jpg';

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt="reliability hero"
      title="هاست با قابلیت اطمینان فوق العاده بالا"
    />
  );
}
