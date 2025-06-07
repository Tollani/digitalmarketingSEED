
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

const ContentOverlay = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  text-align: left;
  padding: 40px 30px 30px;
  max-width: 400px;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 16, 59, 0.9) 0%, rgba(0, 16, 59, 0.7) 50%, transparent 100%);
  
  @media (max-width: 768px) {
    padding: 30px;
    text-align: center;
  }
`;

const CompanyName = styled.h2`
  font-size: 24px;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 20px;
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
      <ContentOverlay>
        <CompanyName>Digital Marketing Agency</CompanyName>
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

export default CreatePasswordImageSection;
