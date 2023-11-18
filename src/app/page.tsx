import homeImg from 'public/home.jpg';
import { Hero } from '@/components';

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="car factory"
      title="حرفه ای ترین فضای ابری در سرار کشور"
    />
  );
}
