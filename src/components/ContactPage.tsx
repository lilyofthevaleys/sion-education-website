import React, { useRef, useState } from 'react';
import { GraduationCap, Phone, MapPin, Clock, Mail, Send, Plus, Minus } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import ConfirmationModal from './ConfirmationModal';

export default function ContactPage({ navigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showSendModal, setShowSendModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSendModal(true);
  };

  const confirmSend = () => {
    console.log('Form submitted:', formData);
    setShowSendModal(false);
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const faqs = [
    {
      question: 'What are your expertise areas?',
      answer: 'We specialize in providing quality online education with 5+ hours and knowledge management with 3+ hours and knowledge transfer across a wide range of subjects.'
    },
    {
      question: 'How do I visit the tuition center?',
      answer: 'You can visit our location in Delhi (coordinates 28.6139° N, 77.2090° E) or schedule an appointment to see where the magic happens.'
    },
    {
      question: 'Do you offer online consultations?',
      answer: 'Absolutely! We can arrange online video consultations through Zoom or Google Meet. Please schedule a date in our contact system.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-blue-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
              <button onClick={() => navigate('about-us')} className="font-['Arimo'] text-[#4a5565] hover:text-[#2563EB] transition-colors relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#4F46E5] group-hover:w-full transition-all duration-300"></span>
              </button>
              <span className="font-['Arimo'] font-bold text-[#2563EB]">Contact</span>
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
        <div className="bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7] py-12 sm:py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iZ3JlZW4iIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#16A34A] to-[#22C55E] rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
              <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            </motion.div>
            
            <h1 className="font-['Arimo'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
              <span className="font-bold text-[#101828]">Get In Touch With Us</span>
            </h1>
            <p className="font-['Arimo'] text-xl text-[#4a5565] max-w-2xl mx-auto">
              We're here to help! <span className="font-bold text-[#16A34A]">Reach out to us</span> at any time
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Location */}
      <AnimatedSection>
        <div className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-['Arimo'] text-3xl sm:text-4xl lg:text-5xl text-[#101828] mb-4"><span className="font-bold">Our Location</span></h2>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100 rounded-3xl transform translate-x-3 translate-y-3 blur-sm"></div>
              
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Address */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-['Arimo'] font-bold text-lg text-[#101828] mb-2">Tuition Center</h3>
                    <p className="font-['Arimo'] text-sm text-[#4a5565]">
                      AI Devspace<br/>
                      No. 123 Technology Avenue<br/>
                      New Delhi, India<br/>
                      110001
                    </p>
                  </motion.div>

                  {/* Operating Hours */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4F46E5] to-[#6366F1] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-['Arimo'] font-bold text-lg text-[#101828] mb-2">Operating Hours</h3>
                    <p className="font-['Arimo'] text-sm text-[#4a5565]">
                      Mon - Fri: 9:00 AM - 8:00 PM<br/>
                      Saturday: 9:00 AM - 4:30 PM<br/>
                      Sunday: Closed
                    </p>
                  </motion.div>

                  {/* Contact Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0891B2] to-[#06B6D4] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-['Arimo'] font-bold text-lg text-[#101828] mb-2">Get in Touch</h3>
                    <p className="font-['Arimo'] text-sm text-[#4a5565]">
                      Email: info@sion.edu<br/>
                      Phone: +91 123 456 7890<br/>
                      <span className="italic">Always available for students and visitors</span>
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Send Us a Message */}
      <AnimatedSection>
        <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-['Arimo'] text-3xl sm:text-4xl lg:text-5xl text-[#101828] mb-4"><span className="font-bold">Send Us a Message</span></h2>
              <p className="font-['Arimo'] text-lg text-[#4a5565]">
                Fill out the form below and <span className="font-bold text-[#2563EB]">we'll get back to you within 24 hours</span>
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-3xl transform translate-x-2 translate-y-2 blur-lg opacity-20"></div>
              
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-['Arimo'] font-bold text-sm text-[#101828] mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block font-['Arimo'] font-bold text-sm text-[#101828] mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                        placeholder="john@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-['Arimo'] font-bold text-sm text-[#101828] mb-2">Contact # *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      placeholder="+1234567890"
                    />
                  </div>

                  <div>
                    <label className="block font-['Arimo'] font-bold text-sm text-[#101828] mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 font-['Arimo'] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <div className="flex justify-end gap-4">
                    <motion.button
                      type="button"
                      onClick={() => setFormData({ name: '', email: '', phone: '', message: '' })}
                      className="px-6 py-3 border-2 border-gray-300 rounded-xl font-['Arimo'] text-[#4a5565] hover:bg-gray-50 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Clear
                    </motion.button>
                    
                    <motion.button
                      type="submit"
                      className="bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white px-8 py-3 rounded-xl font-['Arimo'] flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="w-5 h-5" />
                      Send Message →
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection>
        <div className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-['Arimo'] text-3xl sm:text-4xl lg:text-5xl text-[#101828] mb-4"><span className="font-bold">Frequently Asked</span></h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isExpanded={expandedFaq === index}
                  onToggle={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <Footer navigate={navigate} />

      {/* Send Confirmation Modal */}
      <ConfirmationModal
        isOpen={showSendModal}
        onClose={() => setShowSendModal(false)}
        onConfirm={confirmSend}
        title="Send Message?"
        message="Are you sure you want to send this message? We'll get back to you within 24 hours."
        confirmText="Yes, Send"
        confirmColor="from-blue-500 to-blue-600"
        icon={<Send className="w-6 h-6 text-white" />}
      />
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

// FAQ Item Component
function FAQItem({ question, answer, isExpanded, onToggle, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay, duration: 0.5 }}
      className="relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${isExpanded ? 'from-[#2563EB] to-[#4F46E5]' : 'from-gray-200 to-gray-100'} rounded-2xl transform translate-y-1 blur-sm opacity-20`}></div>
      
      <div className="relative bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden">
        <button
          onClick={onToggle}
          className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h3 className="font-['Arimo'] font-bold text-lg text-[#101828] text-left">{question}</h3>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0"
          >
            {isExpanded ? (
              <div className="w-8 h-8 bg-gradient-to-br from-[#2563EB] to-[#4F46E5] rounded-full flex items-center justify-center">
                <Minus className="w-5 h-5 text-white" />
              </div>
            ) : (
              <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
              </div>
            )}
          </motion.div>
        </button>
        
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6">
            <p className="font-['Arimo'] text-[#4a5565] leading-relaxed">{answer}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Footer Component
function Footer({ navigate }) {
  return (
    <footer className="bg-gradient-to-br from-[#101828] to-[#1e293b] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <li><button onClick={() => navigate('about-us')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button className="hover:text-white transition-colors text-white">Contact</button></li>
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
