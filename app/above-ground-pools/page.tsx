import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Check } from "lucide-react"

export const metadata = {
  title: "Above-Ground Pool Kits Resource Center | Poolzilla",
  description:
    "Complete guide to above-ground pool kits. Learn about sizes, materials, installation, and find the perfect pool for your backyard.",
}

export default function AboveGroundPoolsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-16 lg:py-24">
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
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                Above-Ground Pool Kits Resource Center
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 text-balance leading-relaxed">
                Everything you need to know about choosing, installing, and maintaining above-ground pool kits for your
                backyard oasis.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                View Pool Kits
              </Button>
            </div>
          </div>
        </section>

        {/* What Is Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Is an Above-Ground Pool Kit?</h2>
              <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  An above-ground pool kit is a complete package that includes all the essential components needed to
                  install a swimming pool that sits on top of the ground, rather than being excavated into it. These
                  kits are designed for homeowners who want an affordable, DIY-friendly alternative to traditional
                  in-ground pools.
                </p>
                <p>
                  Most above-ground pool kits include the pool wall, liner, top rails, uprights, stabilizer rails, and
                  often additional components like a pump, filter, ladder, and skimmer. The modular design allows for
                  relatively straightforward installation, making them popular among DIY enthusiasts and those looking
                  to save on installation costs.
                </p>
                <p>
                  Modern above-ground pools have come a long way in terms of aesthetics and durability. With proper
                  maintenance, a quality above-ground pool can provide years of enjoyment and significantly increase
                  your property's recreational value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Choosing Size & Shape */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Choosing the Right Size & Shape</h2>
              <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Selecting the right size and shape for your above-ground pool depends on several factors including
                  your available yard space, intended use, number of swimmers, and budget. Understanding these
                  considerations will help you make an informed decision that you'll be happy with for years to come.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Round Pools</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Round pools are the most economical and structurally stable option. They're ideal for smaller
                      yards and recreational swimming.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span>Most affordable option</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span>Maximum structural stability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span>Fits in tighter spaces</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span>Great for family recreation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Oval Pools</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Oval pools offer more swimming space and a sleeker aesthetic. Perfect for lap swimming and larger
                      gatherings.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span>Better for lap swimming</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span>More surface area</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span>Elegant appearance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span>Accommodates more swimmers</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Materials & Frame */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Materials & Frame Types</h2>
              <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The quality and type of materials used in your pool's construction significantly impact its
                  durability, appearance, and maintenance requirements. Understanding the different frame types and
                  protective coatings will help you choose a pool that stands the test of time.
                </p>
                <p>
                  Steel frames are the most common and offer excellent strength-to-cost ratio. Look for galvanized steel
                  with protective coatings like "Krystal Kote" which provide superior corrosion resistance. The gauge of
                  the steel matters too—lower gauge numbers indicate thicker, more durable metal.
                </p>
                <p>
                  Resin components are becoming increasingly popular for top rails, caps, and connectors. These plastic
                  components never rust and require minimal maintenance, though they typically come at a higher price
                  point than all-steel options.
                </p>
                <p>
                  The liner is another critical component—typically made from vinyl ranging from 20 to 30 mil thickness.
                  Thicker liners are more puncture-resistant and durable. Premium liners often feature UV protection and
                  fade-resistant colors to maintain their appearance over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Overview */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Installation Overview</h2>
              <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Installing an above-ground pool is a manageable DIY project for most homeowners with basic tools and
                  2-3 helpers. The process typically takes a weekend to complete, though site preparation may add
                  additional time depending on your yard's current condition.
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    step: "1",
                    title: "Site Preparation",
                    description: "Level the ground, compact the soil, and add a sand base for a stable foundation.",
                  },
                  {
                    step: "2",
                    title: "Frame Assembly",
                    description: "Connect bottom rails, install uprights, and secure the pool wall in the track.",
                  },
                  {
                    step: "3",
                    title: "Liner Installation",
                    description: "Position and smooth the liner, then begin filling while adjusting for wrinkles.",
                  },
                  {
                    step: "4",
                    title: "Equipment Setup",
                    description:
                      "Install the pump, filter, skimmer, and ladder according to manufacturer instructions.",
                  },
                ].map((item) => (
                  <Card key={item.step}>
                    <CardContent className="pt-6 flex gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl">
                        {item.step}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Pool Kit Comparison</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center text-balance">
                Compare features and specifications across our popular above-ground pool kits.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-4 px-4 font-semibold">Feature</th>
                      <th className="text-left py-4 px-4 font-semibold">Basic Kit</th>
                      <th className="text-left py-4 px-4 font-semibold bg-accent/5">Easten Kit</th>
                      <th className="text-left py-4 px-4 font-semibold">Premium Kit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-medium">Frame Material</td>
                      <td className="py-3 px-4 text-muted-foreground">Steel</td>
                      <td className="py-3 px-4 text-muted-foreground bg-accent/5">Galvanized + Krystal Kote</td>
                      <td className="py-3 px-4 text-muted-foreground">Hybrid Resin/Steel</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-medium">Liner Thickness</td>
                      <td className="py-3 px-4 text-muted-foreground">20 mil</td>
                      <td className="py-3 px-4 text-muted-foreground bg-accent/5">25 mil Premium</td>
                      <td className="py-3 px-4 text-muted-foreground">30 mil Heavy Duty</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-medium">Filter System</td>
                      <td className="py-3 px-4 text-muted-foreground">Cartridge</td>
                      <td className="py-3 px-4 text-muted-foreground bg-accent/5">Sand Filter + Pump</td>
                      <td className="py-3 px-4 text-muted-foreground">Multi-Port Sand System</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-medium">Warranty</td>
                      <td className="py-3 px-4 text-muted-foreground">5 years</td>
                      <td className="py-3 px-4 text-muted-foreground bg-accent/5">10 years</td>
                      <td className="py-3 px-4 text-muted-foreground">15 years</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Price Range</td>
                      <td className="py-3 px-4 text-muted-foreground">$</td>
                      <td className="py-3 px-4 text-muted-foreground bg-accent/5">$$</td>
                      <td className="py-3 px-4 text-muted-foreground">$$$</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 text-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/products/easten-pool-kit">View Easten Kit Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "How long does it take to install an above-ground pool?",
                    answer:
                      "Most above-ground pools can be installed in 1-2 days with 2-3 people helping. Site preparation may take additional time depending on your yard conditions.",
                  },
                  {
                    question: "Do I need a permit for an above-ground pool?",
                    answer:
                      "Permit requirements vary by location. Check with your local building department before installation. Many areas require permits for pools over a certain size or with specific features like decks.",
                  },
                  {
                    question: "How deep are above-ground pools?",
                    answer:
                      'Most above-ground pools are 48" or 52" deep (4-4.5 feet). This depth is safe for most swimmers while keeping the pool structurally sound and affordable.',
                  },
                  {
                    question: "What maintenance does an above-ground pool require?",
                    answer:
                      "Regular maintenance includes testing and balancing water chemistry, cleaning the filter, skimming debris, vacuuming, and winterizing in cold climates. Expect to spend 30-60 minutes per week on basic maintenance.",
                  },
                ].map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Related Resources</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Pool Maintenance Guide", href: "/maintenance" },
                  { title: "Installation Tips", href: "/installation" },
                  { title: "Winterization Guide", href: "/winterization" },
                ].map((resource) => (
                  <Link key={resource.href} href={resource.href}>
                    <Card className="hover:shadow-lg transition-shadow h-full">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                        <p className="text-sm text-accent">Read more →</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
