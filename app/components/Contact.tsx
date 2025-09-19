const Contact = () => {
  return (
    <section id="contact" className="py-20" aria-labelledby="contact-heading">
      <div className="container mx-auto">
        <h2 id="contact-heading" className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-md mx-auto text-center">
          <p className="mb-4">Feel free to reach out to me via email or connect with me on social media.</p>
          <a
            href="mailto:email@example.com"
            className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Send email to contact"
          >
            email@example.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
