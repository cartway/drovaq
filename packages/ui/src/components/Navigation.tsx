"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { useRouter } from "../../src/";
import { createClient } from "../utils/supabase/client";


interface NavigationProps {
  user: User | null;
}

export function Navigation({ user }: NavigationProps) {
  const supabase  = createClient()
  const pathname = usePathname();
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/impact", label: "Impact" },
    { href: "/careers", label: "Careers" },
  ];
  const doSignOut = async () => {
    await supabase.auth.signOut(); 
    return router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          data-testid="link-logo"
        >
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                D
              </span>
            </div>
            <span className="font-bold text-xl tracking-tight">Drovaq</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant="ghost"
                className={`text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-primary bg-primary/10 font-semibold"
                    : "hover:text-primary hover:bg-primary/5"
                }`}
                data-testid={`link-nav-${link.label
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" data-testid="link-dashboard">
                  Dashboard
                </Button>
              </Link>
              <Button
              onClick={doSignOut}
              variant="outline" data-testid="button-logout" type="submit">
              Log out
            </Button>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button
                  variant="ghost"
                  className="transition-colors duration-200 hover:text-primary"
                  data-testid="button-login"
                >
                  Log in
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button
                  className="gap-2 cta-glow"
                  data-testid="button-join-beta"
                >
                  <Sparkles className="h-4 w-4" />
                  Join Beta
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">
                      D
                    </span>
                  </div>
                  <span className="font-bold text-xl">Drovaq</span>
                </div>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-base transition-all duration-200 ${
                        isActive(link.href)
                          ? "text-primary bg-primary/10 font-semibold"
                          : ""
                      }`}
                      data-testid={`link-mobile-${link.label
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                {user ? (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Button
                        variant="outline"
                        className="w-full"
                        data-testid="link-mobile-dashboard"
                      >
                        Dashboard
                      </Button>
                    </Link>
                      <Button
                      onClick={doSignOut}
                        variant="ghost"
                        className="w-full"
                        data-testid="button-mobile-logout"
                        type="submit"
                      >
                        Log out
                      </Button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/auth/login"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Button
                        variant="outline"
                        className="w-full"
                        data-testid="button-mobile-login"
                      >
                        Log in
                      </Button>
                    </Link>
                    <Link
                      href="/auth/signup"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Button
                        className="w-full gap-2 cta-glow"
                        data-testid="button-mobile-join-beta"
                      >
                        <Sparkles className="h-4 w-4" />
                        Join Beta
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}