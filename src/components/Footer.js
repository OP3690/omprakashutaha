import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.background.card};
  border-top: 1px solid ${props => props.theme.colors.border.primary};
  padding: ${props => props.theme.spacing.xxxl} 0 ${props => props.theme.spacing.xl};
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

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${props => props.theme.spacing.xxxl};
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${props => props.theme.spacing.xl};
  }
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const FooterLogo = styled.div`
  font-size: ${props => props.theme.fonts.sizes.xl};
  font-weight: ${props => props.theme.fonts.weights.bold};
  color: ${props => props.theme.colors.text.primary};
  
  span {
    background: ${props => props.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const FooterDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.fonts.sizes.md};
  line-height: ${props => props.theme.fonts.lineHeights.relaxed};
  max-width: 400px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    max-width: none;
  }
`;

const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const ContactItem = styled.a`
  color: ${props => props.theme.colors.text.secondary};
  text-decoration: none;
  font-size: ${props => props.theme.fonts.sizes.sm};
  transition: color ${props => props.theme.transitions.normal};
  
  &:hover {
    color: ${props => props.theme.colors.primary[600]};
  }
`;

const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${props => props.theme.spacing.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    align-items: center;
  }
`;

const SocialTitle = styled.h4`
  font-size: ${props => props.theme.fonts.sizes.md};
  font-weight: ${props => props.theme.fonts.weights.semibold};
  color: ${props => props.theme.colors.text.primary};
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
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

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${props => props.theme.spacing.xl};
  border-top: 1px solid ${props => props.theme.colors.border.primary};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.md};
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: ${props => props.theme.fonts.sizes.sm};
  margin: 0;
`;

const CopyrightHeart = styled.span`
  color: ${props => props.theme.colors.status.error};
  margin: 0 ${props => props.theme.spacing.xs};
`;

const ScrollToTop = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: ${props => props.theme.gradients.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.full};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.md};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterInfo>
            <FooterLogo>
              Omprakash<span>.</span>
            </FooterLogo>
            <FooterDescription>
              Product Lead with 10+ years of experience transforming fintech through innovative solutions. 
              Passionate about scaling products and driving business growth.
            </FooterDescription>
            <FooterContact>
              <ContactItem href="mailto:omprakashutaha@gmail.com">
                omprakashutaha@gmail.com
              </ContactItem>
              <ContactItem href="tel:+919723231499">
                +91 97232 31499
              </ContactItem>
              <ContactItem>
                Bangalore, Karnataka, India
              </ContactItem>
            </FooterContact>
          </FooterInfo>

          <FooterSocial>
            <SocialTitle>Connect with me</SocialTitle>
            <SocialLinks>
              <SocialLink
                href="https://www.linkedin.com/in/omprakash-utaha-b1815136/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink
                href="https://github.com/OP3690"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href="mailto:omprakashutaha@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email"
              >
                <FaEnvelope />
              </SocialLink>
            </SocialLinks>
          </FooterSocial>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © 2025 Omprakash Utaha. Made with<CopyrightHeart><FaHeart /></CopyrightHeart>in India
          </Copyright>
          <ScrollToTop
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </ScrollToTop>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 