import { useEffect, useRef } from 'react';

// Hook for scroll reveal animations
export const useScrollReveal = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return elementRef;
};

// Hook for parallax effect
export const useParallax = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrolled = window.scrollY;
        const element = elementRef.current;
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return elementRef;
};

// Hook for mouse move effect
export const useMouseMove = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (elementRef.current) {
        const { clientX, clientY } = e;
        const { left, top, width, height } = elementRef.current.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        
        elementRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
      }
    };

    const handleMouseLeave = () => {
      if (elementRef.current) {
        elementRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
      }
    };

    const element = elementRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return elementRef;
};
