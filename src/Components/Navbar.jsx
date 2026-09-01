import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, User, LogIn, UserPlus } from 'lucide-react';
import AuthModal from './AuthModal.jsx';

export default function Navbar({ activeTab, setActiveTab }) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const handleOpenAuth = (mode) => {
    setAuthMode(mode);
    setAuthModalOpen(true);
    setShowUserMenu(false);
  };

  const navItems = [
    { id: 'Home', label: 'Home' },
    { id: 'Student', label: 'Student Dashboard' },
    { id: 'Teacher', label: 'Teacher Dashboard' },
    { id: 'Contact', label: 'Contact Us' },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 30px',
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}
      >
        {/* Left side: Animated Logo & Brand */}
        <motion.div 
          onClick={() => setActiveTab('Home')}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
        >
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#1b5375',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1rem',
              letterSpacing: '0.5px'
            }}
          >
            SE
          </motion.div>
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1b5375' }}>
            SmartEdu
          </span>
        </motion.div>

        {/* Center: Navigation Links with Animated Active Underline */}
        <nav style={{ display: 'flex', gap: '24px', alignItems: 'center', position: 'relative' }}>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? '#1b5375' : '#666666',
                  cursor: 'pointer',
                  paddingBottom: '6px',
                  position: 'relative',
                  outline: 'none'
                }}
              >
                <motion.span whileHover={{ color: '#1b5375' }}>
                  {item.label}
                </motion.span>

                {/* Animated Underline */}
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      backgroundColor: '#1b5375',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right side: Animated Bell & User Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', position: 'relative' }}>
          {/* Bell Icon */}
          <motion.button 
            whileHover={{ scale: 1.15, rotate: 12 }}
            whileTap={{ scale: 0.9 }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }}
          >
            <Bell size={22} color="#1b5375" />
          </motion.button>

          {/* User Icon & Menu Toggle */}
          <div style={{ position: 'relative' }}>
            <motion.button 
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowUserMenu(!showUserMenu)}
              style={{ 
                background: showUserMenu ? '#eef5f9' : 'none', 
                border: 'none', 
                cursor: 'pointer', 
                display: 'flex',
                padding: '6px',
                borderRadius: '50%'
              }}
            >
              <User size={22} color="#1b5375" />
            </motion.button>

            {/* Animated User Dropdown Menu */}
            <AnimatePresence>
              {showUserMenu && (
                <motion.div 
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '45px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    borderRadius: '8px',
                    padding: '8px 0',
                    width: '150px',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 200,
                    overflow: 'hidden'
                  }}
                >
                  <motion.button 
                    whileHover={{ backgroundColor: '#f0f7ff', x: 4 }}
                    onClick={() => handleOpenAuth('login')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 16px',
                      border: 'none',
                      background: 'none',
                      cursor: 'pointer',
                      color: '#333333',
                      fontSize: '0.9rem',
                      textAlign: 'left',
                      width: '100%'
                    }}
                  >
                    <LogIn size={16} color="#1b5375" /> Login
                  </motion.button>

                  <motion.button 
                    whileHover={{ backgroundColor: '#f0f7ff', x: 4 }}
                    onClick={() => handleOpenAuth('register')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 16px',
                      border: 'none',
                      background: 'none',
                      cursor: 'pointer',
                      color: '#333333',
                      fontSize: '0.9rem',
                      textAlign: 'left',
                      width: '100%'
                    }}
                  >
                    <UserPlus size={16} color="#1b5375" /> Register
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      {/* Auth Modal Call */}
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        initialMode={authMode} 
      />
    </>
  );
}