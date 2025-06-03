
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #003087;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  &:hover {
    background: #0040C1;
  }
  
  &:focus {
    outline: 2px solid #007BFF;
    outline-offset: 2px;
  }
  
  &:disabled {
    background: #6C757D;
    cursor: not-allowed;
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
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
