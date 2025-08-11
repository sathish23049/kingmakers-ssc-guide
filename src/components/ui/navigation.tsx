import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Home, BookOpen, Users, Phone } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavigationProps {
  onNavigateHome: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigateHome }) => {
  return (
    <nav className="bg-card border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                KingMakers School of Banking
              </span>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              onClick={onNavigateHome}
              className="flex items-center space-x-2 hover:bg-secondary"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 hover:bg-secondary">
                  <span>🔸 SSC – 84,680 posts</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-popover border border-border shadow-elevated">
                <DropdownMenuItem className="hover:bg-secondary cursor-pointer">
                  <span className="font-medium">SSC CGL</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-secondary cursor-pointer">
                  <span className="font-medium">SSC CPO</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-secondary cursor-pointer">
                  <span className="font-medium">SSC CHSL</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-secondary cursor-pointer">
                  <span className="font-medium">SSC JE</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-secondary cursor-pointer">
                  <span className="font-medium">SSC GD</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-secondary cursor-pointer">
                  <span className="font-medium">SSC MTS</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-secondary cursor-pointer">
                  <span className="font-medium">SSC Stenographer</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-secondary cursor-pointer">
                  <span className="font-medium">IB SA & MTS</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" className="flex items-center space-x-2 hover:bg-secondary">
              <Users className="w-4 h-4" />
              <span>About</span>
            </Button>

            <Button variant="ghost" className="flex items-center space-x-2 hover:bg-secondary">
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </Button>

            <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-primary">
              Enroll Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};