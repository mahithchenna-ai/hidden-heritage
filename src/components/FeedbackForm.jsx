import { useState } from 'react';

const FeedbackFormError = () => {
  const [formData, setFormData] = useState({ name: '', email: '', rating: '5', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    feedbacks.push({ ...formData, id: Date.now().toString(), date: new Date().toISOString() });
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    setSubmitted(true);
    setFormData({ name: '', email: '', rating: '5', message: '' });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.05)]">
      {submitted ? (
        <div className="text-center py-8">
          <h3 className="text-accent text-xl font-bold mb-2">Thank you for your feedback!</h3>
          <p className="text-secondary">Your input helps us improve the experience.</p>
          <button 
            className="mt-4 bg-primary hover:bg-[#6b5c53] text-white py-2 px-6 rounded font-semibold transition-colors"
            onClick={() => setSubmitted(false)}
          >
            Submit Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-medium text-primary">Name</label>
            <input 
              type="text" 
              id="name" 
              required 
              className="w-full p-3 border border-[#e0d5c1] rounded transition-colors focus:outline-none focus:border-accent"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-medium text-primary">Email</label>
            <input 
              type="email" 
              id="email" 
              required 
              className="w-full p-3 border border-[#e0d5c1] rounded transition-colors focus:outline-none focus:border-accent"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="rating" className="block mb-2 font-medium text-primary">Rating</label>
            <select 
              id="rating" 
              className="w-full p-3 border border-[#e0d5c1] rounded transition-colors focus:outline-none focus:border-accent"
              value={formData.rating}
              onChange={(e) => setFormData({...formData, rating: e.target.value})}
            >
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Good</option>
              <option value="3">3 - Average</option>
              <option value="2">2 - Poor</option>
              <option value="1">1 - Terrible</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-medium text-primary">Message</label>
            <textarea 
              id="message" 
              rows="4" 
              required
              className="w-full p-3 border border-[#e0d5c1] rounded transition-colors focus:outline-none focus:border-accent"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-primary hover:bg-[#6b5c53] text-white py-3 px-6 rounded font-semibold transition-colors">
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
