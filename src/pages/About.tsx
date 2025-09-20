import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Users, Award, Globe, Microscope, Heart, Shield } from "lucide-react";
import heroImage from "@/assets/hero-pharma.jpg";

const About = () => {
  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "50M+", label: "Lives Impacted" },
    { number: "200+", label: "Research Partners" },
    { number: "15", label: "Countries Served" }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Patient-Centered",
      description: "Every decision we make is guided by what's best for patient health and well-being."
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Scientific Excellence",
      description: "We pursue breakthrough science with rigorous standards and innovative approaches."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality & Safety",
      description: "Uncompromising commitment to the highest quality and safety standards in everything we do."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Impact",
      description: "Making essential medicines accessible to communities worldwide."
    }
  ];

  const milestones = [
    { year: "1999", event: "Founded with a vision to transform healthcare" },
    { year: "2005", event: "First FDA-approved nutritional supplement launched" },
    { year: "2012", event: "International expansion across 15 countries" },
    { year: "2018", event: "Achieved NSF International certification" },
    { year: "2023", event: "Launched vitalEssentials product line" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary/90 to-medical-500/90">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Company</h1>
          <p className="text-xl md:text-2xl font-light">
            Creating better health for people and a brighter future for the world
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              At vitalEssentials by 365biopharma, creating better health for people and a brighter future for the world is our purpose. 
              The science and technology we advance are constantly evolving. But through our enduring values, our ambition remains 
              steadfast. We strive to deliver truly transformative treatments, contributing significant value to society while 
              creating an exceptional experience for our people.
            </p>
            <Badge variant="outline" className="text-lg px-6 py-2">
              Founded in 1999
            </Badge>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape our commitment to excellence in healthcare.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-none bg-card-gradient shadow-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto text-primary mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Over two decades of innovation, growth, and commitment to improving global health.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-lg text-foreground">{milestone.event}</p>
                    {index < milestones.length - 1 && (
                      <div className="w-px h-12 bg-border ml-10 mt-6"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Leadership Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Our experienced leadership team brings together decades of expertise in pharmaceuticals, 
              biotechnology, and healthcare innovation.
            </p>
            <div className="flex justify-center gap-4">
              <div className="flex items-center gap-2 text-primary">
                <Users className="h-5 w-5" />
                <span>Diverse Expertise</span>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-2 text-primary">
                <Award className="h-5 w-5" />
                <span>Industry Recognition</span>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-2 text-primary">
                <Globe className="h-5 w-5" />
                <span>Global Vision</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Together, we can create a healthier world. Discover how vitalEssentials can be part of your wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-primary hover:text-primary-foreground">
              Explore Our Products
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;