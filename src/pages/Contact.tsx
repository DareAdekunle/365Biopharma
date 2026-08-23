import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Building, AlertTriangle, Briefcase, Newspaper, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const departmentalContacts = [
  {
    icon: Mail,
    label: "General Enquiries",
    email: "info@365biopharma.com.ng",
    description: "General questions about our company, products, or services.",
    color: "#0072EC",
    bg: "#EFF6FF",
  },
  {
    icon: Building,
    label: "Medical Information",
    email: "medical.info@365biopharma.com.ng",
    description: "Clinical or medical questions about our prescription products. For healthcare professionals.",
    color: "#00B5A2",
    bg: "#F0FDF4",
  },
  {
    icon: AlertTriangle,
    label: "Pharmacovigilance / Safety",
    email: "pharmacovigilance@365biopharma.com.ng",
    description: "To report an adverse event or product safety concern. You may also call our direct line.",
    color: "#e11d48",
    bg: "#FFF1F2",
  },
  {
    icon: Briefcase,
    label: "Partnerships & Distribution",
    email: "partnerships@365biopharma.com.ng",
    description: "For pharmacy, hospital, or distributor partnership enquiries.",
    color: "#9333ea",
    bg: "#F3E8FF",
  },
  {
    icon: Send,
    label: "Careers",
    email: "careers@365biopharma.com.ng",
    description: "Job applications and career enquiries.",
    color: "#d97706",
    bg: "#FEF3C7",
  },
  {
    icon: Newspaper,
    label: "Press & Media",
    email: "press@365biopharma.com.ng",
    description: "Media enquiries, press releases, and spokesperson requests.",
    color: "#374151",
    bg: "#F3F4F6",
  },
];

const inquiryTypes = [
  "General Enquiry",
  "Medical Information Request",
  "Adverse Event / Safety Report",
  "Partnership or Distribution",
  "Pharmacy Stocking",
  "Career Enquiry",
  "Press / Media",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    message: "",
    ndpaConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.ndpaConsent) {
      toast({
        title: "Consent Required",
        description: "Please agree to the data processing statement before submitting.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      inquiryType: "",
      message: "",
      ndpaConsent: false,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-primary to-brand-teal">
        <div className="absolute top-[-80px] right-[-80px] w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-3">365Biopharma Limited</p>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-5 leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-white/70 max-w-xl leading-relaxed">
            Whether you're a healthcare provider, pharmacist, distributor, or patient — we're here. Reach the right team directly using our departmental contact list below.
          </p>
        </div>
      </section>

      {/* ── PHARMACOVIGILANCE NOTICE ──────────────────────── */}
      <div className="bg-red-50 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-800 text-sm leading-relaxed">
            <strong>Adverse Event Reporting:</strong> If you or a patient has experienced a side effect or product safety concern related to any 365Biopharma product, please report it immediately to{" "}
            <a href="mailto:pharmacovigilance@365biopharma.com.ng" className="font-semibold underline">pharmacovigilance@365biopharma.com.ng</a>{" "}
            or call <strong>+234 703 080 5257</strong>. You may also report directly to the NAFDAC Pharmacovigilance unit.
          </p>
        </div>
      </div>

      {/* ── DEPARTMENTAL CONTACTS ─────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-primary mb-3">Departmental Contacts</p>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 mb-3">
              Reach the Right Team
            </h2>
            <p className="text-gray-500 max-w-xl leading-relaxed">
              Contact the relevant department directly for a faster response.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {departmentalContacts.map((dept) => (
              <div key={dept.label} className="rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: dept.bg }}>
                    <dept.icon className="h-4 w-4" style={{ color: dept.color }} />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{dept.label}</h3>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{dept.description}</p>
                <a
                  href={`mailto:${dept.email}`}
                  className="text-xs font-semibold"
                  style={{ color: dept.color }}
                >
                  {dept.email}
                </a>
              </div>
            ))}
          </div>

          {/* ── FORM + CONTACT INFO ──────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 mb-8">
                Fill out the form and our team will respond within 24 business hours.
              </p>

              <Card className="p-8 border-gray-100 rounded-2xl shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name *</label>
                      <Input name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Emeka" className="rounded-xl border-gray-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name *</label>
                      <Input name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Okafor" className="rounded-xl border-gray-200" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <Input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="emeka@example.com" className="rounded-xl border-gray-200" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Organisation / Pharmacy</label>
                      <Input name="company" value={formData.company} onChange={handleChange} placeholder="HealthPlus Pharmacy" className="rounded-xl border-gray-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                      <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234 xxx xxx xxxx" className="rounded-xl border-gray-200" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Inquiry Type *</label>
                    <div className="relative">
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                      >
                        <option value="" disabled>Select inquiry type…</option>
                        {inquiryTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                    <Textarea name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Tell us about your enquiry..." className="rounded-xl border-gray-200 resize-none" />
                  </div>

                  {/* NDPA Consent */}
                  <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="ndpaConsent"
                        checked={formData.ndpaConsent}
                        onChange={handleChange}
                        className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
                      />
                      <span className="text-xs text-gray-600 leading-relaxed">
                        I consent to 365Biopharma Limited processing my personal data as submitted in this form to respond to my enquiry, in accordance with Nigeria's{" "}
                        <strong>Nigeria Data Protection Act (NDPA) 2023</strong>. I understand my data will not be shared with third parties without my consent and will be stored only as long as necessary to address my request. *
                      </span>
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-brand-primary hover:bg-brand-navy text-white rounded-xl font-semibold">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Right panel */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-gray-900 mb-2">Contact Details</h2>
              <p className="text-gray-500 mb-8">Direct ways to reach the 365Biopharma team.</p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: Building,
                    title: "Headquarters",
                    details: ["Lagos, Nigeria"],
                    badge: "Main Office",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    details: ["+234 703 080 5257"],
                    badge: "Call Us",
                  },
                  {
                    icon: Mail,
                    title: "General Email",
                    details: ["info@365biopharma.com.ng"],
                    badge: "Write to Us",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    details: ["Monday – Friday: 8:00 AM – 6:00 PM WAT", "Saturday: 9:00 AM – 2:00 PM WAT"],
                    badge: "Working Hours",
                  },
                ].map((info, index) => (
                  <Card key={index} className="p-5 hover:shadow-md transition-all duration-300 border-gray-100 rounded-2xl">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                          <info.icon className="h-5 w-5 text-brand-primary" />
                        </div>
                        <h3 className="font-semibold text-gray-900 text-sm">{info.title}</h3>
                      </div>
                      <Badge variant="outline" className="text-xs border-gray-200 text-gray-500">{info.badge}</Badge>
                    </div>
                    <div className="space-y-0.5">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm ml-[52px]">{detail}</p>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>

              {/* Partner CTA */}
              <div className="rounded-2xl bg-gradient-to-br from-brand-navy to-brand-primary p-7 text-white">
                <h3 className="font-bold font-heading text-lg mb-2">Become a Distribution Partner</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  We are onboarding pharmacies, health stores, and wellness centres across Nigeria to stock our full product range.
                </p>
                <a href="mailto:partnerships@365biopharma.com.ng" className="text-sm font-semibold text-brand-cyan">
                  partnerships@365biopharma.com.ng
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CITIES ────────────────────────────────────────── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-primary mb-3">Distribution Network</p>
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-8">
            Available Across Nigeria
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Lagos", "Abuja", "Port Harcourt", "Benin City", "Expanding Nationwide"].map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700"
              >
                <MapPin className="h-3.5 w-3.5 text-brand-primary" />
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIRECT CONTACT BAND ───────────────────────────── */}
      <section className="py-14 bg-brand-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold font-heading text-white mb-3">Direct Contact</h2>
          <p className="text-white/70 mb-7">For urgent enquiries, reach us directly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-white">
              <Phone className="h-5 w-5 text-brand-cyan" />
              <span className="text-lg font-semibold">+234 703 080 5257</span>
            </div>
            <span className="text-white/30 hidden sm:block">|</span>
            <div className="flex items-center gap-2 text-white">
              <Mail className="h-5 w-5 text-brand-cyan" />
              <span className="text-lg font-semibold">info@365biopharma.com.ng</span>
            </div>
          </div>
        </div>
      </section>

      {/* Legal footer */}
      <div className="bg-gray-50 border-t border-gray-100 py-4 px-6 text-center">
        <p className="text-xs text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Your personal data is processed by 365Biopharma Limited in accordance with the Nigeria Data Protection Act (NDPA) 2023. We use your data only to respond to your enquiry. For our full Privacy Policy, contact info@365biopharma.com.ng.
        </p>
      </div>
    </div>
  );
};

export default Contact;
