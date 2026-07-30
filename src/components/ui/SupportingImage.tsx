import Image from "next/image";
import FadeIn from "./FadeIn";

interface SupportingImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export default function SupportingImage({ src, alt, width, height, caption }: SupportingImageProps) {
  return (
    <FadeIn>
      <div>
        <div className="relative rounded-sm overflow-hidden">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        {caption && (
          <p className="font-mono text-xs text-gray-400 mt-3">{caption}</p>
        )}
      </div>
    </FadeIn>
  );
}
