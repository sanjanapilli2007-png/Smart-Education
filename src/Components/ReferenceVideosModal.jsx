import React, { useState } from 'react';

export default function ReferenceVideosModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activeTopic, setActiveTopic] = useState('Data Structures');

  const topicsData = {
    'Data Structures': [
      { id: 1, title: 'Data Structures: Trees', duration: '09:57', url: 'https://www.youtube.com/watch?v=oSWTXtMglKE' },
      { id: 2, title: 'Graph Algorithms: BFS & DFS', duration: '18:20', url: 'https://www.youtube.com/watch?v=pcKY4hjDrxk' }
    ],
    'Database Management': [
      { id: 3, title: 'SQL Joins & Normalization', duration: '15:10', url: 'https://www.youtube.com/watch?v=7S_tz1z_5bA' },
      { id: 4, title: 'ACID Properties in Relational DBs', duration: '09:30', url: 'https://www.youtube.com/watch?v=GAeP33S4880' }
    ],
    'Web Development': [
      { id: 5, title: 'React Hooks and State Management', duration: '22:15', url: 'https://www.youtube.com/watch?v=TNhaISOUy68' },
      { id: 6, title: 'CSS Grid & Flexbox Mastery', duration: '14:05', url: 'https://www.youtube.com/watch?v=3YW65K6LcIA' }
    ]
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
          padding: '24px',
          width: '90%',
          maxWidth: '650px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          fontFamily: 'sans-serif'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ margin: 0, fontSize: '1.4rem', color: '#111827' }}>🎥 Reference Videos</h2>
          <button 
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#6b7280' }}
          >
            &times;
          </button>
        </div>

        {/* Topic Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', overflowX: 'auto', paddingBottom: '4px' }}>
          {Object.keys(topicsData).map((topic) => (
            <button
              key={topic}
              onClick={() => setActiveTopic(topic)}
              style={{
                padding: '8px 14px',
                border: '1px solid #d1d5db',
                borderRadius: '20px',
                backgroundColor: activeTopic === topic ? '#2563eb' : '#f3f4f6',
                color: activeTopic === topic ? '#ffffff' : '#374151',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                whiteSpace: 'nowrap'
              }}
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Video List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '320px', overflowY: 'auto' }}>
          {topicsData[activeTopic].map((video) => (
            <div 
              key={video.id} 
              style={{ 
                padding: '12px', 
                border: '1px solid #e5e7eb', 
                borderRadius: '8px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                backgroundColor: '#f9fafb'
              }}
            >
              <div>
                <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#111827' }}>▶️ {video.title}</h4>
                <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>Duration: {video.duration}</span>
              </div>
              <a 
                href={video.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: '#0284c7',
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 'bold'
                }}
              >
                Watch Video ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}