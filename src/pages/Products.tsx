import { Search, Filter, Package, Thermometer, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import productsImage from "@/assets/products-showcase.jpg";

const Products = () => {
  const categories = [
    {
      name: "Prescription Medications",
      description: "FDA-approved prescription drugs for various therapeutic areas",
      icon: Package,
      productCount: "2,500+",
      features: ["Temperature Controlled", "Batch Tracking", "Expiry Management"]
    },
    {
      name: "Vaccines & Biologics",
      description: "Cold-chain vaccines and biological products with specialized handling",
      icon: Thermometer,
      productCount: "850+",
      features: ["Cold Chain", "Real-time Monitoring", "Compliance Certified"]
    },
    {
      name: "Specialty Pharmaceuticals",
      description: "High-value specialty drugs for complex medical conditions",
      icon: Shield,
      productCount: "1,200+",
      features: ["Secure Transport", "Patient Programs", "Access Solutions"]
    },
    {
      name: "Generic Medications",
      description: "Cost-effective generic alternatives with proven quality",
      icon: Clock,
      productCount: "5,000+",
      features: ["Cost Effective", "Quality Assured", "Wide Selection"]
    }
  ];

  const therapeuticAreas = [
    "Cardiology",
    "Oncology", 
    "Neurology",
    "Diabetes",
    "Respiratory",
    "Infectious Disease",
    "Mental Health",
    "Immunology"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-primary to-primary-dark">
        <div className="absolute inset-0">
          <img 
            src={productsImage} 
            alt="Pharmaceutical products" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Product Portfolio
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Comprehensive pharmaceutical solutions across all therapeutic areas with guaranteed quality and reliable supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-medical-light border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search products, NDC numbers, or drug names..." 
                  className="pl-10 h-12"
                />
              </div>
            </div>
            <Button variant="outline" className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of pharmaceutical products across major categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-sm font-medium">
                    {category.productCount}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full">
                  Explore Category
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Areas */}
      <section className="py-16 bg-medical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Therapeutic Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We serve all major therapeutic areas with specialized expertise and tailored solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {therapeuticAreas.map((area, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-md transition-all duration-300 hover:border-primary/20 cursor-pointer">
                <h3 className="font-semibold text-foreground mb-2">{area}</h3>
                <p className="text-sm text-muted-foreground">View Products</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Comprehensive Distribution Services
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Thermometer className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cold Chain Management</h3>
                    <p className="text-muted-foreground">Temperature-controlled storage and transportation for vaccines and biologics.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Quality Assurance</h3>
                    <p className="text-muted-foreground">Rigorous quality control processes ensuring product integrity throughout the supply chain.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Package className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Inventory Management</h3>
                    <p className="text-muted-foreground">Advanced inventory tracking with real-time visibility and automated reordering.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-medical-accent/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Request Product Information</h3>
              <p className="text-muted-foreground mb-6">
                Need specific product details or availability? Our team is ready to assist you with customized solutions.
              </p>
              <div className="space-y-4">
                <Input placeholder="Product name or NDC number" />
                <Input placeholder="Your email address" />
                <Button className="w-full">Submit Request</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;