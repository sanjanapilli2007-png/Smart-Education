import React, { useState } from 'react';

export default function StudyMaterialsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [selectedSubject, setSelectedSubject] = useState('All');

  const materials = [
    { id: 1, title: 'Data Structures & Algorithms Cheat Sheet', subject: 'Computer Science', type: 'PDF', size: '2.4 MB', fileUrl: '#' },
    { id: 2, title: 'Calculus & Linear Algebra Notes', subject: 'Mathematics', type: 'PDF', size: '3.1 MB', fileUrl: '#' },
    { id: 3, title: 'Quantum Mechanics & Wave Motion PDF', subject: 'Physics', type: 'PDF', size: '1.8 MB', fileUrl: '#' },
    { id: 4, title: 'DBMS SQL Commands & Normalization', subject: 'Computer Science', type: 'PDF', size: '4.0 MB', fileUrl: '#' },
    { id: 5, title: 'Organic Chemistry Reactions Summary', subject: 'Chemistry', type: 'PDF', size: '2.9 MB', fileUrl: '#' },
  ];

  const subjects = ['All', 'Computer Science', 'Mathematics', 'Physics', 'Chemistry'];

  const filteredMaterials = selectedSubject === 'All' 
    ? materials 
    : materials.filter(m => m.subject === selectedSubject);

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
          maxWidth: '700px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          fontFamily: 'sans-serif'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#111827' }}>📚 Study Materials & Resources</h2>
            <p style={{ margin: '4px 0 0 0', color: '#6b7280', fontSize: '0.9rem' }}>
              Download or view PDFs organized by subject and topic.
            </p>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#6b7280' }}
          >
            &times;
          </button>
        </div>

        {/* Subject Filter Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', overflowX: 'auto', paddingBottom: '4px' }}>
          {subjects.map(sub => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                border: '1px solid #d1d5db',
                backgroundColor: selectedSubject === sub ? '#2563eb' : '#ffffff',
                color: selectedSubject === sub ? '#ffffff' : '#374151',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: '500'
              }}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* PDF Resources List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '350px', overflowY: 'auto' }}>
          {filteredMaterials.map(item => (
            <div 
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                backgroundColor: '#f9fafb'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '1.2rem' }}>📄</span>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#111827' }}>{item.title}</h4>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                  {item.subject} • {item.size}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <a
                  href={item.fileUrl}
                  onClick={(e) => { e.preventDefault(); alert(`Opening PDF: ${item.title}`); }}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#2563eb',
                    color: '#ffffff',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: '500'
                  }}
                >
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}