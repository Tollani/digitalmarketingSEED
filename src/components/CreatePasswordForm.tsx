
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Check } from 'lucide-react';
import Button from './Button';
import Alert from './Alert';

const CreatePasswordFormContainer = styled.div`
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

const PasswordCreationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PasswordFieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PasswordFieldLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  color: #1F2937;
  font-family: 'Sora', sans-serif;
`;

const PasswordInputWrapper = styled.div`
  position: relative;
`;

const PasswordInputField = styled.input<{ hasError: boolean }>`
  width: 100%;
  padding: 10px 40px 10px 10px;
  border: 2px solid ${props => props.hasError ? '#EF4444' : '#D1D5DB'};
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Sora', sans-serif;
  background: white;
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#EF4444' : '#007BFF'};
  }
`;

const PasswordVisibilityToggleButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #6B7280;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:focus {
    outline: none;
  }
`;

const ValidationAlertWrapper = styled.div`
  margin-top: 4px;
`;

const SuccessNotificationMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #10B981;
  font-size: 14px;
  font-family: 'Sora', sans-serif;
  margin-top: 16px;
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
  color: #3B82F6;
  text-decoration: underline;
  font-weight: 400;
  
  &:hover {
    text-decoration: none;
  }
`;

const CreatePasswordForm = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

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
      navigate('/');
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
      // Navigate to complete profile when passwords match
      setTimeout(() => {
        navigate('/complete-profile');
      }, 1500);
    }
  };

  const isFormValid = validatePassword(newPassword) && newPassword === confirmPassword && newPassword && confirmPassword;

  return (
    <CreatePasswordFormContainer>
      <PageHeaderTitle>Create New Password</PageHeaderTitle>
      <PageSubtitle>
        Password must be at least 8 characters long and should contain at least one number and one special character
      </PageSubtitle>
      
      <PasswordCreationForm onSubmit={handleSubmit}>
        <PasswordFieldGroup>
          <PasswordFieldLabel htmlFor="newPassword">Enter New Password</PasswordFieldLabel>
          <PasswordInputWrapper>
            <PasswordInputField
              id="newPassword"
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={handleNewPasswordChange}
              hasError={!!newPasswordError}
              placeholder="Enter your new password"
              disabled={isSuccess}
            />
            <PasswordVisibilityToggleButton
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              disabled={isSuccess}
            >
              {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </PasswordVisibilityToggleButton>
          </PasswordInputWrapper>
          {newPasswordError && (
            <ValidationAlertWrapper>
              <Alert message={newPasswordError} visible={true} />
            </ValidationAlertWrapper>
          )}
        </PasswordFieldGroup>

        <PasswordFieldGroup>
          <PasswordFieldLabel htmlFor="confirmPassword">Confirm Password</PasswordFieldLabel>
          <PasswordInputWrapper>
            <PasswordInputField
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              hasError={!!confirmPasswordError}
              placeholder="Confirm your new password"
              disabled={isSuccess}
            />
            <PasswordVisibilityToggleButton
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              disabled={isSuccess}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </PasswordVisibilityToggleButton>
          </PasswordInputWrapper>
          {confirmPasswordError && (
            <ValidationAlertWrapper>
              <Alert message={confirmPasswordError} visible={true} />
            </ValidationAlertWrapper>
          )}
        </PasswordFieldGroup>
        
        <Button type="submit">
          {isSuccess ? 'Back to Log In' : 'Continue'}
        </Button>
        
        {isSuccess && (
          <SuccessNotificationMessage>
            <Check size={16} />
            Password updated successfully!
          </SuccessNotificationMessage>
        )}
      </PasswordCreationForm>
      
      <SignInPromptContainer>
        <SignInPromptText>Remember your password? </SignInPromptText>
        <SignInRedirectLink to="/">
          Sign In
        </SignInRedirectLink>
      </SignInPromptContainer>
    </CreatePasswordFormContainer>
  );
};

export default CreatePasswordForm;
