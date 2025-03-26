import React from 'react';
import { ArrowRight, Check, Award, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import CardSection, { Card } from '@/components/CardSection';

const About = () => {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title="About Our Company"
        subtitle="We're on a mission to build an extraordinary team of talented individuals who share our vision for excellence and innovation."
        imagePosition="none"
        className="pb-8"
      />

      {/* Company History */}
      <section className="section-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3" 
              alt="Our team" 
              className="rounded-2xl shadow-xl animate-image-glow subtle-glow"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Our History</h2>
            <p className="text-gray-600">
              Founded in 2010, our company started with a small team of passionate professionals dedicated to providing exceptional security services. Over the years, we've grown from a local operation to a nationally recognized organization.
            </p>
            <p className="text-gray-600">
              Throughout our journey, we've maintained our commitment to excellence, continuously evolving to meet the changing needs of our clients and embracing innovation to stay at the forefront of our industry.
            </p>
            <p className="text-gray-600">
              Today, we're proud to employ over 200 talented individuals across multiple locations, each contributing to our mission of creating safer, more secure environments for our clients.
            </p>
            <div className="pt-4">
              <Button 
                asChild
                className="bg-company-lightblue hover:bg-company-blue text-white button-hover-effect"
              >
                <Link to="/careers">
                  Join Our Journey <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <CardSection
        title="Our Mission & Vision"
        centered={true}
        className="bg-company-gray py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Our Mission"
            description="To provide exceptional security services through a team of dedicated professionals, ensuring safety and peace of mind for our clients while creating rewarding career opportunities for our employees."
            icon={<Target size={28} />}
            delay={100}
          />
          <Card
            title="Our Vision"
            description="To be the leading security service provider known for excellence, innovation, and creating a workplace where talented individuals thrive and develop their full potential."
            icon={<Zap size={28} />}
            delay={300}
          />
        </div>
      </CardSection>

      {/* Core Values */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do, from how we serve our clients to how we support our team members.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="bg-company-lightblue/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
              <Award size={32} className="text-company-lightblue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in every aspect of our work, setting high standards and continuously improving.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-company-lightblue/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
              <Check size={32} className="text-company-lightblue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-600">
              We conduct business with honesty, transparency, and ethical principles, building trust with all stakeholders.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-company-lightblue/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
              <Zap size={32} className="text-company-lightblue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We embrace change and continuously seek innovative solutions to better serve our clients and employees.
            </p>
          </div>
        </div>
      </section>

      {/* Team Member Testimonials */}
      <section className="bg-company-blue text-white py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Team Says</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Hear directly from the talented individuals who make our company exceptional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="italic mb-6">
                "Joining this company was one of the best career decisions I've made. The supportive environment has helped me grow professionally while the flexible schedule allows me to balance work with my studies."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-company-lightblue rounded-full flex items-center justify-center text-white font-bold">
                    DM
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">David Miller</h4>
                  <p className="text-sm text-gray-300">Security Specialist, 2 years</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="italic mb-6">
                "The company truly values work-life balance and provides excellent benefits from day one. I appreciate the growth opportunities and the positive, collaborative culture."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-company-lightblue rounded-full flex items-center justify-center text-white font-bold">
                    SJ
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-300">Team Lead, 4 years</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="italic mb-6">
                "As a student, I appreciate the flexibility and competitive pay. The company invests in training and development, and I've learned valuable skills that will benefit me throughout my career."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-company-lightblue rounded-full flex items-center justify-center text-white font-bold">
                    MC
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-gray-300">Security Analyst, 1 year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
          Discover exciting career opportunities and become part of our success story.
        </p>
        <Button 
          asChild
          size="lg" 
          className="bg-company-lightblue hover:bg-company-blue text-white button-hover-effect"
        >
          <Link to="/careers">
            Explore Careers <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </section>
    </main>
  );
};

export default About;
