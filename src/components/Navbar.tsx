import Link from 'next/link';

import { navLinks } from '@/constants';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6">
      <Link href="/" className="font-bold text-[36px] text-blue-500">
        فضای ابری
      </Link>

      {navLinks.map((link) => (
        <ul key={link.id}>
          <Link href={link.href}>{link.title}</Link>
        </ul>
      ))}
    </nav>
  );
}
