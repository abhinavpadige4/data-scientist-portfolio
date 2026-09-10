import { useState } from 'react';
import { SkillBadge } from '@/components/ui/SkillBadge';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ 
    type: 'success' | 'error'; 
    message: string 
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would send to a serverless function
      // For now, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful submission
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h1>
        
        {/* Status Message */}
        {submitStatus && (
          <div className={`mb-6 p-4 rounded-lg ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 border border-green-200 text-green-800' 
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            <p>{submitStatus.message}</p>
          </div>
        )}
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            <div className="flex items-center space-x-3 text-sm text-gray-500">
              <SkillBadge label="Available" />
              <SkillBadge label="Freelance" />
            </div>
          </div>
        </form>
        
        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Or Reach Me Directly</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.415 1.419l-.74 2.116a1 1 0 01-1.387.504L4.832 11a1 1 0 01-1.5 0L.239 10.803a1 1 0 01-.415-1.419l.74-4.435A1 1 0 011.153 3H2zm4.764 3.706a1 1 0 10-1.409-.405l-.74 2.116a1 1 0 00.415 1.419l.74-2.116a1 1 0 00-.415-1.014zm6.866 0a1 1 0 10-1.409-.405l-.74 2.116a1 1 0 00.415 1.419l.74-2.116a1 1 0 00-.415-1.014zm4.932-.405a1 1 0 10-1.409-.405l-.74 2.116a1 1 0 00.415 1.419l.74-2.116a1 1 0 00-.415-1.014z" clipRule="evenodd" />
              </svg>
              <span>Email: your.email@example.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 9a3 3 0 00-3-3H8a3 3 0 00-5.263 5.744L9 16l-.263 1.256A3 3 0 009 19h6a3 3 0 003-5.744L18 9zM9 9a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
              <span>LinkedIn: linkedin.com/in/yourprofile</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.415 1.419l-.74 2.116a1 1 0 01-1.387.504L4.832 11a1 1 0 01-1.5 0L.239 10.803a1 1 0 01-.415-1.419l.74-4.435A1 1 0 011.153 3H2zm4.764 3.706a1 1 0 10-1.409-.405l-.74 2.116a1 1 0 00.415 1.419l.74-2.116a1 1 0 00-.415-1.014zm6.866 0a1 1 0 10-1.409-.405l-.74 2.116a1 1 0 00.415 1.419l.74-2.116a1 1 0 00-.415-1.014zm4.932-.405a1 1 0 10-1.409-.405l-.74 2.116a1 1 0 00.415 1.419l.74-2.116a1 1 0 00-.415-1.014z" clipRule="evenodd" />
              </svg>
              <span>GitHub: github.com/yourusername</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}