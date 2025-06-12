
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import Alert from './Alert';
import OTPInput from './OTPInput';

const OTPFormContainer = styled.div`
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
  text-align: left;
`;

const PageSubtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #6B7280;
  margin-bottom: 32px;
  line-height: 1.5;
  font-family: 'Sora', sans-serif;
  text-align: left;
`;

const OTPVerificationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AlertMessageWrapper = styled.div`
  margin-bottom: 16px;
`;

const ResendCodeContainer = styled.div`
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  font-family: 'Sora', sans-serif;
`;

const ResendCodeText = styled.span`
  color: #6B7280;
`;

const ResendCodeLink = styled.button`
  color: #7642FE;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Sora', sans-serif;
  
  &:hover {
    text-decoration: none;
  }
`;

const SignInPromptContainer = styled.div`
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  font-family: 'Sora', sans-serif;
`;

const SignInPromptText = styled.span`
  color: #6B7280;
`;

const SignInRedirectLink = styled(Link)`
  color: #7642FE;
  text-decoration: underline;
  font-weight: 400;
  
  &:hover {
    text-decoration: none;
  }
`;

const VerifyOTPForm = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleOTPComplete = (otpValue: string) => {
    setOtp(otpValue);
    setShowAlert(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Accept any 4-digit number and route to create password
    if (otp.length === 4 && /^\d{4}$/.test(otp)) {
      console.log({ otp });
      setShowAlert(false);
      navigate('/create-password');
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
    <OTPFormContainer>
      <PageHeaderTitle>Verify Your Email Address</PageHeaderTitle>
      <PageSubtitle>Please enter the 4-digit OTP sent to johnsnow@abc.com</PageSubtitle>
      
      <OTPVerificationForm onSubmit={handleSubmit}>
        {showAlert && (
          <AlertMessageWrapper>
            <Alert message="Incorrect verification code" visible={showAlert} />
          </AlertMessageWrapper>
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
      </OTPVerificationForm>
      
      <ResendCodeContainer>
        <ResendCodeText>Didn't receive a code? </ResendCodeText>
        <ResendCodeLink onClick={handleResendOTP}>
          Resend Code
        </ResendCodeLink>
      </ResendCodeContainer>
      
      <SignInPromptContainer>
        <SignInPromptText>Have an account already? </SignInPromptText>
        <SignInRedirectLink to="/">
          Sign In
        </SignInRedirectLink>
      </SignInPromptContainer>
    </OTPFormContainer>
  );
};

export default VerifyOTPForm;
