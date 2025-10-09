import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin, Loader } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/suvamnanda02@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject || 'New Message'}`,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message:
          'Failed to send message. Please email me directly at suvamnanda02@gmail.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'suvamnanda02@gmail.com',
      href: 'mailto:suvamnanda02@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-8117949199',
      href: 'tel:+918117949199',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, Karnataka, India',
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Status Messages */}
              {formStatus.message && (
                <div
                  className={`mt-6 p-4 rounded-lg flex items-start gap-3 ${
                    formStatus.type === 'success'
                      ? 'bg-green-500/20 border border-green-500/50'
                      : 'bg-red-500/20 border border-red-500/50'
                  }`}
                >
                  {formStatus.type === 'success' ? (
                    <CheckCircle className="text-green-400 shrink-0" size={24} />
                  ) : (
                    <AlertCircle className="text-red-400 shrink-0" size={24} />
                  )}
                  <p
                    className={
                      formStatus.type === 'success'
                        ? 'text-green-300'
                        : 'text-red-300'
                    }
                  >
                    {formStatus.message}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <p className="text-gray-300 mb-8">
                  Feel free to reach out to me through any of the following channels.
                  I'm always open to discussing new projects, opportunities, or just
                  having a chat!
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-all"
                      >
                        <div className="bg-purple-600 p-3 rounded-lg">
                          <Icon className="text-white" size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-white hover:text-purple-400 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-white">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Additional CTA */}
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg p-8 rounded-2xl border border-purple-500/30">
                <h4 className="text-xl font-bold text-white mb-4">
                  Let's Build Something Amazing!
                </h4>
                <p className="text-gray-300 mb-6">
                  I'm currently available for freelance work and full-time
                  opportunities. If you have a project in mind or want to discuss
                  potential collaboration, don't hesitate to get in touch!
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-slate-800/70 px-4 py-2 rounded-lg text-purple-300 text-sm">
                    Backend Development
                  </span>
                  <span className="bg-slate-800/70 px-4 py-2 rounded-lg text-purple-300 text-sm">
                    API Design
                  </span>
                  <span className="bg-slate-800/70 px-4 py-2 rounded-lg text-purple-300 text-sm">
                    Cloud Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;