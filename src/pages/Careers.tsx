import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Briefcase, Clock, MapPin, GraduationCap, Users, Heart, Phone, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import CardSection, { Card } from '@/components/CardSection';
import { useToast } from "@/hooks/use-toast";
import Breadcrumbs from '@/components/Breadcrumbs';
import FilterBar from '@/components/FilterBar';
import WhatsAppChatModal from '@/components/WhatsAppChatModal';
import JobDetailsModal from '@/components/JobDetailsModal';
import { Helmet } from 'react-helmet-async';

interface JobPosition {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

interface JobListing {
  id: string;
  title: string;
  location: string;
  salary: string;
  jobType: string;
  requirements: string;
  companyType: string;
  badge: {
    text: string;
    color: string;
  };
  experienceLevel: string;
}

const Careers: React.FC = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("jobs");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isJobDetailsOpen, setIsJobDetailsOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState('');
  const [loading, setLoading] = useState(true);
  const [filteredJobs, setFilteredJobs] = useState<JobListing[]>([]);
  const [filters, setFilters] = useState({
    locations: [] as string[],
    jobTypes: [] as string[],
    experienceLevel: [] as string[]
  });

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

  const jobListings: JobListing[] = [
    {
      id: 'alon-unit',
      title: 'לוחמים/ות לתפקידי אבטחה משמעותיים',
      location: 'jerusalem',
      salary: '55₪ לשעה',
      jobType: 'full-time',
      requirements: 'יוצאי קרבי',
      companyType: 'alon-unit',
      badge: {
        text: 'יחידת אלון',
        color: 'blue-500'
      },
      experienceLevel: 'combat'
    },
    {
      id: 'mount-olives',
      title: 'דרושים לוחמים לרכס הר הזיתים',
      location: 'jerusalem',
      salary: '63₪ לשעה',
      jobType: 'full-time',
      requirements: 'רובאי 03 ומעלה',
      companyType: 'housing-ministry',
      badge: {
        text: 'רובאי 03',
        color: 'amber-500'
      },
      experienceLevel: 'combat'
    },
    {
      id: 'old-city',
      title: 'פרויקט האבטחה בעיר העתיקה',
      location: 'jerusalem',
      salary: '63₪ לשעה',
      jobType: 'full-time',
      requirements: 'יתרון לבעלי ניסיון',
      companyType: 'regular',
      badge: {
        text: 'מגייס',
        color: 'green-500'
      },
      experienceLevel: 'entry-level'
    }
  ];

  const handleApplyNow = (jobId: number) => {
    toast({
      title: "Application Started",
      description: `You're applying for position #${jobId}. Complete the form on the contact page.`,
    });
  };

  const handleShowJobDetails = (jobId: string) => {
    setSelectedJobId(jobId);
    setIsJobDetailsOpen(true);
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  // Filter jobs based on selected filters
  useEffect(() => {
    setLoading(true);
    
    // Simulate API loading
    const timer = setTimeout(() => {
      let results = [...jobListings];
      
      // Apply location filter
      if (filters.locations.length > 0) {
        results = results.filter(job => filters.locations.includes(job.location));
      }
      
      // Apply job type filter
      if (filters.jobTypes.length > 0) {
        results = results.filter(job => filters.jobTypes.includes(job.jobType));
      }
      
      // Apply experience level filter
      if (filters.experienceLevel.length > 0) {
        results = results.filter(job => filters.experienceLevel.includes(job.experienceLevel));
      }
      
      setFilteredJobs(results);
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [filters]);

  // Initialize with all jobs
  useEffect(() => {
    setFilteredJobs(jobListings);
    
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>משרות אבטחה | Magen Staffing</title>
        <meta name="description" content="משרות אבטחה איכותיות בירושלים מטעם Magen Staffing (מגן). מגוון תפקידים לבעלי רקע בטחוני עם תנאים מעולים ושכר גבוה." />
      </Helmet>
      
      <main className="bg-gray-50 min-h-screen pb-16" dir="rtl">
        {/* Header */}
        <HeroSection
          title="משרות אבטחה בירושלים | Magen Staffing"
          subtitle="התפקידים המובילים שלנו באבטחה לבעלי רקע בטחוני וללוחמים משוחררים"
          imagePosition="none"
        />
        
        <div className="container mx-auto px-4 sm:px-6 pt-8">
          <Breadcrumbs
            items={[{ label: 'בית', href: '/' }, { label: 'משרות', href: '/careers' }]}
            className="text-gray-600 mb-6"
          />
          
          {/* Filters and Results */}
          <div className="flex flex-col md:flex-row gap-6 -mt-8">
            {/* Filters Sidebar */}
            <div className="md:w-1/4 z-20">
              <div className="sticky top-[5.5rem]">
                <FilterBar onFilterChange={handleFilterChange} />
              </div>
            </div>
            
            {/* Job Listings */}
            <div className="md:w-3/4">
              {/* Applied Filters Summary */}
              {(filters.locations.length > 0 || filters.jobTypes.length > 0 || filters.experienceLevel.length > 0) && (
                <div className="bg-white p-4 rounded-lg shadow-sm mb-6 border border-gray-200">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-gray-700 font-medium">סינון לפי:</span>
                    
                    {filters.locations.length > 0 && (
                      <div className="px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-700 border border-blue-200">
                        {filters.locations.length === 1 ? 'מיקום אחד' : `${filters.locations.length} מיקומים`}
                      </div>
                    )}
                    
                    {filters.jobTypes.length > 0 && (
                      <div className="px-3 py-1 rounded-md text-sm font-medium bg-purple-100 text-purple-700 border border-purple-200">
                        {filters.jobTypes.length === 1 ? 'סוג משרה אחד' : `${filters.jobTypes.length} סוגי משרה`}
                      </div>
                    )}
                    
                    {filters.experienceLevel.length > 0 && (
                      <div className="px-3 py-1 rounded-md text-sm font-medium bg-amber-100 text-amber-700 border border-amber-200">
                        {filters.experienceLevel.length === 1 ? 'רמת ניסיון אחת' : `${filters.experienceLevel.length} רמות ניסיון`}
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {/* Results Count */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800">
                  {loading ? 'טוען משרות...' : `${filteredJobs.length} משרות נמצאו`}
                </h2>
              </div>
              
              {/* Loading State */}
              {loading ? (
                <div className="grid grid-cols-1 gap-6 animate-pulse">
                  {[1, 2, 3].map(n => (
                    <div key={n} className="bg-white rounded-lg shadow-md h-64"></div>
                  ))}
                </div>
              ) : filteredJobs.length === 0 ? (
                // Empty State
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">לא נמצאו משרות</h3>
                  <p className="text-gray-600 mb-6">נסה לשנות את פרמטרי החיפוש שלך או לבטל חלק מהסינונים</p>
                  <Button
                    variant="outline"
                    onClick={() => handleFilterChange({ locations: [], jobTypes: [], experienceLevel: [] })}
                    className="text-blue-600 border-blue-600 hover:bg-blue-50"
                  >
                    נקה את כל הסינונים
                  </Button>
                </div>
              ) : (
                // Results List
                <div className="grid grid-cols-1 gap-6">
                  {filteredJobs.map(job => (
                    <div 
                      key={job.id}
                      className="group bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-shadow hover:shadow-lg"
                    >
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-${job.badge.color} text-white mb-2`}>
                              {job.badge.text}
                            </span>
                            <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <span className="text-lg font-bold text-blue-600">{job.salary}</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-gray-700">
                              {job.location === 'jerusalem' ? 'ירושלים' : 
                               job.location === 'tel-aviv' ? 'תל אביב' : 
                               job.location === 'haifa' ? 'חיפה' : 
                               job.location === 'beer-sheva' ? 'באר שבע' : job.location}
                            </span>
                          </div>
                          
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-gray-700">
                              {job.jobType === 'full-time' ? 'משרה מלאה' : 
                               job.jobType === 'part-time' ? 'משרה חלקית' : 
                               job.jobType === 'shifts' ? 'משמרות' : job.jobType}
                            </span>
                          </div>
                          
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span className="text-gray-700">
                              ניסיון נדרש: {job.requirements}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button
                            onClick={() => handleShowJobDetails(job.id)}
                            variant="outline"
                            className="flex-1 border-gray-300 hover:bg-gray-50 text-gray-700"
                          >
                            <span className="flex items-center justify-center gap-2">
                              <Info className="w-4 h-4" />
                              פרטים נוספים
                            </span>
                          </Button>
                          
                          <Button
                            onClick={() => setIsModalOpen(true)}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white"
                          >
                            <span className="flex items-center justify-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-current">
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z"/>
                              </svg>
                              שלח הודעה
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <WhatsAppChatModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <JobDetailsModal 
        isOpen={isJobDetailsOpen} 
        onClose={() => setIsJobDetailsOpen(false)} 
        jobId={selectedJobId} 
      />
    </>
  );
};

export default Careers;
