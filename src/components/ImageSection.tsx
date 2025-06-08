
import React from 'react';
import styled from 'styled-components';
import { Mail, Phone } from 'lucide-react';
import SocialIcons from './SocialIcons';

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to top,
    rgba(0, 16, 59, 0.7) 0%,
    transparent 100%
  ), url('/lovable-uploads/12ff7025-87d4-426c-9a19-eca147fe2274.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`;

const ContactInfo = styled.div`
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Logo = styled.img`
  width: 140px;
  height: auto;
  margin-bottom: 16px;
  align-self: flex-start;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  width: 100%;
`;

const ImageSection = () => {
  return (
    <ImageContainer>
      <ContactInfo>
        <Logo src="/lovable-uploads/45981f6e-48d9-48de-a38f-7da749986e70.png" alt="Logo" />
        <ContactItem>
          <Mail size={16} />
          help@digitalmarketing.ng
        </ContactItem>
        <ContactItem>
          <Phone size={16} />
          +234 123 456 7890
        </ContactItem>
        <SocialIcons />
      </ContactInfo>
    </ImageContainer>
  );
};

export default ImageSection;
