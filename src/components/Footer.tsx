import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Collaboration
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Your vision is the blueprint - Modolith is here to bring it to
            life. Whether it&apos;s structural steel erection, general contracting,
            or pre-engineered metal building solutions, our team is ready to
            support your project from concept to completion.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white px-8 py-3.5 font-semibold rounded hover:bg-accent-dark transition-colors btn-interact"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logos/MODOLITH-white.webp"
              alt="Modolith Structures"
              width={160}
              height={45}
              className="h-8 w-auto mb-5"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Standing Structures. Setting Standards. Delivering expert
              construction services throughout Houston and the greater Houston
              area since 2021.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/p/Modolith-LLC-100090859106290/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/modolith_structures/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-5 text-accent">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/services#structural-steel-erection" className="hover:text-accent transition-colors">
                  Structural Steel Erection
                </Link>
              </li>
              <li>
                <Link href="/services#pre-engineered-metal-buildings" className="hover:text-accent transition-colors">
                  Pre-Engineered Metal Buildings
                </Link>
              </li>
              <li>
                <Link href="/services#general-contracting" className="hover:text-accent transition-colors">
                  General Contracting
                </Link>
              </li>
              <li>
                <Link href="/services#construction-consulting" className="hover:text-accent transition-colors">
                  Construction Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-5 text-accent">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">About</Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-accent transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-5 text-accent">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a
                  href="https://maps.google.com/?q=1500+Waugh+Dr+Suite+110+Houston+TX+77019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  1500 Waugh Dr. Suite 110
                  <br />
                  Houston, TX 77019
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+18325198584" className="hover:text-accent transition-colors">
                  (832) 519-8584
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:info@modolith.com" className="hover:text-accent transition-colors">
                  info@modolith.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>&copy; 2026 Modolith. All rights reserved.</p>
          <p>
            Web Design by{" "}
            <a
              href="https://caltechweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-accent transition-colors"
            >
              CalTech Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
