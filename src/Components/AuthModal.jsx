import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }) {
  const [isLogin, setIsLogin] = useState(initialMode === 'login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '32px',
        width: '100%',
        maxWidth: '380px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
        position: 'relative'
      }}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#666'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Title */}
        <h2 style={{ color: '#1b5375', marginBottom: '8px', textAlign: 'center' }}>
          {isLogin ? 'Login' : 'Register'}
        </h2>
        <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '24px', textAlign: 'center' }}>
          {isLogin ? 'Please sign in to continue' : 'Create a new account'}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#1b5375', marginBottom: '6px' }}>
              Username
            </label>
            <input 
              type="text" 
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '6px',
                border: '2px solid #1b5375',
                outline: 'none',
                boxSizing: 'border-box',
                fontSize: '0.95rem'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#1b5375', marginBottom: '6px' }}>
              Password
            </label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '6px',
                border: '2px solid #1b5375',
                outline: 'none',
                boxSizing: 'border-box',
                fontSize: '0.95rem'
              }}
            />
          </div>

          {/* Go Button */}
          <button 
            type="submit"
            style={{
              marginTop: '10px',
              backgroundColor: '#1b5375',
              color: '#ffffff',
              border: 'none',
              padding: '12px',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Go
          </button>
        </form>

        {/* Toggle between Login / Register */}
        <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.85rem', color: '#666' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            style={{
              background: 'none',
              border: 'none',
              color: '#ff9f43',
              fontWeight: 'bold',
              cursor: 'pointer',
              padding: 0
            }}
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
}