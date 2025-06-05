
import React from 'react';
import styled from 'styled-components';
import { Mail, Facebook, MessageCircle } from 'lucide-react';

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(135deg, #E3F2FD 0%, #1565C0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&h=1728');
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
  
  @media (max-width: 768px) {
    padding: 30px;
    text-align: center;
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

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.div`
  width: 35px;
  height: 35px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
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
            +234 123 456 7890
          </ContactItem>
        </ContactInfo>
        <SocialIcons>
          <SocialIcon>
            <Mail size={18} />
          </SocialIcon>
          <SocialIcon>
            <Facebook size={18} />
          </SocialIcon>
          <SocialIcon>
            <MessageCircle size={18} />
          </SocialIcon>
        </SocialIcons>
      </ContentOverlay>
    </ImageContainer>
  );
};

export default VerifyOTPImageSection;
