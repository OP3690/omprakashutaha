const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Security middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Portfolio data
const portfolioData = {
  personal: {
    name: "Omprakash Utaha",
    title: "Senior Product Manager | Fintech Leader",
    email: "omprakashutaha@gmail.com",
    phone: "+91 9723231499",
    location: "Bengaluru, Karnataka, India",
    summary: "Transforming financial services through innovative product solutions with 10+ years of experience driving digital transformation in banking and fintech.",
    highlights: [
      "₹10,000+ Cr in loan disbursements automated",
      "72% efficiency gains achieved across lending operations",
      "10+ Banks and NBFCs integration experience"
    ]
  },
  experience: [
    {
      id: 1,
      company: "Lendingkart",
      position: "Senior Product Manager",
      duration: "August 2023 - Present",
      location: "Ahmedabad, Gujarat",
      description: "Leading product strategy for online credit evaluation platform helping entrepreneurs and small businesses with Working Capital Finance.",
      logo: "/images/lendingkart-logo.webp",
      current: true
    },
    {
      id: 2,
      company: "Credlix",
      position: "Associate Director - Product Management",
      duration: "September 2022 - August 2023",
      location: "Noida, Uttar Pradesh",
      description: "Directed product management initiatives and strategic planning for fintech solutions.",
      logo: "/images/credlix-logo.webp"
    },
    {
      id: 3,
      company: "Lendingkart",
      position: "Career Progression (7 Years)",
      duration: "November 2015 - October 2022",
      location: "Multiple Locations",
      description: "Rapid career growth from Business Analyst to Senior Product Manager with 5 promotions in 7 years.",
      logo: "/images/lendingkart-logo.webp",
      progression: [
        { role: "Senior Product Manager", period: "Sep 2021 - Oct 2022", location: "Bengaluru" },
        { role: "Product Manager", period: "Oct 2020 - Sep 2021", location: "Ahmedabad" },
        { role: "Associate Product Manager", period: "Apr 2018 - Oct 2020", location: "Ahmedabad" },
        { role: "Senior Business Analyst", period: "May 2017 - Apr 2018", location: "Ahmedabad" },
        { role: "Business Analyst", period: "Nov 2015 - May 2017", location: "Ahmedabad" }
      ]
    },
    {
      id: 4,
      company: "HDFC ERGO General Insurance",
      position: "Retail Banking Specialist",
      duration: "December 2014 - August 2015",
      location: "Ahmedabad, Gujarat",
      description: "Specialized in retail banking operations and customer service.",
      logo: "/images/hdfc-ergo-logo.png"
    }
  ],
  skills: {
    core: [
      { name: "Product Management", level: 95 },
      { name: "MySQL", level: 85 },
      { name: "Microsoft Excel", level: 90 }
    ],
    languages: [
      { name: "English (Full Professional)", level: 95 },
      { name: "Hindi (Native)", level: 100 },
      { name: "Gujarati (Native)", level: 100 }
    ],
    certifications: [
      "Becoming an AI-First Product Leader",
      "GPT-4 Foundations: Building AI-Powered Apps",
      "CCCA, BCC AND COMPUTER HARDWARE",
      "Metrics for Product Managers",
      "Technology for Product Managers"
    ]
  },
  education: [
    {
      institution: "Gujarat University",
      degree: "Bachelor's in Computer Science",
      period: "2010 - 2013",
      logo: "/images/gujarat-university.png"
    },
    {
      institution: "GAYATRI VIDHYA VIHAR",
      degree: "HSC, Science",
      period: "2006 - 2010",
      logo: "/images/school-board.png"
    }
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/omprakash-utaha-b1815136/",
    github: "https://github.com/OP3690",
    facebook: "https://www.facebook.com/global5665/",
    instagram: "https://www.instagram.com/omprakashutaha/"
  },
  metrics: {
    experience: "10+",
    loanVolume: "₹10K+ Cr",
    efficiency: "72%",
    banks: "10+"
  }
};

// API Routes
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.get('/api/portfolio/personal', (req, res) => {
  res.json(portfolioData.personal);
});

app.get('/api/portfolio/experience', (req, res) => {
  res.json(portfolioData.experience);
});

app.get('/api/portfolio/skills', (req, res) => {
  res.json(portfolioData.skills);
});

app.get('/api/portfolio/education', (req, res) => {
  res.json(portfolioData.education);
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please fill all required fields' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address' });
    }

    // Here you would typically send an email
    // For now, we'll just log the contact request
    console.log('Contact form submission:', { name, email, subject, message });

    // Simulate email sending
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: portfolioData.personal.email,
      subject: `Portfolio Contact: ${subject || 'New Message'}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject || 'Portfolio Contact'}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'Portfolio Contact'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Only send email if credentials are configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
    }

    res.json({ 
      success: true, 
      message: 'Thank you for your message! I will get back to you soon.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      error: 'Something went wrong. Please try again later.' 
    });
  }
});

// Analytics endpoint (for future use)
app.post('/api/analytics', (req, res) => {
  const { event, data } = req.body;
  console.log('Analytics event:', event, data);
  res.json({ success: true });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email notifications: ${process.env.EMAIL_USER ? 'Enabled' : 'Disabled'}`);
}); 