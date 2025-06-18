
import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const SocialIconsContainer = styled.div.attrs({
  className: 'social-icons-container'
})`
  display: flex;
  gap: 10px;
  margin-top: 16px;
`;

const SocialIconButton = styled.button.attrs({
  className: 'social-icon-button'
})`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:focus {
    outline: 2px solid white;
    outline-offset: 2px;
  }
`;

const SocialIcons = () => {
  const handleInstagramClick = () => {
    console.log('Instagram clicked');
  };

  const handleFacebookClick = () => {
    console.log('Facebook clicked');
  };

  const handleWhatsAppClick = () => {
    console.log('WhatsApp clicked');
  };

  return (
    <SocialIconsContainer>
      <SocialIconButton onClick={handleInstagramClick} aria-label="Instagram">
        <FaInstagram size={24} />
      </SocialIconButton>
      <SocialIconButton onClick={handleFacebookClick} aria-label="Facebook">
        <FaFacebook size={24} />
      </SocialIconButton>
      <SocialIconButton onClick={handleWhatsAppClick} aria-label="WhatsApp">
        <FaWhatsapp size={24} />
      </SocialIconButton>
    </SocialIconsContainer>
  );
};

export default SocialIcons;
