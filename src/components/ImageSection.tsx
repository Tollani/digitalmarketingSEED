import React from 'react';
import styled from 'styled-components';
import { Mail, Phone } from 'lucide-react';
import SocialIcons from './SocialIcons';

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to top,
    rgba(0, 48, 135, 0.7) 0%,
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

const ImageSection = () => {
  return (
    <ImageContainer>
      <ContactInfo>
        <Title>Digital Marketing Agency</Title>
        <ContactItem>
          <Mail size={16} />
          help@digitalmarketing.com
        </ContactItem>
        <ContactItem>
          <Phone size={16} />
          (+234) 123 456 7890
        </ContactItem>
        <SocialIcons />
      </ContactInfo>
    </ImageContainer>
  );
};

export default ImageSection;
