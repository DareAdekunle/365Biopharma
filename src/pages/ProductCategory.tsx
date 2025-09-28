import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Package, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProductCategory = () => {
  const { category } = useParams();
  
  const getCategoryInfo = (categorySlug: string) => {
    const categories: Record<string, any> = {
      "prescription-medications": {
        name: "Prescription Medications",
        description: "FDA-approved prescription drugs for various therapeutic areas",
        color: "from-blue-400 to-blue-600"
      },
      "vaccines-biologics": {
        name: "Vaccines & Biologics",
        description: "Cold-chain vaccines and biological products with specialized handling",
        color: "from-teal-400 to-teal-600"
      },
      "specialty-pharmaceuticals": {
        name: "Specialty Pharmaceuticals", 
        description: "High-value specialty drugs for complex medical conditions",
        color: "from-purple-400 to-purple-600"
      },
      "generic-medications": {
        name: "Generic Medications",
        description: "Cost-effective generic alternatives with proven quality",
        color: "from-orange-400 to-orange-600"
      },
      "heart-health": {
        name: "Heart Health Support",
        description: "Products supporting cardiovascular wellness",
        color: "from-red-400 to-red-600"
      },
      "energy-support": {
        name: "Energy Support",
        description: "Products supporting daily energy and vitality",
        color: "from-green-400 to-green-600"
      },
      "cardiology": {
        name: "Cardiology",
        description: "Cardiovascular medications and treatments",
        color: "from-red-400 to-red-600"
      },
      "oncology": {
        name: "Oncology", 
        description: "Cancer treatment medications and supportive care",
        color: "from-purple-400 to-purple-600"
      },
      "neurology": {
        name: "Neurology",
        description: "Neurological disorder treatments and brain health",
        color: "from-blue-400 to-blue-600"
      },
      "diabetes": {
        name: "Diabetes",
        description: "Diabetes management and blood sugar control",
        color: "from-green-400 to-green-600"
      },
      "respiratory": {
        name: "Respiratory",
        description: "Respiratory health and breathing support",
        color: "from-cyan-400 to-cyan-600"
      },
      "infectious-disease": {
        name: "Infectious Disease",
        description: "Antimicrobial and anti-infective treatments",
        color: "from-yellow-400 to-yellow-600"
      },
      "mental-health": {
        name: "Mental Health",
        description: "Mental wellness and psychiatric medications",
        color: "from-indigo-400 to-indigo-600"
      },
      "immunology": {
        name: "Immunology",
        description: "Immune system support and autoimmune treatments",
        color: "from-pink-400 to-pink-600"
      }
    };
    
    return categories[categorySlug] || {
      name: "Product Category",
      description: "Pharmaceutical products and solutions",
      color: "from-gray-400 to-gray-600"
    };
  };

  const categoryInfo = getCategoryInfo(category || "");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`relative h-[400px] bg-gradient-to-r ${categoryInfo.color}`}>
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl">
            <Link to="/products">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Products
              </Button>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {categoryInfo.name}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {categoryInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <Package className="h-16 w-16 text-primary mx-auto mb-6" />
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              We're currently developing detailed product pages for {categoryInfo.name.toLowerCase()}. 
              This section will feature comprehensive product information, specifications, and ordering details.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Request Product Information
              </Button>
              <Button size="lg" variant="outline">
                Contact Our Team
              </Button>
            </div>

            <Card className="p-6 bg-blue-50 border-blue-200">
              <div className="flex items-center justify-center mb-4">
                <Info className="h-5 w-5 text-blue-600 mr-2" />
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Development in Progress
                </Badge>
              </div>
              <p className="text-blue-800 text-sm">
                Our team is working to bring you detailed product catalogs, specifications, 
                and ordering capabilities for all therapeutic areas. Check back soon for updates!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What's Coming
            </h2>
            <p className="text-xl text-gray-600">
              Features that will be available in this product category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center border-2 border-gray-100">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Product Catalog
              </h3>
              <p className="text-gray-600">
                Comprehensive listing of all available products with detailed specifications
              </p>
            </Card>

            <Card className="p-6 text-center border-2 border-gray-100">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Info className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Product Information
              </h3>
              <p className="text-gray-600">
                Detailed product sheets, dosing information, and clinical data
              </p>
            </Card>

            <Card className="p-6 text-center border-2 border-gray-100">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ArrowLeft className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Easy Ordering
              </h3>
              <p className="text-gray-600">
                Streamlined ordering process with real-time availability and pricing
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCategory;