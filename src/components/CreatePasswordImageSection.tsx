
import React from 'react';
import styled from 'styled-components';
import { Mail, Phone } from 'lucide-react';
import SocialIcons from './SocialIcons';

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/lovable-uploads/aec76fd4-e352-49eb-b87b-68bdb9022190.png');
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
  padding: 40px 30px 30px;
  max-width: 400px;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 30px;
    text-align: center;
  }
`;

const Logo = styled.img`
  width: 180px;
  height: auto;
  margin-bottom: 8px;
  display: block;
  
  @media (max-width: 768px) {
    width: 160px;
    margin: 0 auto 8px;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

const ContactItem = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CreatePasswordImageSection = () => {
  return (
    <ImageContainer>
      <BackgroundImage />
      <GradientOverlay />
      <ContentOverlay>
        <ContactInfo>
          <Logo src="/lovable-uploads/62d34d9a-8807-4c0b-acfd-d014738bec3c.png" alt="Digital Marketing Agency Logo" />
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

export default CreatePasswordImageSection;
