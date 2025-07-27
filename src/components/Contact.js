import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { useTheme } from '../styles/ThemeContext';

const ContactSection = styled.section`
  padding: ${props => props.theme.spacing.section} 0;
  background: ${props => props.theme.colors.background.primary};
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 ${props => props.theme.spacing.md};
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xxxl};
`;

const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fonts.sizes.xxxl};
  font-weight: ${props => props.theme.fonts.weights.extrabold};
  color: ${props => props.theme.isDarkMode ? '#ffffff' : '#0a0a0a'};
  margin-bottom: ${props => props.theme.spacing.lg};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${props => props.theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${props => props.theme.gradients.primary};
    border-radius: ${props => props.theme.borderRadius.full};
  }
`;

const SectionSubtitle = styled.p`
  font-size: ${props => props.theme.fonts.sizes.lg};
  color: ${props => props.theme.isDarkMode ? '#cbd5e1' : '#2d3748'};
  max-width: 700px;
  margin: 0 auto;
  line-height: ${props => props.theme.fonts.lineHeights.relaxed};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xxxl};
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.xxl};
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xl};
`;

const ContactCard = styled.div`
  background: ${props => props.theme.colors.background.card};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xxl};
  border: 1px solid ${props => props.theme.colors.border.primary};
  box-shadow: ${props => props.theme.shadows.lg};
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

const ContactHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.gradients.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${props => props.theme.fonts.sizes.lg};
`;

const ContactTitle = styled.h3`
  font-size: ${props => props.theme.fonts.sizes.lg};
  font-weight: ${props => props.theme.fonts.weights.semibold};
  color: ${props => props.theme.colors.text.primary};
  margin: 0;
`;

const ContactValue = styled.a`
  color: ${props => props.theme.colors.text.secondary};
  text-decoration: none;
  font-size: ${props => props.theme.fonts.sizes.md};
  transition: color ${props => props.theme.transitions.normal};
  
  &:hover {
    color: ${props => props.theme.colors.primary[600]};
  }
`;

const ContactForm = styled(motion.form)`
  background: ${props => props.theme.colors.background.card};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xxxl};
  border: 1px solid ${props => props.theme.colors.border.primary};
  box-shadow: ${props => props.theme.shadows.lg};
`;

const FormTitle = styled.h3`
  font-size: ${props => props.theme.fonts.sizes.xl};
  font-weight: ${props => props.theme.fonts.weights.bold};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: ${props => props.theme.fonts.sizes.sm};
  font-weight: ${props => props.theme.fonts.weights.medium};
  color: ${props => props.theme.isDarkMode ? '#ffffff' : '#0a0a0a'};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const Input = styled.input`
  padding: ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border.primary};
  border-radius: ${props => props.theme.borderRadius.md};
  background: ${props => props.theme.colors.background.secondary};
  color: ${props => props.theme.isDarkMode ? '#ffffff' : '#0a0a0a'};
  font-size: ${props => props.theme.fonts.sizes.md};
  transition: all ${props => props.theme.transitions.normal};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.isDarkMode ? '#60a5fa' : '#2563eb'};
    box-shadow: ${props => props.theme.shadows.glow};
  }
  
  &::placeholder {
    color: ${props => props.theme.isDarkMode ? '#a0aec0' : '#4a5568'};
  }
`;

const TextArea = styled.textarea`
  padding: ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border.primary};
  border-radius: ${props => props.theme.borderRadius.md};
  background: ${props => props.theme.colors.background.secondary};
  color: ${props => props.theme.isDarkMode ? '#ffffff' : '#0a0a0a'};
  font-size: ${props => props.theme.fonts.sizes.md};
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all ${props => props.theme.transitions.normal};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.isDarkMode ? '#60a5fa' : '#2563eb'};
    box-shadow: ${props => props.theme.shadows.glow};
  }
  
  &::placeholder {
    color: ${props => props.theme.isDarkMode ? '#a0aec0' : '#4a5568'};
  }
`;

const SubmitButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  background: ${props => props.theme.gradients.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.lg};
  font-size: ${props => props.theme.fonts.sizes.md};
  font-weight: ${props => props.theme.fonts.weights.semibold};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.lg};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const HelpSection = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background: ${props => props.theme.isDarkMode 
    ? 'rgba(96, 165, 250, 0.1)' 
    : 'rgba(102, 126, 234, 0.1)'
  };
  border-radius: 8px;
  border: 1px solid ${props => props.theme.isDarkMode 
    ? 'rgba(96, 165, 250, 0.2)' 
    : 'rgba(102, 126, 234, 0.2)'
  };
`;

const HelpTitle = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.isDarkMode 
    ? props.theme.colors.primary[400] 
    : props.theme.colors.primary[600]
  };
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const HelpContent = styled.div`
  font-size: 0.85rem;
  color: ${props => props.theme.colors.text.tertiary};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.lg};
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${props => props.theme.colors.background.secondary};
  color: ${props => props.theme.colors.text.secondary};
  border-radius: ${props => props.theme.borderRadius.full};
  text-decoration: none;
  transition: all ${props => props.theme.transitions.normal};
  border: 1px solid ${props => props.theme.colors.border.primary};
  
  &:hover {
    background: ${props => props.theme.colors.primary[600]};
    color: white;
    transform: translateY(-2px);
  }
`;

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      alert('Thank you for your message! I will get back to you soon.');
    }, 2000);
  };

  return (
    <ContactSection id="contact" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Get In Touch</SectionTitle>
          <SectionSubtitle>
            Ready to collaborate on your next fintech project? Let's discuss how we can work together 
            to build innovative products that scale from 0 to millions of users.
          </SectionSubtitle>
        </SectionHeader>

        <ContactGrid>
          <ContactInfo>
            <ContactCard
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactHeader>
                <ContactIcon>
                  <FaEnvelope />
                </ContactIcon>
                <ContactTitle>Email</ContactTitle>
              </ContactHeader>
              <ContactValue href="mailto:omprakashutaha@gmail.com">
                omprakashutaha@gmail.com
              </ContactValue>
            </ContactCard>

            <ContactCard
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ContactHeader>
                <ContactIcon>
                  <FaPhone />
                </ContactIcon>
                <ContactTitle>Phone</ContactTitle>
              </ContactHeader>
              <ContactValue href="tel:+919723231499">
                +91 97232 31499
              </ContactValue>
            </ContactCard>

            <ContactCard
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ContactHeader>
                <ContactIcon>
                  <FaMapMarkerAlt />
                </ContactIcon>
                <ContactTitle>Location</ContactTitle>
              </ContactHeader>
              <ContactValue>
                Bangalore, Karnataka, India
              </ContactValue>
            </ContactCard>

            <ContactCard
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <ContactHeader>
                <ContactIcon>
                  <FaLinkedin />
                </ContactIcon>
                <ContactTitle>Connect</ContactTitle>
              </ContactHeader>
              <div>
                <ContactValue 
                  href="https://www.linkedin.com/in/omprakash-utaha-b1815136/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </ContactValue>
                <SocialLinks>
                  <SocialLink
                    href="https://www.linkedin.com/in/omprakash-utaha-b1815136/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin />
                  </SocialLink>
                  <SocialLink
                    href="https://github.com/OP3690"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub />
                  </SocialLink>
                </SocialLinks>
              </div>
            </ContactCard>

            <ContactCard
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none'
              }}
            >
              <ContactHeader>
                <ContactIcon style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white' }}>
                  <FaPaperPlane />
                </ContactIcon>
                <ContactTitle style={{ color: 'white' }}>Availability</ContactTitle>
              </ContactHeader>
              <div style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                <div style={{ marginBottom: '0.5rem', fontWeight: '600' }}>
                  Open to new opportunities
                </div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  • Product Management Roles<br/>
                  • Fintech Consulting<br/>
                  • Startup Advisory<br/>
                  • Speaking Engagements
                </div>
              </div>
            </ContactCard>
          </ContactInfo>

          <ContactForm
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
          >
            <FormTitle>Let's Start a Conversation</FormTitle>
            <HelpSection isDarkMode={isDarkMode}>
              <HelpTitle isDarkMode={isDarkMode}>
                💼 What I can help you with:
              </HelpTitle>
              <HelpContent>
                • Product strategy & roadmap development<br/>
                • Fintech platform architecture<br/>
                • Team building & leadership<br/>
                • Go-to-market strategies
              </HelpContent>
            </HelpSection>
            
            <FormGrid>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.work@company.com"
                  required
                />
              </FormGroup>
            </FormGrid>
            
            <FormGroup style={{ marginBottom: '1.5rem' }}>
              <Label htmlFor="subject">Subject</Label>
                              <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project type or opportunity"
                  required
                />
            </FormGroup>
            
            <FormGroup style={{ marginBottom: '2rem' }}>
              <Label htmlFor="message">Message</Label>
                              <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, team size, timeline, and how I can contribute to your success..."
                  required
                />
            </FormGroup>
            
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 