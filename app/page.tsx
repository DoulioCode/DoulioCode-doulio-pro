import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageViewTracker } from "@/components/PageViewTracker";
import { ProVideo } from "@/components/ProVideo";
import { BecomeADoula } from "@/components/BecomeADoula";
import { FitFinder } from "@/components/FitFinder";
import { Hero, TrustStrip } from "@/components/Hero";
import {
  ClosingCta,
  Faq,
  FeatureTiles,
  MoreFeatures,
  Pricing,
  Testimonials,
} from "@/components/ProSections";
import { GrowthJourney } from "@/components/GrowthSections";

export default function DoulioProPage() {
  return (
    <>
      <PageViewTracker />
      <SiteNav />
      <main className="overflow-hidden">
        <Hero />
        <TrustStrip />
        <ProVideo />
        <FeatureTiles />
        <Testimonials />
        <GrowthJourney />
        <MoreFeatures />
        <Pricing />
        <FitFinder />
        <BecomeADoula />
        <Faq />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
