import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const ExperienceSection = styled.section`
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

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${props => props.theme.colors.border.primary};
    transform: translateX(-50%);
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: ${props => props.theme.spacing.xxxl};
  display: flex;
  align-items: center;
  
  &:nth-child(odd) {
    flex-direction: row;
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      flex-direction: row;
    }
  }
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      flex-direction: row;
    }
  }
`;

const TimelineContent = styled.div`
  flex: 1;
  max-width: 45%;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    max-width: calc(100% - 80px);
    margin-left: 60px;
  }
`;

const TimelineCard = styled.div`
  background: ${props => props.theme.colors.background.card};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  border: 1px solid ${props => props.theme.colors.border.primary};
  box-shadow: ${props => props.theme.shadows.lg};
  position: relative;
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing.lg};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: ${props => props.theme.spacing.md};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border-style: solid;
    
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      ${props => props.isEven ? `
        right: -10px;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent ${props.theme.colors.background.card};
      ` : `
        left: -10px;
        border-width: 10px 10px 10px 0;
        border-color: transparent ${props.theme.colors.background.card} transparent transparent;
      `}
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: ${props => props.theme.gradients.primary};
  border-radius: ${props => props.theme.borderRadius.full};
  border: 4px solid ${props => props.theme.colors.background.primary};
  box-shadow: ${props => props.theme.shadows.md};
  z-index: 2;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    left: 30px;
  }
`;

const CompanyLogo = styled.a`
  width: 120px;
  height: 60px;
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.md};
  flex-shrink: 0;
  border: 1px solid ${props => props.theme.colors.border.primary};
  padding: ${props => props.theme.spacing.sm};
  text-decoration: none;
  transition: all ${props => props.theme.transitions.normal};
  position: relative;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
    border-color: ${props => props.theme.colors.primary[400]};
    
    .external-link-icon {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  .external-link-icon {
    position: absolute;
    top: -5px;
    right: -5px;
    background: ${props => props.theme.colors.primary[600]};
    color: white;
    width: 20px;
    height: 20px;
    border-radius: ${props => props.theme.borderRadius.full};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    opacity: 0;
    transform: scale(0);
    transition: all ${props => props.theme.transitions.normal};
  }
`;

const JobTitle = styled.h3`
  font-size: ${props => props.theme.fonts.sizes.xl};
  font-weight: ${props => props.theme.fonts.weights.bold};
  color: ${props => props.theme.isDarkMode ? '#ffffff' : '#0a0a0a'};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const CompanyName = styled.h4`
  font-size: ${props => props.theme.fonts.sizes.lg};
  font-weight: ${props => props.theme.fonts.weights.semibold};
  color: ${props => props.theme.isDarkMode ? '#60a5fa' : '#2563eb'};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const JobMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.md};
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  font-size: ${props => props.theme.fonts.sizes.sm};
  color: ${props => props.theme.isDarkMode ? '#a0aec0' : '#4a5568'};
`;

const JobDescription = styled.p`
  color: ${props => props.theme.isDarkMode ? '#cbd5e1' : '#2d3748'};
  line-height: ${props => props.theme.fonts.lineHeights.relaxed};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const Responsibilities = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Responsibility = styled.li`
  position: relative;
  padding-left: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.isDarkMode ? '#a0aec0' : '#4a5568'};
  line-height: ${props => props.theme.fonts.lineHeights.normal};
  
  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: ${props => props.theme.isDarkMode ? '#60a5fa' : '#2563eb'};
    font-weight: ${props => props.theme.fonts.weights.bold};
  }
`;

const Achievements = styled.div`
  margin-top: ${props => props.theme.spacing.md};
  padding-top: ${props => props.theme.spacing.md};
  border-top: 1px solid ${props => props.theme.colors.border.primary};
`;

const AchievementTitle = styled.h5`
  font-size: ${props => props.theme.fonts.sizes.md};
  font-weight: ${props => props.theme.fonts.weights.semibold};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
          {
            id: 1,
      title: "Senior Product Manager",
      company: "Lendingkart",
      location: "Bangalore, India 🇮🇳",
      duration: "Aug'23 - Present",
      logo: "/images/Lendingkart_logo.png",
      companyUrl: "https://www.lendingkart.com/",
      description: "Product lead for the biggest charter in Lendingkart related to MSME lending responsible for building the platform [0–1] to onboard several banks and NBFCs.",
      responsibilities: [
        "Implemented in-house BRE (Business Rule Engine) flow to orchestrate the lender eligibility across 35 onboarded lenders",
        "Lead a team of 3 PMs and 1 Product Analyst to execute product design and delivery",
        "Implemented an in-house collection tele-calling CRM which helped to reduced the soft bucket bounce by ~15%",
        "Onboarded Lendingkart on BBPS Platform enabling secure and convenient bill payments",
        "Successfully completed 2 Central Bank (RBI) audits ensuring complete compliance"
      ],
      achievements: [
        "Star Performance Award for Instant Credit Underwriting Project in 2018",
        "3 times Hall of Fame Awards - Best Performer in Product Innovation"
      ]
    },
    {
      id: 2,
      title: "Associate Director - Product Management",
      company: "Credlix.com",
      location: "Noida",
      duration: "Sep'22 - Aug'23",
      logo: "/images/Credlix.png",
      companyUrl: "https://www.credlix.com/",
      description: "Handling & Mentoring the team of 2 PMs and 13 Engineers to build a strong product culture to build a scalable and impact driven organization.",
      responsibilities: [
        "Launched the Credlix.com to onboard the customers digitally and working with Marketing team",
        "Whatsapp Integration to notify and get consent from supplier for invoice discounting",
        "Implemented a digitized supplier onboarding journey and launched a DIY platform",
        "Implementing a completed end to end automated journey for the supplier and internal operations team",
        "Implemented an end to end LOS system for the internal operations team"
      ],
      achievements: [
        "Increased website traffic by 5x in one quarter through SEO and blog optimization",
        "Reduced TAT by 80% and 68% customer preferred to approve invoices on WhatsApp"
      ]
    },
    {
      id: 3,
      title: "Senior Product Manager",
      company: "Lendingkart.com",
      location: "Bangalore, India 🇮🇳",
      duration: "Nov'15 - Sep'22",
      logo: "/images/Lendingkart_logo.png",
      companyUrl: "https://www.lendingkart.com/",
      description: "Single Handedly managed interaction and coordination between different stakeholders across Six product lines.",
      responsibilities: [
        "E2E Product Ownership & Automation for Credit Underwriting Automation, ML Based Scoring Platform",
        "76% Customers gets amount sanctioned by automated credit decisioning",
        "Handled the E2E customer onboarding and underwriting flow to scale from $0.3M monthly to $50M monthly disbursement",
        "Identify gaps in operations and managed the development of new features",
        "Work closely with the Management and Product Head to build the organization's technical team",
        "Ownership of Partner Data Integration (i.e., Credit Bureau, Auth Bridge, Experian, NSDL etc.)"
      ],
      achievements: [
        "Pioneer in Indian Fintech space with >20 partner (including 3 public sector banks) onboarded",
        "Increased internal operational efficiency by 65% and reduced support tickets by 40%"
      ]
    },
    {
      id: 4,
      title: "Associate BOSG",
      company: "HDFC ERGO",
      location: "Ahmedabad",
      duration: "Nov'14 - Jul'15",
      logo: "/images/HDFC_ERGO_LOGO.png",
      companyUrl: "https://www.hdfcergo.com/",
      description: "Handled Insurance Issuance & Payment Platform and Policy Management Platform.",
      responsibilities: [
        "Handled Insurance Issuance & Payment Platform and Policy Management Platform",
        "Perform Risk Inspection, get some checks automated as part of process excellence",
        "Handled the MIS and Daily report to monitor and follow-up with sales to achieve revenue targets",
        "Closely work with sales team to guide and get resolve the discrepancies to meet their sales target"
      ],
      achievements: [
        "Received recognition from corporate branch head for process excellence",
        "Successfully closing the financial year (FY'13-14) for all the Gujarat Zone"
      ]
    }
  ];

  return (
    <ExperienceSection id="experience" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Professional Experience</SectionTitle>
          <SectionSubtitle>
            A decade of product management excellence across fintech and insurance industries, 
            driving innovation and scaling products to millions of users.
          </SectionSubtitle>
        </SectionHeader>

        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <TimelineDot />
              <TimelineContent>
                <TimelineCard isEven={index % 2 === 1}>
                  <CompanyLogo
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visit ${experience.company} website`}
                  >
                    <img 
                      src={experience.logo} 
                      alt={`${experience.company} logo`}
                      onError={(e) => {
                        console.error('Failed to load company logo:', experience.company, e.target.src);
                        e.target.style.display = 'none';
                      }}
                      onLoad={() => console.log(`${experience.company} logo loaded successfully`)}
                    />
                    <div className="external-link-icon">
                      <FaExternalLinkAlt />
                    </div>
                  </CompanyLogo>
                  
                  <JobTitle>{experience.title}</JobTitle>
                  <CompanyName>{experience.company}</CompanyName>
                  
                    <JobMeta>
                      <MetaItem>
                        <FaCalendarAlt />
                        {experience.duration}
                      </MetaItem>
                      <MetaItem>
                        <FaMapMarkerAlt />
                        {experience.location}
                      </MetaItem>
                    </JobMeta>
                
                  <JobDescription>{experience.description}</JobDescription>
                  
                  <Responsibilities>
                    {experience.responsibilities.map((responsibility, idx) => (
                      <Responsibility key={idx}>{responsibility}</Responsibility>
                    ))}
                  </Responsibilities>
                  
                  {experience.achievements && experience.achievements.length > 0 && (
                    <Achievements>
                      <AchievementTitle>Key Achievements:</AchievementTitle>
                      <Responsibilities>
                        {experience.achievements.map((achievement, idx) => (
                          <Responsibility key={idx}>{achievement}</Responsibility>
                        ))}
                      </Responsibilities>
                    </Achievements>
                  )}
                </TimelineCard>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience; 