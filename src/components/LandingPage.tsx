import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, GraduationCap, TrendingUp, CheckCircle, ArrowRight, Sparkles, Target, Award, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';

export default function LandingPage({ navigate }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* PROTOTYPE BANNER */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white text-center py-3 px-4 font-['Arimo'] font-semibold shadow-lg">
        ⚠️ FRONTEND PROTOTYPE - FOR DEMONSTRATION PURPOSES ONLY ⚠️
      </div>

      {/* Header/Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-blue-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] via-[#3B82F6] to-[#4F46E5] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-xl blur opacity-75 animate-pulse"></div>
                <GraduationCap className="w-6 h-6 text-white relative z-10" />
              </div>
              <span className="font-['Arimo'] text-xl bg-gradient-to-r from-[#2563EB] to-[#4F46E5] bg-clip-text text-transparent">SION Education</span>
            </motion.div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {['Home', 'About Us', 'Contact'].map((item, i) => (
                <motion.button
                  key={item}
                  onClick={() => navigate(item === 'Home' ? 'landing' : item === 'About Us' ? 'about-us' : 'contact')}
                  className="font-['Arimo'] text-[#4a5565] hover:text-[#2563EB] transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#4F46E5] group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
            </nav>

            {/* Login Button */}
            <motion.button 
              onClick={() => navigate('login')}
              className="bg-gradient-to-r from-[#2563EB] to-[#4F46E5] hover:from-[#1D4ED8] hover:to-[#4338CA] text-white px-6 py-2.5 rounded-xl font-['Arimo'] transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#EFF6FF] via-[#DBEAFE] to-[#E0E7FF]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
          </div>
          
          {/* Dot pattern overlay */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-[#3B82F6]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#4F46E5]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Additional texture blobs */}
          <motion.div
            className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#0891B2]/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Floating Icons */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#2563EB]/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              {i % 3 === 0 ? <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> : i % 3 === 1 ? <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> : <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg border border-blue-100"
              >
                <Sparkles className="w-4 h-4 text-[#EAB308]" />
                <span className="font-['Arimo'] text-sm text-[#2563EB]">Trusted by 500+ Students</span>
              </motion.div>

              <motion.h1 
                className="font-['Arimo'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#101828] mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="font-bold">Transform Your Learning Journey</span> with{' '}
                <span className="font-bold bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent animate-gradient">
                  Expert Teachers
                </span>
              </motion.h1>

              <motion.p 
                className="font-['Arimo'] text-base sm:text-lg text-[#4a5565] mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Connect with <span className="font-bold text-[#2563EB]">qualified educators</span> in a personalized online learning environment. 
                Join <span className="font-bold text-[#101828]">thousands of students</span> achieving their academic goals.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.button 
                  onClick={() => navigate('signup')}
                  className="bg-gradient-to-r from-[#2563EB] to-[#4F46E5] hover:from-[#1D4ED8] hover:to-[#4338CA] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-['Arimo'] flex items-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transition-all relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Get Started Free</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </motion.button>

                <motion.button 
                  onClick={() => navigate('teacher-registration')}
                  className="bg-white hover:bg-gray-50 text-[#2563EB] border-2 border-[#2563EB] px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-['Arimo'] transition-all shadow-lg hover:shadow-xl group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Become a Teacher</span>
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="flex items-center gap-4 sm:gap-6 mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#4F46E5] border-2 border-white flex items-center justify-center text-white text-sm font-bold">
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="font-['Arimo'] text-sm text-[#4a5565]">500+ Active Students</span>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative">
                {/* Decorative Elements */}
                <motion.div 
                  className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#EAB308] to-[#F59E0B] rounded-2xl shadow-xl"
                  animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-full h-full flex items-center justify-center text-white text-3xl">
                    🎯
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#16A34A] to-[#22C55E] rounded-2xl shadow-xl"
                  animate={{ rotate: [0, -10, 0], y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="w-full h-full flex items-center justify-center text-white text-4xl">
                    📚
                  </div>
                </motion.div>

                <div className="bg-white rounded-3xl shadow-2xl p-4 relative z-10 border-4 border-white">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                    alt="Students learning together"
                    className="rounded-2xl w-full h-auto"
                  />
                </div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute top-1/2 left-2 sm:-left-8 bg-white rounded-2xl shadow-xl p-4 border border-blue-100"
                  animate={{ x: [0, 10, 0], y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-['Arimo'] text-sm text-[#101828]">95% Success</p>
                      <p className="font-['Arimo'] text-xs text-[#4a5565]">Rate</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Platform Info Banner */}
      <AnimatedSection>
        <div className="py-8 sm:py-12 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/5 to-[#4F46E5]/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 text-center text-white relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-block mb-4"
              >
                <Sparkles className="w-16 h-16 mx-auto" />
              </motion.div>
              <h2 className="font-['Arimo'] text-4xl mb-4 relative z-10">SION Education Platform</h2>
              <p className="font-['Arimo'] text-xl opacity-90 relative z-10">
                Online learning system connecting students with teachers
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection>
        <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-block mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Target className="w-12 h-12 text-[#2563EB] mx-auto" />
              </motion.div>
              <h2 className="font-['Arimo'] text-3xl sm:text-4xl lg:text-5xl text-[#101828] mb-4"><span className="font-bold">Our Impact</span> in Numbers</h2>
              <p className="font-['Arimo'] text-xl text-[#4a5565]">Trusted by <span className="font-bold text-[#2563EB]">students</span> and <span className="font-bold text-[#4F46E5]">educators</span> worldwide</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto">
              {[
                { icon: Users, number: '500+', label: 'Active Students', color: 'from-[#2563EB] to-[#3B82F6]', delay: 0 },
                { icon: GraduationCap, number: '100+', label: 'Qualified Teachers', color: 'from-[#4F46E5] to-[#6366F1]', delay: 0.1 },
                { icon: TrendingUp, number: '95%', label: 'Success Rate', color: 'from-[#16A34A] to-[#22C55E]', delay: 0.2 },
              ].map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works */}
      <AnimatedSection>
        <div className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-block mb-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-12 h-12 text-[#EAB308] mx-auto" />
              </motion.div>
              <h2 className="font-['Arimo'] text-3xl sm:text-4xl lg:text-5xl text-[#101828] mb-4"><span className="font-bold">How It Works</span></h2>
              <p className="font-['Arimo'] text-xl text-[#4a5565]">Get started in <span className="font-bold text-[#101828]">three simple steps</span></p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connection Lines */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#0891B2] opacity-20"></div>
              
              {[
                { 
                  step: 1, 
                  title: 'Register Your Account', 
                  desc: 'Create your profile with basic information and complete a quick assessment to help us understand your needs.',
                  color: 'from-[#2563EB] to-[#3B82F6]',
                  icon: '👤',
                  delay: 0
                },
                { 
                  step: 2, 
                  title: 'Take Assessment Test', 
                  desc: 'Complete our evaluation to showcase your knowledge level and help us match you with the perfect educator.',
                  color: 'from-[#4F46E5] to-[#6366F1]',
                  icon: '📝',
                  delay: 0.2
                },
                { 
                  step: 3, 
                  title: 'Get Matched & Start Learning', 
                  desc: 'Connect with your assigned teacher and begin your personalized learning journey towards success.',
                  color: 'from-[#0891B2] to-[#06B6D4]',
                  icon: '🚀',
                  delay: 0.4
                },
              ].map((item, index) => (
                <StepCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Registration CTA */}
      <AnimatedSection>
        <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <RegistrationCard
                title="For Students"
                subtitle="Start your learning journey"
                gradient="from-[#2563EB] to-[#3B82F6]"
                image="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=300&fit=crop"
                features={[
                  'Personalized learning experience',
                  'Expert teacher matching',
                  'Progress tracking & support'
                ]}
                buttonText="Register as Student"
                onClick={() => navigate('signup')}
                delay={0}
              />
              <RegistrationCard
                title="For Teachers"
                subtitle="Join our teaching community"
                gradient="from-[#4F46E5] to-[#6366F1]"
                image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop"
                features={[
                  'Flexible teaching schedule',
                  'Competitive compensation',
                  'Professional development'
                ]}
                buttonText="Apply as Teacher"
                onClick={() => navigate('teacher-registration')}
                delay={0.2}
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#101828] to-[#1e293b] text-white py-8 sm:py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="font-['Arimo'] text-xl">SION Education</span>
              </div>
              <p className="font-['Arimo'] text-sm text-gray-400">
                Empowering students through quality education and expert guidance.
              </p>
            </motion.div>

            {[
              { title: 'Quick Links', items: [
                { label: 'Home', action: () => navigate('landing') },
                { label: 'About Us', action: () => navigate('about-us') },
                { label: 'Contact', action: () => navigate('contact') }
              ] },
              { title: 'For Students', items: [
                { label: 'Register', action: () => navigate('signup') },
                { label: 'Login', action: () => navigate('login') }
              ] },
              { title: 'For Teachers', items: [
                { label: 'Apply Now', action: () => navigate('teacher-registration') },
                { label: 'Teacher Login', action: () => navigate('login') }
              ] },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="font-['Arimo'] mb-4">{section.title}</h4>
                <ul className="space-y-2 font-['Arimo'] text-sm text-gray-400">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <button onClick={item.action} className="hover:text-white transition-colors">{item.label}</button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="font-['Arimo'] text-sm text-gray-400">
              © 2024 SION Education. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Animated Section Wrapper
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

// Stat Card Component
function StatCard({ icon: Icon, number, label, color, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extract numeric value from string (e.g., "500+" -> 500, "95%" -> 95)
  const numericValue = parseInt(number.replace(/\D/g, ''));
  const suffix = number.replace(/\d/g, ''); // Get the non-numeric part ("+", "%", etc.)

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      motionValue.set(numericValue);
    }
  }, [isInView, hasAnimated, motionValue, numericValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ delay, duration: 0.5 }}
    >
      {/* Layered shadow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl transform translate-y-2 blur-sm opacity-60"></div>
      <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl transform translate-y-1 blur-md opacity-20`}></div>
      
      {/* Main card */}
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 text-center border border-white/50 backdrop-blur-sm">
        {/* Subtle gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 rounded-2xl`}></div>
        
        <motion.div
          animate={isInView ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
          className="relative z-10"
        >
          <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
        </motion.div>
        
        <motion.p 
          className="font-['Arimo'] text-3xl sm:text-4xl lg:text-5xl text-[#101828] mb-2 relative z-10"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: delay + 0.2, type: "spring" }}
        >
          {displayValue}{suffix}
        </motion.p>
        <p className="font-['Arimo'] text-[#4a5565] relative z-10">{label}</p>
      </div>
    </motion.div>
  );
}

// Step Card Component
function StepCard({ step, title, desc, color, icon, delay }) {
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
      {/* Layered glass morphism effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl transform translate-x-2 translate-y-2 blur-xl opacity-30`}></div>
      <div className="absolute inset-0 bg-white/60 backdrop-blur-md rounded-2xl transform translate-x-1 translate-y-1"></div>
      
      {/* Main card with glass effect */}
      <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-2xl">
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 rounded-2xl`}></div>
        
        <motion.div 
          className={`w-20 h-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-xl relative z-10`}
          animate={{ 
            boxShadow: [
              '0 10px 30px -5px rgba(37, 99, 235, 0.3)',
              '0 20px 40px -5px rgba(37, 99, 235, 0.5)',
              '0 10px 30px -5px rgba(37, 99, 235, 0.3)',
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="text-4xl">{icon}</span>
        </motion.div>
        
        <div className="absolute top-4 right-4 w-14 h-14 bg-gradient-to-br from-gray-100 to-white rounded-full flex items-center justify-center shadow-lg border border-gray-200">
          <span className="font-['Arimo'] text-2xl bg-gradient-to-br from-gray-600 to-gray-400 bg-clip-text text-transparent">{step}</span>
        </div>
        
        <h3 className="font-['Arimo'] text-2xl text-[#101828] mb-4 relative z-10">{title}</h3>
        <p className="font-['Arimo'] text-[#4a5565] leading-relaxed relative z-10">{desc}</p>
      </div>
    </motion.div>
  );
}

// Registration Card Component
function RegistrationCard({ title, subtitle, gradient, image, features, buttonText, onClick, delay }) {
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
      {/* Layered depth effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100 rounded-3xl transform translate-x-3 translate-y-3 blur-sm"></div>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl transform translate-x-1.5 translate-y-1.5 opacity-20 blur-lg`}></div>
      
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/50">
        <div className={`bg-gradient-to-br ${gradient} p-6 sm:p-8 text-white relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
          </div>
          <h3 className="font-['Arimo'] text-3xl mb-2 relative z-10">{title}</h3>
          <p className="font-['Arimo'] opacity-90 relative z-10">{subtitle}</p>
        </div>
        <div className="p-6 sm:p-8">
          <div className="mb-6 overflow-hidden rounded-xl relative">
            {/* Progressive blur frame effect */}
            <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-br from-transparent via-white/30 to-transparent rounded-xl pointer-events-none z-10"></div>
            <ImageWithFallback 
              src={image}
              alt={title}
              className="w-full h-40 sm:h-48 object-cover"
            />
          </div>
          <ul className="space-y-3 mb-6">
            {features.map((feature, i) => (
              <motion.li 
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: delay + 0.1 * i }}
              >
                <CheckCircle className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                <span className="font-['Arimo'] text-[#4a5565]">{feature}</span>
              </motion.li>
            ))}
          </ul>
          <motion.button 
            onClick={onClick}
            className={`w-full bg-gradient-to-r ${gradient} text-white py-3 sm:py-4 rounded-xl font-['Arimo'] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonText} <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// Course Card Component
function CourseCard({ emoji, title, desc, color, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="relative group h-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ delay, duration: 0.5 }}
    >
      {/* Elevated card with multiple shadow layers */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl transform translate-y-2 blur-lg opacity-20`}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl transform translate-y-1 blur-sm opacity-50"></div>
      
      {/* Main card with fixed height and flex layout */}
      <div className="relative bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-xl backdrop-blur-sm h-full flex flex-col justify-between min-h-[200px]">
        {/* Animated gradient overlay */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
        />
        
        <div className="flex flex-col items-center">
          <motion.div 
            className={`w-20 h-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-4xl relative z-10`}
            style={{
              boxShadow: '0 10px 40px -10px rgba(37, 99, 235, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
            }}
            animate={{
              boxShadow: [
                '0 10px 40px -10px rgba(37, 99, 235, 0.4)',
                '0 15px 50px -10px rgba(37, 99, 235, 0.6)',
                '0 10px 40px -10px rgba(37, 99, 235, 0.4)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {emoji}
          </motion.div>
          <h3 className="font-['Arimo'] text-xl text-[#101828] mb-2 relative z-10">{title}</h3>
        </div>
        <p className="font-['Arimo'] text-sm text-[#4a5565] relative z-10 mt-auto">{desc}</p>
      </div>
    </motion.div>
  );
}
