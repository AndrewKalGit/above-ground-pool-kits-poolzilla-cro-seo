"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Check, Download, AlertCircle } from "lucide-react"

export default function EastenPoolKitPage() {
  const [selectedSize, setSelectedSize] = useState<string>("18x52-round")

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "sizes", label: "Sizes and Specifications" },
    { id: "package", label: "Package Contents" },
    { id: "features", label: "Feature Breakdown" },
    { id: "materials", label: "Frame & Materials" },
    { id: "specs", label: "Technical Specifications" },
    { id: "maintenance", label: "Maintenance Checklist" },
    { id: "cleaning", label: "Cleaning Guide" },
    { id: "installation", label: "DIY Installation Tutorial" },
    { id: "troubleshooting", label: "Troubleshooting" },
    { id: "faq", label: "FAQ" },
    { id: "related", label: "Related Products" },
  ]

  const roundSizes = [
    { id: "12x52-round", label: "12' x 52\"" },
    { id: "15x52-round", label: "15' x 52\"" },
    { id: "18x52-round", label: "18' x 52\"" },
    { id: "21x52-round", label: "21' x 52\"" },
    { id: "24x52-round", label: "24' x 52\"" },
  ]

  const ovalSizes = [
    { id: "12x18x52-oval", label: "12' x 18' x 52\"" },
    { id: "12x24x52-oval", label: "12' x 24' x 52\"" },
    { id: "16x32x52-oval", label: "16' x 32' x 52\"" },
    { id: "18x33x52-oval", label: "18' x 33' x 52\"" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Easten Pool Kit",
            image: "/above-ground-pool-easten-main-view.jpg",
            description:
              "Premium above-ground pool kit with galvanized steel frame, Krystal Kote finish, complete with filter system, liner, and ladder",
            sku: "PZA1252ECH",
            mpn: "PZA1252ECH",
            brand: {
              "@type": "Brand",
              name: "Poolzilla",
            },
            offers: {
              "@type": "AggregateOffer",
              availability: "https://schema.org/InStock",
              priceCurrency: "USD",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "127",
            },
          }),
        }}
      />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-16 lg:py-20">
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
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <Badge className="bg-accent text-accent-foreground mb-2">Premium Above-Ground Pool Kit</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Easten Pool Kit</h1>
              <p className="text-lg text-primary-foreground/90">Part #: PZA1252ECH</p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-transform"
                >
                  <a href="#installation">See Installation Plans</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Link href="/above-ground-pools">Explore More Kits</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            <SidebarNavigation sections={sections} />

            {/* Main Content */}
            <div className="flex-1 min-w-0 space-y-16">
              {/* Image Gallery */}
              <div className="border-b border-border pb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src="/above-ground-pool-easten-main-view.jpg"
                      alt="Easten Pool Kit - Main View"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square bg-muted rounded-lg overflow-hidden">
                        <img
                          src={`/pool-detail-angle-.jpg?height=400&width=400&query=pool+detail+angle+${i}`}
                          alt={`Pool detail ${i}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Overview */}
              <section id="overview">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Product Overview</h2>
                <div className="prose prose-lg max-w-none space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Poolzilla's all-in-one above-ground pool kit, designed for the avid DIY'er, or for homeowners
                    seeking to effortlessly bring their pool ownership dreams to life!
                  </p>
                  <p>
                    Introducing the Easten, with understated elegance in its color-coordinated posts and top ledges that
                    blend seamlessly with the frame's mist-toned hue, paired with a premium blue liner to elevate the
                    look and add a splash of luxury to your backyard.
                  </p>
                  <p>
                    Constructed from galvanized steel with a durable 'Krystal Kote' sealant, the Easten includes
                    interlocking resin caps, galvanized steel top and bottom tracks, and matching galvanized
                    connectors—delivering durability and corrosion resistance you can trust.
                  </p>
                  <p className="font-medium text-foreground">
                    Includes all essential components such as a skimmer kit, filter & pump system, ladder, and liner.
                    Note: Pump and filter models may vary but are always matched for optimal performance.
                  </p>
                </div>
              </section>

              {/* Sizes */}
              <section id="sizes">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Sizes and Specifications</h2>
                <Card>
                  <CardContent className="pt-6 space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Select Your Size</h3>

                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-2">Round</p>
                          <div className="flex flex-wrap gap-2">
                            {roundSizes.map((size) => (
                              <Button
                                key={size.id}
                                variant={selectedSize === size.id ? "default" : "outline"}
                                className={
                                  selectedSize === size.id ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""
                                }
                                onClick={() => setSelectedSize(size.id)}
                              >
                                {size.label}
                              </Button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-2">Oval</p>
                          <div className="flex flex-wrap gap-2">
                            {ovalSizes.map((size) => (
                              <Button
                                key={size.id}
                                variant={selectedSize === size.id ? "default" : "outline"}
                                className={
                                  selectedSize === size.id ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""
                                }
                                onClick={() => setSelectedSize(size.id)}
                              >
                                {size.label}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        Selected:{" "}
                        <span className="font-semibold text-foreground">
                          {[...roundSizes, ...ovalSizes].find((s) => s.id === selectedSize)?.label}
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Package Contents */}
              <section id="package" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Package Contents</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "Blue Liner", detail: "12' X 48/52\"" },
                    { name: "Sand Filter with Pump", detail: 'Swimline 14" Sand Filter with .75 HP Pump / .55 TH' },
                    { name: "Thru-The-Wall Skimmer Kit", detail: "Complete installation kit" },
                    { name: "Entry Ladder", detail: "Heavy-duty construction" },
                    { name: "Steel Frame", detail: "Round or Oval configuration" },
                    { name: "Filter & Pump System", detail: "Matched for optimal performance" },
                    { name: "Skimmer", detail: "Professional grade" },
                    { name: "Premium Components", detail: "All hardware included" },
                  ].map((item, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="pt-6 flex gap-3">
                        <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.detail}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Features */}
              <section id="features" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Feature Breakdown</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    'Painted galvanized steel 6" ledges',
                    "5\" uprights with 'Krystal Kote' sealant",
                    "Interlocking resin caps",
                    "Painted galvanized steel top & bottom tracks",
                    "Galvanized steel connectors",
                    'Oval models include heavy-duty A-frame angle brace system (36" / 3ft buttress)',
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Materials */}
              <section id="materials" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About the Frame & Materials</h2>
                <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The Easten pool kit features a premium galvanized steel frame construction that sets it apart from
                    standard above-ground pools. Every steel component undergoes a rigorous galvanization process that
                    creates a protective zinc coating, providing exceptional resistance to rust and corrosion.
                  </p>
                  <p>
                    Beyond standard galvanization, the Easten's frame is treated with Poolzilla's proprietary 'Krystal
                    Kote' sealant—an advanced protective layer that adds an extra barrier against moisture, chemicals,
                    and environmental wear. This dual-layer protection system ensures your pool frame maintains its
                    structural integrity and appearance for years to come.
                  </p>
                  <p>
                    The 6-inch top ledges and 5-inch uprights are engineered for maximum strength while maintaining an
                    elegant profile. Color-coordinated painted finishes on the posts and ledges create a cohesive,
                    polished look that elevates your backyard aesthetic. Unlike cheaper alternatives that rely solely on
                    exposed metal, the Easten's thoughtful color palette complements the mist-toned frame and premium
                    blue liner.
                  </p>
                  <p>
                    Interlocking resin caps at connection points eliminate metal-on-metal contact, reducing wear and
                    providing smooth, safe edges. The galvanized steel top and bottom tracks feature
                    precision-engineered channels that ensure proper wall alignment during installation and maintain
                    perfect circular or oval geometry throughout the pool's lifetime.
                  </p>
                  <p>
                    For oval configurations, the Easten includes a heavy-duty A-frame angle brace system with 36-inch
                    buttresses. This professional-grade support structure distributes water pressure evenly across the
                    longer walls, preventing bowing and ensuring the pool maintains its shape even when fully loaded
                    with thousands of gallons of water.
                  </p>
                </div>
              </section>

              {/* Tech Specs */}
              <section id="specs" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Technical Specifications</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-border">
                        <th className="text-left py-4 px-4 font-semibold bg-muted/50">Specification</th>
                        <th className="text-left py-4 px-4 font-semibold bg-muted/50">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 font-medium">Model</td>
                        <td className="py-3 px-4 text-muted-foreground">Easten</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 font-medium">Part Number</td>
                        <td className="py-3 px-4 text-muted-foreground">PZA1252ECH</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 font-medium">Wall Height</td>
                        <td className="py-3 px-4 text-muted-foreground">52 inches</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 font-medium">Frame Material</td>
                        <td className="py-3 px-4 text-muted-foreground">Galvanized Steel with Krystal Kote</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 font-medium">Top Ledge Width</td>
                        <td className="py-3 px-4 text-muted-foreground">6 inches</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 font-medium">Upright Width</td>
                        <td className="py-3 px-4 text-muted-foreground">5 inches</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 font-medium">Liner Type</td>
                        <td className="py-3 px-4 text-muted-foreground">Premium Blue - 25 mil</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 font-medium">Filter System</td>
                        <td className="py-3 px-4 text-muted-foreground">14" Sand Filter with .75 HP Pump</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 font-medium">Warranty</td>
                        <td className="py-3 px-4 text-muted-foreground">10 Year Limited Warranty</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 font-medium">Installation Time</td>
                        <td className="py-3 px-4 text-muted-foreground">1-2 days (with 2-3 people)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Skill Level</td>
                        <td className="py-3 px-4 text-muted-foreground">DIY Friendly - Intermediate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Maintenance Checklist */}
              <section id="maintenance" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Maintenance Checklist</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { task: "Test water chemistry", frequency: "Daily" },
                    { task: "Skim surface debris", frequency: "Daily" },
                    { task: "Empty skimmer basket", frequency: "Weekly" },
                    { task: "Vacuum pool floor", frequency: "Weekly" },
                    { task: "Brush walls and floor", frequency: "Weekly" },
                    { task: "Backwash filter", frequency: "Monthly" },
                    { task: "Shock pool", frequency: "Monthly" },
                    { task: "Inspect equipment", frequency: "Monthly" },
                  ].map((item, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6 flex justify-between items-center">
                        <span className="font-medium">{item.task}</span>
                        <Badge variant="secondary">{item.frequency}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Cleaning Guide */}
              <section id="cleaning" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Cleaning Guide</h2>
                <Card>
                  <CardContent className="pt-6 space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Daily Maintenance</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex gap-2">
                          <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Skim surface for leaves, insects, and debris</span>
                        </li>
                        <li className="flex gap-2">
                          <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Test and adjust pH levels (7.2-7.6 range)</span>
                        </li>
                        <li className="flex gap-2">
                          <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Check chlorine levels (1-3 ppm)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Weekly Maintenance</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex gap-2">
                          <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Vacuum pool floor and walls</span>
                        </li>
                        <li className="flex gap-2">
                          <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Brush walls to prevent algae buildup</span>
                        </li>
                        <li className="flex gap-2">
                          <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Clean skimmer and pump baskets</span>
                        </li>
                        <li className="flex gap-2">
                          <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Test total alkalinity (80-120 ppm)</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Installation */}
              <section id="installation" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">DIY Installation Tutorial</h2>
                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "Site Preparation",
                      description:
                        "Level the ground, remove rocks and debris, lay sand base. Ensure proper drainage and accessibility.",
                    },
                    {
                      step: 2,
                      title: "Bottom Track Installation",
                      description:
                        "Connect bottom track sections forming a complete circle or oval. Secure all connections.",
                    },
                    {
                      step: 3,
                      title: "Wall Assembly",
                      description:
                        "Unroll pool wall inside track, connect ends, and ensure even height around perimeter.",
                    },
                    {
                      step: 4,
                      title: "Install Uprights",
                      description: "Position vertical uprights at designated intervals, securing to bottom track.",
                    },
                    {
                      step: 5,
                      title: "Top Rails & Caps",
                      description: "Attach top rails connecting all uprights, then install decorative resin caps.",
                    },
                    {
                      step: 6,
                      title: "Liner Installation",
                      description: "Spread liner carefully, remove wrinkles, secure with top rail coping.",
                    },
                    {
                      step: 7,
                      title: "Equipment Setup",
                      description: "Install skimmer, connect filter and pump system, test all connections.",
                    },
                    {
                      step: 8,
                      title: "Fill & Chemical Balance",
                      description: "Fill pool slowly, test water chemistry, adjust chemicals to proper levels.",
                    },
                  ].map((item) => (
                    <Card key={item.step} className="hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                            {item.step}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Download className="mr-2 h-5 w-5" />
                    Download Complete Installation Manual (PDF)
                  </Button>
                </div>
              </section>

              {/* Troubleshooting */}
              <section id="troubleshooting" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Troubleshooting</h2>
                <div className="space-y-4">
                  {[
                    {
                      issue: "Cloudy Water",
                      solution: "Check filter, test pH and chlorine levels, shock pool if needed, run filter 24 hours.",
                    },
                    {
                      issue: "Green Algae",
                      solution:
                        "Brush walls thoroughly, shock pool with double dose, vacuum to waste, maintain chlorine.",
                    },
                    {
                      issue: "Low Water Pressure",
                      solution: "Clean skimmer basket, backwash filter, check for clogged return lines, inspect pump.",
                    },
                    {
                      issue: "Pump Not Running",
                      solution: "Check power supply, reset breaker, inspect timer settings, verify pump priming.",
                    },
                  ].map((item, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex gap-3">
                          <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-semibold mb-2">{item.issue}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.solution}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="scroll-mt-24">
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "FAQPage",
                      mainEntity: [
                        {
                          "@type": "Question",
                          name: "What's included in the Easten Pool Kit?",
                          acceptedAnswer: {
                            "@type": "Answer",
                            text: "The Easten kit includes everything you need: the steel frame (wall, uprights, top and bottom tracks), premium blue liner, sand filter and pump system, thru-wall skimmer kit, entry ladder, and all necessary hardware and connectors.",
                          },
                        },
                        {
                          "@type": "Question",
                          name: "How difficult is the installation process?",
                          acceptedAnswer: {
                            "@type": "Answer",
                            text: "The Easten is designed for DIY installation with an intermediate skill level. With 2-3 people and our comprehensive guides, most installations are completed in 1-2 days. The modular design and interlocking components make assembly straightforward.",
                          },
                        },
                        {
                          "@type": "Question",
                          name: "What maintenance is required?",
                          acceptedAnswer: {
                            "@type": "Answer",
                            text: "Daily tasks include skimming debris and testing water chemistry. Weekly maintenance involves vacuuming, brushing walls, and cleaning skimmer baskets. Monthly tasks include backwashing the filter and shocking the pool. The galvanized steel frame requires minimal maintenance thanks to the Krystal Kote protective coating.",
                          },
                        },
                        {
                          "@type": "Question",
                          name: "How long does the Easten pool last?",
                          acceptedAnswer: {
                            "@type": "Answer",
                            text: "With proper maintenance, the Easten's galvanized steel frame is backed by a 10-year limited warranty. The liner typically lasts 5-7 years depending on usage and care. The filter and pump system should last 5-10 years with proper maintenance.",
                          },
                        },
                      ],
                    }),
                  }}
                />
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline hover:text-accent transition-colors">
                      What's included in the Easten Pool Kit?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      The Easten kit includes everything you need: the steel frame (wall, uprights, top and bottom
                      tracks), premium blue liner, sand filter and pump system, thru-wall skimmer kit, entry ladder, and
                      all necessary hardware and connectors. The only things you'll need to provide are sand for the
                      filter and the installation area preparation.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline hover:text-accent transition-colors">
                      How difficult is the installation process?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      The Easten is designed for DIY installation with an intermediate skill level. With 2-3 people and
                      our comprehensive guides, most installations are completed in 1-2 days. The modular design and
                      interlocking components make assembly straightforward. We provide detailed step-by-step
                      instructions, diagrams, and video tutorials.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline hover:text-accent transition-colors">
                      What maintenance is required?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Daily tasks include skimming debris and testing water chemistry (5-10 minutes). Weekly maintenance
                      involves vacuuming, brushing walls, and cleaning skimmer baskets (1-2 hours). Monthly tasks
                      include backwashing the filter and shocking the pool. The galvanized steel frame requires minimal
                      maintenance thanks to the Krystal Kote protective coating.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline hover:text-accent transition-colors">
                      How long does the Easten pool last?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      With proper maintenance, the Easten's galvanized steel frame is backed by a 10-year limited
                      warranty. The liner typically lasts 5-7 years depending on usage and care. The filter and pump
                      system should last 5-10 years with proper maintenance. Many customers report their Easten pools
                      lasting 15+ years with proper care.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline hover:text-accent transition-colors">
                      Can I leave the pool up year-round?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Yes! The Easten's galvanized steel construction with Krystal Kote finish is designed to withstand
                      all seasons. For winter, we recommend winterizing the pool: balance chemicals, lower water level,
                      remove equipment, and use a winter cover. The robust frame structure handles freeze-thaw cycles
                      without damage.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              {/* Related Products */}
              <section id="related" className="scroll-mt-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Related Products</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Premium Pool Cover",
                      description: "All-season protection",
                      image: "/pool-cover.jpg",
                    },
                    {
                      title: "Solar Pool Heater",
                      description: "Extend your swim season",
                      image: "/solar-pool-heater.jpg",
                    },
                    {
                      title: "Pool Vacuum System",
                      description: "Automated cleaning",
                      image: "/pool-vacuum.jpg",
                    },
                  ].map((product, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
                      <div className="aspect-video relative overflow-hidden bg-muted">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-1">{product.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
