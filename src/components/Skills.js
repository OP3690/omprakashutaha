import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaRocket, FaUsers, FaChartLine, FaCogs
} from 'react-icons/fa';

const SkillsSection = styled.section`
  padding: ${props => props.theme.spacing.section} 0;
  background: ${props => props.theme.colors.background.section};
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing.xxxl};
`;

const SkillCategory = styled(motion.div)`
  background: ${props => props.theme.colors.background.card};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  border: 1px solid ${props => props.theme.colors.border.primary};
  box-shadow: ${props => props.theme.shadows.lg};
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const CategoryIcon = styled.div`
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

const CategoryTitle = styled.h3`
  font-size: ${props => props.theme.fonts.sizes.xl};
  font-weight: ${props => props.theme.fonts.weights.bold};
  color: ${props => props.theme.colors.text.primary};
  margin: 0;
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const SkillItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.md};
  border: 1px solid ${props => props.theme.colors.border.primary};
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    background: ${props => props.theme.colors.primary[50]};
    border-color: ${props => props.theme.colors.primary[200]};
  }
`;

const SkillName = styled.span`
  font-weight: ${props => props.theme.fonts.weights.medium};
  color: ${props => props.theme.colors.text.primary};
`;

const SkillLevel = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;

const SkillBar = styled.div`
  width: 60px;
  height: 6px;
  background: ${props => props.theme.colors.border.primary};
  border-radius: ${props => props.theme.borderRadius.full};
  overflow: hidden;
`;

const SkillProgress = styled(motion.div)`
  height: 100%;
  background: ${props => props.theme.gradients.primary};
  border-radius: ${props => props.theme.borderRadius.full};
`;

const SkillPercentage = styled.span`
  font-size: ${props => props.theme.fonts.sizes.sm};
  font-weight: ${props => props.theme.fonts.weights.medium};
  color: ${props => props.theme.colors.primary[600]};
  min-width: 30px;
  text-align: right;
`;

const ToolsSection = styled(motion.div)`
  background: ${props => props.theme.colors.background.card};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  border: 1px solid ${props => props.theme.colors.border.primary};
  box-shadow: ${props => props.theme.shadows.lg};
`;

const ToolsTitle = styled.h3`
  font-size: ${props => props.theme.fonts.sizes.xl};
  font-weight: ${props => props.theme.fonts.weights.bold};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.lg};
  text-align: center;
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: ${props => props.theme.spacing.md};
  }
`;

const ToolCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid ${props => props.theme.colors.border.primary};
  transition: all ${props => props.theme.transitions.normal};
  text-align: center;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
    border-color: ${props => props.theme.colors.primary[400]};
  }
`;

const ToolIcon = styled.div`
  width: 60px;
  height: 60px;
  background: white;
  border-radius: ${props => props.theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.sm};
  box-shadow: ${props => props.theme.shadows.sm};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ToolName = styled.span`
  font-weight: ${props => props.theme.fonts.weights.semibold};
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.fonts.sizes.md};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const ToolDescription = styled.span`
  font-weight: ${props => props.theme.fonts.weights.normal};
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.fonts.sizes.sm};
`;

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: FaRocket,
      title: "Product Management",
      skills: [
        { name: "Product Strategy", level: 95 },
        { name: "Roadmap Planning", level: 90 },
        { name: "Stakeholder Management", level: 95 },
        { name: "User Experience", level: 85 },
        { name: "Data Analytics", level: 90 },
        { name: "A/B Testing", level: 85 }
      ]
    },
    {
      icon: FaUsers,
      title: "Leadership & Communication",
      skills: [
        { name: "Team Leadership", level: 90 },
        { name: "Cross-functional Coordination", level: 95 },
        { name: "Presentation Skills", level: 85 },
        { name: "Conflict Resolution", level: 80 },
        { name: "Mentoring", level: 85 }
      ]
    },
    {
      icon: FaChartLine,
      title: "Business & Strategy",
      skills: [
        { name: "Business Strategy", level: 90 },
        { name: "Revenue Growth", level: 95 },
        { name: "Market Analysis", level: 85 },
        { name: "Competitive Analysis", level: 80 },
        { name: "Risk Management", level: 85 }
      ]
    },
    {
      icon: FaCogs,
      title: "Technical Skills",
      skills: [
        { name: "SQL & Database", level: 85 },
        { name: "R Programming", level: 80 },
        { name: "Data Analysis", level: 90 },
        { name: "API Integration", level: 75 },
        { name: "System Architecture", level: 80 }
      ]
    }
  ];

  const tools = [
    { 
      name: "JIRA", 
      logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
      description: "Project Management"
    },
    { 
      name: "Salesforce", 
      logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
      description: "CRM Platform"
    },
    { 
      name: "Mixpanel", 
      logo: "https://cdn.worldvectorlogo.com/logos/mixpanel-1.svg",
      description: "Analytics"
    },
    { 
      name: "MySQL", 
      logo: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg",
      description: "Database"
    },
    { 
      name: "Amazon Redshift", 
      logo: "https://cdn.worldvectorlogo.com/logos/amazon-redshift.svg",
      description: "Data Warehouse"
    },
    { 
      name: "Confluence", 
      logo: "https://cdn.worldvectorlogo.com/logos/confluence-1.svg",
      description: "Documentation"
    },
    { 
      name: "Balsamiq", 
      logo: "https://cdn.worldvectorlogo.com/logos/balsamiq-1.svg",
      description: "Wireframing"
    },
    { 
      name: "Draw.io", 
      logo: "https://cdn.worldvectorlogo.com/logos/drawio.svg",
      description: "Diagramming"
    },
    { 
      name: "VBA", 
      logo: "https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg",
      description: "Excel Automation"
    },
    { 
      name: "R Studio", 
      logo: "https://cdn.worldvectorlogo.com/logos/rstudio.svg",
      description: "Data Science"
    }
  ];

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Skills & Expertise</SectionTitle>
          <SectionSubtitle>
            A comprehensive skill set developed over 10+ years of product management experience, 
            combining technical expertise with strategic business acumen.
          </SectionSubtitle>
        </SectionHeader>

        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <CategoryHeader>
                <CategoryIcon>
                  <category.icon />
                </CategoryIcon>
                <CategoryTitle>{category.title}</CategoryTitle>
              </CategoryHeader>
              
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex}>
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevel>
                      <SkillBar>
                        <SkillProgress
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 + skillIndex * 0.05 }}
                        />
                      </SkillBar>
                      <SkillPercentage>{skill.level}%</SkillPercentage>
                    </SkillLevel>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>

        <ToolsSection
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ToolsTitle>Tools & Technologies</ToolsTitle>
          <ToolsGrid>
            {tools.map((tool, index) => (
              <ToolCard
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <ToolIcon>
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} logo`}
                    onError={(e) => {
                      console.error('Failed to load tool logo:', tool.name, e.target.src);
                      e.target.style.display = 'none';
                    }}
                  />
                </ToolIcon>
                <ToolName>{tool.name}</ToolName>
                <ToolDescription>{tool.description}</ToolDescription>
              </ToolCard>
            ))}
          </ToolsGrid>
        </ToolsSection>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 