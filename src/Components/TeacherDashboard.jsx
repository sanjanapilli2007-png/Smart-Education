import React, { useState } from 'react';
import TeacherStatModal from './TeacherStatModal.jsx';
import ReferenceVideosModal from './ReferenceVideosModal.jsx'; // <--- Import
import TeacherQuizBuilder from './TeacherQuizBuilder.jsx';

export default function TeacherDashboard() {
  const [activeModal, setActiveModal] = useState(null); // 'classes', 'pending', 'attendance'
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false); // <--- State for Video Modal

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px', fontFamily: 'serif' }}>
      <p style={{ fontSize: '1.2rem', color: '#1f2937', marginBottom: '32px' }}>
        Manage classes, grade assignments, and track attendance.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {/* Active Classes */}
        <div 
          onClick={() => setActiveModal('classes')}
          style={{ cursor: 'pointer', padding: '8px', borderRadius: '8px' }}
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
          style={{ cursor: 'pointer', padding: '8px', borderRadius: '8px' }}
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
          style={{ cursor: 'pointer', padding: '8px', borderRadius: '8px' }}
        >
          <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', margin: '0 0 8px 0', color: '#000000' }}>
            Average Attendance
          </h2>
          <span style={{ fontSize: '1.5rem', color: '#f59e0b', fontWeight: '500' }}>
            94%
          </span>
        </div>

        {/* Reference Videos (NEW TOPIC SECTION) */}
        <div 
          onClick={() => setIsVideoModalOpen(true)}
          style={{ cursor: 'pointer', padding: '8px', borderRadius: '8px' }}
        >
          <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', margin: '0 0 8px 0', color: '#000000' }}>
            Reference Videos
          </h2>
          <span style={{ fontSize: '1.5rem', color: '#0284c7', fontWeight: '500' }}>
            15 Videos
          </span>
        </div>
      </div>

      {/* Render Modals */}
      <TeacherStatModal 
        isOpen={Boolean(activeModal)} 
        onClose={() => setActiveModal(null)} 
        type={activeModal} 
      />

      <ReferenceVideosModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </div>
  );
}
{/* AI Video Engagement Insights */}
<div style={{
  marginTop: '24px',
  padding: '20px',
  backgroundColor: '#f8fafc',
  borderRadius: '12px',
  border: '1px solid #e2e8f0',
  fontFamily: 'sans-serif'
}}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
    <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#0f172a' }}>
      📊 Video Dropout & Attention Heatmap
    </h3>
    <span style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', fontSize: '0.75rem', fontWeight: 'bold', padding: '4px 10px', borderRadius: '12px' }}>
      AI Video Analytics
    </span>
  </div>

  <p style={{ margin: '0 0 16px 0', color: '#64748b', fontSize: '0.85rem' }}>
    Student re-watch hotspots detected across your 15 uploaded reference videos:
  </p>

  {/* Video Insight Cards */}
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
    
    <div style={{ backgroundColor: '#ffffff', padding: '14px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <strong style={{ fontSize: '0.85rem', color: '#1e293b' }}>Trees & BST Traversal</strong>
        <span style={{ color: '#dc2626', fontSize: '0.8rem', fontWeight: 'bold' }}>⚠️ 68% Rewatch Rate</span>
      </div>
      <p style={{ margin: '0 0 8px 0', fontSize: '0.78rem', color: '#64748b' }}>
        Most students rewinded at <strong>04:15 - 06:30</strong> (Deletion in BST).
      </p>
      <button 
        onClick={() => alert('AI Quiz for BST Deletion added to Student Dashboard!')}
        style={{ width: '100%', backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '6px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 'bold', cursor: 'pointer' }}
      >
        ✨ Auto-Create Supplemental Quiz for 04:15
      </button>
    </div>

    <div style={{ backgroundColor: '#ffffff', padding: '14px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <strong style={{ fontSize: '0.85rem', color: '#1e293b' }}>SQL Joins & Group By</strong>
        <span style={{ color: '#16a34a', fontSize: '0.8rem', fontWeight: 'bold' }}>✅ 92% Completion</span>
      </div>
      <p style={{ margin: '0 0 8px 0', fontSize: '0.78rem', color: '#64748b' }}>
        High comprehension rate. Peak engagement at <strong>08:10</strong>.
      </p>
      <button 
        onClick={() => alert('Discussion prompt posted to class feed!')}
        style={{ width: '100%', backgroundColor: '#0f172a', color: '#fff', border: 'none', padding: '6px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 'bold', cursor: 'pointer' }}
      >
        💬 Post Follow-up Discussion Prompt
      </button>
    </div>

  </div>
</div>