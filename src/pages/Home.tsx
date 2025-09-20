import { ArrowRight, Shield, Award, Globe, Users, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-pharma.jpg";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "NSF GMP Certified",
      description: "NSF/ANSI 455-2 Dietary Supplements certified facilities ensuring the highest quality standards."
    },
    {
      icon: Award,
      title: "Trusted Quality",
      description: "Over 50 years of providing quality products beneficial for your family's health and wellness."
    },
    {
      icon: Globe,
      title: "Premium Formulas",
      description: "Innovative formulations that support your body's needs with cutting-edge nutrition science."
    },
    {
      icon: Users,
      title: "Health Priority",
      description: "Your health is our priority - promoting well-being through trusted nutritional solutions."
    }
  ];

  const stats = [
    { number: "50+", label: "Years of Excellence" },
    { number: "NSF", label: "GMP Certified" },
    { number: "100%", label: "Quality Tested" },
    { number: "1M+", label: "Customers Served" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-primary to-primary-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Pharmaceutical laboratory" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Nourish Today.
              <span className="block text-medical-accent">Thrive Tomorrow.</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Unlock your potential with premium nutritional supplements designed to support your health journey every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                <Link to="/products" className="flex items-center">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-medical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose vitalEssentials
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge nutrition science with premium quality ingredients to deliver supplements that support your vitality and wellness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-medical-light to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Health. Our Priority.
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                For almost 60 years we have been providing quality products that are beneficial for your family's health. Promoting your health and well-being is our priority with trusted quality products and strict procedures to comply with industry standards.
              </p>
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium text-foreground">NSF Certified</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium text-foreground">Quality Promise</span>
                </div>
              </div>
              <Button size="lg" className="px-8">
                <Link to="/stories">Learn More</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-medical-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-lg font-medium text-foreground">Commitment & Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of health-conscious individuals who trust vitalEssentials for their nutritional wellness needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 border-white/30 text-white hover:bg-white/10">
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;