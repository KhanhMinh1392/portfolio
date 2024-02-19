import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer border-t border-gray-300">
      <div className="container py-12">
        <Image
          src="/vercel.svg"
          alt="footer_logo"
          width={0}
          height={0}
          className="w-[120px] h-full"
          priority
        />
      </div>
    </footer>
  );
}
