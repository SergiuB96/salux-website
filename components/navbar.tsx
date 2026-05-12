"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Acasă", href: "/" },
    { label: "Funcționalități", href: "/#features" },
    { label: "Prețuri", href: "/#pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="bg-white rounded-xl px-3 py-1.5">
              <Image
                src="/salux_logo.png"
                alt="SALUX"
                width={100}
                height={36}
                className="h-8 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <Link
                    href={link.href}
                    className="font-normal text-base text-muted-foreground hidden lg:inline hover:text-primary px-3 py-2 transition-colors"
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="https://app.salux.ro/login.php" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="border-primary/40 text-primary hover:bg-primary/10 rounded-full px-5"
              >
                Autentificare
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6"
              >
                Solicită Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors text-foreground"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-card/80 backdrop-blur-md border-t border-primary/20 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-3 flex gap-2">
              <Link href="/contact" className="flex-1">
                <Button size="sm" className="w-full bg-primary text-primary-foreground rounded-full font-semibold">
                  Solicită Demo
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
