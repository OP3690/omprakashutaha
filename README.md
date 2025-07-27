# Omprakash Utaha - Portfolio Website

A modern, professional portfolio website built with **React**, **Node.js**, and **Python** showcasing Omprakash Utaha's career as a Senior Product Manager in the fintech industry.

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Smooth animations
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **Nodemailer** - Email functionality
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing

### Data Processing
- **Python** - Analytics and data processing
- **Pandas** - Data manipulation
- **NumPy** - Numerical computing
- **Matplotlib/Seaborn** - Data visualization

## 🎯 Features

### Modern Design
- **Dark theme** with fintech-inspired color scheme
- **Glassmorphism effects** with backdrop blur
- **Responsive design** for all devices
- **Smooth animations** and transitions
- **Animated background** with fintech symbols (₹, $, %, 💳, 📊, 📈, 💰)

### Interactive Components
- **Hero section** with profile card and metrics
- **Animated navigation** with mobile menu
- **Experience timeline** with career progression
- **Skills visualization** with progress bars
- **Contact form** with email integration
- **Social media integration**

### Data-Driven Insights
- **Python analytics** for performance metrics
- **Career progression analysis**
- **Skills distribution analysis**
- **Performance scoring system**

## 📁 Project Structure

```
OmprakashUtaha/
├── src/                          # React frontend
│   ├── components/               # React components
│   │   ├── Hero.js              # Hero section
│   │   ├── Navbar.js            # Navigation
│   │   ├── AnimatedBackground.js # Background animation
│   │   └── ...                  # Other components
│   ├── styles/                  # Styled components
│   │   ├── GlobalStyles.js      # Global styles
│   │   └── theme.js             # Theme configuration
│   └── App.js                   # Main app component
├── server/                      # Node.js backend
│   ├── server.js                # Express server
│   └── package.json             # Backend dependencies
├── python/                      # Python analytics
│   └── analytics.py             # Data processing module
├── public/                      # Static assets
│   └── images/                  # Images and logos
├── package.json                 # Frontend dependencies
├── requirements.txt             # Python dependencies
└── README.md                    # Documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone <repository-url>
cd OmprakashUtaha
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd server
npm install
cd ..
```

### 4. Install Python Dependencies
```bash
pip install -r requirements.txt
```

### 5. Set up Environment Variables
Create a `.env` file in the server directory:
```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=development
```

### 6. Start the Development Servers

#### Start Backend Server
```bash
cd server
npm run dev
```

#### Start Frontend Development Server
```bash
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 🎨 Customization

### Colors & Theme
Edit `src/styles/theme.js` to customize:
- Color palette
- Typography
- Spacing
- Breakpoints
- Shadows

### Content
Update the portfolio data in `server/server.js`:
- Personal information
- Experience details
- Skills and certifications
- Education history
- Social media links

### Styling
Modify styled components in individual component files to adjust:
- Layout
- Animations
- Responsive behavior
- Visual effects

## 📊 Analytics Features

The Python analytics module provides:

### Experience Analysis
- Total years of experience calculation
- Career progression metrics
- Growth rate analysis
- Role transition tracking

### Skills Analysis
- Proficiency distribution
- Skill categorization (Expert, Advanced, Intermediate, Beginner)
- Language proficiency analysis
- Certification impact assessment

### Performance Scoring
- Comprehensive performance score (0-100)
- Weighted scoring based on:
  - Experience (40%)
  - Skills (35%)
  - Languages (15%)
  - Career growth (10%)

### Insights Generation
- Automated insight generation
- Key achievement highlighting
- Professional strengths identification

## 🚀 Deployment

### Frontend Deployment
```bash
npm run build
```
Deploy the `build` folder to your hosting service.

### Backend Deployment
```bash
cd server
npm start
```
Deploy to platforms like Heroku, Vercel, or AWS.

### Python Analytics
The Python module can be deployed as:
- Standalone script
- API endpoint
- Scheduled job
- Jupyter notebook

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 API Endpoints

### Portfolio Data
- `GET /api/portfolio` - Complete portfolio data
- `GET /api/portfolio/personal` - Personal information
- `GET /api/portfolio/experience` - Experience details
- `GET /api/portfolio/skills` - Skills and certifications
- `GET /api/portfolio/education` - Education history

### Contact
- `POST /api/contact` - Contact form submission

### Analytics
- `POST /api/analytics` - Analytics event tracking

### Health Check
- `GET /api/health` - Server health status

## 🎯 Key Features

### Professional Portfolio
- **10+ years** of experience showcase
- **₹10,000+ Cr** loan volume impact
- **72% efficiency** gains achieved
- **5 promotions** in 7 years at Lendingkart

### Modern Technology Stack
- **React 18** with hooks and functional components
- **Styled Components** for maintainable styling
- **Framer Motion** for smooth animations
- **Node.js/Express** for robust backend
- **Python** for data analytics

### Fintech Focus
- **Investment banker** aesthetic
- **Financial symbols** in animations
- **Professional metrics** display
- **Industry-specific** content

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: omprakashutaha@gmail.com
- **Phone**: +91 9723231499
- **LinkedIn**: [Omprakash Utaha](https://www.linkedin.com/in/omprakash-utaha-b1815136/)
- **GitHub**: [OP3690](https://github.com/OP3690)

---

**Built with ❤️ using React, Node.js, and Python** 