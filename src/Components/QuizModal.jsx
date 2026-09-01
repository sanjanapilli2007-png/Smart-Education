import React, { useState } from 'react';

export default function QuizModal({ isOpen, onClose }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // 15 B.Tech Computer Science Topics (5 MCQs each)
  const cseTopics = [
    {
      id: 'ds',
      title: 'Data Structures',
      desc: 'Arrays, Linked Lists, Trees, Graphs & Hash Tables',
      questions: [
        { id: 1, question: 'Which data structure follows the LIFO principle?', options: ['A) Queue', 'B) Stack', 'C) Tree', 'D) Hash Map'], correct: 'B' },
        { id: 2, question: 'Time complexity to access an array element by index:', options: ['A) O(1)', 'B) O(n)', 'C) O(log n)', 'D) O(n²)'], correct: 'A' },
        { id: 3, question: 'Which tree traversal visits the root node first?', options: ['A) In-order', 'B) Post-order', 'C) Pre-order', 'D) Level-order'], correct: 'C' },
        { id: 4, question: 'Advantage of a Doubly Linked List over a Singly Linked List:', options: ['A) Less memory', 'B) Bi-directional traversal', 'C) Faster start insertion', 'D) Contiguous memory'], correct: 'B' },
        { id: 5, question: 'Collision resolution technique using linked lists in Hash Tables:', options: ['A) Linear Probing', 'B) Quadratic Probing', 'C) Separate Chaining', 'D) Double Hashing'], correct: 'C' }
      ]
    },
    {
      id: 'algo',
      title: 'Design & Analysis of Algorithms',
      desc: 'Sorting, Searching, Greedy & Dynamic Programming',
      questions: [
        { id: 1, question: 'Worst-case time complexity of Quick Sort:', options: ['A) O(n log n)', 'B) O(n)', 'C) O(n²)', 'D) O(1)'], correct: 'C' },
        { id: 2, question: "Algorithmic paradigm used by Dijkstra's algorithm:", options: ['A) Divide & Conquer', 'B) Greedy Method', 'C) Backtracking', 'D) Dynamic Programming'], correct: 'B' },
        { id: 3, question: 'Binary Search requires the input array to be:', options: ['A) Unsorted', 'B) Sorted', 'C) Reversed', 'D) Random'], correct: 'B' },
        { id: 4, question: 'Dynamic Programming requires:', options: ['A) Greedy choice', 'B) Overlapping subproblems & Optimal substructure', 'C) Random inputs', 'D) Static arrays'], correct: 'B' },
        { id: 5, question: 'Space complexity of Merge Sort:', options: ['A) O(1)', 'B) O(n)', 'C) O(n²)', 'D) O(log n)'], correct: 'B' }
      ]
    },
    {
      id: 'dbms',
      title: 'Database Management Systems',
      desc: 'SQL, Normalization, ACID Properties & Indexing',
      questions: [
        { id: 1, question: 'Which SQL keyword removes duplicate rows?', options: ['A) UNIQUE', 'B) DISTINCT', 'C) GROUP BY', 'D) FILTER'], correct: 'B' },
        { id: 2, question: 'What does "I" stand for in ACID properties?', options: ['A) Integrity', 'B) Isolation', 'C) Indexing', 'D) Inheritance'], correct: 'B' },
        { id: 3, question: 'Which Normal Form eliminates Partial Dependencies?', options: ['A) 1NF', 'B) 2NF', 'C) 3NF', 'D) BCNF'], correct: 'B' },
        { id: 4, question: 'A key composed of two or more attributes that uniquely identifies a record:', options: ['A) Foreign Key', 'B) Composite Key', 'C) Primary Key', 'D) Alternate Key'], correct: 'B' },
        { id: 5, question: 'Data structure most commonly used for database indexing:', options: ['A) Binary Search Tree', 'B) B+ Tree', 'C) Stack', 'D) Linked List'], correct: 'B' }
      ]
    },
    {
      id: 'os',
      title: 'Operating Systems',
      desc: 'Processes, Threads, CPU Scheduling & Deadlocks',
      questions: [
        { id: 1, question: 'Which CPU scheduling algorithm can cause starvation?', options: ['A) Round Robin', 'B) Shortest Job First (SJF)', 'C) FCFS', 'D) Priority Scheduling'], correct: 'B' },
        { id: 2, question: "Banker's Algorithm is primarily used for:", options: ['A) Deadlock Recovery', 'B) Deadlock Avoidance', 'C) CPU Scheduling', 'D) Page Replacement'], correct: 'B' },
        { id: 3, question: 'What is a lightweight process called?', options: ['A) Kernel', 'B) Thread', 'C) Semaphore', 'D) Interrupt'], correct: 'B' },
        { id: 4, question: "Which page replacement algorithm suffers from Belady's Anomaly?", options: ['A) LRU', 'B) FIFO', 'C) Optimal', 'D) LFU'], correct: 'B' },
        { id: 5, question: 'Virtual Memory enables:', options: ['A) Hardware RAM expansion', 'B) Execution of processes larger than RAM', 'C) Cache memory', 'D) Secondary storage'], correct: 'B' }
      ]
    },
    {
      id: 'cn',
      title: 'Computer Networks',
      desc: 'OSI Model, TCP/IP, IP Addressing & Protocols',
      questions: [
        { id: 1, question: 'How many layers are in the OSI Reference Model?', options: ['A) 4', 'B) 5', 'C) 7', 'D) 6'], correct: 'C' },
        { id: 2, question: 'Transport Layer protocol providing reliable connection-oriented communication:', options: ['A) UDP', 'B) TCP', 'C) IP', 'D) ICMP'], correct: 'B' },
        { id: 3, question: 'Length of an IPv4 address in bits:', options: ['A) 16 bits', 'B) 32 bits', 'C) 64 bits', 'D) 128 bits'], correct: 'B' },
        { id: 4, question: 'Protocol that automatically assigns IP addresses:', options: ['A) DNS', 'B) DHCP', 'C) ARP', 'D) FTP'], correct: 'B' },
        { id: 5, question: 'Topology connecting all devices to a central switch:', options: ['A) Bus Topology', 'B) Ring Topology', 'C) Star Topology', 'D) Mesh Topology'], correct: 'C' }
      ]
    },
    {
      id: 'oop',
      title: 'Object-Oriented Programming',
      desc: 'Encapsulation, Polymorphism, Inheritance & Abstraction',
      questions: [
        { id: 1, question: 'OOP feature allowing a subclass to override a parent method implementation:', options: ['A) Overloading', 'B) Overriding', 'C) Encapsulation', 'D) Abstraction'], correct: 'B' },
        { id: 2, question: 'Wrapping data and methods into a single unit:', options: ['A) Inheritance', 'B) Encapsulation', 'C) Polymorphism', 'D) Interface'], correct: 'B' },
        { id: 3, question: 'Mechanism allowing a class to acquire properties of another class:', options: ['A) Abstraction', 'B) Inheritance', 'C) Instantiation', 'D) Compilation'], correct: 'B' },
        { id: 4, question: 'Function automatically executed when an object is created:', options: ['A) Destructor', 'B) Constructor', 'C) Setter', 'D) Getter'], correct: 'B' },
        { id: 5, question: 'Can an Abstract Class be directly instantiated?', options: ['A) Yes', 'B) No', 'C) Only in C++', 'D) Only with static methods'], correct: 'B' }
      ]
    },
    {
      id: 'toc',
      title: 'Theory of Computation',
      desc: 'Automata, Formal Languages & Turing Machines',
      questions: [
        { id: 1, question: 'Language accepted by a Deterministic Finite Automaton (DFA):', options: ['A) Context-Free', 'B) Regular Language', 'C) Context-Sensitive', 'D) Recursive'], correct: 'B' },
        { id: 2, question: 'Memory structure used by Pushdown Automata (PDA):', options: ['A) Queue', 'B) Stack', 'C) Tree', 'D) Graph'], correct: 'B' },
        { id: 3, question: 'Turing machines correspond to Chomsky Type:', options: ['A) Type 3', 'B) Type 2', 'C) Type 1', 'D) Type 0'], correct: 'D' },
        { id: 4, question: 'The Halting Problem is:', options: ['A) Decidable', 'B) Undecidable', 'C) NP-Complete', 'D) Solvable in O(1)'], correct: 'B' },
        { id: 5, question: 'Pumping Lemma for Regular Languages is primarily used to prove:', options: ['A) Language is regular', 'B) Language is NOT regular', 'C) DFA minimization', 'D) Parsing'], correct: 'B' }
      ]
    },
    {
      id: 'cd',
      title: 'Compiler Design',
      desc: 'Lexical Analysis, Parsing, Syntax Trees & Optimization',
      questions: [
        { id: 1, question: 'Phase that reads character stream and outputs tokens:', options: ['A) Syntax Analysis', 'B) Lexical Analysis', 'C) Semantic Analysis', 'D) Optimization'], correct: 'B' },
        { id: 2, question: 'Syntax Trees are constructed during which compiler phase?', options: ['A) Lexical Analysis', 'B) Parsing', 'C) Assembly', 'D) Linking'], correct: 'B' },
        { id: 3, question: 'Data structure storing information about identifiers and types:', options: ['A) Activation Record', 'B) Symbol Table', 'C) Parse Stack', 'D) Syntax Graph'], correct: 'B' },
        { id: 4, question: 'LR parsers scan input from:', options: ['A) Right-to-Left', 'B) Left-to-Right', 'C) Middle-out', 'D) Bottom-up only'], correct: 'B' },
        { id: 5, question: 'Intermediate Code Generation helps make compilers:', options: ['A) Slower', 'B) Machine Portable', 'C) Hardware Dependent', 'D) Memory intensive'], correct: 'B' }
      ]
    },
    {
      id: 'se',
      title: 'Software Engineering',
      desc: 'Agile, SDLC, Software Testing & Requirements',
      questions: [
        { id: 1, question: 'SDLC model promoting iterative sprints:', options: ['A) Waterfall', 'B) Agile / Scrum', 'C) V-Model', 'D) Big Bang'], correct: 'B' },
        { id: 2, question: 'Testing individual software components in isolation:', options: ['A) Integration Testing', 'B) Unit Testing', 'C) System Testing', 'D) Acceptance Testing'], correct: 'B' },
        { id: 3, question: 'What does SRS stand for?', options: ['A) System Release Schedule', 'B) Software Requirements Specification', 'C) Structured Recovery System', 'D) Source Risk'], correct: 'B' },
        { id: 4, question: 'Black-box testing focuses on:', options: ['A) Internal code logic', 'B) Inputs & Expected Outputs', 'C) DB Schema', 'D) Memory leaks'], correct: 'B' },
        { id: 5, question: 'In modular software design, the target relationship is:', options: ['A) High Coupling & High Cohesion', 'B) Low Coupling & High Cohesion', 'C) High Coupling & Low Cohesion', 'D) Zero Cohesion'], correct: 'B' }
      ]
    },
    {
      id: 'coa',
      title: 'Computer Architecture',
      desc: 'Pipelining, Memory Hierarchy, Cache & RISC vs CISC',
      questions: [
        { id: 1, question: 'Fastest memory placed closest to the CPU core:', options: ['A) RAM', 'B) Cache Memory', 'C) Hard Disk', 'D) SSD'], correct: 'B' },
        { id: 2, question: 'Pipelining increases CPU performance by raising:', options: ['A) Instruction Latency', 'B) Instruction Throughput', 'C) CPI', 'D) Voltage'], correct: 'B' },
        { id: 3, question: 'RISC stands for:', options: ['A) Random Instruction Set Computer', 'B) Reduced Instruction Set Computer', 'C) Rapid Integrated Core', 'D) Storage'], correct: 'B' },
        { id: 4, question: 'Direct Mapping maps each main memory block to:', options: ['A) Any cache line', 'B) Exactly one specific cache line', 'C) Two cache lines', 'D) Virtual RAM'], correct: 'B' },
        { id: 5, question: 'Direct Memory Access (DMA) transfers data directly to:', options: ['A) Cache', 'B) Main Memory (RAM)', 'C) Secondary Storage', 'D) Registers'], correct: 'B' }
      ]
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      desc: 'Search Algorithms, Heuristics, Logic & Knowledge Base',
      questions: [
        { id: 1, question: 'In informed search, A* algorithm evaluates nodes using f(n) =', options: ['A) g(n) * h(n)', 'B) g(n) + h(n)', 'C) h(n) / g(n)', 'D) g(n) - h(n)'], correct: 'B' },
        { id: 2, question: 'Minimax algorithm is used primarily in:', options: ['A) Image classification', 'B) Two-player adversarial games (Chess)', 'C) Query optimization', 'D) TCP handshakes'], correct: 'B' },
        { id: 3, question: 'The Turing Test assesses whether a machine can:', options: ['A) Process fast', 'B) Exhibit human-indistinguishable intelligence', 'C) Prevent viruses', 'D) Parse databases'], correct: 'B' },
        { id: 4, question: 'Alpha-Beta Pruning speeds up:', options: ['A) A* Search', 'B) Minimax Search', 'C) Decision Trees', 'D) K-Means'], correct: 'B' },
        { id: 5, question: 'Knowledge represented as IF-THEN conditions:', options: ['A) Frame Representation', 'B) Rule-Based System', 'C) Semantic Net', 'D) First-Order Logic'], correct: 'B' }
      ]
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      desc: 'Supervised, Unsupervised, Regression & Neural Networks',
      questions: [
        { id: 1, question: 'Which algorithm is an example of Supervised Learning?', options: ['A) K-Means', 'B) Linear Regression', 'C) PCA', 'D) Autoencoders'], correct: 'B' },
        { id: 2, question: 'Overfitting occurs when a model performs:', options: ['A) Poorly overall', 'B) Great on training, poorly on test data', 'C) Identically', 'D) Fast'], correct: 'B' },
        { id: 3, question: 'Activation function mapping outputs to range (0, 1):', options: ['A) ReLU', 'B) Sigmoid', 'C) Tanh', 'D) Softmax'], correct: 'B' },
        { id: 4, question: 'K-Means belongs to which category?', options: ['A) Supervised Classification', 'B) Unsupervised Clustering', 'C) Reinforcement Learning', 'D) Regression'], correct: 'B' },
        { id: 5, question: 'Primary goal of Gradient Descent:', options: ['A) Increase features', 'B) Minimize Cost/Loss Function', 'C) Impute missing values', 'D) Format data'], correct: 'B' }
      ]
    },
    {
      id: 'cs',
      title: 'Cyber Security & Cryptography',
      desc: 'Encryption, Hashing, Authentication & Network Attacks',
      questions: [
        { id: 1, question: 'RSA is an example of:', options: ['A) Symmetric Key', 'B) Asymmetric Key Cryptography', 'C) Hash Algorithm', 'D) Substitution'], correct: 'B' },
        { id: 2, question: 'Attack overwhelming a target server with traffic:', options: ['A) Man-in-the-Middle', 'B) Distributed Denial of Service (DDoS)', 'C) SQL Injection', 'D) XSS'], correct: 'B' },
        { id: 3, question: 'One-way algorithm for secure password hashing:', options: ['A) AES', 'B) SHA-256', 'C) DES', 'D) RSA'], correct: 'B' },
        { id: 4, question: 'SQL Injection vulnerabilities target:', options: ['A) CSS files', 'B) Backend Databases', 'C) DNS Servers', 'D) Routers'], correct: 'B' },
        { id: 5, question: 'Protocol providing encryption for HTTP traffic:', options: ['A) FTP', 'B) TLS/SSL', 'C) SSH', 'D) UDP'], correct: 'B' }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud Computing',
      desc: 'IaaS, PaaS, SaaS, Virtualization & Containers',
      questions: [
        { id: 1, question: 'AWS EC2 is classified under:', options: ['A) SaaS', 'B) IaaS', 'C) PaaS', 'D) DaaS'], correct: 'B' },
        { id: 2, question: 'Google App Engine is an example of:', options: ['A) IaaS', 'B) PaaS', 'C) SaaS', 'D) Bare Metal'], correct: 'B' },
        { id: 3, question: 'Software allowing multiple isolated virtual operating systems:', options: ['A) Docker', 'B) Hypervisor', 'C) Kubernetes', 'D) Nginx'], correct: 'B' },
        { id: 4, question: 'Docker containers share which component with host?', options: ['A) Guest OS', 'B) Host OS Kernel', 'C) Virtual BIOS', 'D) Dedicated RAM'], correct: 'B' },
        { id: 5, question: 'Primary task of Kubernetes:', options: ['A) Code compilation', 'B) Container Orchestration', 'C) Video encoding', 'D) DB indexing'], correct: 'B' }
      ]
    },
    {
      id: 'web',
      title: 'Web Technologies',
      desc: 'HTML, CSS, JavaScript, React & REST APIs',
      questions: [
        { id: 1, question: 'HTML5 tag used to embed client-side JavaScript:', options: ['A) <js>', 'B) <script>', 'C) <javascript>', 'D) <code>'], correct: 'B' },
        { id: 2, question: 'Read-only data passed parent to child in React:', options: ['A) State', 'B) Props', 'C) Hooks', 'D) Redux'], correct: 'B' },
        { id: 3, question: 'HTTP method used to update resources in REST API:', options: ['A) GET', 'B) PUT / PATCH', 'C) POST', 'D) DELETE'], correct: 'B' },
        { id: 4, question: 'Effect of CSS rule `flex-direction: column`:', options: ['A) Horizontally aligns', 'B) Stacks items vertically', 'C) Centers content', 'D) Hides container'], correct: 'B' },
        { id: 5, question: 'JavaScript method converting JSON string to Object:', options: ['A) JSON.stringify()', 'B) JSON.parse()', 'C) Object.fromJSON()', 'D) Parse.toJSON()'], correct: 'B' }
      ]
    }
  ];

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const handleOptionSelect = (qId, optionLetter) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionLetter }));
  };

  const calculateScore = () => {
    if (!selectedTopic) return 0;
    let score = 0;
    selectedTopic.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) score += 1;
    });
    return score;
  };

  const handleCloseModal = () => {
    setSelectedTopic(null);
    setSelectedAnswers({});
    setSubmitted(false);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '32px',
        width: '100%',
        maxWidth: selectedTopic ? '680px' : '900px',
        maxHeight: '85vh',
        overflowY: 'auto',
        boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
        position: 'relative'
      }}>
        {/* Close Modal Button */}
        <button 
          onClick={handleCloseModal}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: '#64748b'
          }}
        >
          &times;
        </button>

        {/* VIEW 1: TOPIC SELECTION GRID (15 TOPICS) */}
        {!selectedTopic ? (
          <div>
            <div style={{ marginBottom: '24px', borderBottom: '2px solid #f1f5f9', paddingBottom: '16px' }}>
              <span style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                B.Tech Computer Science (CSE)
              </span>
              <h2 style={{ color: '#1b5375', margin: '12px 0 6px 0', fontSize: '1.75rem', fontWeight: 'bold' }}>
                Select Adaptive Quiz Topic
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>
                Click any subject below to launch its 5 MCQ adaptive assessment.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '16px'
            }}>
              {cseTopics.map((topic) => (
                <div
                  key={topic.id}
                  onClick={() => handleTopicSelect(topic)}
                  style={{
                    padding: '18px',
                    borderRadius: '12px',
                    border: '1.5px solid #e2e8f0',
                    backgroundColor: '#f8fafc',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <h4 style={{ margin: '0 0 8px 0', color: '#1b5375', fontSize: '1.05rem', fontWeight: '700' }}>
                      {topic.title}
                    </h4>
                    <p style={{ margin: 0, color: '#64748b', fontSize: '0.85rem', lineHeight: '1.4' }}>
                      {topic.desc}
                    </p>
                  </div>
                  <span style={{ marginTop: '14px', fontSize: '0.8rem', color: '#ff9f43', fontWeight: 'bold' }}>
                    Start 5 MCQs &rarr;
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* VIEW 2: 5 MCQ QUIZ VIEW FOR SELECTED TOPIC */
          <div>
            <button
              onClick={() => { setSelectedTopic(null); setSelectedAnswers({}); setSubmitted(false); }}
              style={{
                background: 'none',
                border: 'none',
                color: '#1b5375',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.9rem',
                padding: 0,
                marginBottom: '16px'
              }}
            >
              &larr; Back to All Topics
            </button>

            <div style={{ marginBottom: '20px', borderBottom: '2px solid #f1f5f9', paddingBottom: '16px' }}>
              <span style={{ backgroundColor: '#ffedd5', color: '#c2410c', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                {selectedTopic.title}
              </span>
              <h2 style={{ color: '#1b5375', margin: '10px 0 4px 0', fontSize: '1.5rem' }}>
                Adaptive Assessment
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
                Answer all 5 questions below using options A, B, C, or D.
              </p>
            </div>

            {/* Score Output Banner */}
            {submitted && (
              <div style={{
                backgroundColor: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '10px',
                padding: '16px',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#15803d', margin: '0 0 4px 0' }}>Quiz Completed!</h3>
                <p style={{ color: '#166534', margin: 0, fontWeight: '600' }}>
                  Score: {calculateScore()} / {selectedTopic.questions.length} ({((calculateScore() / selectedTopic.questions.length) * 100).toFixed(0)}%)
                </p>
              </div>
            )}

            {/* MCQ List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {selectedTopic.questions.map((q, index) => (
                <div key={q.id} style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <p style={{ fontWeight: '700', color: '#1e293b', marginBottom: '12px', fontSize: '0.98rem' }}>
                    {index + 1}. {q.question}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {q.options.map((opt) => {
                      const letter = opt.charAt(0);
                      const isSelected = selectedAnswers[q.id] === letter;
                      const isCorrect = submitted && letter === q.correct;
                      const isWrong = submitted && isSelected && letter !== q.correct;

                      let bg = '#ffffff';
                      let borderColor = '#cbd5e1';
                      let textColor = '#334155';

                      if (isSelected) {
                        bg = '#eef5f9';
                        borderColor = '#1b5375';
                        textColor = '#1b5375';
                      }
                      if (isCorrect) {
                        bg = '#dcfce7';
                        borderColor = '#22c55e';
                        textColor = '#15803d';
                      }
                      if (isWrong) {
                        bg = '#fee2e2';
                        borderColor = '#ef4444';
                        textColor = '#b91c1c';
                      }

                      return (
                        <button
                          key={opt}
                          onClick={() => handleOptionSelect(q.id, letter)}
                          style={{
                            textAlign: 'left',
                            padding: '10px 14px',
                            borderRadius: '8px',
                            border: `2px solid ${borderColor}`,
                            backgroundColor: bg,
                            color: textColor,
                            cursor: submitted ? 'default' : 'pointer',
                            fontWeight: isSelected ? '600' : '400',
                            fontSize: '0.9rem'
                          }}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Buttons */}
            <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              {submitted ? (
                <button
                  onClick={() => { setSelectedAnswers({}); setSubmitted(false); }}
                  style={{
                    backgroundColor: '#1b5375',
                    color: '#ffffff',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Retake Quiz
                </button>
              ) : (
                <button
                  onClick={() => setSubmitted(true)}
                  disabled={Object.keys(selectedAnswers).length < selectedTopic.questions.length}
                  style={{
                    backgroundColor: Object.keys(selectedAnswers).length === selectedTopic.questions.length ? '#ff9f43' : '#cbd5e1',
                    color: '#ffffff',
                    border: 'none',
                    padding: '12px 28px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: Object.keys(selectedAnswers).length === selectedTopic.questions.length ? 'pointer' : 'not-allowed'
                  }}
                >
                  Submit Quiz
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}