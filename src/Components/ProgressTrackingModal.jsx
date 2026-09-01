import React from 'react';

export default function ProgressTrackingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const weeklyData = [
    { day: 'Mon', score: 65 },
    { day: 'Tue', score: 72 },
    { day: 'Wed', score: 80 },
    { day: 'Thu', score: 75 },
    { day: 'Fri', score: 88 },
    { day: 'Sat', score: 92 },
    { day: 'Sun', score: 85 }
  ];

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
          maxWidth: '650px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          fontFamily: 'sans-serif'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#111827' }}>📊 Progress Tracking</h2>
            <p style={{ margin: '4px 0 0 0', color: '#6b7280', fontSize: '0.9rem' }}>
              Your weekly performance score trend and overall completion stats.
            </p>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#6b7280' }}
          >
            &times;
          </button>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          <div style={{ flex: 1, padding: '12px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
            <span style={{ fontSize: '0.8rem', color: '#4b5563' }}>Avg Accuracy</span>
            <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#111827' }}>81%</div>
          </div>
          <div style={{ flex: 1, padding: '12px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
            <span style={{ fontSize: '0.8rem', color: '#4b5563' }}>Quizzes Attempted</span>
            <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#2563eb' }}>24</div>
          </div>
          <div style={{ flex: 1, padding: '12px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
            <span style={{ fontSize: '0.8rem', color: '#4b5563' }}>Study Hours</span>
            <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#16a34a' }}>14.5 hrs</div>
          </div>
        </div>

        {/* Bar Chart Graph */}
        <h3 style={{ fontSize: '1rem', color: '#374151', marginBottom: '12px' }}>Weekly Score Trend (%)</h3>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '180px', padding: '10px 0', borderBottom: '2px solid #e5e7eb' }}>
          {weeklyData.map((item, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <span style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '4px' }}>{item.score}%</span>
              <div 
                style={{
                  width: '28px',
                  height: `${(item.score / 100) * 140}px`,
                  backgroundColor: '#3b82f6',
                  borderRadius: '4px 4px 0 0',
                  transition: 'height 0.3s ease'
                }}
              />
              <span style={{ fontSize: '0.8rem', color: '#374151', marginTop: '8px', fontWeight: '500' }}>{item.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}