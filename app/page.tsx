import { HeroSection } from "@/components/hero-section"
import { TimelineSection } from "@/components/timeline-section"
import { CoupleSection } from "@/components/couple-section"
import { RSVPSection } from "@/components/rsvp-section"
import { FooterSection } from "@/components/footer-section"
import { Navigation } from "@/components/navigation"

export default function WeddingPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <CoupleSection />
        <TimelineSection />
        <RSVPSection />
        <FooterSection />
      </main>
    </>
  )
}
