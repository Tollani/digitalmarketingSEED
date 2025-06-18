
import React from 'react';
import styled from 'styled-components';

const PrimaryActionButton = styled.button.attrs({
  className: 'primary-action-button'
})<{ disabled?: boolean }>`
  width: 100%;
  padding: 12px;
  background: ${props => props.disabled ? '#D1D5DB' : '#7642FE'};
  color: ${props => props.disabled ? '#1F2937' : '#FFFFFF'};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s ease;
  font-family: 'Sora', sans-serif;
  
  &:hover {
    background: ${props => props.disabled ? '#D1D5DB' : '#5f35cc'};
  }
  
  &:focus {
    outline: 2px solid #007BFF;
    outline-offset: 2px;
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, type = 'button', onClick, disabled = false }) => {
  return (
    <PrimaryActionButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </PrimaryActionButton>
  );
};

export default Button;
