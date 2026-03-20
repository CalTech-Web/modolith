import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Modolith Structures for your next construction project. Located at 1500 Waugh Dr. Suite 110, Houston, TX 77019. Call (832) 519-8584.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Get in Touch"
        image="/images/services/Modolith-Image-111.jpg"
      />

      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Info */}
            <ScrollReveal direction="left">
              <div>
                <div className="section-subtitle">Contact Info</div>
                <div className="section-title">Let&apos;s Talk</div>
                <p className="mb-8">
                  Whether you&apos;re planning a complex steel structure or
                  seeking expert guidance for your next project, Modolith is
                  here to deliver. Contact us today to begin.
                </p>

                <div className="space-y-6">
                  <div>
                    <h6 className="mb-2 text-[14px] font-light uppercase tracking-[3px] text-white"
                      style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif" }}
                    >
                      Address
                    </h6>
                    <p className="mb-0">
                      <a
                        href="https://maps.google.com/?q=1500+Waugh+Dr+Suite+110+Houston+TX+77019"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-accent"
                      >
                        1500 Waugh Dr. Suite 110, Houston, TX 77019
                      </a>
                    </p>
                  </div>
                  <div>
                    <h6 className="mb-2 text-[14px] font-light uppercase tracking-[3px] text-white"
                      style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif" }}
                    >
                      Phone
                    </h6>
                    <p className="mb-0">
                      <a
                        href="tel:+18325198584"
                        className="transition-colors hover:text-accent"
                      >
                        (832) 519-8584
                      </a>
                    </p>
                  </div>
                  <div>
                    <h6 className="mb-2 text-[14px] font-light uppercase tracking-[3px] text-white"
                      style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif" }}
                    >
                      Email
                    </h6>
                    <p className="mb-0">
                      <a
                        href="mailto:info@modolith.com"
                        className="transition-colors hover:text-accent"
                      >
                        info@modolith.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h6 className="mb-2 text-[14px] font-light uppercase tracking-[3px] text-white"
                      style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif" }}
                    >
                      Operating Hours
                    </h6>
                    <p className="mb-0">Monday - Sunday, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right">
              <div className="contact-form">
                <div className="section-subtitle mb-4">Send a Message</div>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.1!2d-95.3993!3d29.7589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0e6a8c0a0a1%3A0x1234567890abcdef!2s1500%20Waugh%20Dr%20%23110%2C%20Houston%2C%20TX%2077019!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Modolith Structures Office Location"
        />
      </section>
    </>
  );
}
