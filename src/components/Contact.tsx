import React, { useState, useEffect, useRef } from 'react';
import { Mail, MessageSquare, Send, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@arcsinstitute.com',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      gradient: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Silicon Valley, CA',
      gradient: 'from-blue-600 to-emerald-500',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10" />
      <div className="absolute inset-0 opacity-5 grid-pattern animate-grid-scroll" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="text-3xl font-bold gradient-text sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Connect with us to explore how ARCS Scientific can transform your
            regulatory compliance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="reveal opacity-0" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/50 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10" />
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/50 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10" />
                </div>
              </div>

              <div className="relative group">
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-white/50 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10" />
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/50 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none resize-none"
                  placeholder="Your Message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10" />
              </div>

              <button
                type="submit"
                className="group relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10">Send Message</span>
                <Send className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/50 to-emerald-500/50 blur-xl opacity-0 group-hover:opacity-75 scale-50 group-hover:scale-100 transition-all duration-300" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-12">
            <div className="grid gap-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group relative reveal opacity-0"
                  style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                >
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${info.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur`}
                  />
                  <div className="relative glass-card p-6 rounded-2xl hover-glow flex items-center space-x-4">
                    <div className="relative">
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${info.gradient} rounded-lg opacity-0 group-hover:opacity-75 blur transition-all duration-300`}
                      />
                      <info.icon
                        className={`relative h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300`}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {info.title}
                      </h3>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Map Preview */}
              <div
                className="reveal opacity-0"
                style={{ animationDelay: '1s' }}
              >
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
                  <div className="relative rounded-2xl overflow-hidden hover-glow">
                    <img
                      src="https://images.unsplash.com/photo-1727884014409-8adae3699b17?auto=format&fit=crop&q=80&w=800&h=400"
                      alt="Location"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
