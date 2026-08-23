import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, User, Clock, BookOpen, AlertCircle, Info, Star, TrendingUp, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getPostBySlug, getRelatedPosts, type ContentSection } from "@/data/blogPosts";

import ultraWomenImg from "@/assets/ProductDetails/UltraWomen/UltraWomen BoxBottle.png";
import ultraMenImg from "@/assets/ProductDetails/UltraMen/UltraMen BoxBottle.png";
import ultraKidzImg from "@/assets/ProductDetails/UltraKidz/UltraKidz BoxBottle.png";

const postImages: Record<string, string[]> = {
  "introducing-vitalessentials": [ultraWomenImg, ultraMenImg, ultraKidzImg],
  "whole-food-fermented-multivitamins": [ultraWomenImg, ultraMenImg],
  "introducing-ultrakidz": [ultraKidzImg],
  "why-we-built-vitalessentials": [ultraWomenImg, ultraMenImg, ultraKidzImg],
  "fatigue-recovery-formula": [ultraMenImg],
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Product Launch":  { bg: "#F3E8FF", text: "#7e22ce" },
  "Company News":    { bg: "#DBEAFE", text: "#1d4ed8" },
  "Health & Wellness": { bg: "#D1FAE5", text: "#065f46" },
  "Clinical Review": { bg: "#FEF3C7", text: "#92400e" },
};

function renderSection(section: ContentSection, accentColor: string, idx: number) {
  switch (section.type) {
    case "paragraph":
      return (
        <p key={idx} className="text-gray-700 leading-[1.85] text-[17px] mb-6">
          {section.text}
        </p>
      );

    case "heading":
      return (
        <h2 key={idx} className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 mt-12 mb-5 leading-tight">
          {section.text}
        </h2>
      );

    case "subheading":
      return (
        <h3 key={idx} className="text-xl font-bold font-heading text-gray-800 mt-8 mb-4">
          {section.text}
        </h3>
      );

    case "quote":
      return (
        <blockquote
          key={idx}
          className="my-10 pl-6 border-l-4 rounded-r-lg"
          style={{ borderColor: accentColor }}
        >
          <p className="text-xl sm:text-2xl font-medium text-gray-800 leading-[1.5] italic mb-3">
            "{section.text}"
          </p>
          {section.attribution && (
            <cite className="text-sm font-semibold not-italic" style={{ color: accentColor }}>
              — {section.attribution}
            </cite>
          )}
        </blockquote>
      );

    case "stat-row":
      return (
        <div
          key={idx}
          className="my-10 grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl overflow-hidden border border-gray-100"
        >
          {section.stats.map((s, i) => (
            <div
              key={i}
              className="p-6 text-center"
              style={{ background: i % 2 === 0 ? "#f8fafc" : "#f1f5f9" }}
            >
              <div className="text-4xl font-bold font-heading mb-1" style={{ color: accentColor }}>
                {s.value}
              </div>
              <div className="text-sm font-bold text-gray-800 mb-1">{s.label}</div>
              <div className="text-xs text-gray-400 leading-snug">{s.context}</div>
            </div>
          ))}
        </div>
      );

    case "callout": {
      const variants = {
        clinical: { bg: "#EFF6FF", border: "#0072EC", icon: <BookOpen className="h-5 w-5" />, label: "Clinical Note", textColor: "#1d4ed8" },
        info:     { bg: "#F0FDF4", border: "#059669", icon: <Info className="h-5 w-5" />, label: "Note", textColor: "#065f46" },
        key:      { bg: "#FFF7ED", border: "#ea580c", icon: <Star className="h-5 w-5" />, label: "Key Point", textColor: "#9a3412" },
        warning:  { bg: "#FEF3C7", border: "#d97706", icon: <AlertCircle className="h-5 w-5" />, label: "Important", textColor: "#92400e" },
      };
      const v = variants[section.variant];
      return (
        <div
          key={idx}
          className="my-8 rounded-xl p-6 border-l-4"
          style={{ background: v.bg, borderColor: v.border }}
        >
          <div className="flex items-center gap-2 mb-3" style={{ color: v.textColor }}>
            {v.icon}
            <span className="text-xs font-bold uppercase tracking-widest">{section.title || v.label}</span>
          </div>
          <p className="text-[15px] leading-relaxed text-gray-700">{section.body}</p>
        </div>
      );
    }

    case "list":
      return (
        <ul key={idx} className={`my-6 space-y-3 ${section.ordered ? "list-none" : "list-none"}`}>
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[17px] text-gray-700 leading-relaxed">
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                style={{ background: accentColor }}
              >
                {section.ordered ? i + 1 : "✓"}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div key={idx} className="my-8 overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: accentColor }}>
                {section.headers.map((h, i) => (
                  <th key={i} className="px-5 py-3 text-left text-white font-semibold text-xs uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-5 py-3 text-gray-700 leading-relaxed border-t border-gray-100">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "references":
      return (
        <div key={idx} className="mt-14 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">References</h3>
          <ol className="space-y-2">
            {section.items.map((ref, i) => (
              <li key={i} className="text-xs text-gray-400 leading-relaxed pl-5 relative">
                <span className="absolute left-0 font-bold text-gray-300">{i + 1}.</span>
                {ref}
              </li>
            ))}
          </ol>
        </div>
      );

    case "download":
      return (
        <div key={idx} className="my-10 rounded-2xl border-2 border-brand-primary/20 bg-gradient-to-br from-blue-50 to-indigo-50 p-7">
          <div className="flex items-start gap-5">
            <div className="h-14 w-14 rounded-xl bg-brand-primary flex items-center justify-center flex-shrink-0 shadow-md">
              <FileText className="h-7 w-7 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">Free Download · For Healthcare Professionals</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{section.description}</p>
              <a
                href={section.url}
                download={section.filename}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-brand-primary hover:bg-brand-navy text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                <Download className="h-4 w-4" />
                Download {section.filename}
              </a>
            </div>
          </div>
        </div>
      );

    case "divider":
      return <hr key={idx} className="my-10 border-gray-100" />;

    default:
      return null;
  }
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getPostBySlug(slug || "");
  const related = getRelatedPosts(slug || "", 3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article not found</h1>
          <Link to="/stories">
            <Button>← Back to Stories</Button>
          </Link>
        </div>
      </div>
    );
  }

  const catColor = categoryColors[post.category] || { bg: "#F3F4F6", text: "#374151" };
  const heroImages = postImages[post.slug] || [];

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${post.heroGradient}`} style={{ minHeight: "400px" }}>
        {/* Decorative blobs */}
        <div className="absolute top-[-60px] right-[-60px] w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute bottom-[-40px] left-[-40px] w-60 h-60 rounded-full bg-white/5 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 pt-12 pb-16">
          {/* Breadcrumb */}
          <button
            onClick={() => navigate("/stories")}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Stories
          </button>

          {/* Category + read time */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ background: catColor.bg, color: catColor.text }}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-white/60 text-xs font-medium">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white leading-[1.1] mb-8 max-w-3xl">
            {post.title}
          </h1>

          {/* Author + Date */}
          <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                {post.author.split(" ").map(w => w[0]).join("").slice(0, 2)}
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{post.author}</div>
                <div className="text-white/50 text-xs">{post.authorRole}</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric", month: "long", year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Product image(s) — float at bottom right of hero */}
        {heroImages.length > 0 && (
          <div className="absolute bottom-0 right-4 sm:right-12 flex items-end gap-2 pointer-events-none">
            {heroImages.slice(0, 3).map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                aria-hidden="true"
                className="object-contain drop-shadow-2xl opacity-90"
                style={{
                  height: heroImages.length === 1 ? "200px" : i === 1 ? "180px" : "140px",
                  marginBottom: i === 1 ? "0px" : "-8px",
                }}
                loading="lazy"
              />
            ))}
          </div>
        )}
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────── */}
      <article className="max-w-[760px] mx-auto px-6 sm:px-8 py-14">
        {/* Excerpt / lead */}
        <p className="text-xl text-gray-500 leading-relaxed mb-10 font-medium border-b border-gray-100 pb-10">
          {post.excerpt}
        </p>

        {/* Download blocks pinned to top — rendered before body content */}
        {post.content
          .filter((s) => s.type === "download")
          .map((s, idx) => renderSection(s, post.accentColor, idx))}

        {/* Content sections — download type skipped here (already rendered above) */}
        {post.content
          .filter((s) => s.type !== "download")
          .map((section, idx) => renderSection(section, post.accentColor, idx))}
      </article>

      {/* ── RELATED ARTICLES ────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="border-t border-gray-100 bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-6 sm:px-8">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="h-5 w-5 text-gray-400" />
              <h2 className="text-lg font-bold text-gray-900">More from vitalEssentials</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rp) => {
                const rc = categoryColors[rp.category] || { bg: "#F3F4F6", text: "#374151" };
                return (
                  <Link
                    key={rp.slug}
                    to={`/stories/${rp.slug}`}
                    className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <span
                      className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4"
                      style={{ background: rc.bg, color: rc.text }}
                    >
                      {rp.category}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 leading-snug mb-3 group-hover:text-brand-primary transition-colors">
                      {rp.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Clock className="h-3 w-3" />
                      {rp.readTime}
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <Link to="/stories">
                <Button variant="outline" className="rounded-xl border-gray-300 text-gray-700 font-semibold hover:bg-gray-100">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  All Stories
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA STRIP ───────────────────────────────────────────── */}
      <section className="py-14 bg-gradient-to-r from-brand-navy to-brand-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">
            Ready to start your vitalEssentials journey?
          </h2>
          <p className="text-white/70 mb-7 text-base">
            Premium whole-food multivitamins — formulated specifically for Nigerian families.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products">
              <Button size="lg" className="bg-white text-brand-navy hover:bg-brand-aqua font-semibold rounded-xl px-8">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-xl px-8 bg-transparent">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
