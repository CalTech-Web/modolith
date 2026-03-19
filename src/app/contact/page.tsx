import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Modolith Structures for your next construction project. Located at 1500 Waugh Dr. Suite 110, Houston, TX 77019. Call (832) 519-8584.",
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    content: (
      <a
        href="https://maps.google.com/?q=1500+Waugh+Dr+Suite+110+Houston+TX+77019"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-white/60 transition-colors hover:text-accent"
      >
        1500 Waugh Dr. Suite 110
        <br />
        Houston, TX 77019
      </a>
    ),
  },
  {
    icon: Phone,
    label: "Phone",
    content: (
      <a
        href="tel:+18325198584"
        className="text-sm text-white/60 transition-colors hover:text-accent"
      >
        (832) 519-8584
      </a>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    content: (
      <a
        href="mailto:info@modolith.com"
        className="text-sm text-white/60 transition-colors hover:text-accent"
      >
        info@modolith.com
      </a>
    ),
  },
  {
    icon: Clock,
    label: "Operating Hours",
    content: (
      <p className="text-sm text-white/60">
        Monday - Sunday
        <br />
        9:00 AM - 5:00 PM
      </p>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Proudly Serving Houston and the Greater Texas Region"
        image="/images/services/Modolith-Image-111.jpg"
      />

      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
                  Get In Touch
                </p>
                <h2 className="font-[family-name:var(--font-heading)] mb-4 text-4xl font-bold text-white md:text-5xl">
                  Let&apos;s Talk
                </h2>
                <div className="section-divider mb-8" />
                <p className="mb-10 leading-relaxed text-white/60">
                  Whether you&apos;re planning a complex steel structure or
                  seeking expert guidance for your next project, Modolith is
                  here to deliver. Contact us today to begin.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div
                      key={item.label}
                      className="card-hover flex items-start gap-4 rounded-lg p-3 transition-all"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="mb-1 text-sm font-semibold text-white">
                          {item.label}
                        </p>
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <div className="rounded-xl bg-primary p-8 md:p-10">
                  <h3 className="font-[family-name:var(--font-heading)] mb-6 text-xl font-bold text-white">
                    Send Us a Message
                  </h3>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[400px] bg-primary">
        <div className="absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b from-dark to-transparent" />
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
