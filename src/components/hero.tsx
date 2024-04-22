import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

export default function Hero({ imgData, imgAlt, title }: HeroProps) {
  return (
    <section className="relative h-screen">
      <section className="absolute inset-0 -z-10">
        <Image src={imgData} alt={imgAlt} fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
      </section>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{title}</h1>
      </div>
    </section>
  );
}
