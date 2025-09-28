import { Search, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import vitaminBottlesCollection from "@/assets/vitamin-bottles-collection.jpg";
import vitaminBottle1 from "@/assets/vitamin-bottle-1.jpg";
import tabletBottle from "@/assets/tablet-bottle.jpg";
import vaccineVial from "@/assets/vaccine-vial.jpg";

const Products = () => {
  const categories = [
    {
      name: "Prescription Medications",
      description: "FDA-approved prescription drugs for various therapeutic areas",
      productCount: "2,500+",
      image: tabletBottle,
      bgColor: "from-blue-400 to-blue-600",
      link: "/products/prescription-medications"
    },
    {
      name: "Vaccines & Biologics", 
      description: "Cold-chain vaccines and biological products with specialized handling",
      productCount: "850+",
      image: vaccineVial,
      bgColor: "from-teal-400 to-teal-600",
      link: "/products/vaccines-biologics"
    },
    {
      name: "Specialty Pharmaceuticals",
      description: "High-value specialty drugs for complex medical conditions", 
      productCount: "1,200+",
      image: vitaminBottle1,
      bgColor: "from-purple-400 to-purple-600",
      link: "/products/specialty-pharmaceuticals"
    },
    {
      name: "Generic Medications",
      description: "Cost-effective generic alternatives with proven quality",
      productCount: "5,000+", 
      image: vitaminBottle1,
      bgColor: "from-orange-400 to-orange-600",
      link: "/products/generic-medications"
    }
  ];

  const therapeuticAreas = [
    { name: "Cardiology", link: "/products/cardiology" },
    { name: "Oncology", link: "/products/oncology" }, 
    { name: "Neurology", link: "/products/neurology" },
    { name: "Diabetes", link: "/products/diabetes" },
    { name: "Respiratory", link: "/products/respiratory" },
    { name: "Infectious Disease", link: "/products/infectious-disease" },
    { name: "Mental Health", link: "/products/mental-health" },
    { name: "Immunology", link: "/products/immunology" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-between">
          {/* Hero Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
            <div className="max-w-lg">
              <div className="bg-black/80 text-white px-4 py-2 rounded-r-2xl mb-6 inline-block">
                <span className="text-sm font-medium">NEW FORMULATIONS</span><br/>
                <span className="text-sm">COMING SOON</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                vitalEssentials
              </h1>
              <p className="text-2xl text-white/90 mb-8">
                The ONE for you.
              </p>
            </div>
            
            {/* Product Image */}
            <div className="hidden lg:block">
              <img 
                src={vitaminBottlesCollection} 
                alt="VitalEssentials Product Collection" 
                className="h-80 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search products, ingredients, or therapeutic areas..." 
                  className="pl-10 h-12 border-2 border-gray-200 rounded-lg"
                />
              </div>
            </div>
            <Button variant="outline" className="flex items-center border-2 border-gray-200 hover:border-primary">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to={category.link}>
                <Card className="group overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className={`h-64 bg-gradient-to-br ${category.bgColor} relative flex items-center justify-center`}>
                    <div className="text-center text-white p-6">
                      <p className="text-sm font-medium uppercase tracking-wide mb-2">PRODUCTS FOR</p>
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                    </div>
                    
                    {/* Product Image */}
                    <div className="absolute bottom-4 right-4">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Explore Button */}
                    <div className="absolute bottom-4 left-4">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-white hover:text-white hover:bg-white/20 group-hover:bg-white/30 transition-all"
                      >
                        Explore Products
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
            
            {/* Special Category - Heart Health */}
            <Link to="/products/heart-health">
              <Card className="group overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="h-64 bg-gradient-to-br from-red-400 to-red-600 relative flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <p className="text-sm font-medium uppercase tracking-wide mb-2">PRODUCTS SUPPORTING</p>
                    <h3 className="text-2xl font-bold">Heart Health‡*</h3>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mt-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-white hover:text-white hover:bg-white/20 group-hover:bg-white/30 transition-all"
                    >
                      Explore Products
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Special Category - Energy Support */}
            <Link to="/products/energy-support">
              <Card className="group overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="h-64 bg-gradient-to-br from-green-400 to-green-600 relative flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <p className="text-sm font-medium uppercase tracking-wide mb-2">PRODUCTS SUPPORTING</p>
                    <h3 className="text-2xl font-bold">Energy§*</h3>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mt-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-white hover:text-white hover:bg-white/20 group-hover:bg-white/30 transition-all"
                    >
                      Explore Products
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Therapeutic Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Therapeutic Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized solutions across all major therapeutic categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {therapeuticAreas.map((area, index) => (
              <Link key={index} to={area.link}>
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-primary/20 cursor-pointer border-2 border-gray-100 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">{area.name}</h3>
                  <p className="text-sm text-primary font-medium">View Products →</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help Finding the Right Product?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our pharmaceutical experts are here to help you find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Contact Our Team
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Request Product Information
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;