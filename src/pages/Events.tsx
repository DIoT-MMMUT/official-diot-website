import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, MapPin, Clock, Users, FileText, Upload } from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';

const Events = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [formData, setFormData] = useState({
    participationType: '',
    teamSize: 1,
    paymentMethod: '',
    profilePhoto: null as File | null,
    paymentProof: null as File | null,
  });

  const events = [
    {
      title: 'SwiftWings 2025',
      date: 'Coming Soon',
      location: 'Main Campus',
      description: 'Annual drone competition featuring transformer theme with multiple categories and exciting challenges.',
      status: 'Coming Soon',
      registrationDeadline: '---',
      registrationLink:"#" //"https://swiftwings.vercel.app"
    },
    {
      title: 'IoT Workshop Series',
      date: 'Coming soon',
      location: 'Tech Lab A',
      description: 'Hands-on workshop covering IoT fundamentals, sensor integration, and data analytics.',
      status: 'Coming Soon',
      registrationDeadline: '---',
      registrationLink: "#"
    },
    {
      title: 'Drone Photography Contest',
      date: 'Coming soon',
      location: 'Campus Grounds',
      description: 'Showcase your aerial photography skills in this exciting competition.',
      status: 'Coming Soon',
      registrationDeadline: '---',
      registrationLink: "#"
    },
  ];

  const handleFileUpload = (file: File, field: string) => {
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
              Events & Competitions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join our exciting events, competitions, and workshops to enhance your 
              skills and connect with fellow drone enthusiasts.
            </p>
          </motion.div>
        </div>
      </section>


{/*SW'25 CARD*/}
{/* go to card.txt for code*/}




      {/* Events Listing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Upcoming Events
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card border-border card-hover">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-display text-foreground">
                        {event.title}
                      </CardTitle>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        event.status === 'Registration Open' 
                          ? 'bg-success/20 text-success' 
                          : event.status === 'Coming Soon'
                          ? 'bg-warning/20 text-warning'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {event.description}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Registration Deadline: {event.registrationDeadline}
                    </div>
                    <Button
  className="w-full bg-gradient-primary hover:shadow-glow-primary"
  disabled={event.status === 'Registration Closed'}
  onClick={() => {
    if (event.status !== 'Registration Closed') {
      window.open(event.registrationLink,"_blank");
    }
  }}
>
  {event.status === 'Registration Closed' ? 'Closed' : 'Registeration Will Open Soon....'}
</Button>

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

    </div>
  );
};

export default Events;