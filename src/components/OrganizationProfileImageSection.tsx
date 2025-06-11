
import React from 'react';
import styled from 'styled-components';
import { Mail, Phone } from 'lucide-react';
import SocialIcons from './SocialIcons';

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/lovable-uploads/8deb37e4-5ae4-4872-992a-1c70885b9e34.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    to top,
    rgba(0, 16, 59, 0.9) 0%,
    rgba(0, 16, 59, 0.6) 50%,
    transparent 100%
  );
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  margin-top: auto;
  padding: 30px;
  color: white;
  
  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 20px;
  display: block;
  
  @media (max-width: 768px) {
    margin: 0 auto 20px auto;
  }
`;

const ContactGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  color: white;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const OrganizationProfileImageSection = () => {
  return (
    <ImageContainer>
      <GradientOverlay />
      <ContentWrapper>
        <Logo 
          src="/lovable-uploads/bccf7651-1547-4753-9c4d-2fc337d2e22a.png" 
          alt="Digital Marketing Agency Logo" 
        />
        <ContactGroup>
          <ContactItem>
            <Mail size={16} />
            help@digitalmarketingng.com
          </ContactItem>
          <ContactItem>
            <Phone size={16} />
            +234 123 456 7890
          </ContactItem>
        </ContactGroup>
        <SocialIcons />
      </ContentWrapper>
    </ImageContainer>
  );
};

export default OrganizationProfileImageSection;
