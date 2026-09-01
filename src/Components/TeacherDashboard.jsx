import React, { useState } from 'react';
import TeacherStatModal from './TeacherStatModal.jsx';

export default function TeacherDashboard() {
  const [activeModal, setActiveModal] = useState(null); // 'classes', 'pending', 'attendance', or null

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px', fontFamily: 'serif' }}>
      <p style={{ fontSize: '1.2rem', color: '#1f2937', marginBottom: '32px' }}>
        Manage classes, grade assignments, and track attendance.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {/* Active Classes */}
        <div 
          onClick={() => setActiveModal('classes')}
          style={{ cursor: 'pointer', padding: '8px', borderRadius: '8px', transition: 'background-color 0.2s' }}
        >
          <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', margin: '0 0 8px 0', color: '#000000' }}>
            Active Classes
          </h2>
          <span style={{ fontSize: '1.5rem', color: '#3b82f6', fontWeight: '500' }}>
            6
          </span>
        </div>

        {/* Pending Submissions */}
        <div 
          onClick={() => setActiveModal('pending')}
          style={{ cursor: 'pointer', padding: '8px', borderRadius: '8px', transition: 'background-color 0.2s' }}
        >
          <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', margin: '0 0 8px 0', color: '#000000' }}>
            Pending Submissions
          </h2>
          <span style={{ fontSize: '1.5rem', color: '#ec4899', fontWeight: '500' }}>
            42
          </span>
        </div>

        {/* Average Attendance */}
        <div 
          onClick={() => setActiveModal('attendance')}
          style={{ cursor: 'pointer', padding: '8px', borderRadius: '8px', transition: 'background-color 0.2s' }}
        >
          <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', margin: '0 0 8px 0', color: '#000000' }}>
            Average Attendance
          </h2>
          <span style={{ fontSize: '1.5rem', color: '#f59e0b', fontWeight: '500' }}>
            94%
          </span>
        </div>
      </div>

      {/* Interactive Modal */}
      <TeacherStatModal 
        isOpen={Boolean(activeModal)} 
        onClose={() => setActiveModal(null)} 
        type={activeModal} 
      />
    </div>
  );
}