
import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
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
  position: relative;
`;

const InputLabel = styled.label`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  margin-bottom: 4px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #CED4DA;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  
  &::placeholder {
    color: #666666;
  }
  
  &:focus {
    outline: none;
    border-color: #007BFF;
  }
  
  &.error {
    border-color: #dc3545;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #CED4DA;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #007BFF;
  }
`;

const PhoneInputContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const CountryCode = styled.select`
  padding: 10px;
  border: 1px solid #CED4DA;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  background: white;
  width: 120px;
  
  &:focus {
    outline: none;
    border-color: #007BFF;
  }
`;

const PhoneInput = styled(Input)`
  flex: 1;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #6C757D;
  
  &:hover {
    color: #000000;
  }
`;

const RadioSection = styled.div`
  margin: 10px 0;
`;

const RadioQuestion = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #000000;
  margin-bottom: 12px;
  line-height: 1.4;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #000000;
  cursor: pointer;
`;

const RadioInput = styled.input`
  width: 16px;
  height: 16px;
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #000000;
  cursor: pointer;
  line-height: 1.4;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin-top: 2px;
`;

const Link = styled.a`
  color: #007BFF;
  text-decoration: underline;
`;

const CreateAccountButton = styled.button`
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

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #CED4DA;
  }
  
  span {
    padding: 0 16px;
    color: #666666;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
  }
`;

const GoogleButton = styled.button`
  width: 100%;
  padding: 12px;
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    background: #f8f9fa;
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

const SignInLink = styled.a`
  color: #007BFF;
  text-decoration: underline;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 12px;
  margin-top: 4px;
`;

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    country: '',
    password: '',
    confirmPassword: '',
    userType: '',
    agreeToTerms: false
  });
  
  const [countryCode, setCountryCode] = useState('NG +234');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter only numbers';
    }
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.userType) newErrors.userType = 'Please select user type';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', { 
        ...formData, 
        phoneNumber: `${countryCode} ${formData.phoneNumber}` 
      });
    }
  };

  const handleGoogleSignUp = () => {
    console.log('Continue with Google clicked');
  };

  return (
    <FormContainer>
      <Title>Sign Up</Title>
      <Subtitle>Create your account to get started</Subtitle>
      
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <InputLabel htmlFor="fullName">Full Name</InputLabel>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Input name"
            value={formData.fullName}
            onChange={handleInputChange}
            className={errors.fullName ? 'error' : ''}
          />
          {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Input a valid email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
          <PhoneInputContainer>
            <CountryCode 
              value={countryCode} 
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="NG +234">NG +234</option>
              <option value="US +1">US +1</option>
              <option value="UK +44">UK +44</option>
            </CountryCode>
            <PhoneInput
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className={errors.phoneNumber ? 'error' : ''}
            />
          </PhoneInputContainer>
          {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <InputLabel htmlFor="address">Address</InputLabel>
          <Input
            id="address"
            name="address"
            type="text"
            placeholder="Input your address"
            value={formData.address}
            onChange={handleInputChange}
            className={errors.address ? 'error' : ''}
          />
          {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <InputLabel htmlFor="country">Country</InputLabel>
          <Select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          >
            <option value="">Country...</option>
            <option value="Nigeria">Nigeria</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </Select>
          {errors.country && <ErrorMessage>{errors.country}</ErrorMessage>}
        </InputGroup>

        <RadioSection>
          <RadioQuestion>
            Are you signing up as an individual or an organization? This helps us tailor your experience and recommend the most relevant services for your needs.
          </RadioQuestion>
          <RadioGroup>
            <RadioOption>
              <RadioInput
                type="radio"
                name="userType"
                value="individual"
                onChange={handleInputChange}
              />
              Individual
            </RadioOption>
            <RadioOption>
              <RadioInput
                type="radio"
                name="userType"
                value="organization"
                onChange={handleInputChange}
              />
              Organization
            </RadioOption>
          </RadioGroup>
          {errors.userType && <ErrorMessage>{errors.userType}</ErrorMessage>}
        </RadioSection>

        <InputGroup>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Input password"
            value={formData.password}
            onChange={handleInputChange}
            className={errors.password ? 'error' : ''}
          />
          <PasswordToggle
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </PasswordToggle>
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className={errors.confirmPassword ? 'error' : ''}
          />
          <PasswordToggle
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
          >
            {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </PasswordToggle>
          {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
        </InputGroup>

        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            name="agreeToTerms"
            onChange={handleInputChange}
          />
          <span>
            By continuing, you agree to our{' '}
            <Link href="#" target="_blank">Terms & Conditions</Link>{' '}
            and{' '}
            <Link href="#" target="_blank">Privacy Policy</Link>
          </span>
        </CheckboxContainer>
        {errors.agreeToTerms && <ErrorMessage>{errors.agreeToTerms}</ErrorMessage>}
        
        <CreateAccountButton type="submit">
          CREATE ACCOUNT
        </CreateAccountButton>
      </Form>
      
      <Divider>
        <span>Or</span>
      </Divider>
      
      <GoogleButton onClick={handleGoogleSignUp}>
        <FcGoogle size={20} />
        Continue with Google
      </GoogleButton>
      
      <SignInText>
        Have an account already? <SignInLink href="/">Sign In</SignInLink>
      </SignInText>
    </FormContainer>
  );
};

export default SignUpForm;
