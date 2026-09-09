import React, { useState } from 'react';

export default function AILessonPlannerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [topic, setTopic] = useState('');
  const [grade, setGrade] = useState('B Tech 1st Year');
  const [generatedPlan, setGeneratedPlan] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setGeneratedPlan('');

    // Simulated AI generation response
    setTimeout(() => {
      setGeneratedPlan(`
📌 LESSON PLAN: ${topic.toUpperCase()} (${grade})
--------------------------------------------------
🎯 Key Objectives:
1. Understand core principles of ${topic}.
2. Apply concepts through hands-on practice problems.

⏱️ Time Allocation (60 Mins):
- 10 Mins: Warm-up discussion & review
- 25 Mins: Interactive lecture & visual aids
- 15 Mins: Group activity / Practice quiz
- 10 Mins: Q&A and homework assignment

💡 Suggested Homework Task:
Write a 200-word reflection or complete Exercises 1-5 in Module 3.
      `);
      setLoading(false);
    }, 1200);
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#fff', padding: '24px', borderRadius: '8px',
        maxWidth: '650px', width: '90%', maxHeight: '85vh', overflowY: 'auto'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0 }}>🤖 AI Lesson & Quiz Planner</h2>
          <button onClick={onClose} style={{ cursor: 'pointer', padding: '6px 12px' }}>Close</button>
        </div>

        <form onSubmit={handleGenerate} style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>Topic / Subject:</label>
            <input 
              type="text" 
              placeholder="e.g. Data Structures and Algorithms" 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>Target Grade:</label>
            <select 
              value={grade} 
              onChange={(e) => setGrade(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            >
              <option value="B Tech 1st Year">B Tech 1st Year</option>
              <option value="B Tech 2nd Year">B Tech 2nd Year</option>
              <option value="B Tech 3rd Year">B Tech 3rd Year</option>
              <option value="B Tech 4th Year">B Tech 4th Year</option>
            </select>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            style={{
              padding: '10px', backgroundColor: '#4f46e5', color: '#fff',
              border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold'
            }}
          >
            {loading ? 'Generating Plan...' : '✨ Generate Lesson Plan'}
          </button>
        </form>

        {generatedPlan && (
          <div style={{ marginTop: '20px', backgroundColor: '#f8fafc', padding: '16px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
            <h3 style={{ margin: '0 0 8px 0' }}>Generated Output</h3>
            <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '14px', margin: 0 }}>
              {generatedPlan}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}