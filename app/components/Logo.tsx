'use client';

import Image from "next/image";
import Link from "next/link";

export default function Logo({ isSticky }: { isSticky?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo/black_verticle.png"   
        alt="CLC HireX"
        width={40}
        height={40}
      />
      <span
        className={`font-black text-sm tracking-widest ${
          isSticky ? "text-black" : "text-white"
        }`}
      >
        HIREX
      </span>
    </Link>
  );
}
