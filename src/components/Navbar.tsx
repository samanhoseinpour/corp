import Link from 'next/link';

import { navLinks } from '@/constants';

export default function Navbar() {
  return (
    <nav className="flex justify-around items-center px-8 py-6 text-white">
      <Link
        href="/"
        className="font-bold text-[36px] text-blue-500 flex justify-start"
      >
        فضای ابری
      </Link>

      <div className="flex justify-around items-center gap-12 font-semibold text-[18px]">
        {navLinks.map((link) => (
          <ul key={link.id}>
            <Link href={link.href}>{link.title}</Link>
          </ul>
        ))}
      </div>
    </nav>
  );
}
