import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PoolQuiz } from "@/components/pool-quiz"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Waves, Droplets, Shield, Zap, Sparkles } from "lucide-react"

export const metadata = {
  title: "Poolzilla - The Ultimate Resource Hub for Pool Owners",
  description:
    "Expert guides, product comparisons, and comprehensive resources for above-ground and in-ground pool kits, maintenance, equipment, and DIY installation. Find your perfect pool today.",
  keywords:
    "above ground pool kit, steel frame pool, oval pool kit, round pool kit, DIY pool installation, pool setup tutorial, backyard pool kits, premium pool kit, pool maintenance guide",
}

export default function HomePage() {
  const categories = [
    {
      title: "Above-Ground Pool Kits",
      description: "Complete kits with frame, liner, pump, and all essentials for easy DIY installation",
      href: "/above-ground-pools",
      image: "/above-ground-swimming-pool.jpg",
    },
    {
      title: "Pool Pumps & Filters",
      description: "High-performance filtration systems to keep your pool crystal clear",
      href: "/equipment",
      image: "/pool-pump-and-filter.jpg",
    },
    {
      title: "Maintenance & Cleaning",
      description: "Expert guides for routine maintenance and professional cleaning techniques",
      href: "/maintenance",
      image: "/pool-cleaning-equipment.jpg",
    },
    {
      title: "Pool Accessories",
      description: "Ladders, covers, lighting, and accessories to enhance your pool experience",
      href: "/accessories",
      image: "/pool-ladder-and-accessories.jpg",
    },
    {
      title: "Liners & Covers",
      description: "Durable pool liners and protective covers for all seasons",
      href: "/liners",
      image: "/blue-pool-liner.jpg",
    },
    {
      title: "Replacement Parts",
      description: "Genuine replacement parts and components for pool repairs",
      href: "/parts",
      image: "/pool-equipment-parts.jpg",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20 lg:py-32">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                The Ultimate Resource Hub for Above-Ground and In-Ground Pool Owners
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 text-balance leading-relaxed">
                Professional guidance, premium pool kits, and comprehensive resources to transform your backyard into an
                aquatic paradise. From DIY installation to expert maintenance tips, we've got you covered.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/above-ground-pools">Explore Pool Kits</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Link href="#quiz">Take the Find Your Pool Quiz</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Poolzilla?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                We provide comprehensive resources to help you find the perfect pool solution for your backyard.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="pt-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <Waves className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Premium Selection</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Curated collection of high-quality pool products and equipment.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="pt-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Expert Guidance</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Detailed guides and comparisons to help you make informed choices.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="pt-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <Droplets className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">DIY Friendly</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Complete installation resources for avid DIY enthusiasts.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="pt-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Fast Support</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Quick answers to your pool questions and concerns.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Find exactly what you need for your pool project.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link key={category.href} href={category.href}>
                  <Card className="overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                    <div className="aspect-video relative overflow-hidden bg-muted">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section id="quiz" className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="h-6 w-6 text-accent" />
                  <h2 className="text-3xl md:text-4xl font-bold">Find Your Perfect Pool</h2>
                </div>
                <p className="text-lg text-muted-foreground text-balance">
                  Take our interactive quiz to get personalized pool recommendations based on your space, budget, and
                  preferences.
                </p>
              </div>
              <PoolQuiz />
            </div>
          </div>
        </section>

        {/* Featured Product */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <span className="text-sm font-semibold text-accent uppercase tracking-wide">Featured Product</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Easten Pool Kit</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our premium above-ground pool kit featuring galvanized steel construction with Krystal Kote finish,
                    complete with filter system, liner, ladder, and all essentials for professional DIY installation.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Durable galvanized steel frame with 10-year warranty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Droplets className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>Complete filtration system included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>DIY-friendly installation in 1-2 days</span>
                    </li>
                  </ul>
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/products/easten-pool-kit">View Full Details</Link>
                  </Button>
                </div>
                <div className="aspect-square relative overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src="/above-ground-pool-easten-main-view.jpg"
                    alt="Easten Pool Kit"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Block */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Complete Guide to Above-Ground Pool Ownership
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to Poolzilla, your trusted resource for everything related to above-ground pool kits,
                  in-ground installations, and comprehensive pool maintenance. Whether you're a first-time pool owner or
                  a seasoned enthusiast, our expert guides help you navigate the world of backyard pools with
                  confidence.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Above-Ground Pool Kits: The Smart Choice for DIY Installation
                </h3>
                <p>
                  Our steel frame pool kits combine durability, affordability, and ease of installation. From classic
                  round pool kits to spacious oval pool kits, Poolzilla offers premium solutions featuring galvanized
                  frames with Krystal Kote finish for superior corrosion resistance. Each backyard pool kit includes
                  everything you need: sturdy frame, premium liner, filter and pump system, ladder, and professional
                  installation guides.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">DIY Pool Installation Made Simple</h3>
                <p>
                  Our pool setup tutorials break down the installation process into manageable steps, making DIY pool
                  installation accessible for beginners and experienced DIYers alike. With detailed diagrams, video
                  guides, and expert tips, you'll have your premium pool kit up and running in just 1-2 days.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Comprehensive Pool Maintenance Resources
                </h3>
                <p>
                  Beyond installation, Poolzilla provides extensive pool maintenance guides covering chemical balance,
                  filter and pump systems, pool cleaning routines, and seasonal care. Our pool equipment guide helps you
                  understand every component, while our beginner pool owner's guide ensures you have the knowledge to
                  keep your pool crystal clear year-round.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Pool Comparison Resources</h3>
                <p>
                  Not sure which pool is right for you? Our pool comparison resources help you evaluate different
                  materials, sizes, and features. Compare round vs. oval configurations, understand the benefits of
                  galvanized steel, and learn about advanced features like our exclusive Krystal Kote finish. We break
                  down pool ladder options, liner durability, and sand filter systems to help you make informed
                  decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Find Your Perfect Pool?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
              Browse our comprehensive collection of pool kits, equipment, and resources.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/above-ground-pools">Explore Pool Kits</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
