import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import components
import Navbar from './Components/Navbar.jsx';
import AboutSection from './Components/AboutSection.jsx';
import TeacherDashboard from './Components/TeacherDashboard.jsx';
import StudentDashboard from './Components/StudentDashboard.jsx';
import ContactSection from './Components/ContactSection.jsx';
import Dashboard from './Components/Dashboard.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main>
        {/* Animated Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            background: 'linear-gradient(135deg, #1b5375 0%, #20638b 100%)',
            color: '#ffffff',
            padding: '80px 20px',
            textAlign: 'center'
          }}
        >
          <motion.h1 initial={{ y: -20 }} animate={{ y: 0 }} style={{ fontSize: '3rem', fontWeight: 'bold' }}>
            SkillPulse
          </motion.h1>
          <p style={{ fontSize: '1.25rem', color: '#e0e0e0', margin: '16px 0 32px' }}>
            AI-powered competency learning and quiz generation platform
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button onClick={() => setActiveTab('Student')} style={{ backgroundColor: '#ff9f43', color: '#fff', border: 'none', padding: '12px 28px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
              Student Dashboard
            </button>
            <button onClick={() => setActiveTab('Teacher')} style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid #ffffff', padding: '12px 28px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
              Teacher Dashboard
            </button>
          </div>
        </motion.section>

        {/* Tab Content */}
        <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            {activeTab === 'Home' && <AboutSection key="home" />}
            {activeTab === 'Student' && <StudentDashboard key="student" />}
            {activeTab === 'Teacher' && <TeacherDashboard key="teacher" />}
            {activeTab === 'Contact' && <ContactSection key="contact" />}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}