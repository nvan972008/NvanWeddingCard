"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

export function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    attendance: "",
    guests: "1",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("RSVP submitted:", formData)
    alert("Cảm ơn bạn đã xác nhận tham dự!")
  }

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-card-foreground mb-4">Thông Tin Đám Cưới</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Chúng tôi rất mong được đón tiếp bạn trong ngày trọng đại này
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Wedding Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-card-foreground">
                  <MapPin className="w-6 h-6 text-primary" />
                  Địa Điểm Tổ Chức
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">Nhà Hàng Tiệc Cưới Hoàng Gia</h3>
                <p className="text-muted-foreground mb-4">123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh</p>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/elegant-wedding-venue-reception-hall-vietnam.jpg"
                    alt="Địa điểm tổ chức đám cưới"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-card-foreground">
                  <Clock className="w-6 h-6 text-primary" />
                  Thời Gian
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Lễ Vu Quy</h4>
                  <p className="text-muted-foreground">8:00 AM - Tại nhà cô dâu</p>
                </div>
                <div>
                  <h4 className="font-semibold">Lễ Thành Hôn</h4>
                  <p className="text-muted-foreground">11:00 AM - Tại nhà chú rể</p>
                </div>
                <div>
                  <h4 className="font-semibold">Tiệc Cưới</h4>
                  <p className="text-muted-foreground">6:00 PM - Nhà hàng Hoàng Gia</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-card-foreground">
                  <Phone className="w-6 h-6 text-primary" />
                  Liên Hệ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>Chú rể: 0123 456 789</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>Cô dâu: 0987 654 321</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>wedding@ngocvan.com</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RSVP Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-card-foreground">Xác Nhận Tham Dự</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Họ và Tên *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Số Điện Thoại *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <Label>Bạn có thể tham dự không? *</Label>
                  <RadioGroup
                    value={formData.attendance}
                    onValueChange={(value) => setFormData({ ...formData, attendance: value })}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes">Có, tôi sẽ tham dự</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no">Rất tiếc, tôi không thể tham dự</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="guests">Số lượng khách</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="10"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="message">Lời chúc</Label>
                  <Textarea
                    id="message"
                    placeholder="Gửi lời chúc đến cô dâu chú rể..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Gửi Xác Nhận
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
