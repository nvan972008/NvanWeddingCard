import { Heart, Instagram, Facebook, Phone } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="font-playfair text-2xl font-bold mb-2">
            Ngọc <span className="text-primary">&</span> An
          </h3>
          <p className="text-muted-foreground">30 • 11 • 2025</p>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-primary transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="tel:0123456789" className="hover:text-primary transition-colors">
            <Phone className="w-6 h-6" />
          </a>
        </div>

        <div className="border-t border-muted pt-8">
          <p className="text-sm text-muted-foreground">
            © 2025 Ngọc & An Wedding. Được tạo với ❤️ cho ngày trọng đại của chúng tôi.
          </p>
        </div>
      </div>
    </footer>
  )
}
