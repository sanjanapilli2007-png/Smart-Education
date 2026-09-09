import React from 'react';

export default function StudentDetailsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  // Generate 60 students: 30 for Section A, 30 for Section B
  const students = Array.from({ length: 60 }, (_, index) => {
    const id = index + 1;
    const section = id <= 30 ? "Section A" : "Section B";
    return {
      id,
      name: `Student ${id}`,
      rollNo: `SE-${1000 + id}`,
      section
    };
  });

  const sectionA = students.filter(s => s.section === "Section A");
  const sectionB = students.filter(s => s.section === "Section B");

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '24px',
        borderRadius: '8px',
        maxWidth: '800px',
        width: '90%',
        maxHeight: '80vh',
        overflowY: 'auto'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Student Details</h2>
          <button 
            onClick={onClose} 
            style={{ padding: '6px 12px', cursor: 'pointer', borderRadius: '4px' }}
          >
            Close
          </button>
        </div>

        <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
          {/* Section A */}
          <div style={{ flex: 1 }}>
            <h3>Section A (30 Students)</h3>
            <ul style={{ paddingLeft: '20px' }}>
              {sectionA.map((student) => (
                <li key={student.id} style={{ marginBottom: '6px' }}>
                  <strong>{student.name}</strong> - Roll: {student.rollNo}
                </li>
              ))}
            </ul>
          </div>

          {/* Section B */}
          <div style={{ flex: 1 }}>
            <h3>Section B (30 Students)</h3>
            <ul style={{ paddingLeft: '20px' }}>
              {sectionB.map((student) => (
                <li key={student.id} style={{ marginBottom: '6px' }}>
                  <strong>{student.name}</strong> - Roll: {student.rollNo}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}