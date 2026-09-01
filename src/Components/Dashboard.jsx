import React, { useState } from 'react';
import QuizModal from './QuizModal';

export default function Dashboard() {
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  return (
    <div style={{ padding: '40px', backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* 3-Column Card Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>

        {/* Adaptive Quizzes Card (Clickable) */}
        <div 
          onClick={() => setIsQuizModalOpen(true)}
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '28px 24px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)'
          }}
        >
          <h3 style={{ color: '#1b5375', marginTop: 0, marginBottom: '12px', fontSize: '1.25rem', fontWeight: 'bold' }}>
            Adaptive Quizzes
          </h3>
          <p style={{ color: '#64748b', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
            Quizzes adjust in real-time based on competency performance and mastery levels.
          </p>
        </div>

        {/* Progress Tracking Card */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '28px 24px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)'
        }}>
          <h3 style={{ color: '#1b5375', marginTop: 0, marginBottom: '12px', fontSize: '1.25rem', fontWeight: 'bold' }}>
            Progress Tracking
          </h3>
          <p style={{ color: '#64748b', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
            Visualize knowledge gaps with interactive charts and detailed performance insights.
          </p>
        </div>

        {/* Teacher Analytics Card */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '28px 24px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)'
        }}>
          <h3 style={{ color: '#1b5375', marginTop: 0, marginBottom: '12px', fontSize: '1.25rem', fontWeight: 'bold' }}>
            Teacher Analytics
          </h3>
          <p style={{ color: '#64748b', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
            Empower educators to create targeted assessments and evaluate class growth seamlessly.
          </p>
        </div>

      </div>

      {/* Quiz Modal */}
      <QuizModal 
        isOpen={isQuizModalOpen} 
        onClose={() => setIsQuizModalOpen(false)} 
      />
    </div>
  );
}