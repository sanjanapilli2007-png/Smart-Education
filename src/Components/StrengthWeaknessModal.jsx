import React from 'react';

export default function StrengthWeaknessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const strengths = [
    { topic: 'Data Structures', accuracy: '88%', status: 'Mastered' },
    { topic: 'Linear Algebra', accuracy: '82%', status: 'Strong' },
  ];

  const weaknesses = [
    { topic: 'SQL Joins & Normalization', accuracy: '45%', recommendation: 'Review DB Normalization PDF & Retake Quiz' },
    { topic: 'Dynamic Programming', accuracy: '38%', recommendation: 'Practice 5 Easy Level Problems' },
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
            <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#111827' }}>💡 Skill Analysis</h2>
            <p style={{ margin: '4px 0 0 0', color: '#6b7280', fontSize: '0.9rem' }}>
              Insights based on your recent quiz performances and study history.
            </p>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#6b7280' }}
          >
            &times;
          </button>
        </div>

        {/* Strengths Section */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#166534', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>💪</span> Strong Topics
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {strengths.map((item, idx) => (
              <div key={idx} style={{ padding: '12px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#14532d' }}>{item.topic}</h4>
                  <span style={{ fontSize: '0.8rem', color: '#15803d' }}>Accuracy: {item.accuracy}</span>
                </div>
                <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '0.75rem', fontWeight: 'bold', padding: '4px 10px', borderRadius: '12px' }}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Weaknesses Section */}
        <div>
          <h3 style={{ fontSize: '1.1rem', color: '#991b1b', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>⚠️</span> Needs Improvement
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {weaknesses.map((item, idx) => (
              <div key={idx} style={{ padding: '12px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#7f1d1d' }}>{item.topic}</h4>
                  <span style={{ fontSize: '0.8rem', color: '#b91c1c' }}>Recommended: {item.recommendation}</span>
                </div>
                <span style={{ backgroundColor: '#fee2e2', color: '#b91c1c', fontSize: '0.75rem', fontWeight: 'bold', padding: '4px 10px', borderRadius: '12px' }}>
                  {item.accuracy}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}