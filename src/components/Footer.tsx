
import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const FooterContainer = styled.footer.attrs({
  className: 'footer'
})`
  background-color: #22003C;
  position: relative;
  padding: 60px 20px 30px;
  margin-top: 50px;
  overflow: hidden;
`;

const EllipseDecoration = styled.div.attrs({
  className: 'ellipse-decoration'
})<{ position: 'top-left' | 'bottom-right' }>`
  position: absolute;
  background-color: #4E3363;
  border-radius: 50%;
  ${props => props.position === 'top-left' ? `
    top: -50px;
    left: -50px;
    width: 200px;
    height: 200px;
  ` : `
    bottom: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
  `}
`;

const FooterContent = styled.div.attrs({
  className: 'footer-content'
})`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const LogoSection = styled.div.attrs({
  className: 'logo-section'
})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LogoContainer = styled.div.attrs({
  className: 'logo-container'
})`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoImage = styled.img.attrs({
  className: 'logo-image'
})`
  width: 60px;
  height: 60px;
`;

const LogoText = styled.div.attrs({
  className: 'logo-text'
})`
  color: white;
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
`;

const Description = styled.p.attrs({
  className: 'description'
})`
  color: #D1D5DB;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  max-width: 300px;
`;

const SocialIconsContainer = styled.div.attrs({
  className: 'social-icons'
})`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`;

const SocialIcon = styled.a.attrs({
  className: 'social-icon'
})`
  color: white;
  font-size: 24px;
  transition: color 0.2s ease;
  
  &:hover {
    color: #7642FE;
  }
`;

const FooterColumn = styled.div.attrs({
  className: 'footer-column'
})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ColumnTitle = styled.h4.attrs({
  className: 'column-title'
})`
  color: white;
  font-family: 'Sora', sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

const LinkItem = styled.a.attrs({
  className: 'link-item'
})`
  color: #D1D5DB;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #7642FE;
  }
`;

const CopyrightSection = styled.div.attrs({
  className: 'copyright'
})`
  border-top: 1px solid #4E3363;
  margin-top: 40px;
  padding-top: 20px;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const CopyrightText = styled.p.attrs({
  className: 'copyright-text'
})`
  color: #D1D5DB;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <EllipseDecoration position="top-left" />
      <EllipseDecoration position="bottom-right" />
      
      <FooterContent>
        <LogoSection>
          <LogoContainer>
            <LogoImage src="/lovable-uploads/8d483709-e862-4bbb-86e1-305e02faafe2.png" alt="DMA Logo" />
            <LogoText>
              DIGITAL<br />
              MARKETING<br />
              AGENCY
            </LogoText>
          </LogoContainer>
          
          <Description>
            A platform that offers digital marketing solutions to individuals 
            and businesses at their fingertips.
          </Description>
          
          <SocialIconsContainer>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </SocialIcon>
          </SocialIconsContainer>
        </LogoSection>

        <FooterColumn>
          <ColumnTitle>Company</ColumnTitle>
          <LinkItem href="/home">Home</LinkItem>
          <LinkItem href="/about-us">About Us</LinkItem>
          <LinkItem href="/services">Services</LinkItem>
          <LinkItem href="/payments-billings">Payments & billings</LinkItem>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Others</ColumnTitle>
          <LinkItem href="/support-help">Support & Help</LinkItem>
          <LinkItem href="/privacy-policy">Privacy Policy</LinkItem>
          <LinkItem href="/licensees-agreement">Licensees & Agreement</LinkItem>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Contact</ColumnTitle>
          <LinkItem href="/support-help">Support & Help</LinkItem>
          <LinkItem href="/privacy-policy">Privacy Policy</LinkItem>
          <LinkItem href="/licensees-agreement">Licensees & Agreement</LinkItem>
        </FooterColumn>
      </FooterContent>

      <CopyrightSection>
        <CopyrightText>
          ©Digital Marketing Agency. All rights reserved 2025
        </CopyrightText>
      </CopyrightSection>
    </FooterContainer>
  );
};

export default Footer;
