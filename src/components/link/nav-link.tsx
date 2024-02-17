"use client"
import Link from "next/link";

interface TNavLinkProps {
  href: string;
  title: string;
}

export default function NavLink({ href, title }: TNavLinkProps) {
  return (
    <Link href={href} className="font-semibold text-lg hover:text-blue-800">
      {title}
    </Link>
  );
}
