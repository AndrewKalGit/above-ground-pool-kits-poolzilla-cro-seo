import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center text-2xl font-bold leading-none">
                <span className="text-accent">Pool</span>
                <span className="text-primary-foreground/70">zilla</span>
                <svg className="ml-1 h-6 w-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70">
              Your trusted resource for premium swimming pool products and expert guidance.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/above-ground-pools"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Above-Ground Pools
                </Link>
              </li>
              <li>
                <Link
                  href="/in-ground-pools"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  In-Ground Pools
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Pool Equipment
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/maintenance" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Maintenance Guides
                </Link>
              </li>
              <li>
                <Link href="/installation" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Installation Tips
                </Link>
              </li>
              <li>
                <Link href="/buying-guides" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Buying Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Connected</h3>
            <div className="space-y-3 text-sm mb-4">
              <p className="text-primary-foreground/70">
                <strong>Email:</strong>
                <br />
                <a href="mailto:contact@echowebagency.com" className="hover:text-accent transition-colors">
                  contact@echowebagency.com
                </a>
              </p>
              <p className="text-primary-foreground/70">
                <strong>Phone:</strong>
                <br />
                <a href="tel:732-595-7217" className="hover:text-accent transition-colors">
                  732-595-7217
                </a>
              </p>
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Poolzilla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
