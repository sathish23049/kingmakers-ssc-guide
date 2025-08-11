import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Target, Award } from 'lucide-react';

export const CutoffSection: React.FC = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            SSC CGL Cut Off 2023
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Candidates who clear the SSC CGL Cut Off Tier 1 will be shortlisted for Tier 2. 
            Check the category-wise and post-wise cut-off marks below.
          </p>
        </div>

        <Card className="bg-card border border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Target className="w-6 h-6 mr-2 text-primary" />
              Category-wise Cut-off Marks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border bg-muted/50">
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Category</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Finance & Accounts and AAO</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Statistics & JSO</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Other Posts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4">
                      <Badge className="bg-primary/10 text-primary">SC</Badge>
                    </td>
                    <td className="py-4 px-4 font-medium">154.29</td>
                    <td className="py-4 px-4 font-medium">148.51</td>
                    <td className="py-4 px-4 font-medium">126.68</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4">
                      <Badge className="bg-success/10 text-success">ST</Badge>
                    </td>
                    <td className="py-4 px-4 font-medium">148.99</td>
                    <td className="py-4 px-4 font-medium">146.65</td>
                    <td className="py-4 px-4 font-medium">118.17</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4">
                      <Badge className="bg-warning/10 text-warning">OBC</Badge>
                    </td>
                    <td className="py-4 px-4 font-medium">166.29</td>
                    <td className="py-4 px-4 font-medium">165.87</td>
                    <td className="py-4 px-4 font-medium">145.94</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4">
                      <Badge className="bg-accent/10 text-accent-foreground">EWS</Badge>
                    </td>
                    <td className="py-4 px-4 font-medium">167.18</td>
                    <td className="py-4 px-4 font-medium">166.07</td>
                    <td className="py-4 px-4 font-medium">143.44</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors bg-primary/5">
                    <td className="py-4 px-4">
                      <Badge className="bg-primary text-primary-foreground">UR</Badge>
                    </td>
                    <td className="py-4 px-4 font-bold text-primary">169.67</td>
                    <td className="py-4 px-4 font-bold text-primary">168.54</td>
                    <td className="py-4 px-4 font-bold text-primary">150.05</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4">
                      <Badge variant="outline">OH</Badge>
                    </td>
                    <td className="py-4 px-4 font-medium">147.95</td>
                    <td className="py-4 px-4 font-medium">132.72</td>
                    <td className="py-4 px-4 font-medium">115.98</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4">
                      <Badge variant="outline">HH</Badge>
                    </td>
                    <td className="py-4 px-4 font-medium">126.86</td>
                    <td className="py-4 px-4 font-medium">81.00</td>
                    <td className="py-4 px-4 font-medium">77.73</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4">
                      <Badge variant="outline">PWD-Others</Badge>
                    </td>
                    <td className="py-4 px-4 font-medium">109.83</td>
                    <td className="py-4 px-4 text-muted-foreground">-</td>
                    <td className="py-4 px-4 font-medium">77.73</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4">
                      <Badge variant="outline">VH</Badge>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">-</td>
                    <td className="py-4 px-4 font-medium">114.61</td>
                    <td className="py-4 px-4 font-medium">121.60</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4">
                      <Badge variant="outline">ESM</Badge>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">-</td>
                    <td className="py-4 px-4 text-muted-foreground">-</td>
                    <td className="py-4 px-4 font-medium">100.29</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">Highest Cut-off</h4>
                <p className="text-sm text-muted-foreground">UR Category - 169.67</p>
              </div>
              <div className="text-center p-4 bg-success/5 rounded-lg border border-success/20">
                <TrendingUp className="w-6 h-6 text-success mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">Average Range</h4>
                <p className="text-sm text-muted-foreground">130-160 marks</p>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/20">
                <Target className="w-6 h-6 text-accent-foreground mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">Target Score</h4>
                <p className="text-sm text-muted-foreground">150+ for safety</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};