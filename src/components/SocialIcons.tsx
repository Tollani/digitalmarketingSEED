
import React from 'react';
import styled from 'styled-components';

const SocialIconsContainer = styled.div.attrs({
  className: 'social-icons-container'
})`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 8px;
`;

const SocialIcon = styled.a.attrs({
  className: 'social-icon'
})`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const SocialIconImage = styled.img.attrs({
  className: 'social-icon-image'
})`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;

const SocialIcons = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: '#',
      icon: '/DMA-uploads/62d34d9a-8807-4c0b-acfd-d014738bec3c.png'
    },
    {
      name: 'Twitter',
      url: '#',
      icon: '/DMA-uploads/45981f6e-48d9-48de-a38f-7da749986e70.png'
    },
    {
      name: 'Instagram',
      url: '#',
      icon: '/DMA-uploads/0589d284-827d-4b54-96dc-a6b830dded54.png'
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: '/DMA-uploads/207b1138-6b5c-47f8-a2b1-e26cb35e6f02.png'
    }
  ];

  return (
    <SocialIconsContainer>
      {socialLinks.map((social) => (
        <SocialIcon
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
        >
          <SocialIconImage src={social.icon} alt={social.name} />
        </SocialIcon>
      ))}
    </SocialIconsContainer>
  );
};

export default SocialIcons;
