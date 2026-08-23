import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Microscope, Shield, Globe, ArrowRight, CheckCircle, Users, Award, FlaskConical, Pill, Leaf, MapPin, Building2 } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Globe,
      color: "#0072EC",
      bg: "#EFF6FF",
      title: "Expanding Access",
      description: "Making our medicines accessible to patients and communities across Nigeria, so quality of care is never limited by geography or income.",
    },
    {
      icon: FlaskConical,
      color: "#00B5A2",
      bg: "#F0FDF4",
      title: "Driving Innovation",
      description: "Seeking and adopting advanced treatments that bring tomorrow's healthcare standards within reach of Nigerian patients today.",
    },
    {
      icon: Users,
      color: "#9333ea",
      bg: "#F3E8FF",
      title: "Building Partnerships",
      description: "Working closely with healthcare providers, patients, pharmacists, and stakeholders to shape solutions around real health needs.",
    },
    {
      icon: Shield,
      color: "#059669",
      bg: "#F0FDF4",
      title: "Upholding Our Values",
      description: "Acting with integrity, accountability, and quality in everything we do, so that trust defines every partnership we build.",
    },
    {
      icon: Heart,
      color: "#e11d48",
      bg: "#FFF1F2",
      title: "Empowering Communities",
      description: "Supporting the communities we serve with health education, awareness, and access to quality pharmaceutical care.",
    },
    {
      icon: Award,
      color: "#d97706",
      bg: "#FEF3C7",
      title: "International Standards",
      description: "Partnering with quality-certified manufacturing facilities to bring globally tested medicines to Nigerian patients.",
    },
  ];

  const milestones = [
    { year: "2025", event: "365Biopharma Limited incorporated and headquartered in Lagos, Nigeria." },
    { year: "2025", event: "First prescription portfolio established — Xydap® (Dapagliflozin) and Peqlis® (Apixaban) licensed for distribution." },
    { year: "2025", event: "vitalEssentials OTC range launched — Fatigue & Recovery, Wellness & Immunity, and Appetite & Growth." },
    { year: "2025", event: "Distribution network established across major Nigerian cities including Lagos and Abuja." },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-primary to-brand-teal">
        <div className="absolute top-[-80px] right-[-80px] w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute bottom-[-40px] left-[-40px] w-64 h-64 rounded-full bg-white/5 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-3">365Biopharma Limited</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 max-w-3xl leading-tight">
            Nigeria's Next-Generation Pharmaceutical Company
          </h1>
          <p className="text-lg text-white/70 max-w-xl leading-relaxed">
            Founded in 2025 and headquartered in Lagos, we bring trusted prescription and wellness medicines to Nigerian patients, families, and healthcare providers — today.
          </p>
        </div>
      </section>

      {/* ── MISSION / VISION ──────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-teal mb-4">Who We Are</p>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 leading-tight mb-6">
                Built on a Simple Belief: Quality Healthcare for Every Nigerian
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-[17px]">
                365Biopharma Limited was founded on a simple belief: that quality healthcare should be accessible, dependable, and close to the people who need it most. We manage every aspect of our value chain — quality assurance, regulatory compliance, distribution, marketing, and patient support — right here in Nigeria.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-[17px]">
                Our tagline, <strong className="text-gray-900">"Tomorrow's Medicine Today"</strong>, reflects our commitment to making forward-looking, high-quality treatments available to Nigerian patients now — not someday.
              </p>

              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6 space-y-5 mb-8">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1.5">Our Vision</div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    To be Nigeria's most trusted pharmaceutical company — bringing tomorrow's treatments within reach of every patient, today.
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-1.5">Our Mission</div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    To deliver innovative, integrated health solutions that improve quality of life at every stage of the health journey — from specialist prescription care to everyday family wellness.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Specialist prescription therapies for Cardiology, Nephrology & Endocrinology",
                  "OTC wellness products for adults and children under the vitalEssentials brand",
                  "Rigorous quality assurance and full regulatory compliance in Nigeria",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand facts card — replaces stock photo */}
            <div className="rounded-3xl bg-gradient-to-br from-[#002a5c] via-brand-navy to-brand-primary p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-navy font-bold text-sm font-heading">365</span>
                </div>
                <div>
                  <div className="text-white font-bold font-heading text-base leading-tight">365Biopharma Limited</div>
                  <div className="text-brand-cyan text-[10px] font-bold uppercase tracking-widest">Tomorrow's Medicine Today</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { icon: Building2, label: "Founded", value: "2025", accent: "#33D4F2" },
                  { icon: MapPin, label: "Headquarters", value: "Lagos, NG", accent: "#33D4F2" },
                  { icon: Pill, label: "Rx Products", value: "Xydap® · Peqlis®", accent: "#f87171" },
                  { icon: Leaf, label: "OTC Range", value: "vitalEssentials", accent: "#4ade80" },
                  { icon: Globe, label: "Cities", value: "5 & Growing", accent: "#a78bfa" },
                  { icon: Shield, label: "Standard", value: "Int'l Quality GMP", accent: "#fbbf24" },
                ].map(({ icon: Icon, label, value, accent }) => (
                  <div key={label} className="bg-white/8 border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Icon className="h-3.5 w-3.5 flex-shrink-0" style={{ color: accent }} />
                      <span className="text-white/40 text-[10px] uppercase tracking-widest font-semibold">{label}</span>
                    </div>
                    <div className="text-white font-semibold text-sm leading-tight">{value}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="text-white/50 text-xs leading-relaxed italic">
                  "To be Nigeria's most trusted pharmaceutical company — bringing tomorrow's treatments within reach of every patient, today."
                </p>
                <div className="text-white/30 text-[10px] mt-2 font-semibold uppercase tracking-widest">Our Vision</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER'S NOTE ────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="rounded-3xl bg-white border border-gray-100 shadow-sm p-10">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-primary mb-6">Founder's Note</p>
            <blockquote className="text-xl sm:text-2xl font-medium text-gray-800 leading-[1.6] italic mb-6">
              "We started 365Biopharma because we saw a gap — between the quality of care available in global markets, and what Nigerian patients could realistically access. We're here to close that gap, one medicine at a time."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold text-sm font-heading">
                BA
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Banjo Ayanwola</div>
                <div className="text-gray-400 text-xs">Founder & CEO, 365Biopharma Limited</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-teal mb-3">Our Commitments</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition-all duration-300">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-5" style={{ background: v.bg }}>
                  <v.icon className="h-6 w-6" style={{ color: v.color }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ───────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-primary mb-3">Timeline</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900">Our Journey</h2>
          </div>

          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brand-primary flex items-center justify-center text-white font-bold font-heading text-sm">
                  {m.year}
                </div>
                <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                  <p className="text-gray-700 text-[15px] leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brand-cyan/20 border-2 border-dashed border-brand-primary flex items-center justify-center text-brand-primary font-bold font-heading text-sm">
                Next
              </div>
              <div className="flex-1 bg-white rounded-2xl border border-dashed border-gray-200 p-5">
                <p className="text-gray-400 text-[15px] leading-relaxed italic">
                  Expanding our prescription portfolio and distribution to additional cities across Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-cyan mb-3">Healthcare Providers · Pharmacies · Partners</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
            Partner With Us in Health
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed max-w-xl mx-auto">
            Whether you're a healthcare provider looking to partner, a pharmacy seeking to stock our products, or an organisation that shares our mission — we'd love to connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-brand-cyan text-brand-navy hover:bg-white font-semibold rounded-xl px-8">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="rounded-xl px-8 border-white/30 text-white hover:bg-white/10 bg-transparent font-semibold">
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
