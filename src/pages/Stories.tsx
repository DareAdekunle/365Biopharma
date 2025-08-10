import { Calendar, User, ArrowRight, TrendingUp, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import newsImage from "@/assets/news-stories.jpg";

const Stories = () => {
  const featuredStory = {
    title: "PharmaDistrib Expands Cold Chain Network Across Asia-Pacific",
    excerpt: "Our new state-of-the-art cold storage facilities in Singapore, Tokyo, and Sydney ensure seamless vaccine distribution across the Asia-Pacific region, supporting global health initiatives.",
    date: "2024-01-15",
    author: "Dr. Sarah Chen",
    category: "Expansion",
    readTime: "5 min read",
    image: newsImage
  };

  const stories = [
    {
      title: "Partnership with WHO for Global Vaccine Distribution",
      excerpt: "PharmaDistrib joins World Health Organization's initiative to enhance vaccine accessibility in developing nations.",
      date: "2024-01-10",
      author: "Michael Roberts",
      category: "Partnership",
      readTime: "3 min read"
    },
    {
      title: "AI-Powered Inventory Management Reduces Waste by 40%",
      excerpt: "Our new artificial intelligence system optimizes inventory levels, significantly reducing pharmaceutical waste while ensuring product availability.",
      date: "2024-01-08",
      author: "Dr. Emily Watson",
      category: "Technology",
      readTime: "4 min read"
    },
    {
      title: "Q4 2023 Financial Results: Record Growth in Specialty Pharmaceuticals",
      excerpt: "Fourth quarter results show 35% growth in specialty pharmaceutical distribution, driven by increased demand for oncology treatments.",
      date: "2024-01-05",
      author: "James Thompson",
      category: "Financial",
      readTime: "6 min read"
    },
    {
      title: "Sustainability Initiative: Carbon-Neutral Delivery Network",
      excerpt: "PharmaDistrib commits to achieving carbon neutrality in our delivery network by 2025 through electric vehicles and renewable energy.",
      date: "2024-01-03",
      author: "Lisa Park",
      category: "Sustainability",
      readTime: "4 min read"
    },
    {
      title: "New FDA Certification for Advanced Cold Storage Facilities",
      excerpt: "Our latest cold storage facilities receive FDA certification, meeting the highest standards for vaccine and biologics storage.",
      date: "2023-12-28",
      author: "Dr. Robert Kim",
      category: "Certification",
      readTime: "3 min read"
    },
    {
      title: "Industry Recognition: Excellence in Pharmaceutical Logistics Award",
      excerpt: "PharmaDistrib receives prestigious industry award for outstanding contribution to pharmaceutical supply chain innovation.",
      date: "2023-12-25",
      author: "Anna Rodriguez",
      category: "Award",
      readTime: "2 min read"
    }
  ];

  const categories = [
    { name: "All Stories", count: 24 },
    { name: "Company News", count: 8 },
    { name: "Technology", count: 6 },
    { name: "Partnerships", count: 5 },
    { name: "Sustainability", count: 3 },
    { name: "Awards", count: 2 }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Technology": return TrendingUp;
      case "Award": return Award;
      case "Expansion": return Globe;
      default: return Calendar;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-primary to-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Stories & News
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Stay updated with the latest developments, partnerships, and innovations from PharmaDistrib as we continue to advance pharmaceutical distribution worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Badge variant="default" className="mb-4">Featured Story</Badge>
          </div>
          
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto">
                <img 
                  src={featuredStory.image} 
                  alt={featuredStory.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline">{featuredStory.category}</Badge>
                  <span className="text-sm text-muted-foreground">{featuredStory.readTime}</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                  {featuredStory.title}
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredStory.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredStory.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(featuredStory.date).toLocaleDateString()}</span>
                  </div>
                  
                  <Button variant="outline" className="flex items-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 bg-medical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar with Categories */}
            <div className="lg:w-1/4">
              <div className="sticky top-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-3 rounded-lg hover:bg-background transition-colors border border-transparent hover:border-border"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{category.name}</span>
                        <span className="text-xs text-muted-foreground">{category.count}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Stories Grid */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stories.map((story, index) => {
                  const CategoryIcon = getCategoryIcon(story.category);
                  
                  return (
                    <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 cursor-pointer">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <CategoryIcon className="h-4 w-4 text-primary" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {story.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight">
                        {story.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {story.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          <span className="mr-3">{story.author}</span>
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{new Date(story.date).toLocaleDateString()}</span>
                        </div>
                        <span>{story.readTime}</span>
                      </div>
                    </Card>
                  );
                })}
              </div>
              
              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Stories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter and never miss important updates from PharmaDistrib.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none"
            />
            <Button variant="secondary" className="px-8 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories;