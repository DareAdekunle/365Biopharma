export type ContentSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "stat-row"; stats: { value: string; label: string; context: string }[] }
  | { type: "callout"; variant: "clinical" | "info" | "key" | "warning"; title: string; body: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "references"; items: string[] }
  | { type: "download"; title: string; filename: string; url: string; description: string }
  | { type: "divider" }

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  authorRole: string
  category: string
  readTime: string
  heroGradient: string
  accentColor: string
  content: ContentSection[]
}

export const blogPosts: BlogPost[] = [
  // ─── FEATURED ─────────────────────────────────────────────────────────────
  {
    slug: "introducing-vitalessentials",
    title: "Introducing vitalEssentials: Premium Nutrition for Every Nigerian",
    excerpt:
      "365Biopharma is proud to launch vitalEssentials — a new line of whole-food fermented multivitamins formulated to meet the unique nutritional needs of Nigerians at every life stage.",
    date: "2025-06-01",
    author: "365Biopharma Team",
    authorRole: "Editorial Team",
    category: "Product Launch",
    readTime: "5 min read",
    heroGradient: "from-brand-navy via-brand-primary to-brand-teal",
    accentColor: "#0072EC",
    content: [
      {
        type: "paragraph",
        text: "Nigeria's supplement market has, for too long, been dominated by products imported with no thought for the nutritional reality on the ground — synthetic multivitamins formulated for Western populations, sold at prices that put them out of reach for most families, and absorbed by the body at a fraction of what's printed on the label. vitalEssentials was built to change that.",
      },
      {
        type: "stat-row",
        stats: [
          { value: "2025", label: "Year Founded", context: "365Biopharma incorporated in Nigeria" },
          { value: "3+", label: "Product Lines", context: "Covering every Nigerian life stage" },
          { value: "5", label: "Cities", context: "Nationwide distribution footprint" },
        ],
      },
      {
        type: "heading",
        text: "What 'Whole-Food Fermented' Actually Means",
      },
      {
        type: "paragraph",
        text: "Every vitalEssentials product is made using a whole-food fermentation process. Rather than isolating synthetic vitamins in a lab, our nutrients are cultivated from real foods — fruits, vegetables, herbs — and then fermented so that the body recognises and absorbs them the same way it would from a meal. The result is dramatically higher bioavailability than conventional tablet supplements.",
      },
      {
        type: "paragraph",
        text: "Synthetic vitamins and whole-food fermented vitamins may look identical on a Supplement Facts label, but inside the body they behave very differently. Synthetic forms often pass through the digestive system with minimal absorption. Whole-food fermented nutrients arrive bound to food cofactors — the enzymes, co-nutrients, and phytonutrients that your body uses as 'keys' to actually unlock and use each vitamin. It's the difference between reading about food and eating it.",
      },
      {
        type: "quote",
        text: "We didn't want to add another supplement to the Nigerian market. We wanted to add a better one — one that actually works.",
        attribution: "Banjo Ayanwola, Founder & CEO, 365Biopharma",
      },
      {
        type: "heading",
        text: "The vitalEssentials Family",
      },
      {
        type: "paragraph",
        text: "The launch range covers four life stages, each with a formula calibrated to that stage's specific demands:",
      },
      {
        type: "list",
        items: [
          "UltraWomen — Women's all-in-one multivitamin targeting immune health, bone density, heart support, and cellular energy.",
          "UltraMen — Men's whole-food multivitamin with targeted support for immune, heart, digestive, and prostate health.",
          "UltraKidz — Children's chewable whole-food multivitamin with probiotics for bone, eye, and immune health.",
          "Fatigue & Recovery Formula — Liquid blend of B-complex, amino acids, and minerals for energy and recovery.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Why formulate specifically for Nigeria?",
        body: "Nigerian diets tend to be rich in carbohydrates and low in certain micronutrients — particularly Vitamin D (limited sun exposure conversion for dark skin tones), iron, zinc, and B12. Our formulas account for these patterns, providing higher concentrations of the nutrients most commonly deficient in Nigerian adults and children.",
      },
      {
        type: "heading",
        text: "GMP Certified. Lab Tested. No Compromise.",
      },
      {
        type: "paragraph",
        text: "All vitalEssentials products are manufactured under Good Manufacturing Practice (GMP) certification and independently lab tested before distribution. We publish our supplement facts transparently because we believe you should know exactly what you are putting in your body — and your children's bodies.",
      },
      {
        type: "paragraph",
        text: "vitalEssentials is available now through our distribution partners in Lagos, Abuja, Port Harcourt, Benin, and additional locations. Visit our Products page to explore the full range, or contact us to enquire about stocking vitalEssentials in your pharmacy or health store.",
      },
    ],
  },

  // ─── DISTRIBUTION LICENCE ─────────────────────────────────────────────────
  {
    slug: "pharmaceutical-distribution-licence",
    title: "365Biopharma Obtains Pharmaceutical Distribution Licence",
    excerpt:
      "A defining moment for our company — 365Biopharma has received its official pharmaceutical distribution licence, enabling us to operate with full regulatory compliance across Nigeria.",
    date: "2025-03-15",
    author: "365Biopharma Team",
    authorRole: "Editorial Team",
    category: "Company News",
    readTime: "3 min read",
    heroGradient: "from-slate-800 to-brand-navy",
    accentColor: "#004D9C",
    content: [
      {
        type: "paragraph",
        text: "In March 2024, 365Biopharma Limited received its official pharmaceutical distribution licence from Nigeria's regulatory authority — a milestone that marks the formal beginning of our ability to distribute health products to Nigerians under a fully compliant regulatory framework.",
      },
      {
        type: "quote",
        text: "This licence is not just a piece of paper. It is the foundation on which every product we bring to market rests. It means accountability. It means that when a pharmacist or a mother in Lagos picks up a vitalEssentials product, she can trust that it has been handled within a regulated supply chain.",
        attribution: "Banjo Ayanwola, Founder & CEO",
      },
      {
        type: "heading",
        text: "What the Licence Enables",
      },
      {
        type: "paragraph",
        text: "Pharmaceutical distribution in Nigeria operates under oversight that requires companies to meet strict standards around product sourcing, storage, cold chain management where applicable, traceability, and pharmacovigilance reporting. Achieving this licence means 365Biopharma has met each of those requirements.",
      },
      {
        type: "list",
        items: [
          "Authorised to distribute pharmaceutical and nutraceutical products across all Nigerian states.",
          "Required to maintain documented supply chain records from manufacturer to end point of sale.",
          "Subject to periodic regulatory inspections to maintain licence standing.",
          "Permitted to work directly with hospitals, pharmacies, and licensed health stores.",
        ],
      },
      {
        type: "callout",
        variant: "key",
        title: "Why this matters to you as a customer",
        body: "In an unregulated supplement market, products can change hands multiple times before reaching you — with no visibility on storage conditions, authenticity, or expiry management. Our licence means every vitalEssentials product you purchase has moved through a monitored, documented, regulated chain from our facility to your hands.",
      },
      {
        type: "heading",
        text: "The Road Ahead",
      },
      {
        type: "paragraph",
        text: "With our distribution licence secured and our vitalEssentials product line launched, 365Biopharma is now focused on building distribution depth across Nigeria — more partner pharmacies, more cities, and eventually direct-to-consumer fulfilment. The licence is the platform; the work of building Nigeria's most trusted supplement brand starts now.",
      },
    ],
  },

  // ─── FERMENTATION SCIENCE ─────────────────────────────────────────────────
  {
    slug: "whole-food-fermented-multivitamins",
    title: "UltraMen & UltraWomen: The Science Behind Whole-Food Fermented Multivitamins",
    excerpt:
      "Whole-food fermented vitamins and synthetic vitamins look the same on a label but behave completely differently in the body. Here is the science — and why it matters for Nigerians.",
    date: "2025-08-10",
    author: "365Biopharma Team",
    authorRole: "Editorial Team",
    category: "Health & Wellness",
    readTime: "6 min read",
    heroGradient: "from-emerald-700 to-teal-600",
    accentColor: "#00B5A2",
    content: [
      {
        type: "paragraph",
        text: "Walk into any Nigerian pharmacy and you'll find rows of multivitamin bottles, most of them containing synthetic vitamins — ascorbic acid instead of Vitamin C, dl-alpha-tocopherol instead of natural Vitamin E, cyanocobalamin instead of methylcobalamin B12. These are cheaper to manufacture and stable on a shelf. But there is growing evidence that the body uses them less efficiently than vitamins derived from whole food sources.",
      },
      {
        type: "heading",
        text: "The Problem with Synthetic Vitamins",
      },
      {
        type: "paragraph",
        text: "When you eat a mango, the Vitamin C it contains arrives packaged with bioflavonoids, polyphenols, and enzyme cofactors. Your digestive system recognises this entire matrix and responds accordingly — absorbing the vitamin efficiently because it looks like food. Isolated synthetic ascorbic acid, by contrast, arrives without that matrix. The result is lower absorption, faster excretion, and for some nutrients, potentially different physiological effects.",
      },
      {
        type: "quote",
        text: "A vitamin isolated from its food matrix is like a key that has been cut but never fitted to a lock. Fermentation puts the key back in context.",
      },
      {
        type: "heading",
        text: "What Fermentation Does",
      },
      {
        type: "paragraph",
        text: "vitalEssentials uses a whole-food fermentation process to build its vitamins. We begin with organic fruits, vegetables, and herbs — real food sources. We then introduce beneficial probiotic cultures that ferment these ingredients over a carefully controlled period. During fermentation, the micro-organisms break down the food matrix into more bioavailable forms, synthesise additional B vitamins, and produce short-chain fatty acids and enzymes that enhance nutrient absorption.",
      },
      {
        type: "paragraph",
        text: "The result is a nutrient that the body encounters surrounded by its natural cofactors — the same way it would appear in food. Multiple studies comparing whole-food vitamin C to synthetic ascorbic acid have shown superior plasma retention for the food-matrix form, meaning more of what you take actually stays in your body where it can be used.",
      },
      {
        type: "stat-row",
        stats: [
          { value: "Higher", label: "Bioavailability", context: "vs isolated synthetic equivalents" },
          { value: "Once Daily", label: "Dosing", context: "Simplified — no stacking required" },
          { value: "30 Tablets", label: "Per Pack", context: "One month's supply per bottle" },
        ],
      },
      {
        type: "heading",
        text: "UltraWomen — What's Inside",
      },
      {
        type: "paragraph",
        text: "UltraWomen is a women's all-in-one multivitamin targeting four key systems: immune health, bone density, cardiovascular function, and cellular energy. The formula includes a full B-complex for energy metabolism, Vitamin D3 and K2 working together for calcium routing to bones rather than arteries, Vitamin C from whole-food sources for immune and skin collagen support, iron in a gentle, non-constipating form, folate (as methylfolate, the bioavailable form), and a botanical blend including organic turmeric and ashwagandha.",
      },
      {
        type: "heading",
        text: "UltraMen — What's Inside",
      },
      {
        type: "paragraph",
        text: "UltraMen is a men's whole-food multivitamin targeting immune function, heart health, digestive support, and prostate health. The formula includes zinc in a whole-food matrix (critical for testosterone metabolism and immune function), Selenium for prostate and thyroid health, Vitamin E from mixed tocopherols, Lycopene from tomato extract, a prostate support blend including saw palmetto, a digestive enzyme complex, and the full suite of B vitamins for cardiovascular and neurological function.",
      },
      {
        type: "callout",
        variant: "clinical",
        title: "Nutrient deficiencies common in Nigerian adults",
        body: "Studies in Nigerian populations consistently identify deficiencies in Vitamin D, iron (especially in women of reproductive age), zinc, B12, and iodine. vitalEssentials formulas were calibrated with these patterns in mind — providing higher concentrations of the nutrients most likely to be insufficient in a typical Nigerian diet.",
      },
      {
        type: "heading",
        text: "Once Daily — Why That Matters",
      },
      {
        type: "paragraph",
        text: "Both UltraMen and UltraWomen are once-daily tablets. We made a deliberate decision to consolidate everything a person needs into a single tablet, not because it is the easiest formulation to produce — it is actually harder — but because adherence data consistently shows that multi-dose regimens fail over time. One tablet with breakfast. That's it.",
      },
    ],
  },

  // ─── EXPANSION ────────────────────────────────────────────────────────────
  {
    slug: "vitalessentials-five-locations",
    title: "vitalEssentials Expands to Five Locations Across Nigeria",
    excerpt:
      "From Lagos to Abuja, Port Harcourt to Benin — vitalEssentials products are now available through distribution partners in five cities, bringing quality supplements closer to more Nigerians.",
    date: "2025-11-20",
    author: "365Biopharma Team",
    authorRole: "Editorial Team",
    category: "Company News",
    readTime: "3 min read",
    heroGradient: "from-brand-primary to-brand-teal",
    accentColor: "#0072EC",
    content: [
      {
        type: "paragraph",
        text: "Access to quality health products in Nigeria has long been unevenly distributed — concentrated in a few Lagos districts and a handful of upscale pharmacies in Abuja, with much of the country largely underserved. From the start, expanding beyond Lagos was not an aspiration for vitalEssentials — it was a requirement.",
      },
      {
        type: "stat-row",
        stats: [
          { value: "5", label: "Cities Covered", context: "Lagos, Abuja, Port Harcourt, Benin + more" },
          { value: "2025", label: "Year of Expansion", context: "First distribution network milestone" },
          { value: "Growing", label: "Partner Network", context: "New pharmacies added quarterly" },
        ],
      },
      {
        type: "heading",
        text: "The Five Cities",
      },
      {
        type: "paragraph",
        text: "Our current distribution footprint includes Lagos (our headquarters city and primary market), Abuja (the Federal Capital Territory and a key hub for health professionals), Port Harcourt (the commercial capital of Rivers State and gateway to the South-South), Benin City (capital of Edo State and a growing health retail market), and a fifth growing location as we continue to expand our partner network.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Want to stock vitalEssentials in your city?",
        body: "We are actively onboarding pharmacy partners, health food stores, hospitals, and wellness centres across Nigeria. Distribution terms are straightforward, and we provide full product training and marketing support. Contact us at info@365biopharma.com.ng or call +234 703 080 5257.",
      },
      {
        type: "heading",
        text: "Building the Right Distribution Model",
      },
      {
        type: "paragraph",
        text: "We made a deliberate choice to build our distribution through existing, trusted pharmacy and health store partners rather than attempting a rapid direct-to-consumer e-commerce model. Nigerian consumers trust their pharmacist. They value being able to ask a question, compare products, and speak to someone who knows health. Our distribution partners are that human layer — trained in the vitalEssentials range, equipped to answer questions and recommend the right product for each customer's needs.",
      },
      {
        type: "paragraph",
        text: "We are on track to reach 10 cities by the end of 2025. If you want to find your nearest vitalEssentials stockist or explore becoming one, visit our Contact page.",
      },
    ],
  },

  // ─── ULTRAKIDZ ────────────────────────────────────────────────────────────
  {
    slug: "introducing-ultrakidz",
    title: "Introducing UltraKidz: Nutrition Formulated for Growing Bodies",
    excerpt:
      "Children's nutritional needs are unique. UltraKidz combines DHA, probiotics, and a full vitamin profile in a berry-flavoured chewable tablet — no swallowing required.",
    date: "2025-10-05",
    author: "365Biopharma Team",
    authorRole: "Editorial Team",
    category: "Product Launch",
    readTime: "5 min read",
    heroGradient: "from-emerald-600 to-cyan-600",
    accentColor: "#059669",
    content: [
      {
        type: "paragraph",
        text: "Getting children to take supplements can feel like a daily negotiation. Most children's vitamins on the Nigerian market are either adult formulas repackaged in smaller doses, flavoured with artificial sweeteners, or so large that swallowing them is itself a health hazard for a child. UltraKidz was designed from a different starting point: what do Nigerian children actually need, and what form will they actually take willingly?",
      },
      {
        type: "heading",
        text: "What Nigerian Children Need Most",
      },
      {
        type: "paragraph",
        text: "Nigerian children face a distinct nutritional landscape. Rapid physical growth in the first decade of life demands calcium and phosphorus for bone development, zinc and iron for cognitive function and immune defence, Vitamin D (particularly for children who spend most of their day indoors in school), and B12 and folate for neurological development. Many Nigerian children's diets, even in middle-income families, fall short on several of these — particularly Vitamin D, zinc, and B12.",
      },
      {
        type: "stat-row",
        stats: [
          { value: "60", label: "Tablets per Pack", context: "Two-month supply" },
          { value: "2+", label: "Chewable", context: "Suitable for children aged 2 and above" },
          { value: "Berry", label: "Flavoured", context: "Natural berry taste — no artificial flavours" },
        ],
      },
      {
        type: "heading",
        text: "The UltraKidz Formula",
      },
      {
        type: "paragraph",
        text: "UltraKidz is a children's whole-food multivitamin with probiotics, delivered in a chewable tablet form. The formula was developed specifically around the nutritional patterns of Nigerian children:",
      },
      {
        type: "list",
        items: [
          "Vitamin D3 — for bone development and immune education; particularly important for children spending time in classrooms.",
          "DHA (from algae) — supports brain development, visual acuity, and cognitive function.",
          "Vitamin C from whole-food sources — immune support and iron absorption enhancement.",
          "Zinc — critical for immune function, growth, and wound healing.",
          "A full B-complex including B12 and folate — neurological development and energy metabolism.",
          "Probiotics (Lactobacillus acidophilus) — gut health and immune modulation.",
          "Iron in a gentle, non-constipating form — oxygen transport and cognitive energy.",
        ],
      },
      {
        type: "callout",
        variant: "key",
        title: "Why probiotics in a children's multivitamin?",
        body: "The gut microbiome plays a central role in immune education during childhood. Children with a diverse, healthy gut microbiome are better equipped to handle pathogens, experience fewer gastrointestinal complaints, and show improved nutrient absorption. Adding a probiotic strand to UltraKidz means the supplement supports not just direct nutrition but the gut environment that makes nutrition effective.",
      },
      {
        type: "heading",
        text: "Chewable by Design",
      },
      {
        type: "paragraph",
        text: "UltraKidz is a chewable tablet, not a capsule or a pill. The berry flavour comes from natural fruit powder — no artificial colours, no artificial sweeteners. The tablet is sized and textured for children to chew comfortably, and dissolves cleanly. In feedback from parent testing groups, over 90% of children took it without resistance.",
      },
      {
        type: "paragraph",
        text: "UltraKidz is suitable for children aged 2 and above. Each pack contains 60 tablets — a two-month supply. It is available now at vitalEssentials distribution partners nationwide.",
      },
    ],
  },

  // ─── FOUNDER'S STORY ──────────────────────────────────────────────────────
  {
    slug: "why-we-built-vitalessentials",
    title: "Why We Built vitalEssentials for Nigeria Specifically",
    excerpt:
      "Nigeria's nutritional landscape has unique challenges. Our founder Banjo Ayanwola explains the thinking behind 365Biopharma — why we exist and where we're headed.",
    date: "2026-01-15",
    author: "Banjo Ayanwola",
    authorRole: "Founder & CEO, 365Biopharma",
    category: "Company News",
    readTime: "7 min read",
    heroGradient: "from-slate-900 to-brand-navy",
    accentColor: "#004D9C",
    content: [
      {
        type: "paragraph",
        text: "Before I started 365Biopharma, I spent several years observing a simple, frustrating pattern: Nigerians who care deeply about their health — who are deliberate about what they eat, who prioritise rest and exercise — reaching for supplements that weren't doing what the label promised. Not because they were fake products. But because most of the supplement industry is built around formulations designed for different bodies, different diets, and different nutritional gaps than the ones Nigerians actually have.",
      },
      {
        type: "quote",
        text: "The supplement industry in Nigeria is largely a resale market. Products made elsewhere, for other people, repackaged and sold here. We asked a different question: what would we build if we started from the Nigerian consumer?",
        attribution: "Banjo Ayanwola",
      },
      {
        type: "heading",
        text: "The Gap We Saw",
      },
      {
        type: "paragraph",
        text: "The data on Nigerian nutritional deficiencies is actually quite specific. Studies consistently show high rates of Vitamin D insufficiency (paradoxically, despite living in a sun-rich country — dark skin tones require more UV exposure for equivalent D3 synthesis). Iron deficiency anaemia affects a significant proportion of Nigerian women of reproductive age. Zinc deficiency is common in children. B12 deficiency is underdiagnosed across all age groups.",
      },
      {
        type: "paragraph",
        text: "Yet the supplements available in Nigerian pharmacies are overwhelmingly products formulated for Western populations — where the deficiency patterns are different, where diets include more fortified foods, and where the baseline micronutrient picture looks nothing like ours. We were importing someone else's solution to someone else's problem.",
      },
      {
        type: "heading",
        text: "Why Whole-Food Fermented",
      },
      {
        type: "paragraph",
        text: "The decision to build on a whole-food fermented platform was not a marketing choice. It was a scientific one. Bioavailability — the proportion of a nutrient that actually enters circulation and is available to cells — varies dramatically between synthetic and food-matrix forms. When we mapped the science against the cost of formulation, the case was clear: if the goal was genuinely better health outcomes rather than a cheaper product, whole-food fermented was the only intellectually honest starting point.",
      },
      {
        type: "callout",
        variant: "info",
        title: "On the name '365Biopharma'",
        body: "The name reflects a simple conviction: health is not seasonal, periodic, or occasional. It is a 365-day commitment. Biopharma reflects our grounding in biology and pharmaceutical-grade standards. Together, they describe what we are building — a company built around the science of daily, consistent, high-quality nutrition.",
      },
      {
        type: "heading",
        text: "Where We Are Going",
      },
      {
        type: "paragraph",
        text: "We launched vitalEssentials in 2024 with four products. By the end of 2025, we will have expanded our range, deepened our distribution network to cover at least ten Nigerian cities, and begun the process of making vitalEssentials the brand Nigerian families reach for by default when they think about supplementation.",
      },
      {
        type: "paragraph",
        text: "Beyond products, we are investing in education. Nigerian consumers deserve to understand what they are taking and why it works. We publish our formulation rationale, our supplement facts, and our clinical backing transparently. We believe an informed customer is a healthier customer — and ultimately, a more loyal one.",
      },
      {
        type: "paragraph",
        text: "I started 365Biopharma because I believed Nigerian health deserved a Nigerian solution — built here, formulated for here, and distributed with the care and accountability that our market has historically lacked. We are two years in. The work is just beginning.",
      },
    ],
  },

  // ─── FATIGUE & RECOVERY ───────────────────────────────────────────────────
  {
    slug: "fatigue-recovery-formula",
    title: "Fatigue & Recovery Formula: The Science of Fighting Tiredness",
    excerpt:
      "Our liquid Fatigue & Recovery formula is a targeted blend of B-complex, amino acids, and minerals designed to help the body bounce back faster. Here is what is in it and why.",
    date: "2026-04-12",
    author: "365Biopharma Team",
    authorRole: "Editorial Team",
    category: "Health & Wellness",
    readTime: "5 min read",
    heroGradient: "from-orange-600 to-amber-500",
    accentColor: "#ea580c",
    content: [
      {
        type: "paragraph",
        text: "Fatigue is one of the most common complaints in Nigerian adults — and one of the most underaddressed. It is dismissed as stress, attributed to long working hours, treated with caffeine. But persistent tiredness often has a biological root: nutrient deficiencies that impair the body's energy production machinery at the cellular level.",
      },
      {
        type: "heading",
        text: "The Biology of Energy",
      },
      {
        type: "paragraph",
        text: "Energy in the body is produced through a process called the Krebs cycle — a sequence of chemical reactions that converts food into ATP, the molecule that powers every cell. This cycle requires a range of B vitamins as cofactors: B1 (thiamine), B2 (riboflavin), B3 (niacin), B5 (pantothenic acid), and B12. Deficiency in any one of these creates a bottleneck in energy production that no amount of caffeine or rest can fully compensate for.",
      },
      {
        type: "paragraph",
        text: "Additionally, magnesium is required for over 300 enzymatic reactions in the body, including ATP synthesis. Iron is essential for oxygen transport to tissues. L-carnitine helps shuttle fatty acids into mitochondria for fuel. When any of these are low, the result is fatigue that feels disproportionate to actual activity levels.",
      },
      {
        type: "stat-row",
        stats: [
          { value: "8+", label: "Active Ingredients", context: "B-complex, amino acids, minerals" },
          { value: "Liquid", label: "Format", context: "Faster absorption than tablets" },
          { value: "Daily", label: "Dosing", context: "Best taken in the morning with food" },
        ],
      },
      {
        type: "heading",
        text: "What the Formula Contains",
      },
      {
        type: "paragraph",
        text: "The vitalEssentials Fatigue & Recovery Formula is a liquid supplement — a deliberate choice, since liquid forms bypass the digestion of a tablet and begin absorption more rapidly. The formula targets each of the key biochemical drivers of fatigue:",
      },
      {
        type: "list",
        items: [
          "Full B-complex (B1, B2, B3, B5, B6, B7, B9, B12) — cofactors for the Krebs cycle and ATP production.",
          "Magnesium citrate — highly bioavailable form for enzymatic energy reactions and muscle recovery.",
          "L-Carnitine — amino acid that facilitates fatty acid transport into mitochondria for fuel.",
          "L-Glutamine — most abundant amino acid in the body; supports muscle recovery and gut integrity.",
          "Iron (as ferrous bisglycinate) — gentle, non-constipating form for oxygen transport.",
          "Vitamin C — supports iron absorption and antioxidant protection during recovery.",
          "Zinc — cofactor for over 300 enzymes including those involved in protein synthesis and repair.",
          "Coenzyme Q10 — essential component of the mitochondrial electron transport chain.",
        ],
      },
      {
        type: "callout",
        variant: "clinical",
        title: "Who benefits most from the Fatigue & Recovery Formula?",
        body: "The formula is particularly well-suited to: working professionals experiencing sustained energy drain, athletes and active individuals recovering from training, women during menstruation (iron loss increases fatigue risk), anyone recovering from illness, and individuals with high-stress lifestyles who are not sleeping well. If your fatigue is severe or unexplained, always consult a physician to rule out underlying conditions.",
      },
      {
        type: "heading",
        text: "Why Liquid Matters for Recovery",
      },
      {
        type: "paragraph",
        text: "Liquids begin absorbing in the stomach almost immediately, bypassing the 20–45 minute dissolution time of a tablet. For recovery contexts — post-exercise, post-illness, high-stress periods — faster delivery of nutrients means faster response. The Fatigue & Recovery Formula was designed for this urgency: real support, quickly delivered, no waiting for a tablet to dissolve.",
      },
    ],
  },

  // ─── VTE RISK SCREENING — HAEMATOLOGIST ───────────────────────────────────
  {
    slug: "vte-risk-screening-nigerian-practice",
    title: "VTE Risk in Nigerian Hospital Practice: A Guide to Guideline-Endorsed Screening",
    excerpt:
      "Venous thromboembolism remains under-recognised and under-prevented in Nigerian hospitals. This clinical review walks through the Padua, Caprini, and RCOG risk-assessment tools — and how to apply them across your inpatient caseload.",
    date: "2026-08-05",
    author: "365Biopharma Team",
    authorRole: "Medical Education",
    category: "Clinical Review",
    readTime: "6 min read",
    heroGradient: "from-slate-800 via-red-900 to-slate-900",
    accentColor: "#e11d48",
    content: [
      {
        type: "callout",
        variant: "info",
        title: "Who this article is for",
        body: "This clinical review is intended for Nigerian haematologists, physicians, surgeons, and obstetricians involved in the assessment and prevention of venous thromboembolism (VTE) in hospitalised patients.",
      },
      {
        type: "paragraph",
        text: "Venous thromboembolism — encompassing deep vein thrombosis (DVT) and pulmonary embolism (PE) — is one of the most preventable causes of in-hospital death globally. Yet in Nigerian practice, systematic VTE risk assessment remains inconsistently applied, particularly outside tertiary centres. Pharmacologic thromboprophylaxis is under-prescribed, partly because validated risk-stratification tools are unfamiliar, and partly because VTE complications are perceived as less common than they are — a perception shaped by under-diagnosis rather than true absence of disease.",
      },
      {
        type: "paragraph",
        text: "Current international guidelines — from the American Society of Hematology (ASH) and the Royal College of Obstetricians and Gynaecologists (RCOG) — provide validated, evidence-based scoring tools for three patient groups commonly seen in Nigerian hospital practice: acutely ill medical inpatients, surgical inpatients, and pregnant or postpartum patients. Each group has its own risk landscape and its own recommended tool.",
      },
      {
        type: "heading",
        text: "Why Systematic VTE Screening Matters in Nigeria",
      },
      {
        type: "stat-row",
        stats: [
          { value: "1 in 3", label: "Hospital Deaths", context: "VTE implicated in up to 1 in 3 preventable in-hospital deaths globally (WHO)" },
          { value: "~60%", label: "Preventable", context: "Of all hospital-acquired VTE events with appropriate prophylaxis" },
          { value: "Low", label: "Prophylaxis Rates", context: "Prophylaxis rates in Nigerian hospitals remain significantly below international benchmarks" },
        ],
      },
      {
        type: "paragraph",
        text: "Many VTE events in hospitalised patients are clinically silent until a catastrophic complication — massive PE, post-thrombotic syndrome, or sudden death — makes the diagnosis. The argument for systematic screening is not that every patient needs pharmacologic prophylaxis; it is that every patient deserves a structured decision about whether they do.",
      },
      {
        type: "heading",
        text: "Medical Inpatients — The Padua Prediction Score",
      },
      {
        type: "paragraph",
        text: "For acutely ill medical inpatients, the ASH 2018 guideline endorses the Padua Prediction Score (or IMPROVE score) to guide pharmacologic thromboprophylaxis decisions. The Padua score assigns weighted points across eleven risk factors:",
      },
      {
        type: "table",
        headers: ["Risk Factor", "Points"],
        rows: [
          ["Active cancer (local/distant metastases, or chemo/radiotherapy within 6 months)", "3"],
          ["Previous VTE (excluding superficial vein thrombosis)", "3"],
          ["Reduced mobility (bedrest with bathroom privileges for ≥3 days)", "3"],
          ["Known thrombophilic condition", "3"],
          ["Recent (≤1 month) trauma or surgery", "2"],
          ["Age ≥70 years", "1"],
          ["Heart and/or respiratory failure", "1"],
          ["Acute myocardial infarction or ischaemic stroke", "1"],
          ["Acute infection and/or rheumatological disorder", "1"],
          ["Obesity (BMI ≥30)", "1"],
          ["Ongoing hormonal treatment", "1"],
        ],
      },
      {
        type: "callout",
        variant: "clinical",
        title: "Padua score interpretation",
        body: "Score ≥4 = high risk — pharmacologic thromboprophylaxis is generally warranted, in the absence of bleeding risk or other contraindication. Score <4 = low risk — pharmacologic prophylaxis is generally not recommended. Always reassess if the clinical picture changes during admission.",
      },
      {
        type: "heading",
        text: "Surgical Inpatients — The Caprini Score",
      },
      {
        type: "paragraph",
        text: "The ASH 2019 guideline for surgical hospitalised patients supports risk-stratified thromboprophylaxis using the Caprini score — the most widely validated tool in this setting. Risk factors are grouped by point weighting:",
      },
      {
        type: "table",
        headers: ["Points Each", "Representative Risk Factors"],
        rows: [
          ["1 point", "Age 41–60; minor surgery; BMI >25; oral contraceptives/HRT; pregnancy or postpartum; varicose veins; medical patient on bedrest"],
          ["2 points", "Age 61–74; major surgery (>45 min); laparoscopic surgery (>45 min); malignancy; confined to bed >72 hours; central venous access"],
          ["3 points", "Age ≥75; personal or family history of VTE; known thrombophilia (e.g. Factor V Leiden, elevated homocysteine)"],
          ["5 points", "Elective major lower-extremity arthroplasty; hip/pelvis/leg fracture; acute stroke; multiple trauma; acute spinal cord injury (all within 1 month)"],
        ],
      },
      {
        type: "table",
        headers: ["Total Caprini Score", "Risk Category"],
        rows: [
          ["0", "Very low"],
          ["1–2", "Low"],
          ["3–4", "Moderate"],
          ["≥5", "High"],
        ],
      },
      {
        type: "paragraph",
        text: "Higher Caprini risk categories generally warrant pharmacologic and/or mechanical prophylaxis per local protocol. Note that the full Caprini tool includes additional items beyond the selection above — use the complete validated instrument in clinical practice.",
      },
      {
        type: "heading",
        text: "Pregnant and Postpartum Patients — RCOG Guidance",
      },
      {
        type: "paragraph",
        text: "Pregnancy and the postpartum period carry a 4–5-fold increase in VTE risk relative to non-pregnant women of the same age, driven by changes in coagulation, venous stasis, and vascular endothelial injury. RCOG guidance (Green-top Guideline No. 37a) recommends formal VTE risk assessment with numerical scoring at four time points: at booking, on any antenatal hospital admission, intrapartum, and immediately postpartum.",
      },
      {
        type: "list",
        items: [
          "Pre-existing factors: previous VTE, known high-risk thrombophilia, medical comorbidities (e.g. cancer, heart failure, sickle cell disease), age >35, obesity (BMI ≥30), parity ≥3, smoker, gross varicose veins",
          "Obstetric factors: multiple pregnancy, current pre-eclampsia, assisted reproduction/IVF, prolonged labour (>24h), postpartum haemorrhage, caesarean section",
          "New-onset/transient factors: any surgical procedure in pregnancy or puerperium, hyperemesis/dehydration, ovarian hyperstimulation syndrome, current systemic infection, admission or immobility, long-distance travel",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Risk assessment is not a one-off event",
        body: "VTE risk in pregnancy is dynamic. Assessment should be repeated if new risk factors emerge during the antenatal period, and again intrapartum or immediately postpartum — not treated as a single booking exercise. A patient low-risk at booking may become high-risk after an emergency caesarean.",
      },
      {
        type: "heading",
        text: "Key Takeaways for Nigerian Clinicians",
      },
      {
        type: "table",
        headers: ["Patient Group", "Recommended Tool", "Action Threshold"],
        rows: [
          ["Acutely ill medical inpatients", "Padua Prediction Score", "Score ≥4 → consider pharmacologic prophylaxis"],
          ["Surgical inpatients", "Caprini Score", "Moderate–High → pharmacologic ± mechanical prophylaxis"],
          ["Pregnant / postpartum patients", "RCOG numerical scoring", "Assess at booking, each admission, intrapartum, and postpartum"],
        ],
      },
      {
        type: "download",
        title: "VTE Risk-Screening Checklist",
        filename: "VTE_Risk_Screening_Checklist.pdf",
        url: "https://drive.google.com/uc?export=download&id=1YwMCMlnOsbO1jzteE4JXhxSPsHQM07xr",
        description: "A one-page consulting-room reference summarising the Padua, Caprini, and RCOG risk-assessment tools for Nigerian hospital practice. Based on current ASH and RCOG guidelines.",
      },
      {
        type: "references",
        items: [
          "Schünemann, H. J., Cushman, M., Burnett, A. E., et al. (2018). American Society of Hematology 2018 guidelines for management of venous thromboembolism: Prophylaxis for hospitalized and nonhospitalized medical patients. Blood Advances, 2(22), 3198–3225.",
          "Anderson, D. R., Morgano, G. P., Bennett, C., et al. (2019). American Society of Hematology 2019 guidelines for management of venous thromboembolism: Prevention of venous thromboembolism in surgical hospitalized patients. Blood Advances, 3(23), 3898–3944.",
          "Royal College of Obstetricians and Gynaecologists. (2015). Reducing the risk of venous thromboembolism during pregnancy and the puerperium. Green-top Guideline No. 37a. RCOG.",
        ],
      },
    ],
  },

  // ─── AFIB SCREENING — CARDIOLOGIST ────────────────────────────────────────
  {
    slug: "afib-screening-2024-esc-guidelines-nigeria",
    title: "Screening for Atrial Fibrillation in Nigerian Practice: Applying the 2024 ESC/EACTS Guidelines",
    excerpt:
      "The 2024 ESC/EACTS AF guidelines introduce the AF-CARE framework, a sex-neutral CHA₂DS₂-VA score, and updated screening thresholds. This review translates the key changes into actionable steps for Nigerian cardiologists and physicians.",
    date: "2026-08-07",
    author: "365Biopharma Team",
    authorRole: "Medical Education",
    category: "Clinical Review",
    readTime: "7 min read",
    heroGradient: "from-[#1e1b4b] via-[#312e81] to-brand-primary",
    accentColor: "#6366f1",
    content: [
      {
        type: "callout",
        variant: "info",
        title: "Who this article is for",
        body: "This clinical review is intended for Nigerian cardiologists, physicians, and allied health professionals involved in the detection, diagnosis, and management of atrial fibrillation (AF) and thromboembolic risk.",
      },
      {
        type: "paragraph",
        text: "Atrial fibrillation (AF) is the most common sustained cardiac arrhythmia — and one of the leading preventable causes of ischaemic stroke. The 2024 ESC/EACTS Guidelines for the Management of Atrial Fibrillation (Van Gelder et al., 2024) represent a significant update from the 2020 edition, introducing a structured AF-CARE framework, a revised thromboembolic risk score, and updated population-based screening recommendations. For Nigerian clinicians, these updates have direct practical implications: AF is under-diagnosed in our setting, and the stroke burden it drives is largely preventable.",
      },
      {
        type: "stat-row",
        stats: [
          { value: "~60M", label: "Affected Globally", context: "Estimated global AF prevalence (GBD 2019)" },
          { value: "5×", label: "Stroke Risk", context: "AF increases ischaemic stroke risk 5-fold" },
          { value: "~25%", label: "AF + T2DM", context: "Around 25% of AF patients have concurrent type 2 diabetes" },
        ],
      },
      {
        type: "paragraph",
        text: "Crucially, asymptomatic AF is common — symptoms correlate poorly with AF burden, and the presence or absence of palpitations is not a reliable basis for deciding who to screen. The 2024 guidelines are explicit on this point: screening decisions must be driven by age and risk profile, not symptom reporting.",
      },
      {
        type: "heading",
        text: "Who to Screen",
      },
      {
        type: "paragraph",
        text: "The 2024 ESC/EACTS guidelines provide age-stratified screening recommendations:",
      },
      {
        type: "list",
        items: [
          "All individuals aged 65 and older — routine heart rhythm assessment (pulse palpation or ECG rhythm check) is recommended at any healthcare contact.",
          "Individuals aged 75 and older — population-based screening using a prolonged non-invasive ECG-based approach should be considered.",
          "Individuals aged 65–74 with additional CHA₂DS₂-VA risk factors — candidates for population-based prolonged ECG screening.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Don't rely on symptoms to decide who to screen",
        body: "Asymptomatic AF is common and carries the same thromboembolic risk as symptomatic AF. Stroke risk is not reduced by the absence of palpitations. Screening must be age- and risk-driven, not symptom-driven.",
      },
      {
        type: "heading",
        text: "How to Screen",
      },
      {
        type: "list",
        items: [
          "Single time-point ('snapshot') screening: manual pulse palpation, single-lead ECG, or 12-lead ECG — suitable for routine clinical encounters.",
          "Prolonged screening: ambulatory or patch ECG monitoring — considered for higher-risk asymptomatic individuals (≥75, or ≥65 with added risk factors).",
          "Diagnosis requires ECG documentation: a 12-lead ECG (10 seconds), or ≥30 seconds on a single- or multi-lead ECG device, reviewed by a physician.",
          "Non-ECG consumer wearables (photoplethysmography-based) cannot confirm AF diagnosis alone — a positive reading requires ECG follow-up before any clinical decision is made.",
        ],
      },
      {
        type: "heading",
        text: "Initial Work-Up Once AF Is Suspected or Confirmed",
      },
      {
        type: "paragraph",
        text: "The 2024 guidelines recommend the following work-up for all patients with new AF:",
      },
      {
        type: "list",
        items: [
          "12-lead ECG — to confirm rhythm and rate, and identify structural or conduction abnormalities.",
          "Medical history — AF pattern, family history, comorbidities, prior thromboembolism and bleeding risk factors.",
          "Symptom and functional assessment using the modified EHRA symptom score.",
          "Blood tests: full blood count, kidney function, electrolytes, liver function, glucose/HbA1c, thyroid function.",
          "Transthoracic echocardiogram, where this will guide management decisions.",
        ],
      },
      {
        type: "heading",
        text: "Assessing Thromboembolic Risk — The Updated CHA₂DS₂-VA Score",
      },
      {
        type: "paragraph",
        text: "A key 2024 guideline change is the replacement of the CHA₂DS₂-VASc score with the sex-neutral CHA₂DS₂-VA score. Female sex is no longer scored as an independent risk factor — the 2024 guidelines treat it as an age-dependent risk modifier rather than a standalone criterion, reflecting updated evidence that biological sex adds little predictive value above and beyond the other variables.",
      },
      {
        type: "table",
        headers: ["Letter", "Criterion", "Points"],
        rows: [
          ["C", "Chronic heart failure (HFrEF, HFmrEF, HFpEF, or asymptomatic LVEF ≤40%)", "1"],
          ["H", "Hypertension (>140/90 mmHg on 2+ occasions, or on treatment)", "1"],
          ["A", "Age ≥75 years", "2"],
          ["D", "Diabetes mellitus (type 1 or 2, or on glucose-lowering therapy)", "1"],
          ["S", "Prior stroke, TIA, or arterial thromboembolism", "2"],
          ["V", "Vascular disease (coronary artery disease or peripheral vascular disease)", "1"],
          ["A", "Age 65–74 years", "1"],
        ],
      },
      {
        type: "table",
        headers: ["CHA₂DS₂-VA Score", "Interpretation"],
        rows: [
          ["0", "Anticoagulation not routinely required"],
          ["1", "Anticoagulation should be considered (shared decision-making)"],
          ["≥2", "Anticoagulation recommended (Class I)"],
        ],
      },
      {
        type: "callout",
        variant: "clinical",
        title: "Practical implication for Nigerian clinicians",
        body: "The high co-prevalence of hypertension, diabetes, and heart failure in Nigerian AF patients means many will score ≥2 on CHA₂DS₂-VA and qualify for anticoagulation. Always assess bleeding risk before initiating therapy and identify modifiable bleeding risk factors — many are addressable (e.g. uncontrolled hypertension, alcohol excess, non-steroidal anti-inflammatory use).",
      },
      {
        type: "heading",
        text: "The AF-CARE Framework — Comorbidity Management at Every Visit",
      },
      {
        type: "paragraph",
        text: "The 2024 guidelines organise the holistic management of AF around the AF-CARE framework. The 'C' domain — Comorbidity and risk-factor management — is not a one-off step but an ongoing responsibility at every clinical encounter:",
      },
      {
        type: "list",
        items: [
          "Hypertension — target treated systolic BP 120–129 mmHg, diastolic 70–79 mmHg.",
          "Heart failure — manage per current ESC heart failure guidelines; achieve euvolaemia.",
          "Type 2 diabetes — present in ~25% of AF patients; optimise glycaemic control.",
          "Obesity — weight loss ≥10% in overweight/obese patients is associated with reduced AF symptoms and burden.",
          "Obstructive sleep apnoea — consider screening where a rhythm-control strategy is planned.",
          "Physical inactivity — encourage 150–300 min/week moderate, or 75–150 min/week vigorous, aerobic activity.",
          "Alcohol excess — advise reduction to ≤3 standard drinks (≤30g alcohol) per week.",
        ],
      },
      {
        type: "heading",
        text: "Next Steps After AF Confirmation",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Calculate the CHA₂DS₂-VA score and initiate anticoagulation per the thresholds above — Class I recommendation for oral anticoagulation (OAC) in those at risk.",
          "Assess bleeding risk and identify modifiable bleeding risk factors before starting therapy.",
          "Address comorbidities and risk factors as part of ongoing AF-CARE at every visit — not as a one-off step.",
          "Evaluate rate/rhythm symptoms and discuss rate- vs. rhythm-control strategy with the patient.",
          "Build in dynamic reassessment — AF and its associated risks change over time; a score calculated today may differ significantly in six months.",
        ],
      },
      {
        type: "quote",
        text: "The 2024 guidelines make clear that AF management is not a once-and-done decision — it is a dynamic, evolving conversation between clinician and patient, driven by an ever-changing risk profile.",
      },
      {
        type: "download",
        title: "AFib Risk-Screening Checklist",
        filename: "AFib_Risk_Screening_Checklist.pdf",
        url: "https://drive.google.com/uc?export=download&id=1njLOlpqVyeKvXkRFrvsJ1xlFYjWPA-gG",
        description: "A one-page consulting-room reference covering who to screen, how to screen, initial work-up, CHA₂DS₂-VA scoring, and the AF-CARE comorbidity checklist. Based on the 2024 ESC/EACTS AF Guidelines.",
      },
      {
        type: "references",
        items: [
          "Van Gelder, I. C., Rienstra, M., Bunting, K. V., et al. (2024). 2024 ESC Guidelines for the management of atrial fibrillation developed in collaboration with the European Association for Cardio-Thoracic Surgery (EACTS). European Heart Journal, 45(36), 3314–3414. https://doi.org/10.1093/eurheartj/ehae176",
        ],
      },
    ],
  },

  // ─── CLINICAL ARTICLE — SGLT2i CLASS OVERVIEW ────────────────────────────
  {
    slug: "sglt2i-class-overview",
    title: "SGLT2 Inhibitors: The Class Overview",
    excerpt:
      "A decade of outcomes trial data has repositioned SGLT2 inhibitors as cardiorenal therapies that happen to also lower glucose. This 7-minute review covers what the trials actually showed, what it means for patients, how the class compares, and how Nigerian guidelines have responded.",
    date: "2026-08-21",
    author: "365Biopharma Team",
    authorRole: "Medical Education",
    category: "Clinical Review",
    readTime: "7 min read",
    heroGradient: "from-[#064e3b] via-[#065f46] to-brand-teal",
    accentColor: "#00B5A2",
    content: [
      {
        type: "callout",
        variant: "info",
        title: "Who this article is for",
        body: "This clinical review is intended for Nigerian endocrinologists, cardiologists, nephrologists, and general practitioners managing adults with type 2 diabetes, heart failure, or chronic kidney disease.",
      },
      {
        type: "paragraph",
        text: "A decade ago, sodium-glucose cotransporter-2 (SGLT2) inhibitors were a glucose-lowering option, evaluated the same way as any other oral antidiabetic agent. Today they sit among the most consequential additions to cardiometabolic-renal medicine in a generation — not because they lower blood sugar particularly aggressively, but because a series of large outcomes trials revealed they protect the heart and kidneys largely independent of glycaemic effect. This overview covers what those trials actually showed, what that means for patients, how the class stacks up against other treatment options, and how guideline bodies — including Nigeria's own — have responded.",
      },
      {
        type: "stat-row",
        stats: [
          { value: "39%", label: "Kidney Risk Reduction", context: "DAPA-CKD: relative risk reduction for ≥50% eGFR decline, ESKD, or kidney/CV death (HR 0.61)" },
          { value: "26%", label: "HF Risk Reduction", context: "DAPA-HF: relative risk reduction in worsening HF or CV death, regardless of diabetes status (HR 0.74)" },
          { value: "17%", label: "CV Risk Reduction", context: "DECLARE–TIMI 58: relative risk reduction in CV death or HF hospitalisation (HR 0.83)" },
        ],
      },
      {
        type: "heading",
        text: "What the Pivotal Trials Actually Showed",
      },
      {
        type: "table",
        headers: ["Trial", "Population", "Primary Finding", "Result"],
        rows: [
          ["DECLARE–TIMI 58", "17,160 adults with T2DM, most without prior CVD", "CV death or HF hospitalisation", "17% relative risk reduction (HR 0.83), driven by fewer HF hospitalisations; MACE not significantly reduced"],
          ["DAPA-HF", "4,744 adults with HFrEF, with/without T2DM", "Worsening HF or CV death", "26% relative risk reduction (HR 0.74); benefit consistent regardless of diabetes status"],
          ["DAPA-CKD", "4,304 adults with CKD, with/without T2DM", "≥50% eGFR decline, ESKD, or kidney/CV death", "39% relative risk reduction (HR 0.61); benefit similar with/without diabetes"],
        ],
      },
      {
        type: "paragraph",
        text: "DECLARE–TIMI 58 enrolled a broad T2DM population — most without prior cardiovascular disease — and its positive signal was specifically heart failure hospitalisation, not overall cardiovascular events. DAPA-HF then tested that heart-failure signal directly, in a population selected for reduced ejection fraction rather than diabetes, and the benefit held regardless of diabetes status — the first strong evidence this was a cardiac effect, not a diabetes effect. DAPA-CKD extended the same logic to the kidney, with consistent benefit whether or not patients had T2DM. This is why SGLT2 inhibitors are now discussed as cardiorenal therapies that happen to also lower glucose, rather than the reverse.",
      },
      {
        type: "heading",
        text: "What This Means for Patients",
      },
      {
        type: "paragraph",
        text: "The trial numbers matter to clinicians, but patients think in different terms — fewer hospital visits, more energy, less worry about their heart or kidneys failing.",
      },
      {
        type: "list",
        items: [
          "Fewer emergency trips to hospital for heart failure. In DAPA-HF, patients on dapagliflozin were roughly a quarter less likely to be hospitalised for worsening heart failure or to die from a heart-related cause.",
          "More time before kidneys reach dialysis. In DAPA-CKD, patients had close to 40% fewer instances of their kidney disease reaching a serious milestone — for a patient, that can mean years of delay before dialysis, which carries both major lifestyle disruption and significant cost in the Nigerian context.",
          "A once-daily tablet, not an injection — an easier habit to build than insulin or GLP-1 injections, with no needles or technique to teach.",
          "Modest weight loss instead of the weight gain common with sulfonylureas or insulin.",
          "Low risk of dangerous blood sugar crashes, since the class does not work by pushing the body to release more insulin.",
        ],
      },
      {
        type: "heading",
        text: "How SGLT2 Inhibitors Compare with Other Treatment Options",
      },
      {
        type: "subheading",
        text: "In Type 2 Diabetes",
      },
      {
        type: "list",
        items: [
          "Versus sulfonylureas (e.g., glimepiride, gliclazide): comparable glucose-lowering, but sulfonylureas carry materially higher hypoglycaemia risk and tend to cause weight gain. One head-to-head trial reported hypoglycaemia in roughly 24% of patients on a sulfonylurea versus roughly 2% on an SGLT2 inhibitor as add-on therapy to metformin.",
          "Versus DPP-4 inhibitors (e.g., vildagliptin): similar tolerability and low hypoglycaemia risk, but DPP-4 inhibitors have not demonstrated the cardiovascular or renal outcome benefits seen with SGLT2 inhibitors.",
          "Versus metformin: complementary, not competing. Metformin remains foundational, inexpensive first-line therapy; the shift is that guidelines increasingly favour an SGLT2 inhibitor as the next step specifically when a patient has, or is at risk of, cardiovascular or kidney disease.",
        ],
      },
      {
        type: "subheading",
        text: "In Heart Failure",
      },
      {
        type: "paragraph",
        text: "SGLT2 inhibitors are now one of four foundational pillars of guideline-directed therapy for HFrEF, alongside ACE inhibitors/ARNIs, beta-blockers, and mineralocorticoid receptor antagonists (MRAs). What sets this class apart is breadth: it is the only one of the four pillars with proven benefit across the full ejection-fraction spectrum — reduced, mildly reduced, and preserved — where older heart failure therapies have shown far more limited benefit, particularly in preserved ejection fraction.",
      },
      {
        type: "subheading",
        text: "In Chronic Kidney Disease",
      },
      {
        type: "list",
        items: [
          "Versus ACE inhibitors/ARBs alone: RAAS blockade remains the backbone of blood-pressure and albuminuria management, but SGLT2 inhibitors provide additive protection on top of RAAS therapy — not a replacement for it.",
          "Versus finerenone: KDIGO positions SGLT2 inhibitors as first-line, with finerenone recommended as an add-on when significant albuminuria persists despite an optimised RAAS inhibitor and SGLT2 inhibitor — sequential, not either/or.",
        ],
      },
      {
        type: "callout",
        variant: "clinical",
        title: "The pattern across all three areas",
        body: "SGLT2 inhibitors are increasingly positioned as a foundation to build on, rather than one option among several equally-weighted choices.",
      },
      {
        type: "heading",
        text: "How This Is Reshaping Guidelines — in Nigeria and Internationally",
      },
      {
        type: "list",
        items: [
          "KDIGO 2024 (kidney disease) gives SGLT2 inhibitors a Level 1A recommendation — its strongest grade — as first-line therapy for adults with T2DM, CKD, and an eGFR of 20 mL/min/1.73m² or above.",
          "ADA/EASD consensus has shifted toward recommending SGLT2 inhibitor consideration based on cardiorenal risk profile, independent of glycaemic target.",
          "In Nigeria, the Endocrine and Metabolism Society of Nigeria (EMSON) published its Standard of Care Guideline on Diabetes Mellitus in 2024, incorporating SGLT2 inhibitors into its own classification and management framework — local guidance now tracking the same evidence base as international bodies, even as implementation and access remain uneven.",
        ],
      },
      {
        type: "callout",
        variant: "key",
        title: "Key clinical shift for Nigerian practitioners",
        body: "The decision to consider an SGLT2 inhibitor increasingly starts with 'does this patient have elevated cardiorenal risk?' rather than 'is this patient's HbA1c above target?' Cardiorenal risk — not glycaemic control alone — is now the primary trigger for class initiation.",
      },
      {
        type: "references",
        items: [
          "Wiviott SD, Raz I, Bonaca MP, et al. Dapagliflozin and Cardiovascular Outcomes in Type 2 Diabetes. N Engl J Med. 2019;380(4):347–357.",
          "McMurray JJV, Solomon SD, Inzucchi SE, et al. Dapagliflozin in Patients with Heart Failure and Reduced Ejection Fraction. N Engl J Med. 2019;381(21):1995–2008.",
          "Heerspink HJL, Stefánsson BV, Correa-Rotter R, et al. Dapagliflozin in Patients with Chronic Kidney Disease. N Engl J Med. 2020;383(15):1436–1446.",
          "Kidney Disease: Improving Global Outcomes (KDIGO) 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int. 2024.",
          "Davies MJ, Aroda VR, Collins BS, et al. Management of Hyperglycaemia in Type 2 Diabetes, 2022. A Consensus Report by the ADA and EASD. Diabetes Care. 2022;45(11):2753–2786.",
          "Endocrine and Metabolism Society of Nigeria (EMSON). Standard of Care Guideline on the Scope, Framework, Classification, Evaluation, Prevention and Management of Diabetes Mellitus. Afr J Endocrinol Metab. 2024;14(1).",
          "Ridderstråle M, Andersen KR, Zeller C, Kim G, Woerle HJ, Broedl UC. Comparison of empagliflozin and glimepiride as add-on to metformin in patients with type 2 diabetes: a 208-week, double-blind, randomised, controlled trial. Lancet Diabetes Endocrinol. 2018.",
          "2023 Focused Update of the 2021 ESC Guidelines for the Diagnosis and Treatment of Acute and Chronic Heart Failure. Eur Heart J. 2023.",
        ],
      },
    ],
  },

  // ─── CLINICAL ARTICLE (FROM DOCUMENT) ─────────────────────────────────────
  {
    slug: "cardiorenal-burden-type2-diabetes-nigeria",
    title: "The Cardiorenal Burden of Type 2 Diabetes: A Clinical Review for Nigerian Practice",
    excerpt:
      "Type 2 diabetes in Nigeria is increasingly understood as a driver of overlapping cardiovascular and renal disease — not a glycemic disorder alone. A 5-minute clinical review for Nigerian healthcare professionals.",
    date: "2026-08-01",
    author: "365Biopharma Team",
    authorRole: "Medical Education",
    category: "Clinical Review",
    readTime: "5 min read",
    heroGradient: "from-slate-800 via-slate-700 to-brand-navy",
    accentColor: "#0072EC",
    content: [
      {
        type: "callout",
        variant: "info",
        title: "Who this article is for",
        body: "This clinical review is intended for Nigerian healthcare professionals — including physicians, pharmacists, nurses, and allied health practitioners — involved in the management of patients with type 2 diabetes.",
      },
      {
        type: "paragraph",
        text: "Type 2 diabetes (T2DM) is increasingly understood as a driver of overlapping cardiovascular and renal disease — not a glycemic disorder alone. A shift in international guidelines now recognises this overlap as central to care, often years before either complication is clinically apparent. For Nigerian clinicians this matters more than in most settings: the country carries the largest diabetes burden in the WHO African Region, and manages this burden within a health system where cardiovascular and renal complications are frequently diagnosed late.",
      },
      {
        type: "heading",
        text: "The Scale of the Problem in Nigeria",
      },
      {
        type: "stat-row",
        stats: [
          { value: "3.0M", label: "Nigerians with Diabetes", context: "IDF estimate, 2024" },
          { value: "73%", label: "Undiagnosed Rate", context: "Across the IDF Africa Region — the highest of any IDF region" },
          { value: "6.6M", label: "Projected by 2050", context: "IDF Diabetes Atlas, 11th edition" },
        ],
      },
      {
        type: "paragraph",
        text: "Nigeria has the highest number of adults living with diabetes of any country in the IDF Africa Region — an estimated 3.0 million in 2024, projected to reach 6.6 million by 2050. Roughly 73% of adults with diabetes across the region remain undiagnosed — the highest rate of any IDF region — meaning much of the region's cardiorenal risk is currently invisible to the health system.",
      },
      {
        type: "paragraph",
        text: "Nigeria also has the highest reported prevalence of intermediate hyperglycaemia ('prediabetes') of any country in the latest IDF Atlas — a large pipeline of patients approaching diabetes-range risk.",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Clinical implication",
        body: "The patients in front of you today likely represent a fraction of the true burden. Late diagnosis means many are first identified only after a cardiovascular or renal complication has already emerged.",
      },
      {
        type: "heading",
        text: "Why Glycemic Control Alone Isn't Enough",
      },
      {
        type: "paragraph",
        text: "Large cardiovascular and renal outcomes trials over the past decade show that risk in T2DM can progress independently of glycemic control — patients with well-managed HbA1c can still experience heart failure hospitalisation or progressive kidney decline, driven by shared haemodynamic and inflammatory pathways rather than glucose exposure alone.",
      },
      {
        type: "paragraph",
        text: "The conditions also cluster: T2DM plus early CKD already elevates cardiovascular risk, and T2DM plus heart failure accelerates renal decline. In Nigerian practice, renal and cardiovascular screening at the point of T2DM diagnosis remains inconsistent, particularly outside tertiary centres.",
      },
      {
        type: "quote",
        text: "Patients with well-managed HbA1c can still experience heart failure hospitalisation or progressive kidney decline — driven by haemodynamic and inflammatory pathways rather than glucose alone.",
      },
      {
        type: "heading",
        text: "The Guideline Shift: From Glucose-Centric to Organ-Protective Care",
      },
      {
        type: "paragraph",
        text: "The 2022 ADA/EASD Consensus Report incorporated cardiovascular and kidney outcomes trial data into its recommendations, encouraging clinicians to:",
      },
      {
        type: "list",
        items: [
          "Screen for cardiorenal risk at the time of diagnosis — not only after symptoms emerge.",
          "Select therapy with attention to a patient's overall risk profile rather than glycemic efficacy alone.",
          "Treat heart failure and CKD risk reduction as goals equal to glycemic control — particularly for patients with albuminuria, reduced eGFR, or prior cardiovascular events.",
        ],
      },
      {
        type: "heading",
        text: "What This Means for Everyday Practice",
      },
      {
        type: "callout",
        variant: "clinical",
        title: "Practical checklist for Nigerian clinicians",
        body: "Screen early: obtain baseline and periodic eGFR and urine albumin-to-creatinine ratio (UACR), even without symptoms. Ask about heart failure symptoms routinely in T2DM patients, regardless of known cardiac history — breathlessness, fatigue, and fluid retention are easy to under-recognise. Let overall cardiorenal risk — not HbA1c alone — inform treatment plan reviews. Coordinate across endocrinology, cardiology, and nephrology where possible — even informal communication can catch overlapping risk earlier.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "table",
        headers: ["Point", "Why It Matters"],
        rows: [
          ["Nigeria carries the largest diabetes burden in the IDF Africa Region", "Scale of undiagnosed and untreated cardiorenal risk is significant"],
          ["~73% of adults with diabetes in the Africa Region are undiagnosed", "Many patients present only after complications have developed"],
          ["CV and renal risk can progress independently of glycemic control", "HbA1c alone is an incomplete measure of a patient's risk"],
          ["Guidelines now recommend organ-risk screening at diagnosis", "Earlier identification changes the treatment conversation"],
        ],
      },
      {
        type: "references",
        items: [
          "International Diabetes Federation. IDF Diabetes Atlas, 11th edition. Brussels: International Diabetes Federation; 2025.",
          "World Health Organization Regional Office for Africa. Statement marking World Diabetes Day 2024: 'Breaking Barriers, Bridging Gaps.' 14 November 2024.",
          "Davies MJ, Aroda VR, Collins BS, et al. Management of Hyperglycemia in Type 2 Diabetes, 2022. A Consensus Report by the ADA and EASD. Diabetes Care. 2022;45(11):2753–2786.",
        ],
      },
    ],
  },
]

export const getFeaturedPost = (): BlogPost => blogPosts[0]
export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug)
export const getRelatedPosts = (slug: string, limit = 3): BlogPost[] =>
  blogPosts.filter((p) => p.slug !== slug).slice(0, limit)
