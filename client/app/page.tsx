import Consultation from "@/components/Consultation";
import DocumentsRequired from "@/components/DocumentsRequired";
import FAQSection from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OneRoofSection from "@/components/OneRoofSection";
import TestimonialTimeline from "@/components/Testimonial";
import TrademarkBenefitsFluid from "@/components/TrademarkBenefits";
import TrademarkProcessTimeline from "@/components/TrademarkProcessTimeline";
import TrustBadges from "@/components/TrustBadge";
import WhoWeAre from "@/components/WhoWeAre";
import WhyTrademark from "@/components/WhyTrademark";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TrustBadges />
      <WhyTrademark />
      <TrademarkBenefitsFluid />
      <TrademarkProcessTimeline />
      <DocumentsRequired />
      <OneRoofSection />
      <WhoWeAre />
      <TestimonialTimeline />
      <FAQSection />
      <Consultation />
      <Footer />
    </div>
  );
}
