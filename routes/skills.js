const express = require('express');
const router = express.Router();

// Skills page route
router.get('/', (req, res) => {
  res.render('skills', {
    title: 'Skills - Asadullah Hil Galib',
    currentPage: 'skills',
    skillCategories: [
      {
        category: 'AI & Machine Learning',
        icon: '🧠',
        skills: [
          { name: 'Python', level: 90 },
          { name: 'TensorFlow/Keras', level: 85 },
          { name: 'Deep Learning', level: 80 },
          { name: 'Computer Vision', level: 75 },
          { name: 'Natural Language Processing', level: 70 },
          { name: 'Supervised Learning', level: 85 }
        ]
      },
      {
        category: 'Web Development',
        icon: '🌐',
        skills: [
          { name: 'JavaScript', level: 88 },
          { name: 'Node.js', level: 85 },
          { name: 'Express.js', level: 80 },
          { name: 'React.js', level: 82 },
          { name: 'HTML/CSS', level: 90 },
          { name: 'Django', level: 75 }
        ]
      },
      {
        category: 'Database & Backend',
        icon: '🗄️',
        skills: [
          { name: 'PostgreSQL', level: 80 },
          { name: 'MySQL', level: 85 },
          { name: 'SQLite', level: 88 },
          { name: 'MongoDB', level: 75 },
          { name: 'Firebase', level: 70 },
          { name: 'REST APIs', level: 85 }
        ]
      },
      {
        category: 'Tools & Technologies',
        icon: '⚙️',
        skills: [
          { name: 'Git/GitHub', level: 85 },
          { name: 'Linux', level: 80 },
          { name: 'Docker', level: 70 },
          { name: 'Unity', level: 75 },
          { name: 'ARM Cortex-M', level: 65 },
          { name: 'LaTeX', level: 78 }
        ]
      }
    ],
    certifications: [
      {
        name: 'Machine Learning A-Z: AI, Python & R + ChatGPT Prize',
        provider: 'Udemy',
        year: '2024',
        credentialId: 'ML-2024-001'
      },
      {
        name: 'The Web Developer Bootcamp 2025',
        provider: 'Udemy',
        year: '2024',
        credentialId: 'WD-2024-002'
      }
    ]
  });
});

module.exports = router;