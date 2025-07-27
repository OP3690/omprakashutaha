import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowDown, FaRocket, FaChartLine, FaUsers } from 'react-icons/fa';
import { useTheme } from '../styles/ThemeContext';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${props => props.theme.colors.background.hero};
  overflow: hidden;
  padding-top: 70px;
`;
  
const BackgroundGradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  background: ${props => props.theme.gradients.primary};
  opacity: 0.1;
    z-index: 1;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  pointer-events: none;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  background: ${props => props.theme.colors.primary[200]};
  border-radius: ${props => props.theme.borderRadius.full};
  opacity: 0.1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary[600]};
  font-size: ${props => props.theme.fonts.sizes.xl};
`;

const HeroContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xxxl};
  align-items: center;
  z-index: 3;
  position: relative;
  min-height: 80vh;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${props => props.theme.spacing.xxl};
    min-height: auto;
    padding-top: ${props => props.theme.spacing.xxl};
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 ${props => props.theme.spacing.md};
  }
`;

const HeroText = styled.div`
  color: ${props => props.theme.colors.text.inverse};
  text-align: left;
`;

const Greeting = styled(motion.div)`
  font-size: ${props => props.theme.fonts.sizes.lg};
  color: ${props => props.isDarkMode ? '#f8fafc' : '#ffffff'};
  margin-bottom: ${props => props.theme.spacing.md};
  font-weight: ${props => props.theme.fonts.weights.semibold};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;
`;

const Name = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: ${props => props.theme.fonts.weights.black};
  margin-bottom: ${props => props.theme.spacing.md};
  background: ${props => props.isDarkMode 
    ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)'
    : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)'
  };
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  letter-spacing: -0.5px;
`;

const Title = styled(motion.h2)`
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: ${props => props.theme.fonts.weights.bold};
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.isDarkMode ? '#e2e8f0' : '#f8fafc'};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.25px;
`;

const Description = styled(motion.p)`
  font-size: ${props => props.theme.fonts.sizes.lg};
  line-height: 1.8;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.isDarkMode ? '#f1f5f9' : '#ffffff'};
  opacity: 0.95;
  max-width: 600px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-weight: ${props => props.theme.fonts.weights.medium};
  text-align: left;
  white-space: pre-line;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    max-width: none;
    text-align: center;
  }
`;

const Stats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
  grid-template-columns: repeat(2, 1fr);
    gap: ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: ${props => props.theme.fonts.sizes.xxl};
  font-weight: ${props => props.theme.fonts.weights.bold};
  color: ${props => props.isDarkMode ? '#ffffff' : '#ffffff'};
  margin-bottom: ${props => props.theme.spacing.xs};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.5px;
`;

const StatLabel = styled.div`
  font-size: ${props => props.theme.fonts.sizes.sm};
  color: ${props => props.isDarkMode ? '#ffffff' : '#f1f5f9'};
  opacity: 0.9;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-weight: ${props => props.theme.fonts.weights.medium};
`;

const ActionButtons = styled(motion.div)`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.primary[500]};
  color: white;
  text-decoration: none;
  border-radius: ${props => props.theme.borderRadius.lg};
  font-weight: ${props => props.theme.fonts.weights.semibold};
  transition: all ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.lg};
  
  &:hover {
    background: ${props => props.theme.colors.primary[600]};
    color: white;
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  background: transparent;
  color: ${props => props.isDarkMode ? '#ffffff' : '#ffffff'};
  text-decoration: none;
  border: 2px solid ${props => props.isDarkMode ? '#ffffff' : '#ffffff'};
  border-radius: ${props => props.theme.borderRadius.lg};
  font-weight: ${props => props.theme.fonts.weights.semibold};
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    background: ${props => props.isDarkMode ? '#ffffff' : '#ffffff'};
    color: ${props => props.isDarkMode ? '#0a0a0a' : '#0a0a0a'};
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: ${props => props.theme.spacing.md};
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.text.inverse};
  border-radius: ${props => props.theme.borderRadius.full};
  text-decoration: none;
  transition: all ${props => props.theme.transitions.normal};
  backdrop-filter: blur(10px);
  
  &:hover {
    background: ${props => props.theme.colors.primary[600]};
    transform: translateY(-2px);
  }
`;

const HeroVisual = styled.div`
  position: relative;
  display: flex;
    justify-content: center;
  align-items: center;
`;

const ProfileCard = styled(motion.div)`
  background: ${props => props.theme.gradients.glass};
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${props => props.theme.borderRadius.xxl};
  padding: ${props => props.theme.spacing.xxl};
  text-align: center;
  box-shadow: ${props => props.theme.shadows['2xl']};
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
`;

         const ProfileImage = styled.div`
           width: 160px;
           height: 160px;
           border-radius: ${props => props.theme.borderRadius.full};
           background: ${props => props.theme.gradients.primary};
           margin: 0 auto ${props => props.theme.spacing.lg};
           display: flex;
  align-items: center;
           justify-content: center;
  overflow: hidden;
           box-shadow: ${props => props.theme.shadows.xl};
           
           img {
    width: 100%;
    height: 100%;
             object-fit: cover;
             border-radius: ${props => props.theme.borderRadius.full};
           }
         `;

const ProfileInfo = styled.div`
  color: ${props => props.theme.colors.text.inverse};
`;

const ProfileName = styled.h3`
  font-size: ${props => props.theme.fonts.sizes.xl};
  font-weight: ${props => props.theme.fonts.weights.bold};
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.isDarkMode ? '#ffffff' : '#ffffff'};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ProfileRole = styled.p`
  font-size: ${props => props.theme.fonts.sizes.md};
  color: ${props => props.isDarkMode ? '#ffffff' : '#ffffff'};
  margin-bottom: ${props => props.theme.spacing.md};
  font-weight: ${props => props.theme.fonts.weights.semibold};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const ProfileStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.lg};
  margin-top: ${props => props.theme.spacing.lg};
`;

const ProfileStat = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.md};
    background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${props => props.theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  color: ${props => props.theme.colors.text.inverse};
  opacity: 0.7;
  cursor: pointer;
  z-index: 3;
  
  &:hover {
    opacity: 1;
  }
`;

const Hero = () => {
  const { isDarkMode } = useTheme();

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const floatingElements = [
    { icon: FaRocket, top: '10%', left: '10%', delay: 0 },
    { icon: FaChartLine, top: '20%', right: '15%', delay: 0.5 },
    { icon: FaUsers, bottom: '30%', left: '5%', delay: 1 },
    { icon: FaRocket, bottom: '20%', right: '10%', delay: 1.5 }
  ];

  return (
    <HeroSection id="home">
      <BackgroundGradient />
      
      <FloatingElements>
        {floatingElements.map((element, index) => (
          <FloatingElement
            key={index}
            style={{
              top: element.top,
              left: element.left,
              right: element.right,
              bottom: element.bottom
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 6,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <element.icon />
          </FloatingElement>
        ))}
      </FloatingElements>

        <HeroContent>
        <HeroText>
                               <Greeting
            isDarkMode={isDarkMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello World!!! 👋 I'm
          </Greeting>
          
          <Name
            isDarkMode={isDarkMode}
                initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
            Omprakash Utaha
          </Name>
          
          <Title
            isDarkMode={isDarkMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Product Lead at Lendingkart
          </Title>
              
              <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            🚀 Product strategist. Business builder. Zero-to-one specialist.
            I thrive at the intersection of tech, data, and customer experience — scaling platforms from scratch to billions and crafting digital journeys that feel effortless.
              </Description>
              
                     <Stats
                initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
             <Stat>
               <StatNumber isDarkMode={isDarkMode}>11+</StatNumber>
               <StatLabel>Years in Product Management</StatLabel>
             </Stat>
             <Stat>
               <StatNumber isDarkMode={isDarkMode}>3</StatNumber>
               <StatLabel>Organizations</StatLabel>
             </Stat>
             <Stat>
               <StatNumber isDarkMode={isDarkMode}>35+</StatNumber>
               <StatLabel>Lenders Onboarded</StatLabel>
             </Stat>
             <Stat>
               <StatNumber isDarkMode={isDarkMode}>10+</StatNumber>
               <StatLabel>Products from Scratch</StatLabel>
             </Stat>
           </Stats>

          <ActionButtons
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <PrimaryButton
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
              Get In Touch
            </PrimaryButton>
            <SecondaryButton
              href="/CV_Omprakash_Utaha_2025.pdf"
              download="CV_Omprakash_Utaha_2025.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Download CV
            </SecondaryButton>
          </ActionButtons>

          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
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
              href="mailto:omprakashutaha@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
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
        </HeroText>

        <HeroVisual>
          <ProfileCard
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -10 }}
          >
                <ProfileImage>
               <img 
                 src="/images/profile.jpg" 
                 alt="Omprakash Utaha" 
                 onError={(e) => {
                   console.error('Failed to load profile image:', e.target.src);
                   e.target.style.display = 'none';
                 }}
                 onLoad={() => console.log('Profile image loaded successfully')}
               />
                </ProfileImage>
            <ProfileInfo>
              <ProfileName>Omprakash Utaha</ProfileName>
              <ProfileRole>Product Lead</ProfileRole>
              <p style={{ color: '#ffffff', fontWeight: '500', textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>Lendingkart • Bangalore, India 🇮🇳</p>
              
                                         <ProfileStats>
              <ProfileStat>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem', color: '#ffffff' }}>5+</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.8, color: '#ffffff' }}>PMs Mentored</div>
              </ProfileStat>
              <ProfileStat>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem', color: '#ffffff' }}>250M+</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.8, color: '#ffffff' }}>Revenue Growth</div>
              </ProfileStat>
              <ProfileStat>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem', color: '#ffffff' }}>2</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.8, color: '#ffffff' }}>0→1 Startups</div>
              </ProfileStat>
              <ProfileStat>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem', color: '#ffffff' }}>4.5K+</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.8, color: '#ffffff' }}>LinkedIn Followers</div>
              </ProfileStat>
            </ProfileStats>
            </ProfileInfo>
          </ProfileCard>
        </HeroVisual>
        </HeroContent>
      
      <ScrollIndicator
        onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
        >
        <FaArrowDown size={24} />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero; 