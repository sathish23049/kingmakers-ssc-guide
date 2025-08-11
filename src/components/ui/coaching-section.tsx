import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Clock, Users, BookOpen, Target, Award } from 'lucide-react';

export const CoachingSection: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Coaching Info */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            SSC CGL Coaching Classes in Chennai
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            If you are looking for the best SSC CGL coaching classes in Chennai, KingMakers School of Banking should be your choice. 
            This institution offers comprehensive training with field experts, ex-central government officials, and experienced faculty.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card border border-border shadow-card hover:shadow-elevated transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-primary" />
                <CardTitle className="text-lg">Study Materials</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">260+ comprehensive study materials for thorough exam preparation</p>
            </CardContent>
          </Card>

          <Card className="bg-card border border-border shadow-card hover:shadow-elevated transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Clock className="w-6 h-6 text-primary" />
                <CardTitle className="text-lg">Class Duration</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">90 minutes daily classroom coaching at optimal learning pace</p>
            </CardContent>
          </Card>

          <Card className="bg-card border border-border shadow-card hover:shadow-elevated transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-primary" />
                <CardTitle className="text-lg">Practice Levels</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Six levels of practice for SSC and Railway examinations</p>
            </CardContent>
          </Card>

          <Card className="bg-card border border-border shadow-card hover:shadow-elevated transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-primary" />
                <CardTitle className="text-lg">Expert Faculty</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Field experts, ex-government officials, and experienced educators</p>
            </CardContent>
          </Card>

          <Card className="bg-card border border-border shadow-card hover:shadow-elevated transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                <CardTitle className="text-lg">Doubt Clearing</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Unlimited doubt clearing sessions and separate doubt classes</p>
            </CardContent>
          </Card>

          <Card className="bg-card border border-border shadow-card hover:shadow-elevated transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-primary" />
                <CardTitle className="text-lg">Online Support</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Online course options and home practice facilities available</p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <Card className="bg-gradient-secondary border border-border shadow-elevated mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Why Choose KingMakers School of Banking?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Many SSC CGL coaching classes in Chennai offer unlimited doubt clearing, which is a great benefit for students. 
                KingMakers arranges separate doubt sessions, seminars, and lectures to help students study and clear the exams. 
                We also offer online courses to help candidates prepare effectively.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                SSC CGL is a prestigious exam conducted by the Staff Selection Commission, the body that recruits staff at all levels 
                within various government departments and ministries. The SSC conducts 11 exams every year ranging from Junior Engineer 
                to Hindi Translator. The SSC CGL exam is the most competitive exam of them all, so you must get the best coaching.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Our Advantages:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Wide variety of study materials</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Individualized attention to each student</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Experienced and dedicated faculty</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Motivation to perform to full potential</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Success Features:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-accent-foreground" />
                      <span>Proven track record of success</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-accent-foreground" />
                      <span>Virtual learning tools with SIS account</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-accent-foreground" />
                      <span>Current affairs and mock tests</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-accent-foreground" />
                      <span>Video lectures and comprehensive coverage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Choose Section */}
        <Card className="bg-card border border-border shadow-card mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">How to Choose the Best SSC Training Institute in Chennai?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                The banking industry is one of the major contributors to the growth of Indian Economy. More bank branches are being 
                opened in every part of the country, which translates to more employment options for aspirants. Lakhs of fresh graduates 
                appear for competitive exams that will help them secure Government and public sector jobs.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Selection Criteria:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <Badge className="bg-primary/10 text-primary mt-0.5">1</Badge>
                      <span><strong>Comprehensive Coverage:</strong> All topics including quantitative ability, reasoning, English, computers, and current affairs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Badge className="bg-primary/10 text-primary mt-0.5">2</Badge>
                      <span><strong>Live Sessions:</strong> Interactive sessions by experienced faculty for quick doubt clarification</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Badge className="bg-primary/10 text-primary mt-0.5">3</Badge>
                      <span><strong>Personalized Coaching:</strong> Individual attention to each student's learning needs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Badge className="bg-primary/10 text-primary mt-0.5">4</Badge>
                      <span><strong>Online Facility:</strong> Latest exam pattern and syllabus with flexible class options</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Banking vs SSC Exams:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Similar syllabi with subtle differences in focus areas</li>
                    <li>• Banking exams have more difficult reasoning sections</li>
                    <li>• Quantitative aptitude sections are very similar</li>
                    <li>• Banking focuses more on finance & economy in current affairs</li>
                    <li>• SSC emphasizes static general knowledge more</li>
                    <li>• Computer aptitude is more important in banking exams</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Institute Features */}
        <Card className="bg-card border border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">KingMakers School of Banking Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                KingMakers School of Banking is a leading SSC Coaching Center with several branches in Chennai. 
                Our coaching center provides top-notch training for exam aspirants with comprehensive features.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Our Offerings:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Exhaustive study materials</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Mock and speed tests on weekends</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Laboratory facilities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Best and experienced faculty</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Special Programs:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-accent-foreground" />
                      <span>Crash course for Tier I exam</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-accent-foreground" />
                      <span>Free SSC CGL Tier II coaching</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-accent-foreground" />
                      <span>Weekend practice sessions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-accent-foreground" />
                      <span>Regular doubt clearance</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center pt-6">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-primary px-8 py-4"
                >
                  Enroll with the Best SSC CGL Coaching Classes Today
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};