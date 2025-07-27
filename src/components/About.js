import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBriefcase, FaAward, FaRocket, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: ${props => props.theme.spacing.section} 0;
  background: ${props => props.theme.colors.background.section};
  position: relative;
  overflow: hidden;
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

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xxxl};
  margin-bottom: ${props => props.theme.spacing.xxxl};
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.xxl};
  }
`;

const AboutCard = styled(motion.div)`
  background: ${props => props.theme.colors.background.card};
  border-radius: ${props => props.theme.borderRadius.xxl};
  padding: ${props => props.theme.spacing.xxxl};
  border: 1px solid ${props => props.theme.colors.border.primary};
  box-shadow: ${props => props.theme.shadows.lg};
  position: relative;
  overflow: hidden;
  transition: all ${props => props.theme.transitions.normal};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.theme.gradients.primary};
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.theme.gradients.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${props => props.theme.fonts.sizes.xl};
  flex-shrink: 0;
`;

const CardTitle = styled.h3`
  font-size: ${props => props.theme.fonts.sizes.xl};
  font-weight: ${props => props.theme.fonts.weights.bold};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const CardSubtitle = styled.p`
  font-size: ${props => props.theme.fonts.sizes.md};
  color: ${props => props.theme.colors.primary[600]};
  font-weight: ${props => props.theme.fonts.weights.medium};
`;

const CardContent = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  line-height: ${props => props.theme.fonts.lineHeights.relaxed};
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin-top: ${props => props.theme.spacing.xxxl};
`;

const HighlightCard = styled(motion.div)`
  background: ${props => props.theme.colors.background.card};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  border: 1px solid ${props => props.theme.colors.border.primary};
  box-shadow: ${props => props.theme.shadows.md};
  text-align: center;
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const HighlightIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.colors.primary[100]};
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary[600]};
  font-size: ${props => props.theme.fonts.sizes.lg};
  margin: 0 auto ${props => props.theme.spacing.md};
`;

const HighlightTitle = styled.h4`
  font-size: ${props => props.theme.fonts.sizes.lg};
  font-weight: ${props => props.theme.fonts.weights.semibold};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const HighlightDescription = styled.p`
  font-size: ${props => props.theme.fonts.sizes.sm};
  color: ${props => props.theme.colors.text.secondary};
  line-height: ${props => props.theme.fonts.lineHeights.normal};
`;

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: FaRocket,
      title: "Product Scaling",
      description: "Scaled products from 0 to $100M revenue and 0 to 1M+ users"
    },
    {
      icon: FaChartLine,
      title: "Revenue Growth",
      description: "Achieved 80% reduction in TAT leading to better customer experience"
    },
    {
      icon: FaUsers,
      title: "Team Leadership",
      description: "Led teams of 3 PMs and 13 engineers to build scalable products"
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "Pioneered ML-based instant credit underwriting in Indian fintech"
    }
  ];

  return (
    <AboutSection id="about" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>About Me</SectionTitle>
          <SectionSubtitle>
            Over the past decade, I've led high-impact product teams at Lendingkart, Credlix, and HDFC Ergo, scaling digital financial products with a sharp eye on data, UX, and business outcomes. I speak fluent APIs, love turning messy problems into elegant solutions, and believe innovation happens at speed. 🧠 Tech geek by nature — always exploring trends, vibe-coding side projects, reading to recharge, and hopping cities for inspiration.
          </SectionSubtitle>
        </SectionHeader>

        <AboutGrid>
          <AboutCard
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CardHeader>
              <CardIcon>
                <FaGraduationCap />
              </CardIcon>
              <div>
                <CardTitle>Education</CardTitle>
                <CardSubtitle>Gujarat University, Ahmedabad</CardSubtitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Graduated with a full-time B.Sc program in 2013, majoring in Chemistry with 
                Computer Science as a minor. Currently pursuing Data Science Certification 
                through LinkedIn Learning and Udemy, covering R, ML, and other advanced tools.
              </p>
            </CardContent>
          </AboutCard>

          <AboutCard
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CardHeader>
              <CardIcon>
                <FaBriefcase />
              </CardIcon>
              <div>
                <CardTitle>Current Role</CardTitle>
                <CardSubtitle>Product Lead - Lendingkart</CardSubtitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Leading the biggest charter in Lendingkart related to MSME lending, responsible 
                for building platforms to onboard banks and NBFCs. Managing a team of 3 PMs and 
                1 Product Analyst to achieve automated and streamlined customer journeys.
              </p>
            </CardContent>
          </AboutCard>
        </AboutGrid>

        <AboutCard
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <CardHeader>
            <CardIcon>
              <FaAward />
            </CardIcon>
            <div>
              <CardTitle>Key Achievements</CardTitle>
              <CardSubtitle>Recognition & Impact</CardSubtitle>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Star Performance Award</strong> for Instant Credit Underwriting Project in 2018. 
              Received <strong>3 times Hall of Fame Awards</strong> for Best Performer in Product Innovation. 
              Successfully completed <strong>2 Central Bank (RBI) audits</strong> ensuring complete compliance 
              for co-lending and collection flows.
            </p>
            <p>
              Implemented E2E Zero Touch Customer Journey reducing TAT by <strong>80%</strong> and 
              onboarded <strong>35+ lenders</strong> including 3 public sector banks. Achieved 
              <strong> 76% automated credit decisioning</strong> rate, pioneering in Indian fintech space.
            </p>
          </CardContent>
        </AboutCard>

        <HighlightsGrid>
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <HighlightIcon>
                <highlight.icon />
              </HighlightIcon>
              <HighlightTitle>{highlight.title}</HighlightTitle>
              <HighlightDescription>{highlight.description}</HighlightDescription>
            </HighlightCard>
          ))}
        </HighlightsGrid>
      </Container>
    </AboutSection>
  );
};

export default About; 