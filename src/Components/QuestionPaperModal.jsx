import React, { useState } from 'react';

export default function QuestionPaperModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [subject, setSubject] = useState('');
  const [difficulty, setDifficulty] = useState('Medium');
  const [targetYear, setTargetYear] = useState('B.Tech First Year');
  const [totalMarks, setTotalMarks] = useState('50');
  const [generatedPaper, setGeneratedPaper] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!subject.trim()) return;

    setLoading(true);
    setGeneratedPaper(null);

    setTimeout(() => {
      setGeneratedPaper({
        title: `${subject.toUpperCase()} - EXAMINATION PAPER`,
        meta: `Target: ${targetYear} | Difficulty: ${difficulty} | Total Marks: ${totalMarks}`,
        questions: [
          { q: `1. Define the fundamental principles of ${subject} and explain its core architecture.`, marks: '10 Marks (Bloom Level: Remember/Understand)' },
          { q: `2. Solve a real-world case study applying ${subject} methodologies in engineering.`, marks: '15 Marks (Bloom Level: Apply/Analyze)' },
          { q: `3. Compare and contrast traditional techniques versus modern ${subject} solutions.`, marks: '15 Marks (Bloom Level: Evaluate)' },
          { q: `4. Propose an optimized design structure for a complex ${subject} module.`, marks: '10 Marks (Bloom Level: Create)' }
        ],
        rubric: [
          { criteria: 'Concept Clarity', max: '40%', detail: 'Accurate terminology, precise definitions, and valid logic.' },
          { criteria: 'Problem Solving', max: '30%', detail: 'Correct application of formulas, algorithms, or design patterns.' },
          { criteria: 'Analysis & Depth', max: '20%', detail: 'Thorough evaluation, comparative charts, or clear diagrams.' },
          { criteria: 'Presentation', max: '10%', detail: 'Structured answers, neat representation, and clear steps.' }
        ]
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '8px', maxWidth: '700px', width: '90%', maxHeight: '85vh', overflowY: 'auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#1e293b' }}>⚡ Question Paper & Rubric Generator</h2>
          <button onClick={onClose} style={{ cursor: 'pointer', padding: '6px 12px', borderRadius: '4px' }}>Close</button>
        </div>

        <form onSubmit={handleGenerate} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>Subject / Topic Name:</label>
            <input 
              type="text" 
              placeholder="e.g. Data Structures, Control Systems, Thermodynamics" 
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>Target Year:</label>
              <select value={targetYear} onChange={(e) => setTargetYear(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
                <option value="B.Tech First Year">B.Tech First Year</option>
                <option value="B.Tech Second Year">B.Tech Second Year</option>
                <option value="B.Tech Third Year">B.Tech Third Year</option>
                <option value="B.Tech Fourth Year">B.Tech Fourth Year</option>
              </select>
            </div>

            <div style={{ flex: 1 }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>Difficulty Level:</label>
              <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard (Bloom's Taxonomy)</option>
              </select>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            style={{ padding: '10px', backgroundColor: '#0284c7', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginTop: '8px' }}
          >
            {loading ? 'Generating Exam Paper...' : '⚡ Generate Paper & Rubric'}
          </button>
        </form>

        {generatedPaper && (
          <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
            <h3 style={{ margin: '0 0 4px 0', textAlign: 'center', color: '#0f172a' }}>{generatedPaper.title}</h3>
            <p style={{ margin: '0 0 16px 0', textAlign: 'center', fontSize: '12px', color: '#64748b' }}>{generatedPaper.meta}</p>

            <h4 style={{ color: '#0284c7', marginBottom: '8px' }}>📝 Questions:</h4>
            {generatedPaper.questions.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '8px', fontSize: '14px' }}>
                <strong>{item.q}</strong>
                <div style={{ fontSize: '12px', color: '#475569' }}>[{item.marks}]</div>
              </div>
            ))}

            <h4 style={{ color: '#0284c7', marginTop: '16px', marginBottom: '8px' }}>📊 Grading Rubric:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {generatedPaper.rubric.map((r, idx) => (
                <div key={idx} style={{ padding: '6px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px', fontSize: '12px' }}>
                  <strong>{r.criteria} ({r.max}):</strong> {r.detail}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}