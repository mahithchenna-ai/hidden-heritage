const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 mt-auto">
      <div className="container mx-auto px-4 flex flex-wrap gap-12 justify-between mb-12">
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-secondary font-title text-2xl font-bold mb-6">Hidden Heritage</h3>
          <p>Uncovering India's forgotten past.</p>
        </div>
        <div className="flex-1 min-w-[250px]">
          <h4 className="text-secondary font-title text-xl font-bold mb-6">Links</h4>
          <ul className="list-none">
            <li className="mb-3"><a href="/" className="hover:text-accent transition-colors">Home</a></li>
            <li className="mb-3"><a href="/explore" className="hover:text-accent transition-colors">Explore</a></li>
            <li className="mb-3"><a href="/about" className="hover:text-accent transition-colors">About</a></li>
            <li className="mb-3"><a href="/feedback" className="hover:text-accent transition-colors">Feedback</a></li>
          </ul>
        </div>
        <div className="flex-1 min-w-[250px]">
          <h4 className="text-secondary font-title text-xl font-bold mb-6">Contact</h4>
          <p className="mb-2">Email: info@hiddenheritage.in</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/70">
        <p>&copy; {new Date().getFullYear()} Hidden Heritage. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
