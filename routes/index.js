const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Asadullah Hil Galib - AI & ML Developer',
    currentPage: 'home',
    hero: {
      name: 'Asadullah Hil Galib',
      title: 'AI & Machine Learning Developer',
      subtitle: 'Building intelligent systems that bridge software, data, and real-world applications',
      description: 'Passionate about creating innovative solutions with Python, TensorFlow, and cutting-edge AI technologies.',
      resumeUrl: '/assets/resume.pdf'
    }
  });
});

module.exports = router;