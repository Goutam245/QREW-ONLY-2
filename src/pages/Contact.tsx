import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CircuitBackground } from '@/components/CircuitBackground';
import { Mail, MessageSquare, MapPin, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('SENDING...');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('MESSAGE_SENT_SUCCESSFULLY');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      toast({
        title: "> MESSAGE_TRANSMITTED",
        description: "We'll respond within 24-48 hours.",
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    { icon: Mail, title: 'EMAIL_SUPPORT', value: 'support@qrewonly.com', sub: 'Response: 24-48 hours' },
    { icon: MessageSquare, title: 'LIVE_CHAT', value: 'Available 9AM - 6PM EST', sub: 'Instant response' },
    { icon: Instagram, title: 'SOCIAL_MEDIA', value: '@QREWONLY', sub: 'DM us anytime' },
    { icon: MapPin, title: 'HEADQUARTERS', value: '123 Innovation Street', sub: 'City, State 12345' },
  ];

  const faqs = [
    { q: 'How do I track my order?', a: 'Check your email for tracking information or log into your account.' },
    { q: "What's the return policy?", a: '30-day returns for unworn items with tags attached.' },
    { q: 'How do I join QREW MEMBERS?', a: 'Sign up through the QREW_MEMBERS_ONLY page for exclusive access.' },
    { q: 'Do you ship internationally?', a: 'Yes, we ship to 50+ countries. Shipping costs vary by location.' },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <CircuitBackground />
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-mono text-sm mb-2">{'>'} COMMUNICATION_CHANNEL</p>
            <h1 className="text-3xl md:text-4xl font-display text-foreground mb-4">CONTACT QREW ONLY</h1>
            <p className="text-foreground-muted font-mono text-sm">We're here to help. Reach out to us through any channel below.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method) => (
                  <div key={method.title} className="terminal-panel p-5 text-center hover:border-primary/50 transition-all">
                    <method.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="text-primary font-mono text-sm mb-2">{method.title}</h3>
                    <p className="text-foreground font-mono text-sm">{method.value}</p>
                    <p className="text-foreground-muted font-mono text-xs mt-1">{method.sub}</p>
                  </div>
                ))}
              </div>

              {/* FAQ Section */}
              <div className="terminal-panel p-6">
                <h3 className="text-primary font-mono text-sm mb-4">{'>'} COMMON_QUESTIONS</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <p className="text-foreground font-mono text-sm mb-1">{faq.q}</p>
                      <p className="text-foreground-muted font-mono text-xs">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="terminal-panel">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 p-4 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-warning" />
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="ml-4 text-foreground-muted text-sm font-mono">contact_form.interface</span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <h3 className="text-primary font-mono text-sm mb-4">{'>'} SEND_MESSAGE</h3>

                <div>
                  <label className="text-foreground-muted font-mono text-xs mb-2 block">{'>'} NAME:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded px-4 py-3 font-mono text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="text-foreground-muted font-mono text-xs mb-2 block">{'>'} EMAIL:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded px-4 py-3 font-mono text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="text-foreground-muted font-mono text-xs mb-2 block">{'>'} SUBJECT:</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded px-4 py-3 font-mono text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="membership">QREW Membership</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-foreground-muted font-mono text-xs mb-2 block">{'>'} MESSAGE:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-background border border-border rounded px-4 py-3 font-mono text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                {status && (
                  <div className={`p-3 border rounded font-mono text-sm ${
                    status === 'MESSAGE_SENT_SUCCESSFULLY' 
                      ? 'border-success/30 bg-success/5 text-success' 
                      : 'border-primary/30 bg-primary/5 text-primary'
                  }`}>
                    {'>'} {status}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-background font-mono py-3 px-6 rounded transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {'>'} EXECUTE_SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
