import React from 'react';

export default function TeacherStatModal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  // Active Classes Data
  const classesData = [
    { name: 'Computer Science 101', students: 45, schedule: 'Mon/Wed 10:00 AM' },
    { name: 'Data Structures', students: 38, schedule: 'Tue/Thu 02:00 PM' },
    { name: 'Database Management', students: 50, schedule: 'Mon/Fri 11:30 AM' },
    { name: 'Operating Systems', students: 42, schedule: 'Wed/Fri 01:00 PM' },
    { name: 'Algorithms', students: 30, schedule: 'Tue/Thu 09:00 AM' },
    { name: 'Web Development', students: 52, schedule: 'Mon/Wed 03:00 PM' }
  ];

  // Pending Submissions Data
  const pendingData = [
    { title: 'Assignment 3: SQL Queries', class: 'Database Management', count: 18, dueDate: 'Yesterday' },
    { title: 'Lab 4: Binary Trees', class: 'Data Structures', count: 14, dueDate: '2 days ago' },
    { title: 'Project Proposal', class: 'Web Development', count: 10, dueDate: 'Today' }
  ];

  // Attendance Breakdown Data
  const attendanceData = [
    { class: 'Computer Science 101', rate: '96%' },
    { class: 'Data Structures', rate: '92%' },
    { class: 'Database Management', rate: '95%' },
    { class: 'Operating Systems', rate: '91%' },
    { class: 'Algorithms', rate: '97%' },
    { class: 'Web Development', rate: '93%' }
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0, fontSize: '1.4rem', color: '#111827' }}>
            {type === 'classes' && '📚 Active Classes Overview'}
            {type === 'pending' && '⏳ Pending Submissions Details'}
            {type === 'attendance' && '📊 Class Attendance Breakdown'}
          </h2>
          <button 
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#6b7280' }}
          >
            &times;
          </button>
        </div>

        {/* Content based on clicked card */}
        {type === 'classes' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '350px', overflowY: 'auto' }}>
            {classesData.map((cls, idx) => (
              <div key={idx} style={{ padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', color: '#111827' }}>{cls.name}</h4>
                  <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Schedule: {cls.schedule}</span>
                </div>
                <span style={{ backgroundColor: '#eff6ff', color: '#2563eb', padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  {cls.students} Students
                </span>
              </div>
            ))}
          </div>
        )}

        {type === 'pending' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '350px', overflowY: 'auto' }}>
            {pendingData.map((item, idx) => (
              <div key={idx} style={{ padding: '12px', border: '1px solid #fecaca', backgroundColor: '#fff5f5', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', color: '#991b1b' }}>{item.title}</h4>
                  <span style={{ fontSize: '0.85rem', color: '#b91c1c' }}>{item.class} • Due: {item.dueDate}</span>
                </div>
                <button style={{ backgroundColor: '#dc2626', color: '#ffffff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold' }}>
                  Grade {item.count} Submissions
                </button>
              </div>
            ))}
          </div>
        )}

        {type === 'attendance' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '350px', overflowY: 'auto' }}>
            {attendanceData.map((att, idx) => (
              <div key={idx} style={{ padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: '500', color: '#374151' }}>{att.class}</span>
                <span style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '1rem' }}>{att.rate}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}