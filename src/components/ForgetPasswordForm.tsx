
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Alert from './Alert';

const ForgetPasswordFormContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

const PageHeaderTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -0.15px;
  width: 275px;
  height: 40px;
  color: #7642FE;
  margin-bottom: 8px;
  font-family: 'Sora', sans-serif;
`;

const PageSubtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #666666;
  margin-bottom: 32px;
  line-height: 1.5;
  font-family: 'Sora', sans-serif;
`;

const PasswordResetForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const EmailInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const EmailInputLabel = styled.label`
  font-family: 'Sora', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
`;

const EmailInputField = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 10px;
  border: 1px solid ${props => props.hasError ? '#EF4444' : '#D1D5DB'};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Sora', sans-serif;
  
  &::placeholder {
    color: #666666;
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#EF4444' : '#007BFF'};
  }
`;

const SendEmailActionButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #7642FE;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: 'Sora', sans-serif;
  
  &:hover {
    background: #5f35cc;
  }
  
  &:disabled {
    background: #6C757D;
    cursor: not-allowed;
  }
`;

const SignInPromptText = styled.p`
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  font-family: 'Sora', sans-serif;
`;

const SignInRedirectLink = styled(Link)`
  color: #7642FE;
  text-decoration: underline;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ForgetPasswordForm = () => {
  const navigate = useNavigate();
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
    
    // Valid email - navigate to OTP verification
    setShowAlert(false);
    console.log('Password reset email sent to:', { email });
    navigate('/verify-otp');
  };

  return (
    <ForgetPasswordFormContainer>
      <PageHeaderTitle>Forget Password?</PageHeaderTitle>
      <PageSubtitle>
        Enter the email linked to your account and we will send you instructions to reset your password.
      </PageSubtitle>
      
      <PasswordResetForm onSubmit={handleSubmit}>
        <EmailInputGroup>
          <Alert 
            message="This email is not linked to a DIGITAL MARKETING AGENCY NG account."
            visible={showAlert}
          />
          <EmailInputLabel htmlFor="email">Email address</EmailInputLabel>
          <EmailInputField
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            hasError={showAlert}
            aria-label="Email address"
          />
        </EmailInputGroup>
        
        <SendEmailActionButton type="submit">
          SEND EMAIL
        </SendEmailActionButton>
      </PasswordResetForm>
      
      <SignInPromptText>
        Have an account already? <SignInRedirectLink to="/">Sign In</SignInRedirectLink>
      </SignInPromptText>
    </ForgetPasswordFormContainer>
  );
};

export default ForgetPasswordForm;
