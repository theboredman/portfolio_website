const express = require('express');
const router = express.Router();

// About page route
router.get('/', (req, res) => {
  res.render('about', {
    title: 'About - Asadullah Hil Galib',
    currentPage: 'about',
    profile: {
      name: 'Asadullah Hil Galib',
      title: 'AI & Machine Learning Developer',
      bio: `I am an aspiring AI and Machine Learning developer with a strong interest in building intelligent systems that bridge the gap between software, data, and real-world applications. My journey began with Python programming and has since expanded into machine learning, deep learning (TensorFlow/Keras), and AI-driven trading systems.

I enjoy experimenting with projects that combine AI models, scalable web applications, and embedded systems. Alongside software, I also explore low-level programming (ARM Assembly, STM32 microcontrollers), giving me a strong foundation in both hardware and software.

Currently, I am advancing my skills in AI, Machine Learning, and FinTech applications, exploring AI trading and crypto trading strategies, and working toward building a cross-platform ecosystem that integrates AI assistants, intelligent applications, and scalable solutions.`,
      image: '/images/profile.jpg',
      stats: [
        { label: 'Years Experience', value: '3+' },
        { label: 'Projects Completed', value: '15+' },
        { label: 'Technologies', value: '20+' },
        { label: 'AI Models Built', value: '8+' }
      ]
    },
    education: [
      {
        degree: 'Bachelor in Computer Science',
        institution: 'North South University',
        period: '2022 - 2027',
        description: 'Specialized in AI & Machine Learning, Deep Learning, and Software Development'
      },
      {
        degree: 'Higher Secondary Certificate',
        institution: 'President Professor Dr Iajuddin Ahmed Residential Model School & College',
        period: '2021',
        description: 'Science background with focus on Mathematics and Physics'
      }
    ],
    experience: [
      {
        role: 'Incharge of Team Promotions',
        company: 'NSU ACM Student Chapter',
        period: 'Sep 2023 - Feb 2025',
        location: 'Dhaka, Bangladesh',
        description: 'Directed promotional initiatives by designing digital assets and coordinating team efforts to elevate event visibility across multiple campus channels.'
      },
      {
        role: 'Fact Checker',
        company: 'Verifiqa Bangladesh',
        period: 'Jul 2023 - Jan 2024',
        location: 'Dhaka, Bangladesh (Remote)',
        description: 'Verified factual accuracy and credibility of digital content submissions by cross-referencing claims with authoritative sources to uphold rigorous editorial standards.'
      }
    ]
  });
});

module.exports = router;