import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: 'flex', flexDirection: 'column', gap: '32px', margin: '20px 0' }}
    >
      {/* Top Banner: Learn Smarter */}
      <motion.div
        variants={itemVariants}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '50px 40px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)'
        }}
      >
        <h1 
          style={{
            fontSize: '3rem',
            fontWeight: '800',
            color: '#0f172a',
            lineHeight: '1.15',
            margin: '0 0 20px 0',
            letterSpacing: '-0.5px'
          }}
        >
          Learn Smarter.<br />
          Grow Better.
        </h1>

        <p 
          style={{
            fontSize: '1.15rem',
            color: '#475569',
            lineHeight: '1.6',
            maxWidth: '850px',
            marginBottom: '32px'
          }}
        >
          A smart learning platform that helps students understand their strengths, 
          improve their weaknesses, and learn at their own pace.
        </p>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <motion.button 
            whileHover={{ scale: 1.04, backgroundColor: '#133e59' }}
            whileTap={{ scale: 0.96 }}
            style={{
              backgroundColor: '#1b5375',
              color: '#ffffff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(27, 83, 117, 0.25)'
            }}
          >
            Start Learning &rarr;
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.04, backgroundColor: '#f1f5f9' }}
            whileTap={{ scale: 0.96 }}
            style={{
              backgroundColor: '#ffffff',
              color: '#334155',
              border: '1.5px solid #cbd5e1',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Bottom Section: Original Features & Overview */}
      <motion.div
        variants={itemVariants}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)'
        }}
      >
        <h2 style={{ color: '#1b5375', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '16px' }}>
          Platform Overview
        </h2>
        <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '28px' }}>
          SkillPulse bridges the gap between traditional learning and intelligent evaluation. 
          With personalized feedback and real-time skill tracking, students and educators achieve better outcomes together.
        </p>

        {/* Feature Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <motion.div 
            whileHover={{ y: -6 }}
            style={{
              padding: '24px',
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}
          >
            <h3 style={{ color: '#1b5375', fontSize: '1.2rem', marginBottom: '8px' }}>Adaptive Quizzes</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>
              Quizzes adjust in real-time based on competency performance and mastery levels.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6 }}
            style={{
              padding: '24px',
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}
          >
            <h3 style={{ color: '#1b5375', fontSize: '1.2rem', marginBottom: '8px' }}>Progress Tracking</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>
              Visualize knowledge gaps with interactive charts and detailed performance insights.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6 }}
            style={{
              padding: '24px',
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}
          >
            <h3 style={{ color: '#1b5375', fontSize: '1.2rem', marginBottom: '8px' }}>Teacher Analytics</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>
              Empower educators to create targeted assessments and evaluate class growth seamlessly.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}