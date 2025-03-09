
import React from 'react';
import { ArrowRight, Award, BarChart3, Users, Briefcase, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <main className="overflow-hidden">
      {/* Main Hero Section with Recruitment Image */}
      <HeroSection
        title="Looking for a job that values your potential?"
        subtitle="It's time to focus on your financial future by joining our government security team in the modern city."
        imageSrc="/lovable-uploads/209496a9-2428-4907-a4a3-e4798c5fa59b.png"
        primaryButtonText="Apply Now"
        primaryButtonLink="/careers"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
        imagePosition="right"
      />

      {/* Key Benefits Section */}
      <section className="section-container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Our Team?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-company-lightblue/10 p-2 rounded-full mr-3 mt-1">
                  <div className="text-company-lightblue">
                    <Award size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">High Annual Salary - 63 ILS/hour (gross)</h3>
                  <p className="text-gray-600">Competitive compensation that values your skills and experience</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-company-lightblue/10 p-2 rounded-full mr-3 mt-1">
                  <div className="text-company-lightblue">
                    <Users size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Suitable for Students</h3>
                  <p className="text-gray-600">Flexible schedules that work with your educational commitments</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-company-lightblue/10 p-2 rounded-full mr-3 mt-1">
                  <div className="text-company-lightblue">
                    <Briefcase size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Young and Dynamic Work Environment</h3>
                  <p className="text-gray-600">Join a team of motivated professionals in a positive atmosphere</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-company-lightblue/10 p-2 rounded-full mr-3 mt-1">
                  <div className="text-company-lightblue">
                    <BarChart3 size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Excellent Conditions from Day One</h3>
                  <p className="text-gray-600">We value our team members from the start with great benefits</p>
                </div>
              </li>
            </ul>
            <div className="pt-4">
              <Button 
                asChild
                className="bg-company-lightblue hover:bg-company-blue text-white button-hover-effect"
              >
                <Link to="/careers">
                  Join Our Team <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
              alt="Team meeting" 
              className="rounded-2xl shadow-xl animate-image-glow subtle-glow"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-company-blue text-white py-20">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Career With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our team today and be part of a company that values your talent and supports your growth.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-company-blue hover:bg-company-lightblue hover:text-white button-hover-effect"
            >
              <Link to="/careers">
                View Open Positions <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-company-blue button-hover-effect"
            >
              <Link to="/contact" className="flex items-center">
                <Phone size={16} className="mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
