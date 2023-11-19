import Link from 'next/link';

import { navLinks } from '@/constants';

export default function Navbar() {
  return (
    <nav className="container mx-auto w-full flex flex-wrap justify-around items-center p-8 text-white whitespace-nowrap overflow-hidden z-10">
      <Link
        href="/"
        className="font-bold max-sm:text-[22px] text-[36px] text-blue-500 flex justify-start"
      >
        فضای ابری
      </Link>

      <div className="flex justify-around items-center gap-12 font-semibold text-xl max-sm:mt-[12px]">
        {navLinks.map((link) => (
          <ul key={link.id}>
            <Link href={link.href}>{link.title}</Link>
          </ul>
        ))}
      </div>
    </nav>
  );
}
