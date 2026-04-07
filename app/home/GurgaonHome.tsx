import Slideshow from "@/app/components/Slideshow";
import ContentSections from "@/app/components/ContentSections";
import VisionMission from "@/app/components/VisionMission";
import WhyChooseLNC from "@/app/components/WhyChooseLNC";
import ClientReview from '@/app/components/ClientReview';
import Footer from "@/app/components/Footer";


export default function GurgaonHome() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Slideshow />
      <ContentSections />
      <VisionMission />
      <WhyChooseLNC />
      <ClientReview />
      <Footer />
    </div>
  );
}
