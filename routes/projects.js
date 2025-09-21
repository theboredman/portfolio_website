const express = require('express');
const router = express.Router();

// Projects page route
router.get('/', (req, res) => {
  res.render('projects', {
    title: 'Projects - Asadullah Hil Galib',
    currentPage: 'projects',
    projects: [
      {
        id: 1,
        title: 'SkinCheck: Mobile Edge AI for Skin Rash Detection',
        description: 'Advanced AI system for multi-class skin rash detection across diverse skin tones using deep learning and computer vision.',
        fullDescription: 'Led design of the Visual+Sonification architecture; implemented custom SonifySpectrogram module and fusion head. Engineered tone-aware training pipeline with strong augmentation and staged optimization.',
        image: '/images/projects/skincheck.jpg',
        technologies: ['Python', 'TensorFlow', 'OpenCV', 'Mobile AI', 'Deep Learning'],
        category: 'AI/ML',
        status: 'Ongoing',
        period: 'June 2025 - Present',
        github: '#',
        demo: '#'
      },
      {
        id: 2,
        title: 'NSU Advising Assistant',
        description: 'Automated course registration monitoring system with real-time notifications and intelligent scheduling.',
        fullDescription: 'Built comprehensive monitoring system with custom refresh intervals, real-time activity logs, and instant seat availability notifications for timely course registration.',
        image: '/images/projects/nsu-assistant.jpg',
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'WebSockets', 'React'],
        category: 'Web Development',
        status: 'Active',
        period: 'Sep 2024 - Present',
        github: '#',
        demo: '#'
      },
      {
        id: 3,
        title: 'PAWsitive Care - Pet Clinic Management',
        description: 'Full-stack Django platform for pet clinics with RBAC authentication, medical records, and billing system.',
        fullDescription: 'Built comprehensive pet clinic platform with role-based access control, pet profiles, medical records, appointment scheduling, billing, inventory management, and community blog.',
        image: '/images/projects/pawsitive-care.jpg',
        technologies: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'JavaScript'],
        category: 'Full-Stack',
        status: 'Completed',
        period: 'July 2025 - Aug 2025',
        github: '#',
        demo: '#'
      },
      {
        id: 4,
        title: 'SciBio GCSE Learning Platform',
        description: 'Adaptive learning platform for GCSE biology with interactive quizzes and modular service architecture.',
        fullDescription: 'Engineered adaptive learning platform integrating modular service layers, advanced authentication methods, and interactive quiz functionality to elevate educational engagement.',
        image: '/images/projects/scibio.jpg',
        technologies: ['React', 'Node.js', 'Express.js', 'MySQL', 'JWT'],
        category: 'EdTech',
        status: 'Completed',
        period: 'July 2025',
        github: '#',
        demo: '#'
      },
      {
        id: 5,
        title: 'Third-Person Shooter Game',
        description: 'Immersive 3D game with responsive combat mechanics and scalable multiplayer architecture.',
        fullDescription: 'Directed creation of third-person shooter featuring immersive environments, responsive combat mechanics, and scalable multiplayer architecture for enhanced gameplay experience.',
        image: '/images/projects/tps-game.jpg',
        technologies: ['Unity', 'C#', 'Photon', '3D Modeling', 'Game Design'],
        category: 'Game Development',
        status: 'Completed',
        period: 'March 2025',
        github: '#',
        demo: '#'
      }
    ]
  });
});

// Individual project route
router.get('/:id', (req, res) => {
  const projectId = parseInt(req.params.id);
  // In a real app, you'd fetch from a database
  const projects = [/* same projects array as above */];
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return res.status(404).render('404', {
      title: '404 - Project Not Found',
      currentPage: '404'
    });
  }
  
  res.render('project-detail', {
    title: `${project.title} - Projects`,
    currentPage: 'projects',
    project
  });
});

module.exports = router;