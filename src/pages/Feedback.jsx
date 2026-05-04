import FeedbackForm from '../components/FeedbackForm';

const FeedbackError = () => {
  return (
    <div className="container py-20 mx-auto px-4">
      <div className="max-w-[600px] mx-auto">
        <h1 className="text-center text-4xl font-title font-bold text-primary mb-4">We Value Your Feedback</h1>
        <p className="text-center text-[#6b5c53] mb-8 leading-relaxed">
          Help us improve the Hidden Heritage experience by sharing your thoughts.
        </p>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default Feedback;
