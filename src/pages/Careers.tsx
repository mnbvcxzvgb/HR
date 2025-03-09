
import React, { useState } from 'react';
import { ArrowRight, Check, Briefcase, Clock, MapPin, GraduationCap, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import CardSection, { Card } from '@/components/CardSection';
import { useToast } from "@/hooks/use-toast";

interface JobPosition {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const Careers = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("jobs");
  
  const jobPositions: JobPosition[] = [
    {
      id: 1,
      title: "Security Officer",
      location: "City Center",
      type: "Full-time",
      description: "We're seeking dedicated security officers to join our team in providing exceptional service to government facilities. This role involves monitoring security systems, conducting patrols, and ensuring compliance with security protocols.",
      requirements: [
        "High school diploma or equivalent",
        "Security license (preferred)",
        "Strong attention to detail",
        "Excellent communication skills",
        "Ability to remain calm under pressure"
      ]
    },
    {
      id: 2,
      title: "Security Supervisor",
      location: "Business District",
      type: "Full-time",
      description: "Lead a team of security officers in delivering top-quality security services to our clients. This position involves managing staff schedules, conducting training, and ensuring service excellence.",
      requirements: [
        "2+ years of security experience",
        "Previous supervisory experience",
        "Security certification",
        "Strong leadership skills",
        "Excellent problem-solving abilities"
      ]
    },
    {
      id: 3,
      title: "Part-time Security Officer",
      location: "Multiple Locations",
      type: "Part-time",
      description: "Ideal for students or those seeking flexible hours, this position offers competitive pay and valuable experience in the security field. Help maintain safe environments while working on a schedule that fits your needs.",
      requirements: [
        "High school diploma or equivalent",
        "Flexible availability",
        "Reliable transportation",
        "Strong work ethic",
        "Good communication skills"
      ]
    }
  ];

  const handleApplyNow = (jobId: number) => {
    toast({
      title: "Application Started",
      description: `You're applying for position #${jobId}. Complete the form on the contact page.`,
    });
  };

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title="Join Our Team"
        subtitle="Discover rewarding career opportunities with competitive compensation, flexible scheduling, and a supportive work environment."
        imageSrc="/lovable-uploads/209496a9-2428-4907-a4a3-e4798c5fa59b.png"  
        primaryButtonText="View Open Positions"
        primaryButtonLink="#jobs"
        secondaryButtonText="Employee Benefits"
        secondaryButtonLink="#benefits"
        imagePosition="left"
      />

      {/* Tabs Navigation */}
      <div className="bg-company-gray py-6 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto space-x-8 pb-2">
            <a
              href="#jobs"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("jobs");
              }}
              className={`whitespace-nowrap px-3 py-2 font-medium text-sm rounded-md transition-colors ${
                activeTab === "jobs"
                  ? "bg-company-lightblue text-white"
                  : "text-gray-600 hover:text-company-lightblue"
              }`}
            >
              Open Positions
            </a>
            <a
              href="#benefits"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("benefits");
              }}
              className={`whitespace-nowrap px-3 py-2 font-medium text-sm rounded-md transition-colors ${
                activeTab === "benefits"
                  ? "bg-company-lightblue text-white"
                  : "text-gray-600 hover:text-company-lightblue"
              }`}
            >
              Benefits & Culture
            </a>
            <a
              href="#application"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("application");
              }}
              className={`whitespace-nowrap px-3 py-2 font-medium text-sm rounded-md transition-colors ${
                activeTab === "application"
                  ? "bg-company-lightblue text-white"
                  : "text-gray-600 hover:text-company-lightblue"
              }`}
            >
              Application Process
            </a>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <section id="jobs" className={`section-container py-16 ${activeTab !== "jobs" ? "hidden" : ""}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our available positions and find the perfect opportunity to match your skills and career goals.
          </p>
        </div>
        
        <div className="space-y-8">
          {jobPositions.map((job) => (
            <div key={job.id} className="glass-card p-6 rounded-xl hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-company-blue">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="inline-flex items-center text-sm text-gray-600">
                      <MapPin size={16} className="mr-1" /> {job.location}
                    </span>
                    <span className="inline-flex items-center text-sm text-gray-600">
                      <Clock size={16} className="mr-1" /> {job.type}
                    </span>
                  </div>
                </div>
                <Button 
                  className="mt-4 md:mt-0 bg-company-lightblue hover:bg-company-blue text-white button-hover-effect"
                  onClick={() => handleApplyNow(job.id)}
                >
                  Apply Now <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
              
              <div className="mt-4">
                <p className="text-gray-600 mb-4">{job.description}</p>
                <h4 className="font-semibold text-company-blue mb-2">Requirements:</h4>
                <ul className="space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={16} className="text-company-lightblue mr-2 mt-1 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits & Culture */}
      <section id="benefits" className={`bg-company-gray py-20 ${activeTab !== "benefits" ? "hidden" : ""}`}>
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits & Culture</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team members with comprehensive benefits and a positive, supportive work environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card
              title="Competitive Compensation"
              description="We offer a competitive salary of 63 ILS/hour (gross) to value your skills and contribution to our team."
              icon={<Briefcase size={28} />}
              delay={100}
            />
            <Card
              title="Flexible Schedules"
              description="Our flexible working arrangements are ideal for students and those balancing other commitments."
              icon={<Clock size={28} />}
              delay={300}
            />
            <Card
              title="Growth Opportunities"
              description="We provide training and clear pathways for advancement within our organization."
              icon={<GraduationCap size={28} />}
              delay={500}
            />
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Company Culture</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
                  alt="Team collaboration" 
                  className="rounded-xl shadow-md mb-6 h-64 w-full object-cover"
                />
                <h4 className="text-xl font-semibold mb-3 flex items-center">
                  <Users size={20} className="text-company-lightblue mr-2" />
                  Collaborative Environment
                </h4>
                <p className="text-gray-600">
                  We foster a collaborative atmosphere where team members support each other and work together to achieve common goals. Our open communication policy ensures that everyone's voice is heard and valued.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Work-life balance" 
                  className="rounded-xl shadow-md mb-6 h-64 w-full object-cover"
                />
                <h4 className="text-xl font-semibold mb-3 flex items-center">
                  <Heart size={20} className="text-company-lightblue mr-2" />
                  Work-Life Balance
                </h4>
                <p className="text-gray-600">
                  We understand the importance of balance. Our flexible schedules and supportive management help team members maintain a healthy work-life balance while still delivering exceptional service to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section id="application" className={`section-container py-20 ${activeTab !== "application" ? "hidden" : ""}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Apply</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our application process is straightforward and designed to help us find the right fit for our team.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-company-lightblue/30 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="order-1 md:w-1/2 md:text-right md:pr-10">
                  <h3 className="text-xl font-semibold mb-2 text-company-blue">1. Apply Online</h3>
                  <p className="text-gray-600">
                    Submit your application through our careers page or visit our contact page to send your resume and cover letter.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 flex items-center justify-center w-16 h-16 bg-company-lightblue rounded-full transform -translate-x-1/2 text-white font-bold text-xl z-10">
                  1
                </div>
                <div className="order-2 md:w-1/2 md:pl-10 invisible md:visible"></div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="order-2 md:order-1 md:w-1/2 md:text-right md:pr-10 invisible md:visible"></div>
                <div className="absolute left-0 md:left-1/2 flex items-center justify-center w-16 h-16 bg-company-lightblue rounded-full transform -translate-x-1/2 text-white font-bold text-xl z-10">
                  2
                </div>
                <div className="order-1 md:order-2 md:w-1/2 md:pl-10">
                  <h3 className="text-xl font-semibold mb-2 text-company-blue">2. Initial Screening</h3>
                  <p className="text-gray-600">
                    Our hiring team will review your application and contact qualified candidates for an initial phone screening.
                  </p>
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="order-1 md:w-1/2 md:text-right md:pr-10">
                  <h3 className="text-xl font-semibold mb-2 text-company-blue">3. Interview</h3>
                  <p className="text-gray-600">
                    Selected candidates will be invited for an in-person or virtual interview to discuss qualifications and expectations in detail.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 flex items-center justify-center w-16 h-16 bg-company-lightblue rounded-full transform -translate-x-1/2 text-white font-bold text-xl z-10">
                  3
                </div>
                <div className="order-2 md:w-1/2 md:pl-10 invisible md:visible"></div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="order-2 md:order-1 md:w-1/2 md:text-right md:pr-10 invisible md:visible"></div>
                <div className="absolute left-0 md:left-1/2 flex items-center justify-center w-16 h-16 bg-company-lightblue rounded-full transform -translate-x-1/2 text-white font-bold text-xl z-10">
                  4
                </div>
                <div className="order-1 md:order-2 md:w-1/2 md:pl-10">
                  <h3 className="text-xl font-semibold mb-2 text-company-blue">4. Job Offer</h3>
                  <p className="text-gray-600">
                    Successful candidates will receive a job offer outlining compensation, benefits, and start date details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-company-blue text-white py-20">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step toward joining our team today. We look forward to learning more about you!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-company-blue hover:bg-company-lightblue hover:text-white button-hover-effect"
            >
              <Link to="/contact">
                Apply Now <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-company-blue button-hover-effect"
            >
              <a href="tel:0534873215" className="flex items-center">
                <Phone size={16} className="mr-2" />
                Call Us: 0534873215
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
