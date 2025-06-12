import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './Button';
import Alert from './Alert';
import OTPInput from './OTPInput';

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: #7642FE;
  margin-bottom: 8px;
  font-family: 'Sora', sans-serif;
  text-align: left;
`;

const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #6B7280;
  margin-bottom: 32px;
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
  text-align: left;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AlertWrapper = styled.div`
  margin-bottom: 16px;
`;

const ResendContainer = styled.div`
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
`;

const ResendText = styled.span`
  color: #6B7280;
`;

const ResendLink = styled.button`
  color: #7642FE;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    text-decoration: none;
  }
`;

const SignInContainer = styled.div`
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
`;

const SignInText = styled.span`
  color: #6B7280;
`;

const SignInLink = styled(Link)`
  color: #7642FE;
  text-decoration: underline;
  font-weight: 400;
  
  &:hover {
    text-decoration: none;
  }
`;

const VerifyOTPForm = () => {
  const [otp, setOtp] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleOTPComplete = (otpValue: string) => {
    setOtp(otpValue);
    setShowAlert(false); // Clear any previous error when OTP is complete
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp === '1234') {
      console.log({ otp });
      setShowAlert(false);
      // Clear the OTP to reset the form
      setOtp('');
    } else {
      setShowAlert(true);
    }
  };

  const handleResendOTP = () => {
    console.log('Resend OTP requested');
    setShowAlert(false);
    setOtp('');
  };

  const handleResetAlert = () => {
    setShowAlert(false);
  };

  return (
    <FormContainer>
      <Title>Verify Your Email Address</Title>
      <Subtitle>Please enter the 4-digit OTP sent to johnsnow@abc.com</Subtitle>
      
      <Form onSubmit={handleSubmit}>
        {showAlert && (
          <AlertWrapper>
            <Alert message="Incorrect verification code" visible={showAlert} />
          </AlertWrapper>
        )}
        
        <OTPInput 
          length={4} 
          onComplete={handleOTPComplete}
          hasError={showAlert}
          onReset={handleResetAlert}
          value={otp}
        />
        
        <Button type="submit">
          VERIFY CODE
        </Button>
      </Form>
      
      <ResendContainer>
        <ResendText>Didn't receive a code? </ResendText>
        <ResendLink onClick={handleResendOTP}>
          Resend Code
        </ResendLink>
      </ResendContainer>
      
      <SignInContainer>
        <SignInText>Have an account already? </SignInText>
        <SignInLink to="/">
          Sign In
        </SignInLink>
      </SignInContainer>
    </FormContainer>
  );
};

export default VerifyOTPForm;
