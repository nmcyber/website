'use client'
import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Curtin University', logo: '/curtin-logo.svg' },
  { name: 'Chartered Accountants Australia', logo: '/ca-australia-logo.svg' },
  { name: 'Cambridge University', logo: '/cambridge-logo.svg' },
];

const TrustedPartners = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mt-16 text-center"
    >
      <h3 className="text-[#a8b1b5] text-lg font-medium mb-4">Trusted by 3,200 partners</h3>
      <div className="flex justify-center items-center space-x-8">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <div className="mt-8 flex justify-center items-center space-x-12">
        {partners.map((partner) => (
          <img  key={partner.name} src={partner.logo} alt={partner.name} className="h-12" />
        ))}
      </div>
    </motion.section>
  );
};

export default TrustedPartners;