
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Check } from 'lucide-react';
import Button from './Button';
import Alert from './Alert';

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

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
  color: #1F2937;
  font-family: 'Poppins', sans-serif;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  padding: 10px 40px 10px 10px;
  border: 2px solid ${props => props.hasError ? '#EF4444' : '#D1D5DB'};
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  background: white;
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#EF4444' : '#007BFF'};
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #6B7280;
  
  &:focus {
    outline: none;
  }
`;

const AlertWrapper = styled.div`
  margin-top: 4px;
`;

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #10B981;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  margin-top: 16px;
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
  color: #3B82F6;
  text-decoration: underline;
  font-weight: 400;
  
  &:hover {
    text-decoration: none;
  }
`;

const CreatePasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return false;
    }
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    return hasNumber && hasSpecialChar;
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewPassword(value);
    
    if (value && !validatePassword(value)) {
      setNewPasswordError('Weak password strength');
    } else {
      setNewPasswordError('');
    }
    
    // Check confirm password match if it exists
    if (confirmPassword && value !== confirmPassword) {
      setConfirmPasswordError('Passwords don\'t match');
    } else if (confirmPassword) {
      setConfirmPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    
    if (value && value !== newPassword) {
      setConfirmPasswordError('Passwords don\'t match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSuccess) {
      // If already successful, navigate to complete profile
      navigate('/complete-profile');
      return;
    }
    
    let hasErrors = false;
    
    if (!validatePassword(newPassword)) {
      setNewPasswordError('Weak password strength');
      hasErrors = true;
    }
    
    if (newPassword !== confirmPassword) {
      setConfirmPasswordError('Passwords don\'t match');
      hasErrors = true;
    }
    
    if (!hasErrors) {
      console.log({ newPassword, confirmPassword });
      setIsSuccess(true);
      // Auto-navigate to complete profile after 2 seconds
      setTimeout(() => {
        navigate('/complete-profile');
      }, 2000);
    }
  };

  return (
    <FormContainer>
      <Title>Create New Password</Title>
      <Subtitle>
        Password must be at least 8 characters long and should contain at least one number and one special character
      </Subtitle>
      
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="newPassword">Enter New Password</Label>
          <InputWrapper>
            <Input
              id="newPassword"
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={handleNewPasswordChange}
              hasError={!!newPasswordError}
              placeholder="Enter your new password"
              disabled={isSuccess}
            />
            <ToggleButton
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              disabled={isSuccess}
            >
              {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </ToggleButton>
          </InputWrapper>
          {newPasswordError && (
            <AlertWrapper>
              <Alert message={newPasswordError} visible={true} />
            </AlertWrapper>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <InputWrapper>
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              hasError={!!confirmPasswordError}
              placeholder="Confirm your new password"
              disabled={isSuccess}
            />
            <ToggleButton
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              disabled={isSuccess}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </ToggleButton>
          </InputWrapper>
          {confirmPasswordError && (
            <AlertWrapper>
              <Alert message={confirmPasswordError} visible={true} />
            </AlertWrapper>
          )}
        </FormGroup>
        
        <Button type="submit">
          {isSuccess ? 'Redirecting to Profile...' : 'Continue'}
        </Button>
        
        {isSuccess && (
          <SuccessMessage>
            <Check size={16} />
            Password updated successfully! Redirecting...
          </SuccessMessage>
        )}
      </Form>
      
      <SignInContainer>
        <SignInText>Remember your password? </SignInText>
        <SignInLink to="/">
          Sign In
        </SignInLink>
      </SignInContainer>
    </FormContainer>
  );
};

export default CreatePasswordForm;
