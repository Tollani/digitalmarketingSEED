
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
  ), url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80');
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

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  font-family: 'Poppins', sans-serif;
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
        <Title>Digital Marketing Agency</Title>
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
