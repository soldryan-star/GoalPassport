import Image from "next/image";
import { cn } from "@/lib/utils";

export function ContentImage({
  src,
  alt,
  priority,
  className,
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
    />
  );
}
