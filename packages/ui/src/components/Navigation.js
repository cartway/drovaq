"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigation = Navigation;
var react_1 = require("react");
var link_1 = require("next/link");
var lucide_react_1 = require("lucide-react");
var button_1 = require("./ui/button");
var sheet_1 = require("./ui/sheet");
var navigation_1 = require("next/navigation");
// import { useAuth } from "@/hooks/useAuth";
function Navigation() {
    var pathname = (0, navigation_1.usePathname)();
    var isActive = function (path) { return pathname === path; }; // or use startsWith
    console.log(pathname);
    var _a = (0, react_1.useState)(false), mobileMenuOpen = _a[0], setMobileMenuOpen = _a[1];
    // const { isAuthenticated, isLoading } = useAuth();
    // const isActive = (path: string) => location === path;
    var navLinks = [
        { href: "/", label: "Home" },
        { href: "/pricing", label: "Pricing" },
        { href: "/impact", label: "Impact" },
        { href: "/careers", label: "Careers" },
    ];
    return (<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <link_1.default href="/" className="flex items-center gap-2" data-testid="link-logo">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <span className="font-bold text-xl tracking-tight">Drovaq</span>
          </div>
        </link_1.default>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(function (link) { return (<link_1.default key={link.href} href={link.href}>
              <button_1.Button variant="ghost" className={"text-sm font-medium transition-all duration-200 ".concat(isActive(link.href)
                ? "text-primary bg-primary/10 font-semibold"
                : "hover:text-primary hover:bg-primary/5")} data-testid={"link-nav-".concat(link.label.toLowerCase().replace(/\s+/g, '-'))}>
                {link.label}
              </button_1.Button>
            </link_1.default>); })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* {isLoading ? (
          <div className="h-9 w-24 bg-muted animate-pulse rounded-md" />
        ) : isAuthenticated ? (
          <>
            <Link href="/dashboard">
              <Button variant="ghost" data-testid="link-dashboard">Dashboard</Button>
            </Link>
            <a href="/api/logout">
              <Button variant="outline" data-testid="button-logout">Log out</Button>
            </a>
          </> */}
          {/* )  */}
          : (
            <>
              <link_1.default href="/login">
                <button_1.Button variant="ghost" className="transition-colors duration-200 hover:text-primary" data-testid="button-login">Log in</button_1.Button>
              </link_1.default>
              <link_1.default href="/signup">
                <button_1.Button className="gap-2 cta-glow" data-testid="button-join-beta">
                  <lucide_react_1.Sparkles className="h-4 w-4"/>
                  Join Beta
                </button_1.Button>
              </link_1.default>
            </>
          )
          
          {/* } */}
        </div>

        <sheet_1.Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <sheet_1.SheetTrigger asChild className="md:hidden">
            <button_1.Button variant="ghost" size="icon" data-testid="button-mobile-menu">
              <lucide_react_1.Menu className="h-5 w-5"/>
              <span className="sr-only">Toggle menu</span>
            </button_1.Button>
          </sheet_1.SheetTrigger>
          <sheet_1.SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">D</span>
                  </div>
                  <span className="font-bold text-xl">Drovaq</span>
                </div>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map(function (link) { return (<link_1.default key={link.href} href={link.href} onClick={function () { return setMobileMenuOpen(false); }}>
                    <button_1.Button variant="ghost" className={"w-full justify-start text-base transition-all duration-200 ".concat(isActive(link.href)
                ? "text-primary bg-primary/10 font-semibold"
                : "")} data-testid={"link-mobile-".concat(link.label.toLowerCase().replace(/\s+/g, '-'))}>
                      {link.label}
                    </button_1.Button>
                  </link_1.default>); })}
              </nav>

              <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                {/* {isAuthenticated ? ( */}
                  <>
                    <link_1.default href="/dashboard" onClick={function () { return setMobileMenuOpen(false); }}>
                      <button_1.Button variant="outline" className="w-full" data-testid="link-mobile-dashboard">
                        Dashboard
                      </button_1.Button>
                    </link_1.default>
                    <a href="/api/logout">
                      <button_1.Button variant="ghost" className="w-full" data-testid="button-mobile-logout">
                        Log out
                      </button_1.Button>
                    </a>
                  </>
                {/* )  */}
                : (
                  <>
                    <link_1.default href="/login" onClick={function () { return setMobileMenuOpen(false); }}>
                      <button_1.Button variant="outline" className="w-full" data-testid="button-mobile-login">
                        Log in
                      </button_1.Button>
                    </link_1.default>
                    <link_1.default href="/signup" onClick={function () { return setMobileMenuOpen(false); }}>
                      <button_1.Button className="w-full gap-2 cta-glow" data-testid="button-mobile-join-beta">
                        <lucide_react_1.Sparkles className="h-4 w-4"/>
                        Join Beta
                      </button_1.Button>
                    </link_1.default>
                  </>
                )
                {/* } */}
              </div>
            </div>
          </sheet_1.SheetContent>
        </sheet_1.Sheet>
      </nav>
    </header>);
}
