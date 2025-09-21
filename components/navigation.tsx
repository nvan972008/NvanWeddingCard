"use client"

import { useState } from "react"
import { Heart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "CẶP ĐÔI", href: "#couple" },
    { label: "CHUYỆN TÌNH YÊU", href: "#timeline" },
    { label: "SỰ KIỆN CƯỚI", href: "#event" },
    { label: "PHÙ DÂU & PHÙ RỂ", href: "#wedding-party" },
    { label: "ALBUM HÌNH CƯỚI", href: "#gallery" },
    { label: "SỔ LƯU BÚT", href: "#guestbook" },
    { label: "MỪNG CƯỚI", href: "#gift" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-pink-500" />
            <span className="font-playfair text-xl font-bold text-gray-800">
              N <span className="text-pink-500">&</span> A
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-pink-100">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
