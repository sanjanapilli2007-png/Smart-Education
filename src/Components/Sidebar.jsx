import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, UserCheck, GraduationCap } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'about', label: 'About Platform', icon: BookOpen },
    { id: 'teacher', label: 'Teacher Dashboard', icon: UserCheck },
    { id: 'student', label: 'Student Dashboard', icon: GraduationCap },
  ];

  return (
    <aside className="sidebar">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <motion.button
            key={item.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`nav-btn ${isActive ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <Icon size={20} />
            <span>{item.label}</span>
          </motion.button>
        );
      })}
    </aside>
  );
}