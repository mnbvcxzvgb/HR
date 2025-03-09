
import React from 'react';
import { ArrowRight, Shield, Lock, FileCheck, Users, Eye, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import CardSection, { Card } from '@/components/CardSection';

const Services = () => {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        subtitle="We provide comprehensive security solutions tailored to meet the specific needs of various sectors, delivered by our skilled team of professionals."
        imagePosition="none"
        className="pb-8"
      />

      {/* Main Services */}
      <CardSection
        title="Core Security Services"
        subtitle="Our range of specialized services designed to meet diverse security needs"
        centered={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Government Security"
            description="Specialized security services for government facilities and offices, ensuring compliance with all regulatory requirements."
            icon={<Shield size={28} />}
            delay={100}
          />
          <Card
            title="Commercial Security"
            description="Comprehensive security solutions for businesses of all sizes, from retail establishments to corporate offices."
            icon={<Lock size={28} />}
            delay={300}
          />
          <Card
            title="Event Security"
            description="Professional security personnel for events of any scale, ensuring smooth operations and participant safety."
            icon={<Users size={28} />}
            delay={500}
          />
        </div>
      </CardSection>

      {/* Featured Service */}
      <section className="bg-company-gray py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Security monitoring center" 
                className="rounded-2xl shadow-xl animate-image-glow subtle-glow"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-4">Advanced Security Monitoring</h2>
              <p className="text-gray-600">
                Our state-of-the-art monitoring center provides 24/7 surveillance and rapid response capabilities, utilizing the latest technology to ensure maximum security for our clients.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-company-lightblue mr-2 mt-1 flex-shrink-0" />
                  <span>Real-time monitoring with immediate alert systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-company-lightblue mr-2 mt-1 flex-shrink-0" />
                  <span>Advanced video analytics and threat detection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-company-lightblue mr-2 mt-1 flex-shrink-0" />
                  <span>Rapid response coordination with local authorities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-company-lightblue mr-2 mt-1 flex-shrink-0" />
                  <span>Comprehensive reporting and security analysis</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button 
                  asChild
                  className="bg-company-lightblue hover:bg-company-blue text-white button-hover-effect"
                >
                  <Link to="/contact">
                    Request Information <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <CardSection
        title="Specialized Services"
        subtitle="Additional security solutions tailored for specific needs"
        centered={true}
        className="py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Security Consulting"
            description="Expert analysis of security vulnerabilities and customized recommendations to enhance your security posture."
            icon={<FileCheck size={28} />}
            delay={100}
          />
          <Card
            title="Surveillance Systems"
            description="Design, installation, and maintenance of advanced surveillance systems for comprehensive monitoring."
            icon={<Eye size={28} />}
            delay={300}
          />
        </div>
      </CardSection>

      {/* Case Studies */}
      <section className="bg-company-blue text-white py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Real examples of how our security services have made a difference for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Government Office Complex</h3>
              <p className="mb-4">
                Implemented a comprehensive security solution for a multi-building government complex, including personnel deployment, access control systems, and 24/7 monitoring.
              </p>
              <div className="text-company-lightblue text-sm font-semibold">
                Results:
              </div>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-company-lightblue mr-2 mt-1 flex-shrink-0" />
                  <span>50% reduction in security incidents</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-company-lightblue mr-2 mt-1 flex-shrink-0" />
                  <span>Improved employee safety ratings by 75%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-company-lightblue mr-2 mt-1 flex-shrink-0" />
                  <span>Enhanced visitor management efficiency</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Major Public Event</h3>
              <p className="mb-4">
                Provided security services for a high-profile public event with over 5,000 attendees, including crowd management, access control, and emergency response planning.
              </p>
              <div className="text-company-lightblue text-sm font-semibold">
                Results:
              </div>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-company-lightblue mr-2 mt-1 flex-shrink-0" />
                  <span>Zero major security incidents reported</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-company-lightblue mr-2 mt-1 flex-shrink-0" />
                  <span>Rapid response to minor incidents (average 2 minutes)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-company-lightblue mr-2 mt-1 flex-shrink-0" />
                  <span>97% satisfaction rating from event organizers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Our Services?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
          Contact us today to discuss how we can meet your security needs with our professional team and customized solutions.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button 
            asChild
            size="lg" 
            className="bg-company-lightblue hover:bg-company-blue text-white button-hover-effect"
          >
            <Link to="/contact">
              Request a Quote <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="button-hover-effect"
          >
            <Link to="/careers">
              Join Our Team
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Services;
