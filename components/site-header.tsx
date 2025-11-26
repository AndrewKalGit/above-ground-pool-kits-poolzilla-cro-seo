import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/resources", label: "Resources" },
    { href: "/above-ground-pools", label: "Above-Ground Pools" },
    { href: "/equipment", label: "Pool Equipment" },
    { href: "/maintenance", label: "Maintenance Guides" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center text-2xl font-bold leading-none">
              <span className="text-accent">Pool</span>
              <span className="text-muted-foreground">zilla</span>
              <svg className="ml-1 h-6 w-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link target="_blank" href="poolzilla.com/">Shop Now</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base font-medium text-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                  <Link href="/products/easten-pool-kit">Shop Now</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
