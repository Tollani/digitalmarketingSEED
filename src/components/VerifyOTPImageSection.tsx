
import React from 'react';
import styled from 'styled-components';
import { Mail, Phone } from 'lucide-react';
import SocialIcons from './SocialIcons';

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(135deg, #E3F2FD 0%, #1565C0 100%);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/lovable-uploads/befc692c-cf56-4860-ae18-5b102cb416c0.png');
  background-size: cover;
  background-position: center;
  opacity: 0.3;
`;

const ContentOverlay = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  text-align: left;
  padding: 40px;
  max-width: 400px;
  width: 100%;
  align-self: flex-start;
  margin-top: 20%;
  
  @media (max-width: 768px) {
    padding: 30px;
    text-align: center;
    align-self: center;
    margin-top: 0;
  }
`;

const CompanyName = styled.h2`
  font-size: 24px;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  
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

const VerifyOTPImageSection = () => {
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

export default VerifyOTPImageSection;
