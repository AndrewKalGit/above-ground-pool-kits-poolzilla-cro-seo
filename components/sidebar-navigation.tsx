"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavSection {
  id: string
  label: string
}

interface SidebarNavigationProps {
  sections: NavSection[]
}

export function SidebarNavigation({ sections }: SidebarNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>("")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -60% 0px" },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  const NavContent = () => (
    <nav className="space-y-1">
      <p className="text-sm font-semibold mb-3 text-foreground">Page Navigation</p>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={cn(
            "block w-full text-left px-3 py-2 text-sm rounded-md transition-all duration-200",
            "hover:bg-accent/10 hover:text-accent hover:translate-x-1",
            activeSection === section.id
              ? "bg-accent/20 text-accent font-medium border-l-2 border-accent"
              : "text-muted-foreground",
          )}
        >
          {section.label}
        </button>
      ))}
    </nav>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24 p-4 bg-card border border-border rounded-lg">
          <NavContent />
        </div>
      </aside>

      {/* Mobile Floating Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button size="lg" className="rounded-full shadow-lg bg-accent hover:bg-accent/90 text-accent-foreground">
              <Menu className="h-5 w-5 mr-2" />
              Navigation
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <div className="mt-8">
              <NavContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
