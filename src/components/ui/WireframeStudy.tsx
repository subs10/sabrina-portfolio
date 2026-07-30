import Image from "next/image";
import FadeIn from "./FadeIn";

const pageLabels = ["Home", "Projects", "Art", "About", "Contact"];

interface WireframeStudyProps {
  images: string[];
}

export default function WireframeStudy({ images }: WireframeStudyProps) {
  return (
    <FadeIn>
      <div>
        <p className="font-mono text-xs uppercase tracking-wider text-gray-400 mb-6">
          Structural Wireframe
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div key={src} className="relative rounded-sm overflow-hidden">
              <Image
                src={src}
                alt={`${pageLabels[i] ?? "Page"} wireframe`}
                width={1328}
                height={900}
                className="w-full h-auto"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
