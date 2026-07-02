"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "26771868598";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello WhatsApp AI Botswana. I would like to know more about your AI WhatsApp Assistant for my business."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjkdplo";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Success Stories" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  { value: "24/7", label: "Support", desc: "Always-on replies for your customers" },
  { value: "90%", label: "Faster Responses", desc: "Instant answers, no waiting" },
  { value: "3x", label: "More Leads", desc: "Capture every WhatsApp enquiry" },
];

const features = [
  {
    title: "AI Customer Support",
    desc: "Provide instant answers to customer questions any time of the day.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
  },
  {
    title: "Lead Capture",
    desc: "Automatically collect customer details and generate new sales opportunities.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    ),
  },
  {
    title: "Appointment Booking",
    desc: "Allow customers to schedule appointments directly through WhatsApp.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "Product & Order Assistance",
    desc: "Help customers browse products, place orders, and receive updates.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    ),
  },
  {
    title: "Frequently Asked Questions",
    desc: "Answer common questions automatically without human intervention.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Business Analytics",
    desc: "Track enquiries, customer interactions, and business performance.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
  },
];

const aboutHighlights = [
  {
    title: "Save Time",
    desc: "Automate repetitive conversations so your team can focus on what matters most.",
  },
  {
    title: "Better Service",
    desc: "Improve customer service with instant, intelligent replies around the clock.",
  },
  {
    title: "More Leads",
    desc: "Generate new sales opportunities by capturing every WhatsApp enquiry.",
  },
  {
    title: "Increase Sales",
    desc: "Grow revenue through smart WhatsApp automation built for your business.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "499",
    period: "/month",
    desc: "",
    features: [
      "AI Replies",
      "FAQ Automation",
      "WhatsApp Support",
      "Business Hours Setup",
    ],
    cta: "Get Started",
    highlighted: false,
    isCustom: false,
  },
  {
    name: "Business",
    price: "999",
    period: "/month",
    desc: "",
    features: [
      "Everything in Starter",
      "Lead Capture",
      "Appointment Booking",
      "Product Catalogue",
      "Priority Support",
    ],
    cta: "Get Started",
    highlighted: true,
    isCustom: false,
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    period: "",
    desc: "",
    features: [
      "Multiple WhatsApp Numbers",
      "CRM Integration",
      "API Integration",
      "Dedicated Support",
      "Custom AI Training",
    ],
    cta: "Contact Sales",
    highlighted: false,
    isCustom: true,
  },
];

const faqs = [
  {
    q: "Do my customers need to install anything?",
    a: "No. They message your existing WhatsApp Business number—the same way they already chat with you.",
  },
  {
    q: "Can the AI reply in Setswana?",
    a: "Yes. We train your assistant on your preferred languages, including English and Setswana, so replies feel natural.",
  },
  {
    q: "How long does setup take?",
    a: "Most Botswana businesses go live within 3–5 business days after we gather your FAQs, catalogue, and business rules.",
  },
  {
    q: "Is it compliant with WhatsApp policies?",
    a: "We use the official WhatsApp Business API and follow Meta's messaging and opt-in guidelines to keep your account safe.",
  },
  {
    q: "Can I take over a conversation manually?",
    a: "Absolutely. You or your team can jump into any chat at any time—the AI pauses until you hand it back.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfer, card payments, and mobile money options popular in Botswana. All plans are billed in BWP (Pula).",
  },
];

function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-emerald-200/80 bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#128C7E] shadow-sm">
      {children}
    </span>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-emerald-600 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const inputClass =
  "mt-1.5 w-full rounded-xl border border-gray-200/80 bg-white px-4 py-3 text-gray-900 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-[#25D366] focus:outline-none focus:ring-2 focus:ring-[#25D366]/25 hover:border-emerald-200";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: new FormData(e.currentTarget),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setFormStatus("success");
      setFormData({ name: "", business: "", phone: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 5000);
    } else {
      setFormStatus("idle");
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f0fdf4] text-gray-900">
      {/* Premium gradient mesh */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/25 via-[#dcf8c6]/10 to-[#075E54]/30" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23128C7E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full bg-[#25D366]/35 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-[450px] w-[450px] rounded-full bg-[#128C7E]/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-[400px] w-[400px] rounded-full bg-[#075E54]/25 blur-3xl" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/30 bg-white/75 shadow-sm shadow-emerald-900/5 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="group flex items-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-lg shadow-emerald-500/35 transition-all duration-300 group-hover:scale-105 group-hover:shadow-emerald-500/50">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold tracking-tight text-gray-900">
              WhatsApp AI<span className="text-[#128C7E]">Botswana</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-gray-600 transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#25D366] after:transition-all after:duration-300 hover:text-[#128C7E] hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/45"
            >
              Get Started
            </a>
          </div>

          <button
            type="button"
            className="rounded-xl p-2 text-gray-700 transition-colors hover:bg-emerald-50 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-white/30 bg-white/95 px-4 py-4 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-emerald-50 hover:text-[#128C7E]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-5 py-3 text-center text-sm font-semibold text-white shadow-md"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="relative px-4 pt-20 pb-24 sm:px-6 lg:px-8 lg:pt-28 lg:pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/90 px-4 py-2 text-sm font-medium text-[#128C7E] shadow-sm backdrop-blur transition-all duration-300 hover:border-emerald-300 hover:shadow-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
                </span>
                Trusted by Botswana Businesses
              </span>
              <h1 className="mt-8 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Transform Your Business with{" "}
                <span className="bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#075E54] bg-clip-text text-transparent">
                  AI-Powered WhatsApp Automation
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed tracking-normal text-gray-600">
                Serve customers 24/7, capture more leads, automate repetitive conversations, and grow
                your business with an intelligent WhatsApp assistant built for Botswana.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/50 active:scale-[0.98]"
                >
                  Get Started
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border-2 border-[#128C7E]/25 bg-white/90 px-8 py-4 text-base font-semibold text-[#128C7E] shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#128C7E] hover:bg-white hover:shadow-lg active:scale-[0.98]"
                >
                  Book a Free Demo
                </a>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-emerald-100/80 pt-8">
                <p className="text-sm font-medium text-gray-500">Serving businesses in</p>
                {["Gaborone", "Francistown", "Maun", "Kasane"].map((city) => (
                  <span
                    key={city}
                    className="rounded-lg bg-white/80 px-3 py-1 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:bg-white hover:shadow-md"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#25D366]/50 to-[#075E54]/40 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/95 p-6 shadow-2xl shadow-emerald-900/15 backdrop-blur transition-all duration-500 hover:scale-[1.02] hover:shadow-emerald-500/20">
                <div className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-md">
                    <WhatsAppIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Your Business</p>
                    <p className="text-xs font-medium text-[#25D366]">● Online · AI Assistant active</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#dcf8c6] px-4 py-3 text-gray-800 shadow-sm">
                    Do you deliver to Block 8, Gaborone?
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-gray-50 px-4 py-3 text-gray-800">
                    Yes! We deliver to Block 8. Orders over P500 qualify for free delivery. Would you
                    like to place an order today?
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#dcf8c6] px-4 py-3 text-gray-800 shadow-sm">
                    Perfect. I&apos;ll take 2 boxes please.
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-gray-50 px-4 py-3 text-gray-800">
                    Great! I&apos;ve noted 2 boxes. A team member will confirm payment details shortly. 🙏
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-8 text-center shadow-lg shadow-emerald-900/5 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-[#25D366]/50 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/0 to-[#128C7E]/0 transition-all duration-300 group-hover:from-[#25D366]/5 group-hover:to-[#128C7E]/10" />
                <p className="relative text-4xl font-extrabold bg-gradient-to-r from-[#25D366] to-[#075E54] bg-clip-text text-transparent sm:text-5xl">
                  {stat.value}
                </p>
                <p className="relative mt-2 text-lg font-bold text-gray-900">{stat.label}</p>
                <p className="relative mt-1 text-sm text-gray-500">{stat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <SectionBadge>Services</SectionBadge>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Powerful WhatsApp automation for your business
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
                Everything you need to automate customer conversations and grow with confidence.
              </p>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-white/70 bg-white/85 p-7 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-[#25D366]/40 hover:shadow-xl hover:shadow-emerald-500/15 active:scale-[0.99]"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100 text-[#128C7E] shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:from-[#25D366]/20 group-hover:to-[#128C7E]/20">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      {feature.icon}
                    </svg>
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-[#128C7E] via-[#0d7a6e] to-[#075E54] p-8 shadow-2xl shadow-emerald-900/25 sm:p-12 lg:p-16">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <SectionBadge>About Us</SectionBadge>
                  <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    About WhatsApp AI Botswana
                  </h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-emerald-100 sm:text-lg">
                    <p>
                      WhatsApp AI Botswana helps businesses automate customer conversations using
                      artificial intelligence.
                    </p>
                    <p>
                      Our mission is to help businesses save time, improve customer service, generate
                      more leads, and increase sales through smart WhatsApp automation.
                    </p>
                    <p>
                      Whether you&apos;re a retailer, clinic, restaurant, lodge, school, or service
                      provider, we build AI assistants that work for your business 24 hours a day.
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#075E54] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
                  >
                    Book a Free Demo
                  </a>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {aboutHighlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-lg active:scale-[0.99]"
                    >
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-emerald-100">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section id="testimonials" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <SectionBadge>Success Stories</SectionBadge>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Building Success Stories
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We&apos;re currently partnering with our first Botswana businesses.
              </p>
              <p className="mt-3 text-lg leading-relaxed text-gray-600">
                Your business could be the next success story featured here.
              </p>
            </div>
            <div className="mt-12 rounded-2xl border border-white/70 bg-white/95 p-10 text-center shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/15 sm:p-12">
              <a
                href="#contact"
                className="inline-flex rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
              >
                Book a Free Demo
              </a>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <SectionBadge>Pricing</SectionBadge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Simple pricing in Pula
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Transparent plans. No hidden fees. Cancel anytime.
              </p>
            </div>
            <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-center">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
                    plan.highlighted
                      ? "z-10 scale-[1.02] border-[#25D366] bg-gradient-to-b from-white to-emerald-50/90 shadow-2xl shadow-emerald-500/25 lg:scale-105"
                      : "border-white/70 bg-white/95 shadow-lg hover:shadow-xl"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-5 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mt-6">
                    {plan.isCustom ? (
                      <span className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        {plan.price}
                      </span>
                    ) : (
                      <>
                        <span className="text-sm font-semibold text-gray-500">P</span>
                        <span className="text-4xl font-extrabold tracking-tight text-gray-900">{plan.price}</span>
                        <span className="text-gray-500">{plan.period}</span>
                      </>
                    )}
                  </p>
                  <ul className="mt-8 flex-1 space-y-3.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <svg
                          className="mt-0.5 h-5 w-5 shrink-0 text-[#25D366]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.isCustom ? "#contact" : WHATSAPP_URL}
                    target={plan.isCustom ? undefined : "_blank"}
                    rel={plan.isCustom ? undefined : "noopener noreferrer"}
                    className={`mt-8 block rounded-full py-3.5 text-center text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-md hover:shadow-lg"
                        : "border-2 border-[#128C7E]/30 text-[#128C7E] hover:border-[#128C7E] hover:bg-emerald-50"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <SectionBadge>FAQ</SectionBadge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Everything you need to know before getting started.
              </p>
            </div>
            <div className="mt-12 space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-white/70 bg-white/95 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-md"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-emerald-50/50"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-gray-900">{faq.q}</span>
                    <ChevronDown open={openFaq === i} />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      openFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 leading-relaxed text-gray-600">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
              <div>
                <SectionBadge>Contact</SectionBadge>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Contact us
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Tell us about your business and we&apos;ll show you how WhatsApp AI Botswana can
                  help you grow. We typically respond within one business day.
                </p>
                <div className="mt-10 space-y-5">
                  <p className="flex items-center gap-4 text-gray-700">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-[#128C7E]">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    +267 71868598
                  </p>
                  <p className="flex items-center gap-4 text-gray-700">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-[#128C7E]">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    mothofelab@gmail.com
                  </p>
                  <p className="flex items-center gap-4 text-gray-700">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-[#128C7E]">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    Gaborone, Botswana
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Message us on WhatsApp
                  </a>
                </div>
              </div>

              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/70 bg-white/95 p-8 shadow-xl backdrop-blur sm:p-10"
              >
                {formStatus === "success" && (
                  <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
                    Thank you! We have received your message and will contact you soon.
                  </div>
                )}
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClass}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-semibold text-gray-700">
                      Business Name
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      required
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className={inputClass}
                      placeholder="Your company or shop"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClass}
                        placeholder="+267 ..."
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass}
                        placeholder="you@business.co.bw"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your business and goals..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="mt-7 w-full rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/45 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#075E54] px-8 py-16 text-center shadow-2xl shadow-emerald-900/25 sm:px-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-10"
              aria-hidden
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "24px 24px",
              }}
            />
            <h2 className="relative text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Automate Your Business?
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-emerald-100">
              Let AI handle your customer conversations while you focus on growing your business.
            </p>
            <div className="relative mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#075E54] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98]"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-100/80 bg-white/85 px-4 py-14 backdrop-blur sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-md">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <span className="text-lg font-bold text-gray-900">WhatsApp AI Botswana</span>
              </a>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600">
                Automating Business Conversations.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-gray-600">
                <li>📍 Gaborone, Botswana</li>
                <li>
                  📞{" "}
                  <a href="tel:+26771868598" className="transition-colors hover:text-[#128C7E]">
                    +267 71868598
                  </a>
                </li>
                <li>
                  ✉️{" "}
                  <a href="mailto:mothofelab@gmail.com" className="transition-colors hover:text-[#128C7E]">
                    mothofelab@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Quick Links</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-gray-600">
                <li><a href="#features" className="transition-colors hover:text-[#128C7E]">Services</a></li>
                <li><a href="#pricing" className="transition-colors hover:text-[#128C7E]">Pricing</a></li>
                <li><a href="#about" className="transition-colors hover:text-[#128C7E]">About</a></li>
                <li><a href="#contact" className="transition-colors hover:text-[#128C7E]">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-100 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2026 WhatsApp AI Botswana. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-xl shadow-emerald-500/40 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/55"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20 group-hover:opacity-30" />
        <WhatsAppIcon className="relative h-8 w-8" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block">
          Chat with us
        </span>
      </a>
    </div>
  );
}
