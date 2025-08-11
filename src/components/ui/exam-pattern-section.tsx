import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Calendar, FileCheck } from 'lucide-react';

export const ExamPatternSection: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            SSC CGL Exam Pattern
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Detailed examination structure and marking scheme for all tiers
          </p>
        </div>

        {/* Overall Exam Pattern */}
        <Card className="bg-card border border-border shadow-card mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-primary" />
              Overall Exam Structure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Exam Tier</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Total Marks</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Mode</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Tier 1</td>
                    <td className="py-3 px-4">200</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-success/10 text-success">Online (CBT)</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Tier 2</td>
                    <td className="py-3 px-4">390</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-success/10 text-success">Online (CBT)</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Tier 3</td>
                    <td className="py-3 px-4">100</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-warning/10 text-warning">Offline (Descriptive)</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Tier 4</td>
                    <td className="py-3 px-4">-</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-primary/10 text-primary">Skill Test/Document Verification</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Tier 1 Pattern */}
        <Card className="bg-card border border-border shadow-card mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">CGL Tier 1 Exam Pattern</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Section</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Subject</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Questions</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Marks</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">1</td>
                    <td className="py-3 px-4">General Intelligence & Reasoning</td>
                    <td className="py-3 px-4">25</td>
                    <td className="py-3 px-4">50</td>
                    <td className="py-3 px-4 text-center" rowSpan={4}>
                      <Badge className="bg-primary/10 text-primary">60 minutes</Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">2</td>
                    <td className="py-3 px-4">General Awareness</td>
                    <td className="py-3 px-4">25</td>
                    <td className="py-3 px-4">50</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">3</td>
                    <td className="py-3 px-4">Quantitative Aptitude</td>
                    <td className="py-3 px-4">25</td>
                    <td className="py-3 px-4">50</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">4</td>
                    <td className="py-3 px-4">English Comprehension</td>
                    <td className="py-3 px-4">25</td>
                    <td className="py-3 px-4">50</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="py-3 px-4 font-semibold" colSpan={2}>TOTAL</td>
                    <td className="py-3 px-4 font-semibold">100</td>
                    <td className="py-3 px-4 font-semibold">200</td>
                    <td className="py-3 px-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
                <div>
                  <h4 className="font-semibold text-destructive">Negative Marking</h4>
                  <p className="text-sm text-muted-foreground">There is a penalty of 0.50 marks for each wrong answer</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tier 2 Pattern */}
        <Card className="bg-card border border-border shadow-card mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">CGL Tier 2 Exam Pattern</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Paper</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Applicable For</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Paper 1</td>
                      <td className="py-3 px-4">Compulsory for all posts</td>
                      <td className="py-3 px-4">
                        <Badge className="bg-primary/10 text-primary">2 hours 30 minutes</Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Paper 2</td>
                      <td className="py-3 px-4">Junior Statistical Officer (JSO) only</td>
                      <td className="py-3 px-4">
                        <Badge className="bg-warning/10 text-warning">2 hours</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Paper 3</td>
                      <td className="py-3 px-4">Assistant Audit Officer & Assistant Accounts Officer</td>
                      <td className="py-3 px-4">
                        <Badge className="bg-success/10 text-success">2 hours</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-destructive">Negative Marking</h4>
                    <p className="text-sm text-muted-foreground">There is a penalty of 0.50 marks for each wrong answer in Paper-II and Paper-III</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Tier 2 Paper 1 */}
        <Card className="bg-card border border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">SSC CGL Tier 2 Paper 1 Detailed Pattern</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left py-2 px-3 font-semibold text-foreground">Session</th>
                    <th className="text-left py-2 px-3 font-semibold text-foreground">Section</th>
                    <th className="text-left py-2 px-3 font-semibold text-foreground">Module</th>
                    <th className="text-left py-2 px-3 font-semibold text-foreground">Subject</th>
                    <th className="text-left py-2 px-3 font-semibold text-foreground">Questions</th>
                    <th className="text-left py-2 px-3 font-semibold text-foreground">Marks</th>
                    <th className="text-left py-2 px-3 font-semibold text-foreground">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2 px-3" rowSpan={2}>Session I</td>
                    <td className="py-2 px-3" rowSpan={2}>Section I</td>
                    <td className="py-2 px-3">Module 1</td>
                    <td className="py-2 px-3">Mathematical Abilities</td>
                    <td className="py-2 px-3">30</td>
                    <td className="py-2 px-3">90</td>
                    <td className="py-2 px-3" rowSpan={2}>1 hour</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-3">Module 2</td>
                    <td className="py-2 px-3">Reasoning & General Intelligence</td>
                    <td className="py-2 px-3">30</td>
                    <td className="py-2 px-3">90</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-3" rowSpan={2}></td>
                    <td className="py-2 px-3" rowSpan={2}>Section II</td>
                    <td className="py-2 px-3">Module 1</td>
                    <td className="py-2 px-3">English Language & Comprehension</td>
                    <td className="py-2 px-3">45</td>
                    <td className="py-2 px-3">135</td>
                    <td className="py-2 px-3" rowSpan={2}>1 hour</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-3">Module 2</td>
                    <td className="py-2 px-3">General Awareness</td>
                    <td className="py-2 px-3">25</td>
                    <td className="py-2 px-3">75</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-3" rowSpan={2}>Session II</td>
                    <td className="py-2 px-3" rowSpan={2}>Section III</td>
                    <td className="py-2 px-3">Module 1</td>
                    <td className="py-2 px-3">Computer Knowledge Test</td>
                    <td className="py-2 px-3">20</td>
                    <td className="py-2 px-3">
                      <Badge className="bg-accent/10 text-accent-foreground">60 (Qualifying)</Badge>
                    </td>
                    <td className="py-2 px-3">15 minutes</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">Module 2</td>
                    <td className="py-2 px-3">Data Entry Speed Test</td>
                    <td className="py-2 px-3">1 Task</td>
                    <td className="py-2 px-3">
                      <Badge className="bg-accent/10 text-accent-foreground">Qualifying</Badge>
                    </td>
                    <td className="py-2 px-3">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
                <div>
                  <h4 className="font-semibold text-destructive">Negative Marking</h4>
                  <p className="text-sm text-muted-foreground">There is a penalty of 1 mark for each wrong answer in Section-I, Section-II and Module-I of Section-III of Paper-I</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};