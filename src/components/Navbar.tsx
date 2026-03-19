"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

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
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 shadow-md backdrop-blur-md"
          : "bg-black/20 backdrop-blur-[2px]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logos/Modolith-Structures.webp"
              alt="Modolith Structures"
              width={140}
              height={40}
              className="h-9 w-auto brightness-0 invert transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="group relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-accent"
                        : "text-white/90 hover:text-accent"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </Link>
                  <div
                    className={`absolute top-full left-0 min-w-[280px] overflow-hidden rounded-lg border border-white/10 bg-primary shadow-xl transition-all duration-200 ${
                      servicesOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block border-l-2 border-transparent px-5 py-2.5 text-sm text-white/70 transition-all hover:border-accent hover:bg-dark hover:text-accent"
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
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-accent"
                      : "text-white/90 hover:text-accent"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-accent" />
                  )}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="btn-interact ml-4 rounded bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - slide in */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-primary shadow-xl transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-6 py-4">
          {navLinks.map((link, i) => (
            <div
              key={link.href}
              style={{ transitionDelay: isOpen ? `${i * 50}ms` : "0ms" }}
              className={`transition-all duration-300 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded px-4 py-3 font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-accent/10 text-accent"
                    : "text-white hover:bg-dark"
                }`}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="space-y-1 pl-6">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm text-white/60 transition-colors hover:text-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mx-4 mt-3 block rounded bg-accent px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
