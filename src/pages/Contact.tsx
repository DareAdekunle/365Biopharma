import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Building, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Building,
      title: "Headquarters",
      details: ["123 Pharma Boulevard", "Healthcare District", "New York, NY 10001"],
      badge: "Main Office"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568", "Toll-free: +1 (800) 555-DRUG"],
      badge: "24/7 Support"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@365biopharma.com", "sales@365biopharma.com", "support@365biopharma.com"],
      badge: "Quick Response"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM EST", "Saturday: 9:00 AM - 2:00 PM EST", "Sunday: Emergency Only"],
      badge: "Extended Hours"
    }
  ];

  const offices = [
    {
      city: "New York",
      country: "USA",
      address: "123 Pharma Boulevard",
      phone: "+1 (555) 123-4567",
      email: "ny@365biopharma.com"
    },
    {
      city: "London",
      country: "UK",
      address: "45 Healthcare Street",
      phone: "+44 20 7123 4567",
      email: "london@365biopharma.com"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "88 Medical Center Road",
      phone: "+65 6123 4567",
      email: "singapore@365biopharma.com"
    },
    {
      city: "Sydney",
      country: "Australia",
      address: "12 Pharmaceutical Plaza",
      phone: "+61 2 1234 5678",
      email: "sydney@365biopharma.com"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-primary to-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Ready to partner with a trusted pharmaceutical distribution leader? Our team is here to help you find the right solutions for your healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will respond within 24 hours. For urgent inquiries, please call our hotline.
                </p>
              </div>

              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john.doe@hospital.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company/Organization
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Healthcare Provider Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Product inquiry, Partnership opportunity, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Please describe your inquiry in detail..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  Multiple ways to reach us for your convenience. We're committed to providing excellent customer service.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">{info.title}</h3>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {info.badge}
                      </Badge>
                    </div>
                    <div className="ml-13 space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 bg-medical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Global Offices
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              With offices worldwide, we provide local support and global reach for your pharmaceutical distribution needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {office.city}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{office.country}</p>
                
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="h-3 w-3 mr-1" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="h-3 w-3 mr-1" />
                    <span>{office.email}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Emergency Contact
          </h2>
          <p className="text-xl text-white/90 mb-8">
            For urgent pharmaceutical supply needs or critical situations, our emergency hotline is available 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-white">
              <Phone className="h-6 w-6 mr-3" />
              <span className="text-xl font-semibold">+1 (800) 555-URGENT</span>
            </div>
            <span className="text-white/60">|</span>
            <div className="flex items-center text-white">
              <Mail className="h-6 w-6 mr-3" />
              <span className="text-xl font-semibold">emergency@365biopharma.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;