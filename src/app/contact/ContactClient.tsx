"use client";

import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/ui/ContactForm";
import { socialLinks } from "@/data/navigation";

export default function ContactClient() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - text */}
          <div>
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Let&rsquo;s Connect
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Thank you for visiting! If you&rsquo;re interested in
                collaborating or learning more about my work, please feel free to
                reach out. I&rsquo;m always happy to connect with new people!
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:sabrina@feld.com"
                    className="text-gray-900 hover:text-buttercup-dark transition-colors"
                    data-cursor-hover
                  >
                    sabrina@feld.com
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Social
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-buttercup-dark transition-colors"
                      data-cursor-hover
                    >
                      LinkedIn
                    </a>
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-buttercup-dark transition-colors"
                      data-cursor-hover
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right column - form */}
          <FadeIn delay={0.2} direction="right">
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
