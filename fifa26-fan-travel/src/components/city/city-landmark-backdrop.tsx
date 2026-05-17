import Image from "next/image";
import type { HostCitySlug } from "@/data/cities";
import { getCityLandmarkImage } from "@/data/city-images";
import { cn } from "@/lib/utils";

type Props = {
  slug: HostCitySlug;
  accent: string;
  children: React.ReactNode;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function CityLandmarkBackdrop({
  slug,
  accent,
  children,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px",
}: Props) {
  const image = getCityLandmarkImage(slug);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover transition-transform duration-500 group-hover:scale-105", imageClassName)}
      />
      <div
        className={cn("absolute inset-0 bg-gradient-to-br opacity-70 mix-blend-multiply", accent)}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25"
        aria-hidden
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
