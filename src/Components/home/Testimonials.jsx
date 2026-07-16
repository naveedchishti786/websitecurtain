import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=8B4513&color=fff&size=200",
      text: "Excellent service! The curtains are beautiful and the installation was perfect. The team was very professional and completed everything on time. Highly recommended!",
      service: "Curtain Installation",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Delhi, NCR",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=D2691E&color=fff&size=200",
      text: "Amazing quality furniture! The sofa set is exactly what I wanted. The delivery and assembly service was smooth. Very happy with my purchase.",
      service: "Furniture Purchase",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Amit+Patel&background=8B4513&color=fff&size=200",
      text: "Best mattress I've ever bought! The sleep quality has improved significantly. Great customer service and the fitting team was very helpful.",
      service: "Mattress & Bedding",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      location: "Bangalore, Karnataka",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Sneha+Reddy&background=D2691E&color=fff&size=200",
      text: "Professional service from start to finish. The custom curtains fit perfectly and look stunning. The consultation service helped me choose the right design.",
      service: "Custom Curtains",
      date: "1 week ago"
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Jaipur, Rajasthan",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Vikram+Singh&background=8B4513&color=fff&size=200",
      text: "Outstanding quality and value for money! Got complete home furnishing done. Everything from curtains to furniture to bedding - all perfect!",
      service: "Complete Home Furnishing",
      date: "2 months ago"
    },
    {
      id: 6,
      name: "Meena Iyer",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Meena+Iyer&background=D2691E&color=fff&size=200",
      text: "Very impressed with the quality and service. The team was courteous and finished the work quickly. Will definitely recommend to friends and family!",
      service: "Curtain Fitting",
      date: "3 weeks ago"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Render stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={index < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
          <div className="flex items-center justify-center mt-4 space-x-2">
            <div className="flex">{renderStars(5)}</div>
            <span className="text-gray-600 font-semibold">4.9/5 from 500+ reviews</span>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Customer Image */}
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-32 h-32 rounded-full border-4 border-primary shadow-lg"
                />
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                {/* Quote Icon */}
                <div className="text-6xl text-primary opacity-20 mb-4">"</div>
                
                {/* Rating */}
                <div className="flex mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {testimonials[currentIndex].text}
                </p>

                {/* Customer Info */}
                <div className="border-t pt-4">
                  <h4 className="font-bold text-xl text-gray-800">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 flex items-center mt-1">
                    <span className="mr-2">📍</span>
                    {testimonials[currentIndex].location}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {testimonials[currentIndex].service}
                    </span>
                    <span>{testimonials[currentIndex].date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-primary hover:text-white p-4 rounded-full shadow-lg transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-primary hover:text-white p-4 rounded-full shadow-lg transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? 'bg-primary w-8 h-3'
                    : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <p className="text-gray-600">Projects Done</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-gray-600">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;