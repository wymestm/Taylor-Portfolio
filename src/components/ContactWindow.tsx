import { Window } from './Window';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export function ContactWindow() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'eaa46094-7cf8-4ff7-bc84-9c42f81bb293',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
          subject: `New message from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Window 
      title="C:\taylorwymes\contact" 
      headerColor="bg-[#2D4839]"
      windowBorderColor="border-[#73986F]/30"
      leftDot={{ bg: 'bg-[#ECA0B8]', border: 'border-[#ECA0B8]' }}
      middleDot={{ bg: 'bg-[#73986F]', border: 'border-[#73986F]' }}
      rightDot={{ bg: 'bg-white', border: 'border-white' }}
    >
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-[#2D4839] font-bohemian">Want to work together?</h2>
          <p className="text-2xl font-bold text-[#73986F] font-bohemian">Let's chat!</p>
          <p className="text-sm text-[#426E55]">I'm always excited to collaborate on new projects</p>
        </div>
        
        {/* Contact Info */}
        <div className="bg-white border-2 border-[#ECA0B8]/30 rounded-lg p-4 sm:p-6 space-y-4">
          <h3 className="font-bold text-[#2D4839] mb-4 text-sm uppercase tracking-wider">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2 sm:gap-3 text-sm">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#D698AB]/20 border-2 border-[#D698AB] rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#2D4839]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-[#426E55] mb-0.5">Email:</p>
                <a href="mailto:wymestm@gmail.com" className="text-[#2D4839] hover:text-[#CB748E] transition-colors break-all max-[375px]:text-xs">
                  wymestm@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 text-sm">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#CB748E]/20 border-2 border-[#CB748E] rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#2D4839]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-[#426E55] mb-0.5">Phone:</p>
                <p className="text-[#2D4839] max-[375px]:text-xs">+1 (647) 612-1417</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 text-sm">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#73986F]/20 border-2 border-[#73986F] rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#2D4839]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-[#426E55] mb-0.5">Location:</p>
                <p className="text-[#2D4839] max-[375px]:text-xs">Guelph, Ontario, Canada</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Message Form */}
        <div className="bg-white border-2 border-[#ECA0B8]/30 rounded-lg p-6">
          <h3 className="font-bold text-[#2D4839] mb-4 text-sm uppercase tracking-wider">Send a Quick Message</h3>
          
          {/* Success Message */}
          {status === 'success' && (
            <div className="mb-4 p-3 bg-[#73986F]/10 border-2 border-[#73986F] rounded-lg flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#73986F] flex-shrink-0" />
              <p className="text-sm text-[#2D4839]">Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}
          
          {/* Error Message */}
          {status === 'error' && (
            <div className="mb-4 p-3 bg-red-50 border-2 border-red-300 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <p className="text-sm text-red-800">{errorMessage}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-xs text-[#426E55] mb-1.5">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-3 py-2 bg-gray-50 border-2 border-gray-200 rounded text-sm text-[#2D4839] placeholder-[#426E55]/50 focus:outline-none focus:border-[#CB748E]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs text-[#426E55] mb-1.5">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-3 py-2 bg-gray-50 border-2 border-gray-200 rounded text-sm text-[#2D4839] placeholder-[#426E55]/50 focus:outline-none focus:border-[#CB748E]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs text-[#426E55] mb-1.5">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Ask me about a collaboration..."
                className="w-full px-3 py-2 bg-gray-50 border-2 border-gray-200 rounded text-sm text-[#2D4839] placeholder-[#426E55]/50 resize-none focus:outline-none focus:border-[#CB748E]"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#73986F] hover:bg-[#426E55] text-white rounded-lg transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        
        <div className="text-center text-sm text-[#426E55]">
          ⭐ Open to internships, freelance opportunities and collaborations
        </div>
      </div>
    </Window>
  );
}