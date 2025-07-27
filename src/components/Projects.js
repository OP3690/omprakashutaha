import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaChartLine, FaUsers, FaCogs, FaAward } from 'react-icons/fa';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.colors.background.card};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  border: 1px solid ${props => props.theme.colors.border.primary};
  box-shadow: ${props => props.theme.shadows.lg};
  transition: all ${props => props.theme.transitions.normal};
  position: relative;
  overflow: hidden;
  
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

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const ProjectIcon = styled.div`
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

const ProjectInfo = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: ${props => props.theme.fonts.sizes.xl};
  font-weight: ${props => props.theme.fonts.weights.bold};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const ProjectCompany = styled.p`
  font-size: ${props => props.theme.fonts.sizes.md};
  color: ${props => props.theme.colors.primary[600]};
  font-weight: ${props => props.theme.fonts.weights.medium};
  margin: 0;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  line-height: ${props => props.theme.fonts.lineHeights.relaxed};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const ProjectMetrics = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Metric = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.md};
  border: 1px solid ${props => props.theme.colors.border.primary};
`;

const MetricValue = styled.div`
  font-size: ${props => props.theme.fonts.sizes.lg};
  font-weight: ${props => props.theme.fonts.weights.bold};
  color: ${props => props.theme.colors.primary[600]};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const MetricLabel = styled.div`
  font-size: ${props => props.theme.fonts.sizes.sm};
  color: ${props => props.theme.colors.text.secondary};
`;

const ProjectAchievements = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const AchievementTitle = styled.h4`
  font-size: ${props => props.theme.fonts.sizes.md};
  font-weight: ${props => props.theme.fonts.weights.semibold};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AchievementItem = styled.li`
  position: relative;
  padding-left: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.text.secondary};
  line-height: ${props => props.theme.fonts.lineHeights.normal};
  
  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.primary[500]};
    font-weight: ${props => props.theme.fonts.weights.bold};
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
`;

const ProjectTag = styled.span`
  background: ${props => props.theme.colors.primary[100]};
  color: ${props => props.theme.colors.primary[700]};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fonts.sizes.xs};
  font-weight: ${props => props.theme.fonts.weights.medium};
  border: 1px solid ${props => props.theme.colors.primary[200]};
`;

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "MSME Lending Platform",
      company: "Lendingkart",
      icon: FaRocket,
      description: "Built a comprehensive platform [0-1] to onboard banks and NBFCs, increasing funnel contribution to 95% of Lendingkart business.",
      metrics: [
        { value: "35+", label: "Lenders Onboarded" },
        { value: "95%", label: "Funnel Contribution" }
      ],
      achievements: [
        "Implemented in-house BRE (Business Rule Engine) flow",
        "Led team of 3 PMs and 1 Product Analyst",
        "Successfully completed 2 Central Bank (RBI) audits",
        "Reduced soft bucket bounce by ~15%"
      ],
      tags: ["Product Strategy", "Team Leadership", "Compliance", "Automation"]
    },
    {
      id: 2,
      title: "Instant Credit Underwriting",
      company: "Lendingkart",
      icon: FaCogs,
      description: "Pioneered ML-based instant credit underwriting in Indian fintech space with automated decisioning.",
      metrics: [
        { value: "76%", label: "Automated Decisions" },
        { value: "20+", label: "Partners Onboarded" }
      ],
      achievements: [
        "E2E Product Ownership for Credit Underwriting Automation",
        "Scaled from $0.3M to $50M monthly disbursement",
        "Pioneer in Indian Fintech space",
        "Received Star Performance Award in 2018"
      ],
      tags: ["ML/AI", "Fintech", "Automation", "Scaling"]
    },
    {
      id: 3,
      title: "Credlix Digital Platform",
      company: "Credlix.com",
      icon: FaChartLine,
      description: "Launched digital onboarding platform and implemented WhatsApp integration for supplier invoice discounting.",
      metrics: [
        { value: "5x", label: "Traffic Increase" },
        { value: "80%", label: "TAT Reduction" }
      ],
      achievements: [
        "Increased website traffic by 5x in one quarter",
        "WhatsApp integration reduced TAT by 80%",
        "68% customers preferred WhatsApp approval",
        "Implemented end-to-end LOS system"
      ],
      tags: ["Digital Transformation", "UX/UI", "Integration", "Process Automation"]
    },
    {
      id: 4,
      title: "Collection & Recovery System",
      company: "Lendingkart",
      icon: FaUsers,
      description: "Implemented comprehensive collection tele-calling CRM and BBPS platform integration for secure payments.",
      metrics: [
        { value: "15%", label: "Bounce Reduction" },
        { value: "100%", label: "Compliance" }
      ],
      achievements: [
        "Reduced soft bucket bounce by ~15%",
        "Onboarded on BBPS Platform (RBI initiative)",
        "Same day settlement at LMS",
        "Complete compliance with RBI guidelines"
      ],
      tags: ["Collections", "CRM", "Payments", "Compliance"]
    }
  ];

  return (
    <ProjectsSection id="projects" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Key Projects & Achievements</SectionTitle>
          <SectionSubtitle>
            A showcase of transformative projects that have driven business growth, 
            improved customer experience, and established industry benchmarks.
          </SectionSubtitle>
        </SectionHeader>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <ProjectHeader>
                <ProjectIcon>
                  <project.icon />
                </ProjectIcon>
                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectCompany>{project.company}</ProjectCompany>
                </ProjectInfo>
              </ProjectHeader>

              <ProjectDescription>{project.description}</ProjectDescription>

              <ProjectMetrics>
                {project.metrics.map((metric, idx) => (
                  <Metric key={idx}>
                    <MetricValue>{metric.value}</MetricValue>
                    <MetricLabel>{metric.label}</MetricLabel>
                  </Metric>
                ))}
              </ProjectMetrics>

              <ProjectAchievements>
                <AchievementTitle>
                  <FaAward />
                  Key Achievements
                </AchievementTitle>
                <AchievementList>
                  {project.achievements.map((achievement, idx) => (
                    <AchievementItem key={idx}>{achievement}</AchievementItem>
                  ))}
                </AchievementList>
              </ProjectAchievements>

              <ProjectTags>
                {project.tags.map((tag, idx) => (
                  <ProjectTag key={idx}>{tag}</ProjectTag>
                ))}
              </ProjectTags>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 