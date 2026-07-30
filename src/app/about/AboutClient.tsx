import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export default function AboutClient() {
  return (
    <section className="pt-8 md:pt-16 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-5 md:px-32">
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
                    I&rsquo;m currently a senior at Scripps College, pursuing a
                    dual degree in Science, Technology, and Society (STS) and
                    Fine Arts. Both subjects have become central to my worldview.
                    STS explores the stories behind systems, how they came to be,
                    how they function, and what often goes unseen, while art
                    offers me a parallel way of asking those questions, sometimes
                    directly, sometimes abstractly, and always through
                    experimentation.
                  </p>
                  <p>
                    After graduation, I&rsquo;m excited to bring this curiosity
                    and creative approach into new projects, learning from and
                    collaborating with people who are just as eager to explore,
                    experiment, and make things that matter.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* How I Work */}
            <FadeIn>
              <div className="border-t border-gray-100 pt-8">
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                  How I work
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    My approach to work and life comes from my love of
                    creativity. From paintings to prototypes, I enjoy designing,
                    experimenting, and getting my hands on the work itself,
                    contributing wherever I can be useful.
                  </p>
                  <p>
                    I&rsquo;m comfortable working alongside others without
                    perfect clarity, noticing patterns as they emerge,
                    synthesizing perspectives, and helping ideas take shape
                    through collaboration rather than control. I&rsquo;m not
                    interested in having all the answers; I&rsquo;m interested in
                    momentum, learning, and doing thoughtful work with people who
                    care.
                  </p>
                  <p>
                    At the core of all I do, I&rsquo;m curious, creative, and
                    grounded in learning. I&rsquo;m excited by work that&rsquo;s
                    evolving, collaborative, and thoughtful, and by the chance to
                    grow alongside people who share the same curiosity and
                    excitement.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Compost Piles */}
            <FadeIn>
              <div className="border-t border-gray-100 pt-8">
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                  I love compost piles.
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>A mentor once shared a metaphor that stuck with me:</p>
                  <blockquote className="border-l-2 border-buttercup/50 pl-6 py-2 italic text-gray-700">
                    <strong className="not-italic">
                      Creativity is like a compost pile.
                    </strong>{" "}
                    A mix of half-formed ideas, abandoned experiments, and
                    fragments of the world you collect. Left to mingle, they feed
                    one another, sprouting unexpected connections and generating
                    new possibilities.
                  </blockquote>
                  <p>
                    I try to carry compost piles into everything I do &mdash;
                    gathering, tinkering, learning from missteps, and letting
                    ideas grow from the fertility of inspiration in abundance.
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
