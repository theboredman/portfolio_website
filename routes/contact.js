const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Contact page route
router.get('/', (req, res) => {
  res.render('contact', {
    title: 'Contact - Asadullah Hil Galib',
    currentPage: 'contact',
    contactInfo: {
      email: 'imgalibb@gmail.com',
      phone: '+880 1946-125814',
      location: 'Dhaka, Bangladesh',
      linkedin: 'https://www.linkedin.com/in/theboredman',
      github: 'https://github.com/asadullahgalib',
      availability: 'Available for freelance projects and collaborations'
    }
  });
});

// Contact form submission
router.post('/', [
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
  body('subject').trim().isLength({ min: 5 }).withMessage('Subject must be at least 5 characters'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { name, email, subject, message } = req.body;

    // In a real application, you would send email here
    // For now, we'll just simulate the process
    console.log('Contact form submission:', { name, email, subject, message });
    
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    res.json({
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while sending your message. Please try again.'
    });
  }
});

module.exports = router;