import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import heroimage from "../../../public/heroimage.jpg";

export default function Hero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroimage}
        alt="Interview meeting"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 md:px-8">
        <div className="max-w-2xl">
          <span className="mb-5 inline-block rounded-full bg-secondary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
            Your Next Opportunity Starts Here
          </span>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Find Opportunities.
            <span className="block text-secondary">
              Book Your Interview.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-white/80 sm:text-lg">
            Discover career opportunities and schedule your interviews
            easily with our simple booking platform.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/interviews"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-7 py-4 text-sm font-bold text-primary transition hover:bg-white"
            >
              Explore Interviews
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-white/70 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-primary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}