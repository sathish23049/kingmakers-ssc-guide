import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Clock, Users, GraduationCap } from 'lucide-react';

export const ExamInfoSection: React.FC = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            SSC CGL Exam Information
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive details about the Staff Selection Commission Combined Graduate Level examination
          </p>
        </div>

        {/* Basic Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-card border border-border shadow-card hover:shadow-elevated transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Recruiting Body</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Staff Selection Commission (SSC)</p>
            </CardContent>
          </Card>

          <Card className="bg-card border border-border shadow-card hover:shadow-elevated transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Age Limit</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">18-30 years (varies by post)</p>
            </CardContent>
          </Card>

          <Card className="bg-card border border-border shadow-card hover:shadow-elevated transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Qualification</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Bachelor's Degree from recognized university</p>
            </CardContent>
          </Card>

          <Card className="bg-card border border-border shadow-card hover:shadow-elevated transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Exam Mode</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Computer Based Test (CBT)</p>
            </CardContent>
          </Card>
        </div>

        {/* Service Types */}
        <Card className="bg-card border border-border shadow-card mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Type of Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">CGL</Badge>
                <span>Combined Graduate Level</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">CHSL</Badge>
                <span>Combined Higher Secondary Level</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Selection</Badge>
                <span>Selection Posts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">MTS</Badge>
                <span>Multi-Tasking Staff</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">GD</Badge>
                <span>General Duty</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Eligibility Conditions */}
        <Card className="bg-card border border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Eligibility Conditions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Age Requirements:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Minimum Age: 18 years</li>
                  <li>• Maximum Age: Depends on the specific job position</li>
                  <li>• Age relaxation for OBC: 3 years</li>
                  <li>• Age relaxation for SC/ST: 5 years</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">General Requirements:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Must be a citizen of India</li>
                  <li>• Bachelor's degree from a recognized university or institute</li>
                  <li>• Must meet the specific educational requirements for the chosen post</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};