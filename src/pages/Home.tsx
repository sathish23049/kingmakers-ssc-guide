import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Award, Calendar, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';

interface HomeProps {
  onNavigateBack: () => void;
}

const Home: React.FC<HomeProps> = ({ onNavigateBack }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full text-accent-foreground mb-6">
              <Award className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Chennai's Leading Competitive Exam Institute</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to KingMakers School of Banking
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Your Gateway to Government Job Success - Expert Coaching for Banking, SSC, and Competitive Exams
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                onClick={onNavigateBack}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elevated px-8 py-4 text-lg font-semibold"
              >
                Explore SSC CGL
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-semibold"
              >
                View All Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">15,000+</div>
              <div className="text-sm text-muted-foreground">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Study Materials</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">20+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Training Programs
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive coaching programs designed to help you achieve success in competitive examinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border border-border shadow-card hover:shadow-elevated transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  Banking Exams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive preparation for all major banking examinations including IBPS, SBI, and RBI.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">IBPS PO</Badge>
                  <Badge variant="secondary">SBI Clerk</Badge>
                  <Badge variant="secondary">RBI Grade B</Badge>
                </div>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary text-primary-foreground shadow-primary hover:shadow-elevated transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mr-3">
                    <Award className="w-5 h-5 text-accent-foreground" />
                  </div>
                  SSC Examinations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90 mb-4">
                  Expert coaching for all SSC examinations with proven success methodology and comprehensive study materials.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-accent/20 text-accent-foreground">SSC CGL</Badge>
                  <Badge className="bg-accent/20 text-accent-foreground">SSC CHSL</Badge>
                  <Badge className="bg-accent/20 text-accent-foreground">SSC MTS</Badge>
                </div>
                <Button 
                  onClick={onNavigateBack}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Explore SSC CGL
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border shadow-card hover:shadow-elevated transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-success" />
                  </div>
                  Insurance & Others
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Specialized training for insurance sector examinations and other competitive exams.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">LIC AAO</Badge>
                  <Badge variant="secondary">NIACL</Badge>
                  <Badge variant="secondary">EPFO</Badge>
                </div>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose KingMakers?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover what makes us the preferred choice for competitive exam preparation in Chennai
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-card rounded-lg border border-border shadow-card">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Expert Faculty</h3>
              <p className="text-sm text-muted-foreground">Experienced educators and ex-government officials</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border shadow-card">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Comprehensive Materials</h3>
              <p className="text-sm text-muted-foreground">500+ study materials and practice tests</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border shadow-card">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-warning" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Proven Track Record</h3>
              <p className="text-sm text-muted-foreground">98% success rate with thousands of selections</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border shadow-card">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Personalized Approach</h3>
              <p className="text-sm text-muted-foreground">Individual attention and customized study plans</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to start your journey? Contact us today for more information about our programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card border border-border shadow-card text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground">+91 98765 43210</p>
                <p className="text-muted-foreground">+91 87654 32109</p>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border shadow-card text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground">info@kingmakersbanking.com</p>
                <p className="text-muted-foreground">admissions@kingmakersbanking.com</p>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border shadow-card text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Visit Us</h3>
                <p className="text-muted-foreground">Anna Nagar, Chennai</p>
                <p className="text-muted-foreground">Tamil Nadu, India</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-primary px-8 py-4"
            >
              Schedule a Counseling Session
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;