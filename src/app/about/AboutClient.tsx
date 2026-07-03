import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export default function AboutClient() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Headshot */}
          <FadeIn direction="left">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden lg:sticky lg:top-24">
              <Image
                src="/images/about/headshot.jpg"
                alt="Sabrina Feld"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </FadeIn>

          {/* Content */}
          <div className="space-y-10">
            {/* Maker in Motion */}
            <FadeIn>
              <div>
                <h1 className="text-2xl md:text-5xl font-light text-gray-900 mb-6 md:mb-8">
                  Maker in Motion
                </h1>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    I&rsquo;ve always been fascinated by the in-between &mdash;
                    those spaces where ideas, questions, and possibilities
                    collide. As a kid, I carried notebooks full of
                    &ldquo;inventions&rdquo; and couldn&rsquo;t put down{" "}
                    <em>The Way Things Work</em>{" "}
                    <a
                      href="https://www.amazon.com/Way-Things-Work-Now/dp/0544824385"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-buttercup-dark transition-colors underline decoration-buttercup/40 underline-offset-2 hover:decoration-buttercup"
                      data-cursor-hover
                    >
                      (check it out)
                    </a>
                    . Today, I carry the same curiosity at my core. As I dive
                    into projects, questions, and ideas that aren&rsquo;t
                    immediately obvious, I am excited by the messy, ambiguous
                    spaces where discovery and momentum happen.
                  </p>
                  <p>
                    I recently graduated from Scripps College with a dual degree
                    in Science, Technology, and Society (STS) and Fine Arts. Both
                    subjects have become central to my worldview. STS explores the
                    stories behind systems, how they came to be, how they function,
                    and what often goes unseen, while art offers me a parallel way
                    of asking those questions, sometimes directly, sometimes
                    abstractly, and always through experimentation.
                  </p>
                  <p>
                    I&rsquo;m excited to bring this curiosity and creative
                    approach into new projects, learning from and collaborating
                    with people who are just as eager to explore, experiment, and
                    make things that matter.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Resume CTA */}
            <FadeIn>
              <div className="border-t border-gray-100 pt-8">
                <Button href="/resume.pdf" variant="primary" external>
                  View Resume
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
