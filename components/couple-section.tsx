import { Card, CardContent } from "@/components/ui/card"
import { Heart, Cake } from "lucide-react"

export function CoupleSection() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-card-foreground mb-4">Cô Dâu & Chú Rể</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hai trái tim đã tìm thấy nhau và sẽ cùng bước vào hành trình mới của cuộc đời
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Bride */}
          <Card className="text-center group hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="mb-6">
                <img
                  src="/NvanWeddingCard/elegant-vietnamese-bride-portrait-traditional-ao-d.jpg"
                  alt="Cô dâu Nguyễn Thị Bích Ngọc"
                  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-card-foreground mb-2">Nguyễn Thị Bích Ngọc</h3>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                <Cake className="w-4 h-4" />
                <span>22/05/2002</span>
              </div>
              <p className="text-card-foreground text-pretty">
                Cô gái xinh đẹp, dịu dàng với nụ cười tỏa nắng. Ngọc luôn mang đến niềm vui và sự ấm áp cho mọi người
                xung quanh.
              </p>
            </CardContent>
          </Card>

          {/* Groom */}
          <Card className="text-center group hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="mb-6">
                <img
                  src="/NvanWeddingCard/handsome-vietnamese-groom-portrait-formal-suit.jpg"
                  alt="Chú rể Nguyễn Văn An"
                  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-card-foreground mb-2">Nguyễn Văn An</h3>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                <Cake className="w-4 h-4" />
                <span>20/08/1997</span>
              </div>
              <p className="text-card-foreground text-pretty">
                Chàng trai chín chắn, có trách nhiệm với tình yêu chân thành. An luôn là điểm tựa vững chắc cho gia
                đình.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
