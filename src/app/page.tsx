"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="medium"
      background="gradientBars"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="SaaS Pro"
          button={{
            text: "Get Started",
            href: "pricing"
          }}
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Build Faster. Scale Smarter. Win Bigger."
          description="The all-in-one SaaS platform designed to streamline your business operations and accelerate growth. Trusted by thousands of companies worldwide."
          tag="Launched in 2024"
          buttons={[
            { text: "Start Free Trial", href: "https://example.com/signup" },
            { text: "Watch Demo", href: "#features" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822010910-o8dnkgtd.jpg"
          imageAlt="SaaS dashboard showcase"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Powerful Features Built for Teams"
          description="Everything you need to streamline operations, collaborate seamlessly, and achieve your business goals."
          tag="Why Choose Us"
          buttons={[
            { text: "Explore Features", href: "https://example.com/features" }
          ]}
          features={[
            {
              title: "Real-Time Analytics",
              description: "Track performance metrics and gain actionable insights with live dashboards that update in real-time.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822011568-my16ndio.jpg",
              imageAlt: "Analytics dashboard"
            },
            {
              title: "Seamless Integrations",
              description: "Connect with 500+ tools and services. Our API makes it easy to build custom workflows for your team.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822012400-yn8jv3ie.jpg",
              imageAlt: "Integration platform"
            },
            {
              title: "Smart Automation",
              description: "Automate repetitive tasks and focus on what matters. Save hours every week with intelligent workflows.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822013086-16sgdewq.jpg",
              imageAlt: "Automation setup"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Simple, Transparent Pricing"
          description="Choose the plan that's right for your business. No hidden fees. Cancel anytime."
          tag="Pricing Plans"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              badge: "Starter",
              price: "$29/mo",
              subtitle: "Perfect for small teams just getting started",
              buttons: [
                { text: "Start Free Trial", href: "https://example.com/signup?plan=starter" },
                { text: "View Details", href: "#" }
              ],
              features: [
                "Up to 5 team members",
                "5 GB storage",
                "Basic analytics",
                "Email support",
                "API access"
              ]
            },
            {
              id: "professional",
              badge: "Professional",
              price: "$79/mo",
              subtitle: "Best for growing teams",
              buttons: [
                { text: "Start Free Trial", href: "https://example.com/signup?plan=professional" },
                { text: "View Details", href: "#" }
              ],
              features: [
                "Up to 25 team members",
                "100 GB storage",
                "Advanced analytics",
                "Priority support",
                "Custom integrations",
                "Automation workflows"
              ]
            },
            {
              id: "enterprise",
              badge: "Enterprise",
              price: "Custom",
              subtitle: "For large-scale operations",
              buttons: [
                { text: "Contact Sales", href: "https://example.com/contact" },
                { text: "Schedule Demo", href: "#" }
              ],
              features: [
                "Unlimited team members",
                "Unlimited storage",
                "Advanced analytics & reporting",
                "24/7 dedicated support",
                "Custom development",
                "SSO & security features",
                "SLA guarantee"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Loved by Companies Around the World"
          description="See what teams are saying about how SaaS Pro transformed their business."
          tag="Customer Reviews"
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              testimonial: "SaaS Pro completely transformed how our team collaborates. We cut our operational costs by 40% in the first quarter alone.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822013902-qgvmwyx6.png",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO",
              testimonial: "The integration capabilities are outstanding. We connected 15+ tools seamlessly and automated 80% of our workflows.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822014844-h5bhl5ho.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Marketing Director",
              testimonial: "The analytics dashboard gives us real-time insights we need to make better decisions. It's a game-changer for our marketing strategy.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822015888-5ij34e10.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Product Manager",
              testimonial: "Amazing support team and incredibly intuitive interface. We were up and running in just 2 days. Highly recommended!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822016830-2vlpb651.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              name: "Jessica Turner",
              role: "Operations Lead",
              testimonial: "The automation features saved us hundreds of hours. Our team can now focus on strategic initiatives instead of manual tasks.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822017343-l4d9ivm4.jpg",
              imageAlt: "Jessica Turner"
            },
            {
              id: "6",
              name: "Robert Martinez",
              role: "Business Analyst",
              testimonial: "Best investment we've made this year. ROI was immediate, and the platform scales perfectly as our business grows.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822018031-2cr9nkuw.jpg",
              imageAlt: "Robert Martinez"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join thousands of companies that trust SaaS Pro to power their business"
          tag="Our Partners"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822018694-2lu541ke.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822019762-c39vmgrm.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822020336-y2lubkxs.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822020934-jmdfzjrn.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822021629-ekzv4vdj.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822022273-lpm6jkax.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822022953-kvu5cnzk.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763822023446-6hkmqkhc.jpg"
          ]}
          speed={50}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about SaaS Pro. Can't find what you're looking for? Contact our support team."
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards, including Visa, Mastercard, and American Express. We also offer annual billing with a 20% discount."
            },
            {
              id: "2",
              title: "Can I upgrade or downgrade my plan?",
              content: "Yes, you can change your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
            },
            {
              id: "3",
              title: "Do you offer a free trial?",
              content: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to get started."
            },
            {
              id: "4",
              title: "What support options are available?",
              content: "We offer email support for all plans, with priority support for Professional and Enterprise customers. Enterprise customers get 24/7 dedicated support."
            },
            {
              id: "5",
              title: "Is my data secure?",
              content: "We use industry-leading encryption and security protocols. All data is stored in secure data centers with regular backups and compliance certifications."
            },
            {
              id: "6",
              title: "Can I integrate SaaS Pro with other tools?",
              content: "Yes! We support 500+ integrations with popular business tools. We also offer a robust API for custom integrations."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get Started Today"
          description="Have questions? Our team is ready to help. Fill out the form below and we'll get back to you within 24 hours."
          inputs={[
            { name: "fullName", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Work Email", required: true },
            { name: "company", type: "text", placeholder: "Company Name", required: false },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your needs and how we can help...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="SaaS Pro"
          copyrightText="© 2024 SaaS Pro. All rights reserved."
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Security", href: "#" },
                { label: "Roadmap", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Documentation", href: "#" },
                { label: "API Reference", href: "#" },
                { label: "Support", href: "#" },
                { label: "Status", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}