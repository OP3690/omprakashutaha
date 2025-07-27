import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    transition: background-color ${props => props.theme.transitions.normal};
  }

  body {
    font-family: ${props => props.theme.fonts.families.primary};
    background-color: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.text.primary};
    line-height: ${props => props.theme.fonts.lineHeights.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    transition: background-color ${props => props.theme.transitions.normal}, color ${props => props.theme.transitions.normal};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.families.secondary};
    font-weight: ${props => props.theme.fonts.weights.bold};
    line-height: ${props => props.theme.fonts.lineHeights.tight};
    margin-bottom: ${props => props.theme.spacing.md};
    color: ${props => props.theme.colors.text.primary};
  }

  h1 {
    font-size: ${props => props.theme.fonts.sizes.display};
    font-weight: ${props => props.theme.fonts.weights.black};
    background: ${props => props.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  h2 {
    font-size: ${props => props.theme.fonts.sizes.xxxl};
    font-weight: ${props => props.theme.fonts.weights.extrabold};
  }

  h3 {
    font-size: ${props => props.theme.fonts.sizes.xxl};
    font-weight: ${props => props.theme.fonts.weights.bold};
  }

  h4 {
    font-size: ${props => props.theme.fonts.sizes.xl};
    font-weight: ${props => props.theme.fonts.weights.semibold};
  }

  h5 {
    font-size: ${props => props.theme.fonts.sizes.lg};
    font-weight: ${props => props.theme.fonts.weights.medium};
  }

  h6 {
    font-size: ${props => props.theme.fonts.sizes.md};
    font-weight: ${props => props.theme.fonts.weights.medium};
  }

  p {
    margin-bottom: ${props => props.theme.spacing.md};
    color: ${props => props.theme.colors.text.secondary};
    line-height: ${props => props.theme.fonts.lineHeights.relaxed};
  }

  a {
    color: ${props => props.theme.colors.primary[600]};
    text-decoration: none;
    transition: all ${props => props.theme.transitions.normal};
    position: relative;
    
    &:hover {
      color: ${props => props.theme.colors.primary[700]};
      transform: translateY(-1px);
    }
    
    &.underline {
      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: ${props => props.theme.colors.primary[500]};
        transition: width ${props => props.theme.transitions.normal};
      }
      
      &:hover::after {
        width: 100%;
      }
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all ${props => props.theme.transitions.normal};
    border-radius: ${props => props.theme.borderRadius.md};
    
    &:focus {
      box-shadow: ${props => props.theme.shadows.glow};
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: ${props => props.theme.borderRadius.md};
  }

  ul, ol {
    list-style: none;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.border.primary};
    border-radius: ${props => props.theme.borderRadius.full};
    
    &:hover {
      background: ${props => props.theme.colors.border.secondary};
    }
  }

  /* Selection */
  ::selection {
    background: ${props => props.theme.colors.primary[200]};
    color: ${props => props.theme.colors.text.primary};
  }

  /* Focus styles */
  *:focus {
    outline: 2px solid ${props => props.theme.colors.primary[400]};
    outline-offset: 2px;
  }

  /* Glass morphism effect */
  .glass {
    background: ${props => props.theme.gradients.glass};
    backdrop-filter: blur(10px);
    border: 1px solid ${props => props.theme.colors.border.primary};
  }

  /* Card styles */
  .card {
    background: ${props => props.theme.colors.background.card};
    border-radius: ${props => props.theme.borderRadius.xl};
    box-shadow: ${props => props.theme.shadows.lg};
    border: 1px solid ${props => props.theme.colors.border.primary};
    transition: all ${props => props.theme.transitions.normal};
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${props => props.theme.shadows.xl};
    }
  }

  /* Utility classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${props => props.theme.spacing.lg};
  }

  .text-center { text-align: center; }
  .text-left { text-align: left; }
  .text-right { text-align: right; }

  .mb-0 { margin-bottom: 0; }
  .mb-1 { margin-bottom: ${props => props.theme.spacing.xs}; }
  .mb-2 { margin-bottom: ${props => props.theme.spacing.sm}; }
  .mb-3 { margin-bottom: ${props => props.theme.spacing.md}; }
  .mb-4 { margin-bottom: ${props => props.theme.spacing.lg}; }
  .mb-5 { margin-bottom: ${props => props.theme.spacing.xl}; }

  .mt-0 { margin-top: 0; }
  .mt-1 { margin-top: ${props => props.theme.spacing.xs}; }
  .mt-2 { margin-top: ${props => props.theme.spacing.sm}; }
  .mt-3 { margin-top: ${props => props.theme.spacing.md}; }
  .mt-4 { margin-top: ${props => props.theme.spacing.lg}; }
  .mt-5 { margin-top: ${props => props.theme.spacing.xl}; }

  .p-0 { padding: 0; }
  .p-1 { padding: ${props => props.theme.spacing.xs}; }
  .p-2 { padding: ${props => props.theme.spacing.sm}; }
  .p-3 { padding: ${props => props.theme.spacing.md}; }
  .p-4 { padding: ${props => props.theme.spacing.lg}; }
  .p-5 { padding: ${props => props.theme.spacing.xl}; }

  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  /* Responsive */
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    .container {
      padding: 0 ${props => props.theme.spacing.md};
    }
    
    h1 {
      font-size: ${props => props.theme.fonts.sizes.xxxl};
    }
    
    h2 {
      font-size: ${props => props.theme.fonts.sizes.xxl};
    }

    h3 {
      font-size: ${props => props.theme.fonts.sizes.xl};
    }

    p {
      font-size: ${props => props.theme.fonts.sizes.base};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    .container {
      padding: 0 ${props => props.theme.spacing.sm};
    }
    
    h1 {
      font-size: ${props => props.theme.fonts.sizes.xxl};
    }
    
    h2 {
      font-size: ${props => props.theme.fonts.sizes.xl};
    }

    h3 {
      font-size: ${props => props.theme.fonts.sizes.lg};
    }

    p {
      font-size: ${props => props.theme.fonts.sizes.sm};
    }

      button {
    font-size: ${props => props.theme.fonts.sizes.sm};
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  }

  /* Remove default focus outlines and add custom ones */
  button:focus,
  a:focus,
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }

  /* Custom focus styles for better accessibility */
  button:focus-visible,
  a:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    outline: 2px solid ${props => props.theme.colors.primary[400]};
    outline-offset: 2px;
  }
  }
`; 