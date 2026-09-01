import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: 'easeOut' } 
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        maxWidth: '600px',
        margin: '0 auto'
      }}
    >
      <motion.h2 
        variants={itemVariants} 
        style={{ color: '#1b5375', marginBottom: '8px', fontSize: '1.8rem', fontWeight: 'bold' }}
      >
        Contact Us
      </motion.h2>

      <motion.p 
        variants={itemVariants} 
        style={{ color: '#666', marginBottom: '24px', fontSize: '1rem' }}
      >
        Have questions about SkillPulse? Get in touch with our team.
      </motion.p>

      <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <motion.div variants={itemVariants}>
          <motion.input 
            type="text" 
            placeholder="Your Name" 
            whileFocus={{ scale: 1.01, borderColor: '#1b5375', boxShadow: '0 0 8px rgba(27, 83, 117, 0.2)' }}
            transition={{ duration: 0.2 }}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1.5px solid #e0e0e0',
              fontSize: '1rem',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.input 
            type="email" 
            placeholder="Your Email" 
            whileFocus={{ scale: 1.01, borderColor: '#1b5375', boxShadow: '0 0 8px rgba(27, 83, 117, 0.2)' }}
            transition={{ duration: 0.2 }}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1.5px solid #e0e0e0',
              fontSize: '1rem',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.textarea 
            placeholder="Your Message" 
            rows="4" 
            whileFocus={{ scale: 1.01, borderColor: '#1b5375', boxShadow: '0 0 8px rgba(27, 83, 117, 0.2)' }}
            transition={{ duration: 0.2 }}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1.5px solid #e0e0e0',
              fontSize: '1rem',
              outline: 'none',
              boxSizing: 'border-box',
              resize: 'vertical'
            }}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.button 
            type="submit" 
            whileHover={{ scale: 1.02, boxShadow: '0 6px 16px rgba(255, 159, 67, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: '100%',
              backgroundColor: '#ff9f43',
              color: '#ffffff',
              border: 'none',
              padding: '14px',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            Send Message
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
}