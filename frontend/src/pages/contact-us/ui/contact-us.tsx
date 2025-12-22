import { ContactFormSection } from "./components/contact-form";
import { ContactInfoSection } from "./components/contact-info";
import { CTASection } from "./components/cta";
import { HeroSection } from "./components/hero";

export const ContactPage = () => (
  <div className="min-h-screen bg-slate-950">
    {/* Hero Section */}
    <HeroSection />

    {/* Contact Info Cards */}
    <ContactInfoSection />

    {/* Contact Form & Support */}
    <ContactFormSection />

    {/* CTA Section */}
    <CTASection />
  </div>
);
