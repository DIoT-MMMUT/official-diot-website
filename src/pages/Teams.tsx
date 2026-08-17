'use client';

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const Teams = () => {

    const batch_2026 = [
    {
      name: 'Vijit Bhadana',
      branch: 'President',
      position: 'Computer Science Engineering',
      image: '/final-year/VijitBhadana.jpg',
      linkedin: '#',
    },
    {
      name: 'Ujjwal Kumar',
      branch: 'Vice-President',
      position: 'Electrical Engineering',
      image: '/final-year/UjjwalKumar.jpg',
      linkedin: 'https://www.linkedin.com/in/ujjwal-kumar-3446a325b',
    },
    {
      name: 'Ayush Kannojia',
      branch: 'Vice-President',
      position: 'Computer Science Engineering',
      image: '/final-year/AyushKannojia.jpg',
      linkedin: 'https://www.linkedin.com/in/ayush-kannojia',
    },
    {
      name: 'Devesh Yadav',
      branch: 'Vice-President',
      position: 'Mechanical Engineering',
      image: '/final-year/DeveshYadav.jpg',
      linkedin: 'https://www.linkedin.com/in/y-devesh',
    },
    {
      name: 'Utkarsh Kumar',
      branch: 'Treasurer',
      position: 'Electronics and Communication Engineering',
      image: '/final-year/UtkarshKumar.jpg',
      linkedin: 'https://www.linkedin.com/in/utkarsh-kumar-76a03a2a4',
    },
    {
      name: 'Vishal Singh',
      branch: 'Treasurer',
      position: 'Electronics and Communication Engineering',
      image: '/final-year/VishalSingh.jpg',
      linkedin: 'https://www.linkedin.com/in/vishal-singh-53139225b',
    },
    {
      name: 'Khushi Dubey',
      branch: 'Social Media Head',
      position: 'Chemical Engineering',
      image: '/final-year/KhushiDubey.jpg',
      linkedin: 'https://www.linkedin.com/in/khushi-dubey-8a57732ba',
    },
    {
      name: 'Himanshu Patwa',
      branch: 'Social Media Head',
      position: 'Mechanical Engineering',
      image: '/final-year/HimanshuPatwa.jpg',
      linkedin: 'https://www.linkedin.com/in/himanshu-patwa',
    },
    {
      name: 'Shreya Pandey',
      branch: 'Sponsorship Head',
      position: 'Mechanical Engineering',
      image: '/final-year/ShreyaPandey.jpg',
      linkedin: 'https://www.linkedin.com/in/shreya-pandey-040709272',
    },
    {
      name: 'Amisha',
      branch: 'Event Head',
      position: 'Chemical Engineering',
      image: '/final-year/Amisha.jpg',
      linkedin: '#',
    },
  ];

  const final_year = [
    {
      name: 'Paras Varshney',
      position: 'President',
      branch: 'Electronics and Communication Engineering (Internet of Things)',
      image: '/third-year/ParasVarshney.jpeg',
      linkedin: 'https://www.linkedin.com/in/paras-varshney-076244294/',
    },
    {
      name: 'Aman Jaiswal',
      position: 'Vice-President',
      branch: 'Electronics and Communication Engineering (Internet of Things)',
      image: '/third-year/AmanJaiswal.jpg',
      linkedin: 'https://www.linkedin.com/in/amanjais00/',
    },
    {
      name: 'Ankit Srivastav',
      position: 'Vice-President',
      branch: 'Computer Science Engineering',
      image: '/third-year/AnkitSrivastav.png',
      linkedin: 'https://www.linkedin.com/in/ankit2005',
    },
    {
      name: 'Rajneesh Yadav',
      position: 'Treasurer',
      branch: 'Electronics and Communication Engineering',
      image: '/third-year/RajneeshYadav.jpeg',
      linkedin: 'https://www.linkedin.com/in/rajneesh0507',
    },
    {
      name: 'Abhishek Shakya',
      position: 'Event Coordinator',
      branch: 'Electronics and Communication Engineering',
      image: '/third-year/AbhishekShakya.jpg',
      linkedin: 'https://www.linkedin.com/in/abhishek-shakya-42bab8212/',
    },
    {
      name: 'Ashish Kumar Pathak',
      position: 'Event Coordinator',
      branch: 'Electronics and Communication Engineering',
      image: '/third-year/AshishPathak.png',
      linkedin: 'https://www.linkedin.com/in/ashish-kumar-pathak-7a9104283',
    },
    {
      name: 'Shivansh Singh',
      position: 'Sponsorship Head',
      branch: 'Electronics and Communication Engineering',
      image: '/third-year/ShivanshSingh.jpg',
      linkedin: '#',
    },
    {
      name: 'Vishu Srivastava',
      position: 'Sponsorship Head',
      branch: 'Electronics and Communication Engineering (Internet of Things)',
      image: '/third-year/VishuSrivastava.png',
      linkedin: 'https://www.linkedin.com/in/vishutx/',
    },
    {
      name: 'Sonu Chaudhary',
      position: 'Social Media Head',
      branch: 'Electronics and Communication Engineering',
      image: '/third-year/SonuChaudhary.jpg',
      linkedin: 'https://www.linkedin.com/in/sonu-kumar-chaudhary-8057332a7',
    },
    {
      name: 'Anshika Upadhyay',
      position: 'Social Media Head',
      branch:'Computer Science Engineering',
      image: '/third-year/Anshika.jpg',
      linkedin: 'https://www.linkedin.com/in/anshika-kumari-826a21292',
    },
  ];

  const third_year = [
    {
      name: 'Chandramauli Patel',
      position: 'Secretary',
      branch: 'Electronics and Communication Engineering',
      image: '/second-year/CM.jpg',
      linkedin: 'https://www.linkedin.com/in/chandramauli-patel-261436327',
    },
    {
      name: 'Anjali Singh',
      position: 'Joint Secretary',
      branch: 'Computer Science Engineering',
      image: '/second-year/Anjali.jpg',
      linkedin: 'https://www.linkedin.com/in/anjali-singh-993b3630b',
    },
    {
      name: 'Alok Kumar',
      position: 'Joint Secretary',
      branch: 'Electronics and Communication Engineering',
      image: '/second-year/Alok.jpg',
      linkedin: 'https://www.linkedin.com/in/alok-kumar-5a6141303',
    },
    {
      name: 'Ayushi Verma',
      position: 'Finance Secretary',
      branch: 'Computer Science Engineering',
      image: '/second-year/Ayushi.jpg',
      linkedin: 'https://www.linkedin.com/in/ayushi-verma-95a6a933b',
    },
    {
      name: 'Shreya Rawat',
      position: 'Event Coordinator',
      branch: 'Electronics and Communication Engineering (Internet of Things)',
      image: '/second-year/ShreyaRawat.jpg',
      linkedin: 'https://www.linkedin.com/in/shreya-rawat-801891310',
    },
    {
      name: 'Divyansh Singh',
      position: 'Event Coordinator',
      branch: 'Electronics and Communication Engineering (Internet of Things)',
      image: '/second-year/Divyansh.jpg',
      linkedin: 'https://www.linkedin.com/in/divyansh-singh-527151370',
    },
    {
      name: 'Nyasi',
      position: 'Graphic Designing Lead',
      branch: 'Electronics and Communication Engineering',
      image: '/second-year/Nyasi.jpg',
      linkedin: 'https://www.linkedin.com/in/nyasi-b365b0327',
    },
    {
      name: 'Mansi Patel',
      position: 'Editorial Lead',
      branch: 'Electrical Engineering',
      image: '/second-year/Mansi.jpg',
      linkedin: 'https://www.linkedin.com/in/mansi-patel-856644331',
    },
    {
      name: 'Shreya Srivastava',
      position: 'Robotics & Circuitry Lead',
      branch: 'Electronics and Communication Engineering (Internet of Things)',
      image: '/second-year/Shreya.jpg',
      linkedin: 'https://www.linkedin.com/in/shreya-srivastava-7569a9285',
    },
    {
      name: 'Rasshi Ashish Srivastav',
      position: 'Web Development Lead',
      branch: 'Information Technology',
      image: '/second-year/Rasshi2.jpg',
      linkedin: 'https://www.linkedin.com/in/rasshi-ashish-srivastav',
    },
    {
      name: 'Bhavya Agrawal',
      position: 'Web Development Lead',
      branch: 'Information Technology',
      image: '/second-year/Bhavya.jpg',
      linkedin: 'https://www.linkedin.com/in/bhavya-agrawal-46b8312b6',
    },
    {
      name: 'Utkrisht Srivastava',
      position: 'Technical Operations Lead',
      branch: 'Computer Science Engineering',
      image: '/second-year/Utkrisht.jpg',
      linkedin: 'https://www.linkedin.com/in/utkrisht099',
    },
    {
      name: 'Saurabh Kumar',
      position: 'Technical Operations Lead',
      branch: 'Electronics and Communication Engineering (Internet of Things)',
      image: '/second-year/Saurabh.jpg',
      linkedin: 'https://www.linkedin.com/in/saurabh-kumar-5139b5314',
    },
    {
      name: 'Abhijeet Tripathi',
      position: 'PR & Outreach Lead',
      branch: 'Electronics and Communication Engineering (Internet of Things)',
      image: '/second-year/abhijeet.jpeg',
      linkedin: '#',
    },
    {
      name: 'Ayush Singh',
      position: 'Sponsorship Lead',
      branch: 'Computer Science Engineering',
      image: '/second-year/ayush.jpeg',
      linkedin: '#',
    },
    {
      name: 'Kavya Saxena',
      position: 'Social Media Executive',
      branch: 'Electronics and Communication Engineering',
      image: '/second-year/kavya.jpeg',
      linkedin: '#',
    },
  ];

  const second_year_executives = [
    {
      name: 'Aditya Bajpai',
      position: 'Electronics and Communication Engineering',
      image: '/Executives/AdityaBajpai.jpg',
      linkedin: 'https://www.linkedin.com/in/aditya-bajpai-b2336b387',
    },
    {
      name: 'Aditya Pratap Singh',
      position: 'Civil Engineering',
      image: '/Executives/AdityaPratapSingh.jpg',
      linkedin: 'https://www.linkedin.com/in/aditya-pratap-singh-575713306?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    {
      name: 'Akshata Shrivastava',
      position: 'Mechanical Engineering',
      image: '/Executives/AkshataShrivastava.jpg',
      linkedin: 'https://www.linkedin.com/in/akshata-shrivastava?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    {
      name: 'Amar Singh Yadav',
      position: 'Electrical Engineering',
      image: '/Executives/AmarSinghYadav.jpg',
      linkedin: 'https://www.linkedin.com/in/amar-singh-yadav-73489836b',
    },
    {
      name: 'Anushka Patel',
      position: 'Electronics and Communication Engineering (Internet of Things)',
      image: '/Executives/AnushkaPatel.jpg',
      linkedin: 'https://www.linkedin.com/in/anushka-patel-418549377?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    {
      name: 'Arya Suman',
      position: 'Electronics and Communication Engineering (Internet of Things)',
      image: '/Executives/AryaSuman.jpg',
      linkedin: 'https://in.linkedin.com/in/arya-suman-aa303537a',
    },
    {
      name: 'Ashutosh',
      position: 'Electrical Engineering',
      image: '/Executives/Ashutosh.jpg',
      linkedin: 'https://www.linkedin.com/in/ashutosh-yadav-835980376/',
    },
    {
      name: 'Ayush Sachan',
      position: 'Electronics and Communication Engineering (Internet of Things)',
      image: '/Executives/AyushSachan.jpg',
      linkedin: 'https://www.linkedin.com/in/ayush-sachan08/',
    },
    {
      name: 'Aditya Raj Nishad',
      position: 'Electronics and Communication Engineering',
      image: '/Executives/AdityaRajNishad.jpg',
      linkedin: 'https://www.linkedin.com/in/aditya-raj-nishad-0786312a6',
    },
    {
      name: 'Dev Raj',
      position: 'Electrical Engineering',
      image: '/Executives/DevRaj.jpg',
      linkedin: 'https://www.linkedin.com/in/dev-raj-b0591a371?',
    },
    {
      name: 'Gaurav Prahatiya',
      position: 'Chemical Engineering',
      image: '/Executives/GauravPrahatiya.jpg',
      linkedin: 'https://www.linkedin.com/in/gaurav-prahatiya-24940242a',
    },
    {
      name: 'Jahnvi Singh',
      position: 'Electronics and Communication Engineering',
      image: '/Executives/JahnviSingh.jpg',
      linkedin: 'https://www.linkedin.com/in/jahnvi-singh-8179b827b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    {
      name: 'Jyotiraditya',
      position: 'Computer Science Engineering',
      image: '/Executives/Jyotiraditya.jpg',
      linkedin: 'https://www.linkedin.com/in/jyotiraditya-prajapati-95885937b?',
    },
    {
      name: 'Kumar rishi pandey',
      position: 'Electronics and Communication Engineering',
      image: '/Executives/KumarRishiPandey.jpg',
      linkedin: '#',
    },
    {
      name: 'Navlesh Singh',
      position: 'Computer Science Engineering',
      image: '/Executives/NavleshSingh.jpg',
      linkedin: 'https://www.linkedin.com/in/navlesh-singh-63917237a',
    },
    {
      name: 'Prashant Goswami',
      position: 'Information Technology',
      image: '/Executives/PrashantGoswami.jpg',
      linkedin: 'https://www.linkedin.com/in/prashant-goswami-5ab7b1382/',
    },
    {
      name: 'Ratna Mishra',
      position: 'Electrical Engineering',
      image: '/Executives/RatnaMishra.jpg',
      linkedin: 'https://www.linkedin.com/in/ratna-mishra-3b4a07368?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    {
      name: 'Saurabh kushwaha',
      position: 'Computer Science Engineering',
      image: '/Executives/SaurabhKushwaha.jpg',
      linkedin: 'https://www.linkedin.com/in/saurabh-kushwaha-1a104a38b?',
    },
    {
      name: 'Shivansh Singh',
      position: 'Mechanical Engineering',
      image: '/Executives/ShivanshSingh.jpg',
      linkedin: 'https://www.linkedin.com/in/shivansh-singh-b89216358/',
    },
    {
      name: 'Sujal Soni',
      position: 'Mechanical Engineering',
      image: '/Executives/SujalSoni.jpg',
      linkedin: 'https://www.linkedin.com/in/sujal-soni-b65b38341',
    },
    {
      name: 'Vaishnavi Pandey',
      position: 'Electronics and Communication Engineering (Internet of Things)',
      image: '/Executives/VaishnaviPandey.jpg',
      linkedin: 'https://www.linkedin.com/in/vaishnavi-pandey-b8a712363/',
    },
    {
      name: 'Yash Srivastav',
      position: 'Electronics and Communication Engineering (Internet of Things)',
      image: '/Executives/YashSrivastav.jpg',
      linkedin: '#',
    },
  ];

  const MemberCard = (member: any, isSmall: boolean = false) => (
    <Card className="bg-card border-border card-hover overflow-hidden group relative h-full flex flex-col min-w-[200px]">
      <div className="relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${isSmall ? 'h-48' : 'h-64'}`}
          onError={(e: any) => { e.target.src = 'https://via.placeholder.com/300x400?text=Member' }}
        />

        {/* Subtle Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* LinkedIn Icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${isSmall ? 'w-8 h-8' : 'w-10 h-10'} bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors`}
          >
            <Linkedin className={`${isSmall ? 'h-4 w-4' : 'h-5 w-5'} text-primary-foreground`} />
          </a>
        </div>
      </div>

      <CardContent className={`text-center flex-1 flex flex-col justify-center ${isSmall ? 'p-4' : 'p-6'}`}>
        <h3 className={`font-display font-semibold mb-1 text-foreground ${isSmall ? 'text-lg' : 'text-xl'}`}>
          {member.name}
        </h3>
        {member.position && (
          <p className={`text-primary font-medium mb-1 ${isSmall ? 'text-xs' : 'text-sm'}`}>
            {member.position}
          </p>
        )}
      </CardContent>
    </Card>
  );

  const swiperProps = {
    modules: [FreeMode, Mousewheel, Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    freeMode: {
      enabled: true,
      momentum: true,
      momentumRatio: 0.45,
      momentumVelocityRatio: 0.9,
      minimumVelocity: 0.02,
      sticky: false,
    },
    mousewheel: {
      forceToAxis: true,
      releaseOnEdges: true,
      sensitivity: 0.6,
    },
    grabCursor: true,
    spaceBetween: 20,
    slidesPerView: 1.2,
    breakpoints: {
      480: { slidesPerView: 1.5 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 4 },
    },
  };

  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Meet the visionaries behind our Club — driven by curiosity, innovation, and a passion for shaping the future of smart technologies
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Founder ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-display font-semibold mb-8 text-foreground">
            Our Esteemed Founder
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card
              className="bg-card border-border shadow-lg rounded-2xl overflow-hidden flex flex-col items-center gap-4 p-6"
              style={{ boxShadow: "0 0 15px rgba(59,130,246,0.6), 0 0 30px rgba(59,130,246,0.4)" }}
            >
              <div className="relative">
                <img
                  src="final-year/AnkitSir.png"
                  alt="Ankit Kumar Mishra"
                  className="w-48 h-48 md:w-52 md:h-52 object-cover rounded-full border-4 border-primary"
                  onError={(e: any) => { e.target.src = 'https://via.placeholder.com/200x200?text=Founder' }}
                />
              </div>

              <CardContent className="text-center flex-1">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                    Mr. Ankit Kumar Mishra
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/ankitkumar5gc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors shadow-md"
                  >
                    <Linkedin className="h-5 w-5 text-primary-foreground" />
                  </a>
                </div>
                <p className="text-sm md:text-base text-primary font-medium">
                  PhD Pursuing, Electronics and Communication Department
                </p>
                <p className="text-foreground-50 mt-2 leading-relaxed text-sm md:text-base">
                  Founder of the Drone and IoT Club. His visionary leadership laid the
                  foundation for a vibrant platform where students explore drone
                  technology and the Internet of Things through collaboration,
                  creativity, and cutting-edge research.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ── Final Year (ex-3rd Year) ──────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-semibold mb-6 text-foreground">
            Final Year
          </h2>

          {/* Mobile & Tablet → CSS Scroll Snapping */}
          <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4">
              {final_year.map((member, index) => (
                  <div key={`final-mob-${index}`} className="snap-center shrink-0 w-[80%] max-w-[300px]">
                      {MemberCard(member)}
                  </div>
              ))}
          </div>

          {/* Large screens → grid */}
          <div className="hidden lg:grid grid-cols-5 gap-6">
            {final_year.map((member, index) => (
              <motion.div
                key={`final-grid-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {MemberCard(member)}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Third Year (ex-2nd Year, filtered + new members) ─────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-semibold mb-6 text-foreground">
            Pre-Final Year
          </h2>
          
          <div className="relative group px-2 md:px-6">
            <Swiper {...swiperProps} className="pb-4">
              {third_year.map((member, index) => (
                <SwiperSlide key={`third-${index}`} className="h-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    {MemberCard(member)}
                  </motion.div>
                </SwiperSlide>
              ))}
              
              {/* Navigation Arrows */}
              <div className="swiper-button-prev !text-primary !w-10 !h-10 !bg-background/80 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex"></div>
              <div className="swiper-button-next !text-primary !w-10 !h-10 !bg-background/80 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex"></div>
            </Swiper>
          </div>
        </div>
      </section>

      {/* ── Second Year – Executive Members ────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-semibold mb-6 text-foreground">
            Second Year – Executive Members
          </h2>
          
          <div className="relative group px-2 md:px-6">
            <Swiper {...swiperProps} className="pb-4">
              {second_year_executives.map((member, index) => (
                <SwiperSlide key={`exec-${index}`} className="h-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    {MemberCard(member)}
                  </motion.div>
                </SwiperSlide>
              ))}
              
              {/* Navigation Arrows */}
              <div className="swiper-button-prev !text-primary !w-10 !h-10 !bg-background/80 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex"></div>
              <div className="swiper-button-next !text-primary !w-10 !h-10 !bg-background/80 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex"></div>
            </Swiper>
          </div>
        </div>
      </section>

      {/* ── Batch of 2026 (Moved to bottom & Resized) ────────────────────────────────────── */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-display font-semibold text-foreground">
              Batch of 2026
            </h2>
            <div className="h-[1px] flex-1 bg-border" />
          </div>

          {/* Mobile & Tablet → CSS Scroll Snapping */}
           <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4">
              {batch_2026.map((member, index) => (
                  <div key={`batch-mob-${index}`} className="snap-center shrink-0 w-[200px]">
                      {MemberCard(member, true)}
                  </div>
              ))}
          </div>

          {/* Large screens → Flex Wrap for centered smaller cards */}
          <div className="hidden lg:flex flex-wrap justify-center gap-6">
            {batch_2026.map((member, index) => (
              <motion.div
                key={`batch2026-grid-${index}`}
                className="w-[200px]" // Fixed smaller width for these cards
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {/* Passing 'true' to make the cards small */}
                {MemberCard(member, true)}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join the Team ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-background via-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              🚀 Want to Join Our Team?
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              The Drone & IoT Club is a space to explore
              <span className="text-primary font-semibold"> emerging technologies, creative ideas, and teamwork</span>.
              Together, we learn, experiment, and bring visions to life.
            </p>

            <p className="text-md md:text-lg text-muted-foreground">
              To learn more, <a href="/about" className="text-primary font-semibold hover:underline">click here</a>.
            </p>

            <motion.a
              href="https://www.linkedin.com/company/drone-iot-club-mmmut"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-10 py-4 mt-6 text-lg font-semibold tracking-wide transition-all shadow-md bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:shadow-xl"
            >
              Learn More
              <Linkedin className="w-5 h-5 transition-all duration-300 opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── Team Stats ────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { number: '150+', label: 'Total Members' },
              { number: '12', label: 'Core Team' },
              { number: '25+', label: 'Projects Led' },
              { number: '5', label: 'Years Active' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-bold font-display text-primary md:text-5xl">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Teams;
