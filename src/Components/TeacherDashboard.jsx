import React from 'react';

export default function TeacherDashboard() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif', color: '#1f2937' }}>
      
      {/* Existing Teacher Metrics Header & Stats */}
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.8rem', margin: '0 0 16px 0', color: '#0f172a' }}>Teacher Dashboard</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '1.2rem', color: '#0f172a' }}>Active Classes</h3>
            <span style={{ fontSize: '1.5rem', color: '#3b82f6', fontWeight: 'bold' }}>6</span>
          </div>

          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '1.2rem', color: '#0f172a' }}>Pending Submissions</h3>
            <span style={{ fontSize: '1.5rem', color: '#ec4899', fontWeight: 'bold' }}>42</span>
          </div>

          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '1.2rem', color: '#0f172a' }}>Average Attendance</h3>
            <span style={{ fontSize: '1.5rem', color: '#f59e0b', fontWeight: 'bold' }}>94%</span>
          </div>

          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '1.2rem', color: '#0f172a' }}>Reference Videos</h3>
            <span style={{ fontSize: '1.5rem', color: '#0284c7', fontWeight: 'bold' }}>15 Videos</span>
          </div>
        </div>
      </div>

      {/* NEW CREATIVE FEATURE: AI Video Engagement & Heatmap Analytics */}
      <div style={{
        marginTop: '32px',
        padding: '20px',
        backgroundColor: '#f8fafc',
        borderRadius: '12px',
        border: '1px solid #cbd5e1'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#0f172a' }}>
            📊 Video Retention & Confusion Heatmap
          </h3>
          <span style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', fontSize: '0.75rem', fontWeight: 'bold', padding: '4px 10px', borderRadius: '12px' }}>
            AI Analytics
          </span>
        </div>

        <p style={{ margin: '0 0 16px 0', color: '#64748b', fontSize: '0.85rem' }}>
          AI insights based on student playback behavior across your 15 uploaded videos:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
          
          <div style={{ backgroundColor: '#ffffff', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <strong style={{ fontSize: '0.85rem', color: '#1e293b' }}>Trees & BST Traversal</strong>
              <span style={{ color: '#dc2626', fontSize: '0.8rem', fontWeight: 'bold' }}>⚠️ 68% Rewatch Rate</span>
            </div>
            <p style={{ margin: '0 0 10px 0', fontSize: '0.78rem', color: '#64748b' }}>
              High rewinds detected at <strong>04:15 - 06:30</strong> (BST Deletion Edge Cases).
            </p>
            <button 
              onClick={() => alert('✨ AI Supplemental Practice Quiz assigned to student dashboards!')}
              style={{ width: '100%', backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '8px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer' }}
            >
              ✨ Auto-Push Follow-up Quiz
            </button>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <strong style={{ fontSize: '0.85rem', color: '#1e293b' }}>SQL Joins & Group By</strong>
              <span style={{ color: '#16a34a', fontSize: '0.8rem', fontWeight: 'bold' }}>✅ 92% Completion</span>
            </div>
            <p style={{ margin: '0 0 10px 0', fontSize: '0.78rem', color: '#64748b' }}>
              High comprehension rate. Peak watch time reached at <strong>08:10</strong>.
            </p>
            <button 
              onClick={() => alert('💬 Discussion prompt posted to the class feed!')}
              style={{ width: '100%', backgroundColor: '#0f172a', color: '#fff', border: 'none', padding: '8px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer' }}
            >
              💬 Post AI Discussion Prompt
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}