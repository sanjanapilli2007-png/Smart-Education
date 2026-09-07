import React, { useState, useEffect } from 'react';

export default function AuthModal({ isOpen, initialMode = 'login', onClose, onLoginSuccess }) {
  const [isRegistering, setIsRegistering] = useState(initialMode === 'register');

  // Sync mode when modal opens from dropdown
  useEffect(() => {
    setIsRegistering(initialMode === 'register');
  }, [initialMode, isOpen]);

  // Login Form States
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Creative Registration Form States
  const [fullName, setFullName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student');
  const [selectedAvatar, setSelectedAvatar] = useState('🎓');
  const [primaryGoal, setPrimaryGoal] = useState('Master Web Dev');

  if (!isOpen) return null;

  const avatars = ['🎓', '🚀', '💡', '💻', '📚', '⚡'];
  const goals = ['Master Web Dev', 'Ace Data Structures', 'Learn SQL Databases', 'Improve Attendance'];

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginEmail && loginPassword) {
      if (onLoginSuccess) onLoginSuccess(role);
      onClose();
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (regPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (fullName && regEmail && regPassword) {
      if (onLoginSuccess) onLoginSuccess(role);
      onClose();
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '28px',
          width: '90%',
          maxWidth: '450px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          fontFamily: 'sans-serif',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#6b7280'
          }}
        >
          &times;
        </button>

        {!isRegistering ? (
          /* --- LOGIN FORM --- */
          <div>
            <h2 style={{ margin: '0 0 8px 0', color: '#111827' }}>Welcome Back!</h2>
            <p style={{ margin: '0 0 20px 0', color: '#6b7280', fontSize: '0.9rem' }}>
              Login to access your Smart Education dashboard.
            </p>

            <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>
                  Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>
                  Password
                </label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }}
                />
              </div>

              <button 
                type="submit" 
                style={{
                  padding: '12px',
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}
              >
                Log In
              </button>
            </form>

            <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.9rem', color: '#4b5563' }}>
              Don't have an account?{' '}
              <button 
                onClick={() => setIsRegistering(true)} 
                style={{ background: 'none', border: 'none', color: '#2563eb', fontWeight: 'bold', cursor: 'pointer', padding: 0 }}
              >
                Register here
              </button>
            </div>
          </div>
        ) : (
          /* --- CREATIVE REGISTER FORM --- */
          <div>
            <h2 style={{ margin: '0 0 4px 0', color: '#111827' }}>Create Your Learning Profile ✨</h2>
            <p style={{ margin: '0 0 16px 0', color: '#6b7280', fontSize: '0.85rem' }}>
              Customize your account to tailor your learning journey.
            </p>

            <form onSubmit={handleRegisterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Creative Step: Avatar Selection */}
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'block', marginBottom: '6px' }}>
                  Choose Your Profile Badge:
                </label>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between' }}>
                  {avatars.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setSelectedAvatar(emoji)}
                      style={{
                        fontSize: '1.2rem',
                        padding: '6px 10px',
                        borderRadius: '8px',
                        border: selectedAvatar === emoji ? '2px solid #2563eb' : '1px solid #e5e7eb',
                        backgroundColor: selectedAvatar === emoji ? '#eff6ff' : '#ffffff',
                        cursor: 'pointer'
                      }}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              {/* Basic Details */}
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'block', marginBottom: '2px' }}>
                  Full Name
                </label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'block', marginBottom: '2px' }}>
                  Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="student@example.com" 
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  required
                  style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'block', marginBottom: '2px' }}>
                    Password
                  </label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    required
                    style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'block', marginBottom: '2px' }}>
                    Confirm
                  </label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              {/* Role & Goal Selection */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'block', marginBottom: '2px' }}>
                    Account Role
                  </label>
                  <select 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #d1d5db', backgroundColor: '#fff' }}
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </select>
                </div>

                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'block', marginBottom: '2px' }}>
                    Primary Goal
                  </label>
                  <select 
                    value={primaryGoal} 
                    onChange={(e) => setPrimaryGoal(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #d1d5db', backgroundColor: '#fff' }}
                  >
                    {goals.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                style={{
                  padding: '10px',
                  backgroundColor: '#16a34a',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  marginTop: '8px'
                }}
              >
                Join Skill plus! {selectedAvatar}
              </button>
            </form>

            <div style={{ marginTop: '16px', textAlign: 'center', fontSize: '0.85rem', color: '#4b5563' }}>
              Already registered?{' '}
              <button 
                onClick={() => setIsRegistering(false)} 
                style={{ background: 'none', border: 'none', color: '#2563eb', fontWeight: 'bold', cursor: 'pointer', padding: 0 }}
              >
                Sign in here
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}