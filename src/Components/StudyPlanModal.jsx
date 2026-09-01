import React from 'react';

export default function StudyPlanModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const weeklySchedule = [
    { day: 'Monday', subject: 'Mathematics', topic: 'Calculus & Vectors', duration: '1.5 Hours' },
    { day: 'Tuesday', subject: 'Physics', topic: 'Kinematics & Dynamics', duration: '2 Hours' },
    { day: 'Wednesday', subject: 'Computer Science', topic: 'Data Structures & Algorithms', duration: '2 Hours' },
    { day: 'Thursday', subject: 'Chemistry', topic: 'Organic Reaction Mechanisms', duration: '1.5 Hours' },
    { day: 'Friday', subject: 'Revision & Quiz', topic: 'Weekly Practice & Mock Test', duration: '2.5 Hours' }
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
          padding: '24px',
          width: '90%',
          maxWidth: '650px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          fontFamily: 'sans-serif'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#111827' }}>Monday - Friday Study Plan</h2>
          <button 
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#6b7280'
            }}
          >
            &times;
          </button>
        </div>

        <p style={{ margin: '0 0 20px 0', color: '#4b5563', fontSize: '0.95rem' }}>
          Follow this structured daily schedule to maintain continuous learning progress throughout the week.
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
              <th style={{ padding: '10px', color: '#374151', fontSize: '0.9rem' }}>Day</th>
              <th style={{ padding: '10px', color: '#374151', fontSize: '0.9rem' }}>Subject</th>
              <th style={{ padding: '10px', color: '#374151', fontSize: '0.9rem' }}>Topic</th>
              <th style={{ padding: '10px', color: '#374151', fontSize: '0.9rem' }}>Duration</th>
            </tr>
          </thead>
          <tbody>
            {weeklySchedule.map((item, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '12px 10px', fontWeight: 'bold', color: '#1f2937' }}>{item.day}</td>
                <td style={{ padding: '12px 10px', color: '#4b5563' }}>{item.subject}</td>
                <td style={{ padding: '12px 10px', color: '#6b7280', fontSize: '0.9rem' }}>{item.topic}</td>
                <td style={{ padding: '12px 10px', color: '#2563eb', fontWeight: '500', fontSize: '0.9rem' }}>{item.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}