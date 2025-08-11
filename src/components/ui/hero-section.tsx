import React from 'react';
import { Button } from '@/components/ui/button';
import { Award, Users, BookOpen, TrendingUp } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full text-accent-foreground mb-6">
            <Award className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Top-rated SSC CGL Coaching in Chennai</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            KingMakers School of Banking: Best SSC CGL Coaching Classes in Chennai
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
            Achieve SSC CGL success with top coaching. Expert tutors, personalized guidance, and comprehensive study materials.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elevated px-8 py-4 text-lg font-semibold"
            >
              Start Your Journey
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-semibold"
            >
              View Course Details
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-sm text-primary-foreground/80">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm text-primary-foreground/80">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold">260+</div>
              <div className="text-sm text-primary-foreground/80">Study Materials</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm text-primary-foreground/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};