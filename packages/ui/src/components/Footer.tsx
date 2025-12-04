"use client"
import { MapPin, Mail, Phone, Award, Sparkles } from "@repo/ui/icons";
import Link from "next/link"
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4" data-testid="link-footer-logo">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">D</span>
              </div>
              <span className="font-bold text-xl tracking-tight">Drovaq</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              The Operating System for Dispatch Companies. Powering last-mile deliveries with operational efficiency and visibility.
            </p>

            <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 w-fit">
              <Award className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-700">
                Mobility Company of the Year 2024
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground shrink-0" />
                <a 
                  href="mailto:hello@drovaq.com" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-email"
                >
                  hello@drovaq.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground shrink-0" />
                <a 
                  href="tel:+2348000000000" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-phone"
                >
                  +234 800 000 0000
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <nav className="flex flex-col gap-3">
              <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Dispatch Owner App
              </span>
              <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Customer & Vendor
              </span>
              <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Agent & Partner
              </span>
              <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Riders App
              </span>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/company" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-about">
                About Us
              </Link>
              <Link href="/proof" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-proof">
                Our Proof
              </Link>
              <Link href="/impact" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-impact">
                Impact & Savings
              </Link>
              <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-careers">
                Careers
              </Link>
              <Link href="/company#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-contact">
                Contact Us
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-terms">
                Terms of Use
              </Link>
              <Link href="/terms#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-privacy">
                Privacy Policy
              </Link>
            </nav>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">Stay Updated</h3>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1"
                  data-testid="input-newsletter-email"
                />
                <Button size="sm" data-testid="button-newsletter-subscribe">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Drovaq. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <p className="text-sm text-muted-foreground">
              Powering Nigerian Dispatch Companies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
