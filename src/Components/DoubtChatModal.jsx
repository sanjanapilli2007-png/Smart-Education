import React, { useState } from 'react';

export default function DoubtChatModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [doubts, setDoubts] = useState([
    { id: 1, name: 'Student 5', question: 'How do I solve problem 3 in React state?', reply: 'Teacher: Make sure to use useState hook correctly!' },
    { id: 2, name: 'Student 12', question: 'When is the next assignment submission date?', reply: null }
  ]);
  const [newQuestion, setNewQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;
    
    setDoubts([
      ...doubts,
      { id: Date.now(), name: 'You (Student)', question: newQuestion, reply: null }
    ]);
    setNewQuestion('');
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '8px', maxWidth: '600px', width: '90%', maxHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ margin: 0 }}>💬 Ask Doubts & Discussion</h2>
          <button onClick={onClose} style={{ cursor: 'pointer', padding: '6px 12px' }}>Close</button>
        </div>

        {/* Question List */}
        <div style={{ flex: 1, overflowY: 'auto', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {doubts.map((item) => (
            <div key={item.id} style={{ border: '1px solid #e0e0e0', padding: '12px', borderRadius: '6px', backgroundColor: '#f9f9f9' }}>
              <strong style={{ color: '#2563eb' }}>{item.name}:</strong>
              <p style={{ margin: '4px 0 8px 0' }}>{item.question}</p>
              {item.reply ? (
                <div style={{ backgroundColor: '#eef2ff', padding: '8px', borderRadius: '4px', fontSize: '14px', borderLeft: '3px solid #6366f1' }}>
                  {item.reply}
                </div>
              ) : (
                <span style={{ fontSize: '12px', color: '#999' }}>⏳ Pending teacher reply...</span>
              )}
            </div>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            placeholder="Type your doubt or question..."
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{ padding: '10px 16px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}