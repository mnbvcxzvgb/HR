
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import HeroSection from '@/components/HeroSection';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(8, { message: "Please enter a valid phone number" }),
  inquiryType: z.string().min(1, { message: "Please select an inquiry type" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
    toast({
      title: "Form submitted successfully",
      description: "We'll get back to you as soon as possible.",
    });
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Have questions or ready to apply? Reach out to our team using the information below or the contact form."
        imagePosition="none"
        className="pb-8"
      />

      {/* Contact Details & Form */}
      <section className="section-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-company-lightblue/10 p-3 rounded-full mr-4">
                  <Phone size={24} className="text-company-lightblue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-gray-600 mb-1">Call us directly:</p>
                  <a href="tel:0534873215" className="text-company-lightblue font-medium text-lg hover:underline">
                    0534873215
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-company-lightblue/10 p-3 rounded-full mr-4">
                  <Mail size={24} className="text-company-lightblue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-600 mb-1">Send us an email:</p>
                  <a href="mailto:info@yourcompany.com" className="text-company-lightblue font-medium hover:underline">
                    info@yourcompany.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-company-lightblue/10 p-3 rounded-full mr-4">
                  <MapPin size={24} className="text-company-lightblue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Office Location</h3>
                  <p className="text-gray-600 mb-1">Visit us at:</p>
                  <address className="not-italic text-gray-600">
                    123 Business Avenue,<br />
                    Suite 456,<br />
                    City, Country
                  </address>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
                <p className="text-gray-600 mb-6 max-w-md">
                  Your message has been successfully submitted. We'll get back to you as soon as possible.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="inquiryType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Inquiry Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select the purpose of your message" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="job_application">Job Application</SelectItem>
                              <SelectItem value="service_inquiry">Service Inquiry</SelectItem>
                              <SelectItem value="general_question">General Question</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please provide details about your inquiry..." 
                              className="min-h-32"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-company-lightblue hover:bg-company-blue text-white"
                    >
                      Send Message <Send size={16} className="ml-2" />
                    </Button>
                  </form>
                </Form>
              </>
            )}
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-12 bg-company-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5290460699516!2d-51.2306193!3d-30.037878199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzE2LjQiUyA1McKwMTMnNTAuMyJX!5e0!3m2!1sen!2sus!4v1620296956936!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
