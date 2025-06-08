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
  color: #7642FE;
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
  transition: border-color 0.2s ease;
  
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
  
  &.valid {
    border-color: #28a745;
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
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #007BFF;
  }
  
  &.valid {
    border-color: #28a745;
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
  flex-direction: column;
  gap: 12px;
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
  accent-color: #7642FE;
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
  accent-color: #7642FE;
`;

const Link = styled.a`
  color: #7642FE;
  text-decoration: underline;
`;

const CreateAccountButton = styled.button`
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
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    background: #5f35cc;
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
  color: #7642FE;
  text-decoration: underline;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 12px;
  margin-top: 4px;
`;

const countries = [
  { name: 'Afghanistan', code: 'AF', phoneCode: '+93' },
  { name: 'Albania', code: 'AL', phoneCode: '+355' },
  { name: 'Algeria', code: 'DZ', phoneCode: '+213' },
  { name: 'Argentina', code: 'AR', phoneCode: '+54' },
  { name: 'Armenia', code: 'AM', phoneCode: '+374' },
  { name: 'Australia', code: 'AU', phoneCode: '+61' },
  { name: 'Austria', code: 'AT', phoneCode: '+43' },
  { name: 'Azerbaijan', code: 'AZ', phoneCode: '+994' },
  { name: 'Bahrain', code: 'BH', phoneCode: '+973' },
  { name: 'Bangladesh', code: 'BD', phoneCode: '+880' },
  { name: 'Belarus', code: 'BY', phoneCode: '+375' },
  { name: 'Belgium', code: 'BE', phoneCode: '+32' },
  { name: 'Bolivia', code: 'BO', phoneCode: '+591' },
  { name: 'Brazil', code: 'BR', phoneCode: '+55' },
  { name: 'Bulgaria', code: 'BG', phoneCode: '+359' },
  { name: 'Cambodia', code: 'KH', phoneCode: '+855' },
  { name: 'Cameroon', code: 'CM', phoneCode: '+237' },
  { name: 'Canada', code: 'CA', phoneCode: '+1' },
  { name: 'Chile', code: 'CL', phoneCode: '+56' },
  { name: 'China', code: 'CN', phoneCode: '+86' },
  { name: 'Colombia', code: 'CO', phoneCode: '+57' },
  { name: 'Costa Rica', code: 'CR', phoneCode: '+506' },
  { name: 'Croatia', code: 'HR', phoneCode: '+385' },
  { name: 'Cuba', code: 'CU', phoneCode: '+53' },
  { name: 'Czech Republic', code: 'CZ', phoneCode: '+420' },
  { name: 'Denmark', code: 'DK', phoneCode: '+45' },
  { name: 'Ecuador', code: 'EC', phoneCode: '+593' },
  { name: 'Egypt', code: 'EG', phoneCode: '+20' },
  { name: 'Estonia', code: 'EE', phoneCode: '+372' },
  { name: 'Ethiopia', code: 'ET', phoneCode: '+251' },
  { name: 'Finland', code: 'FI', phoneCode: '+358' },
  { name: 'France', code: 'FR', phoneCode: '+33' },
  { name: 'Georgia', code: 'GE', phoneCode: '+995' },
  { name: 'Germany', code: 'DE', phoneCode: '+49' },
  { name: 'Ghana', code: 'GH', phoneCode: '+233' },
  { name: 'Greece', code: 'GR', phoneCode: '+30' },
  { name: 'Guatemala', code: 'GT', phoneCode: '+502' },
  { name: 'Hungary', code: 'HU', phoneCode: '+36' },
  { name: 'Iceland', code: 'IS', phoneCode: '+354' },
  { name: 'India', code: 'IN', phoneCode: '+91' },
  { name: 'Indonesia', code: 'ID', phoneCode: '+62' },
  { name: 'Iran', code: 'IR', phoneCode: '+98' },
  { name: 'Iraq', code: 'IQ', phoneCode: '+964' },
  { name: 'Ireland', code: 'IE', phoneCode: '+353' },
  { name: 'Israel', code: 'IL', phoneCode: '+972' },
  { name: 'Italy', code: 'IT', phoneCode: '+39' },
  { name: 'Jamaica', code: 'JM', phoneCode: '+1' },
  { name: 'Japan', code: 'JP', phoneCode: '+81' },
  { name: 'Jordan', code: 'JO', phoneCode: '+962' },
  { name: 'Kazakhstan', code: 'KZ', phoneCode: '+7' },
  { name: 'Kenya', code: 'KE', phoneCode: '+254' },
  { name: 'Kuwait', code: 'KW', phoneCode: '+965' },
  { name: 'Latvia', code: 'LV', phoneCode: '+371' },
  { name: 'Lebanon', code: 'LB', phoneCode: '+961' },
  { name: 'Libya', code: 'LY', phoneCode: '+218' },
  { name: 'Lithuania', code: 'LT', phoneCode: '+370' },
  { name: 'Luxembourg', code: 'LU', phoneCode: '+352' },
  { name: 'Malaysia', code: 'MY', phoneCode: '+60' },
  { name: 'Mexico', code: 'MX', phoneCode: '+52' },
  { name: 'Morocco', code: 'MA', phoneCode: '+212' },
  { name: 'Netherlands', code: 'NL', phoneCode: '+31' },
  { name: 'New Zealand', code: 'NZ', phoneCode: '+64' },
  { name: 'Nigeria', code: 'NG', phoneCode: '+234' },
  { name: 'Norway', code: 'NO', phoneCode: '+47' },
  { name: 'Pakistan', code: 'PK', phoneCode: '+92' },
  { name: 'Peru', code: 'PE', phoneCode: '+51' },
  { name: 'Philippines', code: 'PH', phoneCode: '+63' },
  { name: 'Poland', code: 'PL', phoneCode: '+48' },
  { name: 'Portugal', code: 'PT', phoneCode: '+351' },
  { name: 'Qatar', code: 'QA', phoneCode: '+974' },
  { name: 'Romania', code: 'RO', phoneCode: '+40' },
  { name: 'Russia', code: 'RU', phoneCode: '+7' },
  { name: 'Saudi Arabia', code: 'SA', phoneCode: '+966' },
  { name: 'Singapore', code: 'SG', phoneCode: '+65' },
  { name: 'Slovakia', code: 'SK', phoneCode: '+421' },
  { name: 'Slovenia', code: 'SI', phoneCode: '+386' },
  { name: 'South Africa', code: 'ZA', phoneCode: '+27' },
  { name: 'South Korea', code: 'KR', phoneCode: '+82' },
  { name: 'Spain', code: 'ES', phoneCode: '+34' },
  { name: 'Sri Lanka', code: 'LK', phoneCode: '+94' },
  { name: 'Sweden', code: 'SE', phoneCode: '+46' },
  { name: 'Switzerland', code: 'CH', phoneCode: '+41' },
  { name: 'Taiwan', code: 'TW', phoneCode: '+886' },
  { name: 'Thailand', code: 'TH', phoneCode: '+66' },
  { name: 'Turkey', code: 'TR', phoneCode: '+90' },
  { name: 'Ukraine', code: 'UA', phoneCode: '+380' },
  { name: 'United Arab Emirates', code: 'AE', phoneCode: '+971' },
  { name: 'United Kingdom', code: 'GB', phoneCode: '+44' },
  { name: 'United States', code: 'US', phoneCode: '+1' },
  { name: 'Uruguay', code: 'UY', phoneCode: '+598' },
  { name: 'Venezuela', code: 'VE', phoneCode: '+58' },
  { name: 'Vietnam', code: 'VN', phoneCode: '+84' },
  { name: 'Yemen', code: 'YE', phoneCode: '+967' },
  { name: 'Zimbabwe', code: 'ZW', phoneCode: '+263' }
];

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
  const [validFields, setValidFields] = useState<Record<string, boolean>>({});

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
      
      // Real-time validation
      const newValidFields = { ...validFields };
      
      switch (name) {
        case 'fullName':
          newValidFields.fullName = value.trim().length > 0;
          break;
        case 'email':
          newValidFields.email = validateEmail(value);
          break;
        case 'phoneNumber':
          newValidFields.phoneNumber = validatePhoneNumber(value) && value.length > 0;
          break;
        case 'address':
          newValidFields.address = value.trim().length > 0;
          break;
        case 'country':
          newValidFields.country = value !== '';
          break;
        case 'password':
          newValidFields.password = value.length >= 6;
          break;
        case 'confirmPassword':
          newValidFields.confirmPassword = value === formData.password && value.length > 0;
          break;
      }
      
      setValidFields(newValidFields);
    }
  };

  const getInputClassName = (fieldName: string) => {
    if (errors[fieldName]) return 'error';
    if (validFields[fieldName]) return 'valid';
    return '';
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
            className={getInputClassName('fullName')}
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
            className={getInputClassName('email')}
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
              {countries.map((country) => (
                <option key={country.code} value={`${country.code} ${country.phoneCode}`}>
                  {country.code} {country.phoneCode}
                </option>
              ))}
            </CountryCode>
            <PhoneInput
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className={getInputClassName('phoneNumber')}
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
            className={getInputClassName('address')}
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
            className={validFields.country ? 'valid' : ''}
          >
            <option value="">Country...</option>
            {countries.map((country) => (
              <option key={country.code} value={country.name}>
                {country.name}
              </option>
            ))}
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
            className={getInputClassName('password')}
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
            className={getInputClassName('confirmPassword')}
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
