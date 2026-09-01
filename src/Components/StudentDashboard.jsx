import React, { useState } from 'react';
import QuizModal from './QuizModal.jsx';
import StudyPlanModal from './StudyPlanModal.jsx';
import StudyMaterialsModal from './StudyMaterialsModal.jsx';
import StrengthWeaknessModal from './StrengthWeaknessModal.jsx';
import ProgressTrackingModal from './ProgressTrackingModal.jsx'; // <--- Import

export default function StudentDashboard() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const [isMaterialsOpen, setIsMaterialsOpen] = useState(false);
  const [isStrengthOpen, setIsStrengthOpen] = useState(false);
  const [isProgressOpen, setIsProgressOpen] = useState(false); // <--- State

  const listItems = [
    {
      id: 1,
      icon: '📖',
      title: 'Study Materials',
      description: 'Access PDFs, videos and other learning resources organized by subject and topic.',
      onClick: () => setIsMaterialsOpen(true)
    },
    {
      id: 2,
      icon: '📝',
      title: 'Smart Quizzes',
      description: 'Practice with Easy, Medium and Hard MCQ questions with answers and explanations.',
      onClick: () => setIsQuizOpen(true)
    },
    {
      id: 3,
      icon: '📅',
      title: 'Study Plans',
      description: 'Follow a Monday-Friday study plan designed to keep learning organized.',
      onClick: () => setIsPlanOpen(true)
    },
    {
      id: 4,
      icon: '💡',
      title: 'Strength & Weakness',
      description: 'Discover which subjects and topics you understand well and which need more practice.',
      onClick: () => setIsStrengthOpen(true)
    },
    {
      id: 5,
      icon: '📊',
      title: 'Progress Tracking',
      description: 'See your learning journey through simple and meaningful graphs.',
      onClick: () => setIsProgressOpen(true) // <--- Trigger Progress Modal
    }
  ];

  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '32px', color: '#111827' }}>
        Everything you need to learn better.
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {listItems.map((item) => (
          <div 
            key={item.id}
            onClick={item.onClick}
            style={{
              cursor: item.onClick ? 'pointer' : 'default',
              padding: '8px',
              borderRadius: '8px',
              transition: 'background-color 0.2s'
            }}
          >
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
              {item.icon}
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0 0 6px 0', color: '#111827' }}>
              {item.title}
            </h2>
            <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.5' }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Rendered Modals */}
      <StudyMaterialsModal isOpen={isMaterialsOpen} onClose={() => setIsMaterialsOpen(false)} />
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
      <StudyPlanModal isOpen={isPlanOpen} onClose={() => setIsPlanOpen(false)} />
      <StrengthWeaknessModal isOpen={isStrengthOpen} onClose={() => setIsStrengthOpen(false)} />
      <ProgressTrackingModal isOpen={isProgressOpen} onClose={() => setIsProgressOpen(false)} />
    </div>
  );
}