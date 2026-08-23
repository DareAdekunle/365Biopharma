import { ArrowRight, AlertCircle, Pill, Leaf, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

import ultraWomenImg from "@/assets/ProductDetails/UltraWomen/UltraWomen BoxBottle.png";
import ultraMenImg from "@/assets/ProductDetails/UltraMen/UltraMen BoxBottle.png";
import ultraKidzImg from "@/assets/ProductDetails/UltraKidz/UltraKidz BoxBottle.png";

const prescriptionProducts = [
  {
    brand: "Xydap®",
    generic: "Dapagliflozin",
    area: "Endocrinology · Cardiology · Nephrology",
    areaColor: "#0072EC",
    areaBg: "#EFF6FF",
    description:
      "Xydap is indicated in the management of type 2 diabetes and associated cardiovascular and renal conditions, as prescribed by a physician.",
    availability: "Prescription only — dispensed through licensed pharmacies and hospitals.",
    gradient: "from-brand-navy to-brand-primary",
  },
  {
    brand: "Peqlis®",
    generic: "Apixaban",
    area: "Cardiology",
    areaColor: "#e11d48",
    areaBg: "#FFF1F2",
    description:
      "Peqlis is indicated for the prevention and management of blood clot-related conditions, as prescribed by a physician.",
    availability: "Prescription only — dispensed through licensed pharmacies and hospitals.",
    gradient: "from-[#7f1d1d] to-[#dc2626]",
  },
];

const otcProducts = [
  {
    name: "Fatigue & Recovery",
    for: "Adults",
    img: ultraMenImg,
    gradient: "from-orange-500 to-amber-500",
    description:
      "A multivitamin and supplement formulation designed to support energy levels and recovery for adults managing everyday fatigue and demanding lifestyles.",
    ingredients: "B-vitamins, Iron, Magnesium, L-Carnitine, Coenzyme Q10 and more.",
  },
  {
    name: "Wellness & Immunity",
    for: "Adults & Children",
    img: ultraWomenImg,
    gradient: "from-purple-600 to-pink-500",
    description:
      "A daily supplement formulated to support overall wellness and a healthy immune system for the whole family.",
    ingredients: "Vitamin C, Zinc, Vitamin D, Selenium and more.",
  },
  {
    name: "Appetite & Growth",
    for: "Children",
    img: ultraKidzImg,
    gradient: "from-emerald-600 to-teal-500",
    description:
      "Specially formulated to support healthy appetite and growth in growing children.",
    ingredients: "DHA, Probiotics, Calcium, Vitamin D, B12, Iron and more.",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-primary to-brand-teal">
        <div className="absolute top-[-80px] right-[-80px] w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-3">365Biopharma Limited</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-5 leading-tight max-w-2xl">
            Our Products
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            At 365Biopharma Limited, our portfolio spans specialist prescription therapies and everyday wellness essentials — each developed to meet rigorous quality standards and the real needs of Nigerian patients and families.
          </p>
          <p className="text-white/50 text-sm mt-4 max-w-2xl italic">
            True to our promise of "Tomorrow's Medicine Today", every product is chosen and managed with an eye on both immediate patient needs and long-term health outcomes.
          </p>
        </div>
      </section>

      {/* ── DISCLAIMER ────────────────────────────────────── */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 text-sm leading-relaxed">
            <strong>Important:</strong> Prescription medications listed below require a valid prescription from a licensed healthcare provider. Information provided here is for general awareness only and does not constitute medical advice. Please consult your physician or pharmacist before starting any medication.
          </p>
        </div>
      </div>

      {/* ── PRESCRIPTION PRODUCTS ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-8 w-8 rounded-lg bg-brand-primary/10 flex items-center justify-center">
              <Pill className="h-4 w-4 text-brand-primary" />
            </div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-primary">Prescription-Only Medications (POM)</p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 mb-3">
            Specialist Prescription Therapies
          </h2>
          <p className="text-gray-500 mb-10 max-w-2xl leading-relaxed">
            Specialist medicines developed to support patients living with chronic and acute conditions across Nephrology, Cardiology, and Endocrinology — available through licensed healthcare providers and pharmacies.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {prescriptionProducts.map((p) => (
              <div
                key={p.brand}
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${p.gradient} p-8 shadow-xl`}
              >
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 pointer-events-none -translate-y-1/3 translate-x-1/3" />
                <div className="relative z-10">
                  {/* Therapeutic area badge */}
                  <span
                    className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                    style={{ background: p.areaBg, color: p.areaColor }}
                  >
                    {p.area}
                  </span>

                  <div className="mb-4">
                    <h3 className="text-3xl font-bold font-heading text-white mb-1">{p.brand}</h3>
                    <p className="text-white/50 text-sm">{p.generic}</p>
                  </div>

                  <p className="text-white/80 text-[15px] leading-relaxed mb-5">{p.description}</p>

                  <div className="flex items-start gap-2 bg-white/10 rounded-xl p-4 mb-6">
                    <FileText className="h-4 w-4 text-white/60 flex-shrink-0 mt-0.5" />
                    <p className="text-white/70 text-xs leading-relaxed">{p.availability}</p>
                  </div>

                  <div className="flex gap-3">
                    <Link to="/contact">
                      <Button size="sm" className="bg-white text-brand-navy hover:bg-brand-aqua font-semibold rounded-xl px-5">
                        Enquire
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-xs mt-6 text-center">
            As our POM portfolio grows, additional therapeutic products will be listed here. Contact us for a full product catalogue.
          </p>
        </div>
      </section>

      {/* ── OTC PRODUCTS ──────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-100 flex items-center justify-center">
              <Leaf className="h-4 w-4 text-emerald-600" />
            </div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-600">Over-the-Counter (OTC)</p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 mb-3">
            vitalEssentials — Nutritional Support for Every Stage of Life
          </h2>
          <p className="text-gray-500 mb-10 max-w-2xl leading-relaxed">
            Everyday multivitamins and supplements designed to support the wellness of adults and children — available without a prescription at pharmacies and retail outlets nationwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otcProducts.map((p) => (
              <Card key={p.name} className="overflow-hidden rounded-2xl border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
                {/* Product image header */}
                <div className={`relative bg-gradient-to-br ${p.gradient} flex items-end justify-center pt-8`} style={{ height: "200px" }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-44 w-auto object-contain drop-shadow-2xl absolute bottom-0"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white px-2.5 py-1 rounded-full">
                      For {p.for}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">vitalEssentials</div>
                  <h3 className="text-lg font-bold font-heading text-gray-900 mb-3">{p.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.description}</p>

                  <div className="rounded-xl bg-gray-50 border border-gray-100 p-3 mb-5">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-1">Key Actives</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{p.ingredients}</p>
                  </div>

                  <p className="text-xs text-gray-400 italic">
                    Consult your pharmacist for dosage guidance.
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-blue-50 border border-blue-100 text-center max-w-3xl mx-auto">
            <p className="text-blue-700 text-sm leading-relaxed">
              All medications are manufactured in accordance with international quality standards by our trusted manufacturing partner, with full quality assurance, regulatory compliance, and distribution managed locally by 365Biopharma Limited in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-brand-navy to-brand-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
            Need Help Finding the Right Product?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Our team is here to help healthcare providers, pharmacies, and patients find the right solution. Reach out with any enquiry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-brand-cyan text-brand-navy hover:bg-white font-semibold rounded-xl px-8">
                Contact Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Medical disclaimer */}
      <div className="bg-gray-50 border-t border-gray-100 py-4 px-6 text-center">
        <p className="text-xs text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Content on this website is for general informational purposes only and does not replace professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider before starting any medication. Prescription medications require a valid prescription from a licensed healthcare provider.
        </p>
      </div>
    </div>
  );
};

export default Products;
