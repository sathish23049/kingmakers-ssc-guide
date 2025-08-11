import React, { useState } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/ui/hero-section';
import { ExamInfoSection } from '@/components/ui/exam-info-section';
import { JobPositionsSection } from '@/components/ui/job-positions-section';
import { ExamPatternSection } from '@/components/ui/exam-pattern-section';
import { CutoffSection } from '@/components/ui/cutoff-section';
import { CoachingSection } from '@/components/ui/coaching-section';
import Home from './Home';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<'ssc' | 'home'>('ssc');

  const handleNavigateHome = () => {
    setCurrentPage('home');
  };

  const handleNavigateBack = () => {
    setCurrentPage('ssc');
  };

  if (currentPage === 'home') {
    return <Home onNavigateBack={handleNavigateBack} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigateHome={handleNavigateHome} />
      <HeroSection />
      <ExamInfoSection />
      <JobPositionsSection />
      <ExamPatternSection />
      <CutoffSection />
      <CoachingSection />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">KingMakers School of Banking</h3>
            <p className="text-primary-foreground/80">
              Your trusted partner for competitive exam success in Chennai
            </p>
            <p className="text-sm text-primary-foreground/60 mt-4">
              © 2024 KingMakers School of Banking. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
