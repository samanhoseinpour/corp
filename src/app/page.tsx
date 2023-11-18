import Image from 'next/image';

import homeImg from 'public/home.jpg';

export default function Home() {
  return (
    <div>
      <h1 className="text-heading">صفحه اصلی</h1>

      <div className="absolute -z-10 inset-0">
        <Image src={homeImg} alt="car factory" className="object-cover" fill />
      </div>
    </div>
  );
}
