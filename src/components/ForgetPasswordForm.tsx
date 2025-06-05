
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Alert from './Alert';

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: #000000;
  margin-bottom: 8px;
  font-family: 'Poppins', sans-serif;
`;

const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #666666;
  margin-bottom: 32px;
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputLabel = styled.label`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
`;

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 10px;
  border: 1px solid ${props => props.hasError ? '#EF4444' : '#D1D5DB'};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  
  &::placeholder {
    color: #666666;
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#EF4444' : '#007BFF'};
  }
`;

const SendEmailButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #00103B;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    background: #000820;
  }
  
  &:disabled {
    background: #6C757D;
    cursor: not-allowed;
  }
`;

const SignInText = styled.p`
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  font-family: 'Poppins', sans-serif;
`;

const SignInLink = styled(Link)`
  color: #007BFF;
  text-decoration: underline;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('johnsnow@abc');
  const [showAlert, setShowAlert] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidAccount = (email: string) => {
    return email === 'test@digitalmarketingng.com';
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    // Hide alert when user starts typing
    if (showAlert) {
      setShowAlert(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setShowAlert(true);
      return;
    }
    
    if (!isValidAccount(email)) {
      setShowAlert(true);
      return;
    }
    
    // Valid email
    setShowAlert(false);
    console.log('Password reset email sent to:', { email });
  };

  return (
    <FormContainer>
      <Title>Forget Password?</Title>
      <Subtitle>
        Enter the email linked to your account and we will send you instructions to reset your password.
      </Subtitle>
      
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Alert 
            message="This email is not linked to a DIGITAL MARKETING AGENCY NG account."
            visible={showAlert}
          />
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            hasError={showAlert}
            aria-label="Email address"
          />
        </InputGroup>
        
        <SendEmailButton type="submit">
          SEND EMAIL
        </SendEmailButton>
      </Form>
      
      <SignInText>
        Have an account already? <SignInLink to="/signup">Sign In</SignInLink>
      </SignInText>
    </FormContainer>
  );
};

export default ForgetPasswordForm;
