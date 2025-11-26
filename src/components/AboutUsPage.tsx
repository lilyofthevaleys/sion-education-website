import React, { useRef, useState } from 'react';
import { GraduationCap, ArrowLeft, Quote, Star, ChevronLeft, ChevronRight, Award, CheckCircle, BookOpen, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useInView } from 'motion/react';

export default function AboutUsPage({ navigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const teachers = [
    { name: 'Teacher 1', subject: 'Mathematics', bio: 'Short bio and qualifications', rating: 5 },
    { name: 'Teacher 2', subject: 'Science', bio: 'Short bio and qualifications', rating: 5 },
    { name: 'Teacher 3', subject: 'English', bio: 'Short bio and qualifications', rating: 5 },
    { name: 'Teacher 4', subject: 'History', bio: 'Short bio and qualifications', rating: 5 },
    { name: 'Teacher 5', subject: 'Art', bio: 'Short bio and qualifications', rating: 5 },
    { name: 'Teacher 6', subject: 'Music', bio: 'Short bio and qualifications', rating: 5 },
  ];

  const photos = [
    'https://images.unsplash.com/photo-1654366698665-e6d611a9aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NDE1ODQzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1760510088582-3ca0631ad84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjZW50ZXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQxNzAwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1522134939204-9b9957145632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwc3R1ZGVudCUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjQxNjM0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1632217142144-f96b15d867a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwYm9va3N8ZW58MXx8fHwxNzY0MTI5ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1652305500057-0fcb348b62aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzY0MTUyMTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDExNTE1NHww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-blue-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] via-[#3B82F6] to-[#4F46E5] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-xl blur opacity-75 animate-pulse"></div>
                <GraduationCap className="w-6 h-6 text-white relative z-10" />
              </div>
              <span className="font-['Arimo'] text-xl bg-gradient-to-r from-[#2563EB] to-[#4F46E5] bg-clip-text text-transparent">SION Education</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => navigate('landing')} className="font-['Arimo'] text-[#4a5565] hover:text-[#2563EB] transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#4F46E5] group-hover:w-full transition-all duration-300"></span>
              </button>
              <span className="font-['Arimo'] font-bold text-[#2563EB]">About Us</span>
              <button onClick={() => navigate('contact')} className="font-['Arimo'] text-[#4a5565] hover:text-[#2563EB] transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#4F46E5] group-hover:w-full transition-all duration-300"></span>
              </button>
            </nav>

            <motion.button 
              onClick={() => navigate('login')}
              className="bg-gradient-to-r from-[#2563EB] to-[#4F46E5] hover:from-[#1D4ED8] hover:to-[#4338CA] text-white px-6 py-2.5 rounded-xl font-['Arimo'] transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Login</span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <AnimatedSection>
        <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmx1ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            
            <h1 className="font-['Arimo'] text-5xl md:text-6xl mb-6">
              <span className="font-bold text-[#101828]">About SION Education</span>
            </h1>
            <p className="font-['Arimo'] text-xl text-[#4a5565] max-w-2xl mx-auto">
              <span className="font-bold text-[#101828]">Empowering students</span> to achieve <span className="font-bold text-[#2563EB]">personalized online education</span>
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection>
        <div className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-2xl transform translate-x-2 translate-y-2 blur-lg opacity-20"></div>
                <div className="relative bg-white rounded-2xl p-8 border-2 border-[#2563EB] shadow-xl h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-['Arimo'] text-3xl text-[#101828] mb-4"><span className="font-bold">Our Mission</span></h2>
                  <p className="font-['Arimo'] text-lg text-[#4a5565] leading-relaxed flex-1">
                    To provide <span className="font-bold text-[#2563EB]">accessible</span>, high-quality, and <span className="font-bold text-[#2563EB]">personalized education</span> that empowers students and connects qualified teachers with intended education.
                  </p>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5] to-[#6366F1] rounded-2xl transform translate-x-2 translate-y-2 blur-lg opacity-20"></div>
                <div className="relative bg-white rounded-2xl p-8 border-2 border-[#4F46E5] shadow-xl h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4F46E5] to-[#6366F1] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-['Arimo'] text-3xl text-[#101828] mb-4"><span className="font-bold">Our Vision</span></h2>
                  <p className="font-['Arimo'] text-lg text-[#4a5565] leading-relaxed flex-1">
                    To lead the <span className="font-bold text-[#4F46E5]">future of online education</span> where every student has access to exceptional teaching resources.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Teachers */}
      <AnimatedSection>
        <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-['Arimo'] text-5xl text-[#101828] mb-4"><span className="font-bold">Our Teachers</span></h2>
              <p className="font-['Arimo'] text-xl text-[#4a5565]">Meet our dedicated and qualified educators</p>
            </div>

            {/* Teacher Credentials */}
            <div className="mb-12 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="font-['Arimo'] text-2xl text-[#101828] mb-6 text-center"><span className="font-bold">Teacher Qualifications</span></h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: Award, label: 'Verified Credentials', color: 'from-[#2563EB] to-[#3B82F6]' },
                  { icon: BookOpen, label: 'Teaching Experience', color: 'from-[#16A34A] to-[#22C55E]' },
                  { icon: GraduationCap, label: 'Subject Expertise', color: 'from-[#4F46E5] to-[#6366F1]' },
                  { icon: Shield, label: 'Background Check', color: 'from-[#0891B2] to-[#06B6D4]' },
                ].map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <p className="font-['Arimo'] text-sm text-[#4a5565] font-bold">{item.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Teacher Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {teachers.map((teacher, index) => (
                <TeacherCard key={index} {...teacher} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Photo Gallery */}
      <AnimatedSection>
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-['Arimo'] text-5xl text-[#101828] mb-4"><span className="font-bold">Photo Gallery</span></h2>
              <p className="font-['Arimo'] text-xl text-[#4a5565]">Glimpses from our education center</p>
            </div>

            {/* Carousel */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100 rounded-3xl transform translate-x-3 translate-y-3 blur-sm"></div>
              
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                <div className="aspect-video relative">
                  <ImageWithFallback
                    src={photos[currentSlide]}
                    alt={`Gallery ${currentSlide + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all"
                  >
                    <ChevronLeft className="w-6 h-6 text-[#2563EB]" />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all"
                  >
                    <ChevronRight className="w-6 h-6 text-[#2563EB]" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {photos.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          i === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-6 gap-4 mt-8">
              {photos.map((photo, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                    i === currentSlide ? 'border-[#2563EB] ring-2 ring-[#2563EB]/30' : 'border-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ImageWithFallback
                    src={photo}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <Footer navigate={navigate} />
    </div>
  );
}

// Animated Section Component
function AnimatedSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

// Teacher Card Component
function TeacherCard({ name, subject, bio, rating, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-2xl transform translate-y-2 blur-lg opacity-20"></div>
      
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-6">
          <div className="w-24 h-24 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <GraduationCap className="w-12 h-12 text-white" />
          </div>
          
          <h3 className="font-['Arimo'] text-xl text-[#101828] text-center mb-2 font-bold">{name}</h3>
          <p className="font-['Arimo'] text-sm text-[#2563EB] text-center mb-3 font-bold">{subject}</p>
          
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#EAB308] text-[#EAB308]" />
            ))}
          </div>
          
          <p className="font-['Arimo'] text-sm text-[#4a5565] text-center">{bio}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Footer Component
function Footer({ navigate }) {
  return (
    <footer className="bg-gradient-to-br from-[#101828] to-[#1e293b] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-['Arimo'] text-xl">SION Education</span>
            </div>
            <p className="font-['Arimo'] text-sm text-gray-400">
              Empowering students through quality education and expert guidance.
            </p>
          </div>

          <div>
            <h4 className="font-['Arimo'] mb-4">Quick Links</h4>
            <ul className="space-y-2 font-['Arimo'] text-sm text-gray-400">
              <li><button onClick={() => navigate('landing')} className="hover:text-white transition-colors">Home</button></li>
              <li><button className="hover:text-white transition-colors text-white">About Us</button></li>
              <li><button onClick={() => navigate('contact')} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Arimo'] mb-4">For Students</h4>
            <ul className="space-y-2 font-['Arimo'] text-sm text-gray-400">
              <li><button onClick={() => navigate('student-registration')} className="hover:text-white transition-colors">Register</button></li>
              <li><button onClick={() => navigate('login')} className="hover:text-white transition-colors">Login</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Arimo'] mb-4">For Teachers</h4>
            <ul className="space-y-2 font-['Arimo'] text-sm text-gray-400">
              <li><button onClick={() => navigate('teacher-registration')} className="hover:text-white transition-colors">Apply Now</button></li>
              <li><button onClick={() => navigate('login')} className="hover:text-white transition-colors">Teacher Login</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="font-['Arimo'] text-sm text-gray-400">
            © 2024 SION Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}