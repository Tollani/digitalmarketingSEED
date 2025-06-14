
import React from 'react';
import styled from 'styled-components';
import { Mail, Phone } from 'lucide-react';
import SocialIcons from './SocialIcons';

const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  position:fixed
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/lovable-uploads/0589d284-827d-4b54-96dc-a6b830dded54.png');
  background-size: cover;
  background-position: center;
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(to top, rgba(0, 16, 59, 0.9) 0%, rgba(0, 16, 59, 0.7) 50%, transparent 100%);
  z-index: 1;
`;

const ContentOverlay = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  text-align: left;
  padding: 30px;
  max-width: 400px;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 8px;
  display: block;
  object-fit: contain;
  
  @media (max-width: 768px) {
    width: 180px;
    margin: 0 auto 8px auto;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 16px;
  padding: 0;
`;

const ContactItem = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 12px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CompleteProfileImageSection = () => {
  return (
    <ImageContainer>
      <BackgroundImage />
      <GradientOverlay />
      <ContentOverlay>
        <Logo src="/lovable-uploads/81f50eda-4cdd-4aa2-b217-a1a96ca6757f.png" alt="Digital Marketing Agency Logo" />
        <ContactInfo>
          <ContactItem>
            <Mail size={16} />
            help@digitalmarketingng.com
          </ContactItem>
          <ContactItem>
            <Phone size={16} />
            +234 123 456 7890
          </ContactItem>
        </ContactInfo>
        <SocialIcons />
      </ContentOverlay>
    </ImageContainer>
  );
};

export default CompleteProfileImageSection;
