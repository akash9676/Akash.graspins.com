"use client";
import { usePathname } from "next/navigation";


export default function Path({ children }: { children: React.ReactNode }) {
  // Explicitly define the type of pathname as string or null
  const pathname: string | null = usePathname();

  // Use a type guard to check pathname is not null and refine its type to string within the block
  if (pathname !== null && pathname.startsWith("/studio")) return null;

  return <div>{children}</div>;
}