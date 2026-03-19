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

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Proudly Serving Houston and the Greater Texas Region"
        image="/images/services/Modolith-Image-111.jpg"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
                  Get In Touch
                </p>
                <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-dark mb-4">
                  Let&apos;s Talk
                </h2>
                <div className="section-divider mb-8" />
                <p className="text-gray-600 leading-relaxed mb-10">
                  Whether you&apos;re planning a complex steel structure or
                  seeking expert guidance for your next project, Modolith is
                  here to deliver. Contact us today to begin.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark text-sm mb-1">
                        Office Address
                      </p>
                      <a
                        href="https://maps.google.com/?q=1500+Waugh+Dr+Suite+110+Houston+TX+77019"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 text-sm hover:text-accent transition-colors"
                      >
                        1500 Waugh Dr. Suite 110
                        <br />
                        Houston, TX 77019
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark text-sm mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+18325198584"
                        className="text-gray-600 text-sm hover:text-accent transition-colors"
                      >
                        (832) 519-8584
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark text-sm mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:info@modolith.com"
                        className="text-gray-600 text-sm hover:text-accent transition-colors"
                      >
                        info@modolith.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark text-sm mb-1">
                        Operating Hours
                      </p>
                      <p className="text-gray-600 text-sm">
                        Monday - Sunday
                        <br />
                        9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-light rounded-xl p-8 md:p-10">
                  <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-dark mb-6">
                    Send Us a Message
                  </h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-gray-200">
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
