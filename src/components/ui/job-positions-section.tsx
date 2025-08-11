import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, GraduationCap } from 'lucide-react';

export const JobPositionsSection: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Job Positions & Eligibility
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive overview of available positions, age limits, and qualification requirements
          </p>
        </div>

        <Card className="bg-card border border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Building className="w-6 h-6 mr-2 text-primary" />
              Exam-wise Job Positions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border bg-muted/50">
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Exam</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Job Types</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Age Limit</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Qualification</th>
                  </tr>
                </thead>
                <tbody>
                  {/* SSC CGL Positions */}
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4" rowSpan={8}>
                      <Badge className="bg-primary text-primary-foreground text-base px-3 py-1">SSC - CGL</Badge>
                    </td>
                    <td className="py-4 px-4 font-medium">Assistant Audit Officer</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>18-30</span>
                      </div>
                    </td>
                    <td className="py-4 px-4" rowSpan={2}>
                      <div className="flex items-start space-x-1">
                        <GraduationCap className="w-4 h-4 text-muted-foreground mt-0.5" />
                        <span className="text-sm">Essential: Bachelor's Degree</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">Assistant Accounts Officer</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>18-30</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">Junior Statistical Officer</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>18-32</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-start space-x-1">
                        <GraduationCap className="w-4 h-4 text-muted-foreground mt-0.5" />
                        <div className="text-sm">
                          <p>Bachelor's Degree with 60% in Mathematics (12th)</p>
                          <p className="text-muted-foreground">OR</p>
                          <p>Bachelor's with Statistics as subject</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">Assistant Section Officer</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>18-30</span>
                      </div>
                    </td>
                    <td className="py-4 px-4" rowSpan={3}>
                      <div className="flex items-start space-x-1">
                        <GraduationCap className="w-4 h-4 text-muted-foreground mt-0.5" />
                        <span className="text-sm">Essential: Bachelor's Degree</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">Research Assistant in NHRC</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>18-30</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">Inspector</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>18-30</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">Sub Inspector</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>18-30</span>
                      </div>
                    </td>
                    <td className="py-4 px-4" rowSpan={2}>
                      <div className="flex items-start space-x-1">
                        <GraduationCap className="w-4 h-4 text-muted-foreground mt-0.5" />
                        <span className="text-sm">Bachelor's Degree</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">Upper Division Clerk</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>18-27</span>
                      </div>
                    </td>
                  </tr>

                  {/* SSC CHSL Positions */}
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4" rowSpan={3}>
                      <Badge className="bg-success text-success-foreground text-base px-3 py-1">SSC - CHSL</Badge>
                    </td>
                    <td className="py-4 px-4 font-medium">Lower Division Clerk</td>
                    <td className="py-4 px-4" rowSpan={3}>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>18-27</span>
                      </div>
                    </td>
                    <td className="py-4 px-4" rowSpan={3}>
                      <div className="flex items-start space-x-1">
                        <GraduationCap className="w-4 h-4 text-muted-foreground mt-0.5" />
                        <span className="text-sm">12th Standard or equivalent</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">Junior Secretariat Assistant</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 font-medium">Data Entry Operator</td>
                  </tr>

                  {/* SSC MTS Positions */}
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4" rowSpan={2}>
                      <Badge className="bg-warning text-warning-foreground text-base px-3 py-1">SSC MTS</Badge>
                    </td>
                    <td className="py-4 px-4 font-medium">Multi-tasking Staff</td>
                    <td className="py-4 px-4" rowSpan={2}>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>18-27</span>
                      </div>
                    </td>
                    <td className="py-4 px-4" rowSpan={2}>
                      <div className="flex items-start space-x-1">
                        <GraduationCap className="w-4 h-4 text-muted-foreground mt-0.5" />
                        <span className="text-sm">Matriculation or equivalent</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Havildar</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Age Relaxation Information:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-foreground">OBC Category:</span>
                  <span className="text-muted-foreground ml-2">3 years relaxation</span>
                </div>
                <div>
                  <span className="font-medium text-foreground">SC/ST Category:</span>
                  <span className="text-muted-foreground ml-2">5 years relaxation</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};