import { Card, CardContent } from "@/components/ui/card"
import { Heart, Syringe as Ring, Calendar } from "lucide-react"

export function TimelineSection() {
  const timelineEvents = [
    {
      icon: Heart,
      title: "Ngày Tỏ Tình",
      date: "20/12/2024",
      description: "Ngày An dành tặng Ngọc những lời yêu thương đầu tiên và chúng tôi chính thức bên nhau.",
    },
    {
      icon: Ring,
      title: "Ngày Cầu Hôn",
      date: "01/08/2025",
      description: "Khoảnh khắc thiêng liêng khi An quỳ gối cầu hôn Ngọc với chiếc nhẫn định tình.",
    },
    {
      icon: Calendar,
      title: "Ngày Cưới",
      date: "30/11/2025",
      description:
        "Ngày trọng đại nhất khi chúng tôi chính thức trở thành vợ chồng trước sự chứng kiến của gia đình và bạn bè.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">Hành Trình Tình Yêu</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Những khoảnh khắc đáng nhớ trong chuyện tình yêu của chúng tôi
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line md:block hidden" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}
                >
                  <div className={`w-full md:w-5/12 ${isEven ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="group hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="font-playfair text-xl font-bold text-foreground">{event.title}</h3>
                            <p className="text-primary font-semibold">{event.date}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-pretty">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10 md:block hidden" />

                  <div className="w-full md:w-5/12" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
