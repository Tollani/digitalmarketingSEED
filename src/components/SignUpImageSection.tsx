
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
  ), url('/lovable-uploads/d73df5b9-3489-4658-b8a1-cd4c182998f5.png');
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
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 16px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
`;

const SignUpImageSection = () => {
  return (
    <ImageContainer>
      <ContactInfo>
        <Logo src="/lovable-uploads/62d34d9a-8807-4c0b-acfd-d014738bec3c.png" alt="Digital Marketing Agency Logo" />
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

export default SignUpImageSection;
