
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
  width: 80px;
  height: auto;
  margin: 0;
  margin-bottom: 0;
  display: block;
  object-fit: contain;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  line-height: 1.2;
`;

const ContactGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 0;
  padding: 0;
`;

const SignUpImageSection = () => {
  return (
    <ImageContainer>
      <ContactInfo>
        <Logo src="/lovable-uploads/81f50eda-4cdd-4aa2-b217-a1a96ca6757f.png" alt="Digital Marketing Agency Logo" />
        <ContactGroup>
          <ContactItem>
            <Mail size={16} />
            help@digitalmarketing.ng
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

export default SignUpImageSection;
