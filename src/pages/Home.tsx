import { ArrowRight, Shield, Award, Globe, CheckCircle, FlaskConical, Building2, Pill, Leaf, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import ultraWomenImg from "@/assets/ProductDetails/UltraWomen/UltraWomen BoxBottle.png";
import ultraMenImg from "@/assets/ProductDetails/UltraMen/UltraMen BoxBottle.png";
import ultraKidzImg from "@/assets/ProductDetails/UltraKidz/UltraKidz BoxBottle.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#002a5c] via-brand-navy to-brand-primary" style={{ minHeight: "88vh" }}>
        <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute bottom-[-60px] left-[-60px] w-72 h-72 rounded-full bg-white/5 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" style={{ minHeight: "88vh" }}>
          {/* Text */}
          <div className="py-16 lg:py-0">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-6 bg-white/10 text-brand-cyan">
              Lagos, Nigeria · Established 2025
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white leading-[1.1] mb-4">
              Tomorrow's Medicine<br />
              <span className="text-brand-cyan">Today.</span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
              365Biopharma Limited is a Lagos-based pharmaceutical company delivering trusted prescription and everyday wellness medicines to families and healthcare providers across Nigeria.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="rounded-xl px-8 font-semibold bg-brand-cyan text-brand-navy hover:bg-white">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/stories">
                <Button size="lg" variant="outline" className="rounded-xl px-8 font-semibold border-white/30 text-white hover:bg-white/10 bg-transparent">
                  Read Our Story
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero visual — designed panel, no stock photo */}
          <div className="hidden lg:flex flex-col gap-4 py-12">

            {/* Prescription drugs row */}
            <div className="flex gap-4">
              {[
                { brand: "Xydap®", generic: "Dapagliflozin", area: "Endocrinology · Cardiology · Nephrology", icon: Pill, accent: "#33D4F2" },
                { brand: "Peqlis®", generic: "Apixaban", area: "Cardiology", icon: Heart, accent: "#f87171" },
              ].map(({ brand, generic, area, icon: Icon, accent }) => (
                <div key={brand} className="flex-1 bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/12 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 rounded-lg flex items-center justify-center" style={{ background: `${accent}22` }}>
                      <Icon className="h-4 w-4" style={{ color: accent }} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Prescription Only</span>
                  </div>
                  <div className="text-white font-bold font-heading text-xl mb-0.5">{brand}</div>
                  <div className="text-white/40 text-xs mb-2">{generic}</div>
                  <div className="text-white/30 text-[10px] leading-relaxed">{area}</div>
                </div>
              ))}
            </div>

            {/* vitalEssentials OTC row */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-emerald-400/20 flex items-center justify-center">
                  <Leaf className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white font-bold font-heading text-sm">vitalEssentials</div>
                  <div className="text-white/40 text-[10px] uppercase tracking-widest">OTC Wellness Range</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { img: ultraWomenImg, label: "Wellness &\nImmunity", for: "Adults & Children" },
                  { img: ultraMenImg, label: "Fatigue &\nRecovery", for: "Adults" },
                  { img: ultraKidzImg, label: "Appetite &\nGrowth", for: "Children" },
                ].map(({ img, label, for: forLabel }) => (
                  <div key={label} className="flex flex-col items-center gap-2 bg-white/5 rounded-xl p-3">
                    <img src={img} alt={label} className="h-16 w-auto object-contain drop-shadow-lg" loading="eager" />
                    <div className="text-center">
                      <div className="text-white text-[11px] font-semibold leading-tight whitespace-pre-line">{label}</div>
                      <div className="text-white/30 text-[10px] mt-0.5">{forLabel}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "2", label: "Rx Products", sub: "Specialist therapies" },
                { value: "3", label: "OTC Products", sub: "Family wellness" },
                { value: "5+", label: "Cities", sub: "Nationwide" },
              ].map(({ value, label, sub }) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-brand-cyan font-bold font-heading text-2xl">{value}</div>
                  <div className="text-white text-xs font-semibold mt-0.5">{label}</div>
                  <div className="text-white/30 text-[10px]">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────────────── */}
      <section className="py-5 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {[
              { icon: Shield, label: "Quality-Assured Manufacturing Partner" },
              { icon: Building2, label: "Nigerian-Managed Distribution" },
              { icon: Award, label: "Healthcare Professional Partnerships" },
              { icon: Globe, label: "Regulatory Compliance" },
              { icon: CheckCircle, label: "International Quality Standards" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/70">
                <Icon className="h-4 w-4 text-brand-cyan" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-teal mb-4">About Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 leading-tight mb-6">
                Built on a Simple Belief
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-[17px]">
                Founded in 2025 and headquartered in Lagos, 365Biopharma Limited was built on a simple belief: that quality healthcare should be accessible, dependable, and close to the people who need it.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-[17px]">
                Our tagline, <strong className="text-gray-900">"Tomorrow's Medicine Today"</strong>, reflects our commitment to bringing forward-looking, high-quality treatments to Nigerian patients today — not someday. We manage every step of our value chain — quality assurance, regulatory compliance, distribution, marketing, and patient support — right here in Nigeria.
              </p>

              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6 mb-8">
                <div className="mb-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">Vision</div>
                  <p className="text-gray-700 text-sm leading-relaxed">To be Nigeria's most trusted pharmaceutical company — bringing tomorrow's treatments within reach of every patient, today.</p>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-1">Mission</div>
                  <p className="text-gray-700 text-sm leading-relaxed">We deliver innovative, integrated health solutions that improve quality of life at every stage of the health journey.</p>
                </div>
              </div>

              <Link to="/about">
                <Button className="bg-brand-primary hover:bg-brand-navy text-white rounded-xl px-6 font-semibold">
                  Our Full Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Globe,
                  color: "#0072EC",
                  bg: "#EFF6FF",
                  title: "Expanding Access",
                  body: "Making our medicines accessible to patients and communities across Nigeria, so quality of care is never limited by geography.",
                },
                {
                  icon: FlaskConical,
                  color: "#00B5A2",
                  bg: "#F0FDF4",
                  title: "Driving Innovation",
                  body: "Continuously seeking and adopting advanced treatments that bring tomorrow's healthcare standards into reach today.",
                },
                {
                  icon: Award,
                  color: "#9333ea",
                  bg: "#F3E8FF",
                  title: "Building Partnerships",
                  body: "Working closely with healthcare providers, patients, and stakeholders to shape solutions around real health needs.",
                },
                {
                  icon: Shield,
                  color: "#ea580c",
                  bg: "#FFF7ED",
                  title: "Upholding Our Values",
                  body: "Acting with integrity, accountability, and quality in everything we do, so that trust defines every partnership we build.",
                },
              ].map(({ icon: Icon, color, bg, title, body }) => (
                <div key={title} className="flex gap-4 items-start p-5 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                    <Icon className="h-5 w-5" style={{ color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-primary mb-3">Our Portfolio</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-4">
              A Full Portfolio of Care
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-[17px]">
              From specialist prescription therapies to everyday family wellness products — we support health across every life stage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Prescription */}
            <Link to="/products" className="group block">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-navy to-brand-primary p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 pointer-events-none -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                    <Pill className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-2">Prescription Only (POM)</p>
                  <h3 className="text-2xl font-bold font-heading text-white mb-4">Prescription Medications</h3>
                  <p className="text-white/70 text-[15px] leading-relaxed mb-6">
                    Specialist therapies developed for patients managing conditions in Nephrology, Cardiology, and Endocrinology — available through licensed healthcare providers and pharmacies.
                  </p>
                  <div className="flex gap-3 mb-6">
                    <div className="bg-white/10 rounded-xl px-4 py-2 text-center">
                      <div className="text-white font-bold text-sm font-heading">Xydap®</div>
                      <div className="text-white/50 text-xs">Dapagliflozin</div>
                    </div>
                    <div className="bg-white/10 rounded-xl px-4 py-2 text-center">
                      <div className="text-white font-bold text-sm font-heading">Peqlis®</div>
                      <div className="text-white/50 text-xs">Apixaban</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan group-hover:gap-3 transition-all">
                    View Prescription Products <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* OTC Wellness */}
            <Link to="/products" className="group block">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 to-brand-teal p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 pointer-events-none -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-emerald-200 text-xs font-bold uppercase tracking-widest mb-2">Over-the-Counter (OTC)</p>
                  <h3 className="text-2xl font-bold font-heading text-white mb-4">Over-the-Counter Wellness</h3>
                  <p className="text-white/70 text-[15px] leading-relaxed mb-6">
                    Everyday multivitamins and supplements for adults and children under our vitalEssentials range — available without a prescription at pharmacies nationwide.
                  </p>
                  <div className="flex gap-2 mb-6">
                    {[
                      { img: ultraWomenImg },
                      { img: ultraMenImg },
                      { img: ultraKidzImg },
                    ].map((p, i) => (
                      <div key={i} className="h-16 w-16 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
                        <img src={p.img} alt="" className="h-14 w-auto object-contain drop-shadow-lg" loading="lazy" />
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 group-hover:gap-3 transition-all">
                    View Wellness Products <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY 365BIOPHARMA ──────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-teal mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-4">
              Built for Nigerian Healthcare,<br className="hidden sm:block" /> Ready for Tomorrow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                color: "#0072EC",
                bg: "#EFF6FF",
                title: "Locally Rooted, Globally Sourced",
                body: "We understand the Nigerian healthcare landscape and combine that insight with medicines manufactured to international quality standards.",
              },
              {
                icon: Shield,
                color: "#00B5A2",
                bg: "#F0FDF4",
                title: "Rigorous Quality Assurance",
                body: "Every batch passes through strict quality checks and regulatory review before it reaches a pharmacy shelf or hospital ward.",
              },
              {
                icon: FlaskConical,
                color: "#9333ea",
                bg: "#F3E8FF",
                title: "A Full Portfolio of Care",
                body: "From specialist prescription therapies to everyday family wellness products, we support health across every life stage.",
              },
              {
                icon: Award,
                color: "#ea580c",
                bg: "#FFF7ED",
                title: "Partnership-Driven",
                body: "We work closely with physicians, pharmacists, hospitals, and distributors to ensure our medicines reach patients when they need them.",
              },
            ].map(({ icon: Icon, color, bg, title, body }) => (
              <div key={title} className="rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
                <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-5" style={{ background: bg }}>
                  <Icon className="h-5 w-5" style={{ color }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER CTA ────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-brand-navy to-brand-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-cyan mb-4">Healthcare Providers · Pharmacies · Distributors</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
            Partner With Us in Health —<br />Today and Tomorrow
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            Whether you're a healthcare provider, pharmacy, or distributor, we'd love to work with you. Reach out and let's build something meaningful together.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-brand-cyan text-brand-navy hover:bg-white font-semibold rounded-xl px-10">
              Contact Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ── FOOTER DISCLAIMER ─────────────────────────────── */}
      <div className="bg-gray-50 border-t border-gray-100 py-4 px-6 text-center">
        <p className="text-xs text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Content on this website is for general informational purposes only and does not replace professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider before starting any medication.
        </p>
      </div>
    </div>
  );
};

export default Home;
