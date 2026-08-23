import { useState } from "react";
import { Calendar, User, ArrowRight, Clock, BookOpen, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { blogPosts, getFeaturedPost } from "@/data/blogPosts";

import ultraWomenImg from "@/assets/ProductDetails/UltraWomen/UltraWomen BoxBottle.png";
import ultraMenImg from "@/assets/ProductDetails/UltraMen/UltraMen BoxBottle.png";
import ultraKidzImg from "@/assets/ProductDetails/UltraKidz/UltraKidz BoxBottle.png";
import newsImage from "@/assets/news-stories.jpg";

const heroImages: Record<string, string> = {
  "introducing-vitalessentials": newsImage,
  "whole-food-fermented-multivitamins": ultraWomenImg,
  "introducing-ultrakidz": ultraKidzImg,
  "why-we-built-vitalessentials": ultraMenImg,
  "fatigue-recovery-formula": ultraMenImg,
};

const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
  "Product Launch":    { bg: "#F3E8FF", text: "#7e22ce", dot: "#9333ea" },
  "Company News":      { bg: "#DBEAFE", text: "#1d4ed8", dot: "#0072EC" },
  "Health & Wellness": { bg: "#D1FAE5", text: "#065f46", dot: "#059669" },
  "Clinical Review":   { bg: "#FEF3C7", text: "#92400e", dot: "#d97706" },
};

const allCategories = ["All", "Company News", "Product Launch", "Health & Wellness", "Clinical Review"];

const Stories = () => {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const featured = sorted[0];
  const rest = sorted.slice(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");

  const filtered = activeCategory === "All"
    ? rest
    : rest.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-primary to-brand-teal">
        <div className="absolute top-[-80px] right-[-80px] w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute bottom-[-40px] left-[-40px] w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-3">365Biopharma Limited</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-5 max-w-2xl leading-tight">
            Stories & News
          </h1>
          <p className="text-lg text-white/70 max-w-xl leading-relaxed">
            The people, purpose, and progress behind 365Biopharma Limited — company milestones, health education, clinical insights, and community stories.
          </p>
        </div>
      </section>

      {/* ── OUR STORY INTRO ───────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                color: "#0072EC",
                bg: "#EFF6FF",
                title: "Our Story",
                subtitle: "Why We Started",
                body: "365Biopharma was founded in 2025 with a conviction: that Nigerian patients deserve access to the best medicines — not someday, but now. We are a Lagos-based pharmaceutical company bridging the gap between global medical innovation and everyday Nigerian healthcare.",
                link: "/stories/why-we-built-vitalessentials",
                cta: "Read Our Founding Story",
              },
              {
                icon: BookOpen,
                color: "#00B5A2",
                bg: "#F0FDF4",
                title: "Health & Wellness Insights",
                subtitle: "Clinical Education",
                body: "Evidence-based articles on conditions we treat, healthy living, and how our products work — written for patients, caregivers, and healthcare professionals across Nigeria.",
                link: "#articles",
                cta: "Browse Health Articles",
              },
              {
                icon: Users,
                color: "#9333ea",
                bg: "#F3E8FF",
                title: "Community & Newsroom",
                subtitle: "Impact & Updates",
                body: "Company announcements, partnerships, community health initiatives, and press coverage. Follow our journey as we grow and expand access to quality medicines across Nigeria.",
                link: "#articles",
                cta: "See Latest News",
              },
            ].map(({ icon: Icon, color, bg, title, subtitle, body, link, cta }) => (
              <Link key={title} to={link} className="group block">
                <div className="h-full rounded-2xl border border-gray-100 p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-5" style={{ background: bg }}>
                    <Icon className="h-5 w-5" style={{ color }} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color }}>{subtitle}</p>
                  <h3 className="text-lg font-bold font-heading text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{body}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all" style={{ color }}>
                    {cta} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTICLE ──────────────────────────────────── */}
      <section className="py-16 bg-white" id="articles">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-primary mb-6">Featured Story</p>

          <Link to={`/stories/${featured.slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-gray-200 transition-all duration-300">
              {/* Image panel */}
              <div className="relative h-64 lg:h-auto overflow-hidden bg-gradient-to-br from-brand-navy via-brand-primary to-brand-teal">
                <img
                  src={heroImages[featured.slug] || newsImage}
                  alt={featured.title}
                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{
                      background: categoryColors[featured.category]?.bg || "#F3F4F6",
                      color: categoryColors[featured.category]?.text || "#374151",
                    }}
                  >
                    {featured.category}
                  </span>
                </div>
              </div>

              {/* Text panel */}
              <div className="p-8 lg:p-10 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-4 mb-5 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(featured.date).toLocaleDateString("en-GB", {
                      day: "numeric", month: "long", year: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 leading-tight mb-4 group-hover:text-brand-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-7 text-[15px]">
                  {featured.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary text-xs font-bold">
                      {featured.author.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-xs">{featured.author}</div>
                      <div className="text-gray-400 text-xs">{featured.authorRole}</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary group-hover:gap-3 transition-all">
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── CATEGORY FILTER + ARTICLES GRID ──────────────────── */}
      <section className="py-6 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={
                  activeCategory === cat
                    ? { background: "#0072EC", color: "#fff" }
                    : { background: "#fff", color: "#6b7280", border: "1px solid #e5e7eb" }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => {
              const cc = categoryColors[post.category] || { bg: "#F3F4F6", text: "#374151", dot: "#6b7280" };
              return (
                <Link key={post.slug} to={`/stories/${post.slug}`} className="group block">
                  <Card className="h-full p-6 border-gray-100 hover:border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white rounded-2xl overflow-hidden">
                    <div className="h-1 rounded-full mb-6 -mx-6 -mt-6" style={{ background: cc.dot }} />

                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                        style={{ background: cc.bg, color: cc.text }}
                      >
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-gray-400">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-gray-900 leading-snug mb-3 group-hover:text-brand-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                        <span>·</span>
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-primary mt-3 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">No articles in this category yet.</div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER ────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-brand-navy to-brand-primary">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-heading text-white mb-3">Stay Informed</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Company updates, health education articles, and new product launches — delivered to your inbox. No spam.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-xl border-0 text-sm focus:ring-2 focus:ring-white/40 outline-none text-gray-800"
            />
            <Button
              onClick={() => setEmail("")}
              className="px-7 py-3 bg-white text-brand-primary hover:bg-brand-aqua hover:text-brand-navy font-semibold rounded-xl"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories;
