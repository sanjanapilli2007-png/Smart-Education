import React, { useState } from 'react';

export default function TeacherQuizBuilder() {
  const [selectedTopic, setSelectedTopic] = useState('Data Structures: Trees');
  const [difficulty, setDifficulty] = useState('Medium');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedQuiz, setGeneratedQuiz] = useState(null);
  const [published, setPublished] = useState(false);

  const handleGenerateQuiz = () => {
    setIsGenerating(true);
    setGeneratedQuiz(null);
    setPublished(false);

    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedQuiz({
        title: `Automated Quiz: ${selectedTopic}`,
        questionsCount: 3,
        estimatedTime: '10 Mins',
        questions: [
          { q: '1. What is the height of a balanced tree with N nodes?', answer: 'O(log N)' },
          { q: '2. Which traversal method processes root first?', answer: 'Pre-order Traversal' },
          { q: '3. What is the maximum degree of a binary tree node?', answer: '2' }
        ]
      });
    }, 1000);
  };

  return (
    <div style={{
      marginTop: '28px',
      padding: '24px',
      backgroundColor: '#f8fafc',
      borderRadius: '12px',
      border: '1px solid #cbd5e1',
      fontFamily: 'sans-serif'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.2rem' }}>
            🪄 AI Quiz & Worksheet Auto-Generator
          </h3>
          <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '0.85rem' }}>
            Instantly create and publish assignments based on your uploaded reference video topics!
          </p>
        </div>
        <span style={{ backgroundColor: '#fef3c7', color: '#92400e', fontSize: '0.75rem', fontWeight: 'bold', padding: '4px 10px', borderRadius: '12px', border: '1px solid #fde68a' }}>
          Teacher Tool ⚡
        </span>
      </div>

      {/* Controls */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '10px', marginBottom: '16px' }}>
        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#334155', display: 'block', marginBottom: '4px' }}>Target Video Topic</label>
          <select 
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
          >
            <option value="Data Structures: Trees">Data Structures: Trees</option>
            <option value="Graph Algorithms: BFS & DFS">Graph Algorithms: BFS & DFS</option>
            <option value="SQL Joins & Normalization">SQL Joins & Normalization</option>
          </select>
        </div>

        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#334155', display: 'block', marginBottom: '4px' }}>Difficulty Level</label>
          <select 
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <button
            onClick={handleGenerateQuiz}
            disabled={isGenerating}
            style={{
              width: '100%',
              backgroundColor: '#16a34a',
              color: '#ffffff',
              border: 'none',
              padding: '9px',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            {isGenerating ? 'Building Quiz...' : '⚡ Auto-Generate'}
          </button>
        </div>
      </div>

      {/* Generated Quiz View */}
      {generatedQuiz && (
        <div style={{ backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h4 style={{ margin: 0, color: '#166534', fontSize: '1rem' }}>
              📋 {generatedQuiz.title} ({difficulty})
            </h4>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Time limit: {generatedQuiz.estimatedTime}</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
            {generatedQuiz.questions.map((item, index) => (
              <div key={index} style={{ backgroundColor: '#f8fafc', padding: '10px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
                <strong style={{ color: '#1e293b' }}>{item.q}</strong>
                <div style={{ color: '#16a34a', marginTop: '2px', fontSize: '0.8rem', fontWeight: 'bold' }}>Correct Answer Key: {item.answer}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: '#475569' }}>Includes Auto-Grading & Real-Time Student Analytics</span>
            {!published ? (
              <button
                onClick={() => setPublished(true)}
                style={{ backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', fontSize: '0.85rem', cursor: 'pointer' }}
              >
                🚀 Push Assignment to Students
              </button>
            ) : (
              <span style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '0.85rem' }}>
                ✅ Published to all Active Classes!
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}