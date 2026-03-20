"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      {
        href: "/services#structural-steel-erection",
        label: "Structural Steel Erection",
      },
      {
        href: "/services#pre-engineered-metal-buildings",
        label: "Pre-Engineered Metal Buildings",
      },
      {
        href: "/services#general-contracting",
        label: "General Contracting",
      },
      {
        href: "/services#construction-consulting",
        label: "Construction Consulting",
      },
    ],
  },
  { href: "/portfolio", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className={`navbar-main ${scrolled ? "nav-scroll" : ""}`}>
      <div className="mx-auto flex h-full max-w-[1140px] items-center justify-between px-4">
        {/* Logo */}
        <div className="py-[30px]">
          <Link href="/" className="block w-[150px]">
            <Image
              src="/images/logos/Modolith-Structures.webp"
              alt="Modolith Structures"
              width={150}
              height={43}
              className="h-auto w-full brightness-0 invert"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="group relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`nav-link flex items-center gap-1 ${
                    isActive(link.href) ? "active" : ""
                  }`}
                >
                  {link.label}
                  <ChevronDown className="h-3 w-3" />
                </Link>
                <div
                  className={`absolute top-full left-0 w-[250px] border-0 bg-primary p-[15px_10px] transition-all duration-300 ${
                    dropdownOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-5 opacity-0"
                  }`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block border-b border-white/[0.02] px-[15px] py-[9px] text-[15px] text-gray-warm transition-all hover:pl-[20px] hover:text-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive(link.href) ? "active" : ""}`}
              >
                {link.label}
              </Link>
            )
          )}

          {/* Social icons separator */}
          <div className="ml-4 flex items-center gap-3 border-l border-primary-light pl-5">
            <a
              href="https://www.facebook.com/p/Modolith-LLC-100090859106290/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-white transition-colors hover:text-accent"
              aria-label="Facebook"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/modolith_structures/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-white transition-colors hover:text-accent"
              aria-label="Instagram"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-accent md:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="bg-primary px-[15px] pb-[30px] pt-[15px] md:hidden">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`nav-link block py-2 !text-gray-warm ${
                  isActive(link.href) ? "!text-accent" : ""
                }`}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-4">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-[15px] text-gray-warm transition-colors hover:text-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
