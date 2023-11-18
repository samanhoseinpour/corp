import { Hero } from '@/components';
import performanceImg from 'public/performance.jpg';

export default function PerformancePage() {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="performance hero"
      title="عملکرد سریع شگفت و انگیز"
    />
  );
}
