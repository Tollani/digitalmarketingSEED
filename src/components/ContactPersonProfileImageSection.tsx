
import React from 'react';
import styled from 'styled-components';
import { Mail, Phone } from 'lucide-react';
import SocialIcons from './SocialIcons';

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/lovable-uploads/207b1138-6b5c-47f8-a2b1-e26cb35e6f02.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50%;
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(30, 58, 138, 0) 0%,
    rgba(30, 58, 138, 0.7) 50%,
    rgba(30, 58, 138, 0.7) 100%
  );
`;

const ContactInfo = styled.div`
  padding: 30px;
  color: white;
  position: relative;
  z-index: 2;
  
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

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
  font-size: 14px;
  font-family: 'Sora', sans-serif;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
  padding: 0;
`;

const ContactPersonProfileImageSection = () => {
  return (
    <ImageContainer>
      <GradientOverlay />
      <ContactInfo>
        <Logo src="/lovable-uploads/81f50eda-4cdd-4aa2-b217-a1a96ca6757f.png" alt="Digital Marketing Agency Logo" />
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
      </ContactInfo>
    </ImageContainer>
  );
};

export default ContactPersonProfileImageSection;
