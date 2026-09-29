import Image from "next/image";
import wordmark from "../../public/brand/doulio-wordmark-teal.png";

/** Official rounded teal Doulio wordmark. Do not replace with a new logo or icon. */
export function Wordmark({ className = "h-7 w-auto" }: { className?: string }) {
  return <Image src={wordmark} alt="Doulio" priority className={className} />;
}
