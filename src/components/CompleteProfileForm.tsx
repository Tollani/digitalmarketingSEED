import React, { useState } from 'react';
import styled from 'styled-components';
import { Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import UploadArea from './UploadArea';

const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  font-family: 'Sora', sans-serif;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #7642FE;
  margin-bottom: 8px;
  font-family: 'Sora', sans-serif;
  line-height: 40px;
  letter-spacing: -0.15px;
  width: 100%;
  max-width: 275px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #666666;
  margin-bottom: 32px;
  line-height: 1.5;
  font-family: 'Sora', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 12px;
  font-family: 'Sora', sans-serif;
`;

const SectionSubtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  margin-bottom: 16px;
  line-height: 1.4;
  font-family: 'Sora', sans-serif;
`;

const AdditionalText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #777;
  margin-top: 8px;
  font-style: italic;
  font-family: 'Sora', sans-serif;
`;

const CircularUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const CircularUpload = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #E5E7EB;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  color: #6B7280;
`;

const UploadButton = styled.button`
  background: #7642FE;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: 'Sora', sans-serif;
  
  &:hover {
    background: #5f35cc;
  }
`;

const ProfilePictureContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 16px;
`;

const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ChangeImageButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 8px;
  font-size: 14px;
  cursor: pointer;
  font-family: 'Sora', sans-serif;
`;

const HiddenInput = styled.input`
  display: none;
`;

const UploadedFiles = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  overflow-x: auto;
  padding-bottom: 10px;
`;

const UploadedImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

const RadioSection = styled.div`
  margin: 10px 0;
`;

const RadioQuestion = styled.p`
  font-family: 'Sora', sans-serif;
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
  font-family: 'Sora', sans-serif;
  font-size: 14px;
  color: #000000;
  cursor: pointer;
`;

const RadioInput = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  accent-color: #7642FE;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`;

const SkipButton = styled.button`
  background: none;
  color: #666666;
  border: 1px solid #CED4DA;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: 'Sora', sans-serif;
  
  &:hover {
    background: #f8f9fa;
  }
`;

const CompleteProfileForm = () => {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [identificationFiles, setIdentificationFiles] = useState<string[]>([]);
  const [ownsBusiness, setOwnsBusiness] = useState('');
  const [registerWithBusiness, setRegisterWithBusiness] = useState('');
  const navigate = useNavigate();

  const handleProfilePictureUpload = (imageUrl: string) => {
    setProfilePicture(imageUrl);
  };

  const handleIdentificationUpload = (imageUrl: string) => {
    setIdentificationFiles(prev => [...prev, imageUrl]);
  };

  // Check if all required fields are filled before continuing
  const isFormValid = () => {
    return (
      profilePicture &&
      identificationFiles.length > 0 &&
      ownsBusiness &&
      registerWithBusiness
    );
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (isFormValid()) {
      // Simulate submit, then route
      console.log({
        profilePicture,
        identificationFiles,
        ownsBusiness,
        registerWithBusiness
      });
      navigate('/organization-profile');
    }
  };

  const handleSkip = () => {
    console.log('Skipped profile completion');
    // Optionally, route as you like here or leave as-is
  };

  return (
    <FormContainer>
      <Title>Complete Your Profile</Title>
      <Subtitle>Complete your KYC registration</Subtitle>
      
      <Form>
        <Section>
          <SectionTitle>Upload Your Profile Picture</SectionTitle>
          {profilePicture ? (
            <ProfilePictureContainer>
              <ProfilePicture src={profilePicture} alt="Profile" />
              <ChangeImageButton 
                onClick={() => document.getElementById('profile-upload-change')?.click()}
              >
                Change image
              </ChangeImageButton>
              <HiddenInput
                id="profile-upload-change"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const imageUrl = URL.createObjectURL(file);
                    handleProfilePictureUpload(imageUrl);
                  }
                }}
              />
            </ProfilePictureContainer>
          ) : (
            <CircularUploadContainer>
              <CircularUpload>
                <Camera size={32} />
              </CircularUpload>
              <UploadButton 
                onClick={() => document.getElementById('profile-upload')?.click()}
              >
                Upload
              </UploadButton>
              <HiddenInput
                id="profile-upload"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const imageUrl = URL.createObjectURL(file);
                    handleProfilePictureUpload(imageUrl);
                  }
                }}
              />
            </CircularUploadContainer>
          )}
        </Section>

        <Section>
          <SectionTitle>Upload Valid Means of Identification</SectionTitle>
          <SectionSubtitle>e.g. National ID, Drivers License, International Passport, Voters ID.</SectionSubtitle>
          <AdditionalText>Upload multiple high quality images for better results</AdditionalText>
          
          <UploadArea onImageUpload={handleIdentificationUpload} />
          
          {identificationFiles.length > 0 && (
            <UploadedFiles>
              {identificationFiles.map((file, index) => (
                <UploadedImage key={index} src={file} alt={`ID ${index + 1}`} />
              ))}
            </UploadedFiles>
          )}
        </Section>

        <Section>
          <SectionTitle>Do you own a registered business?</SectionTitle>
          <RadioSection>
            <RadioQuestion>
              Please let us know if you own a registered business. This will help us tailor your experience and provide the most relevant services for your needs.
            </RadioQuestion>
            <RadioGroup>
              <RadioOption>
                <RadioInput
                  type="radio"
                  name="ownsBusiness"
                  value="yes"
                  checked={ownsBusiness === 'yes'}
                  onChange={(e) => setOwnsBusiness(e.target.value)}
                />
                Yes
              </RadioOption>
              <RadioOption>
                <RadioInput
                  type="radio"
                  name="ownsBusiness"
                  value="no"
                  checked={ownsBusiness === 'no'}
                  onChange={(e) => setOwnsBusiness(e.target.value)}
                />
                No
              </RadioOption>
            </RadioGroup>
          </RadioSection>
        </Section>

        <Section>
          <SectionTitle>Are you registered with a business or organization?</SectionTitle>
          <RadioSection>
            <RadioQuestion>
              Please let us know if you are registered with a business or organization. This will help us tailor your experience and provide the most relevant services for your needs.
            </RadioQuestion>
            <RadioGroup>
              <RadioOption>
                <RadioInput
                  type="radio"
                  name="registerWithBusiness"
                  value="yes"
                  checked={registerWithBusiness === 'yes'}
                  onChange={(e) => setRegisterWithBusiness(e.target.value)}
                />
                Yes
              </RadioOption>
              <RadioOption>
                <RadioInput
                  type="radio"
                  name="registerWithBusiness"
                  value="no"
                  checked={registerWithBusiness === 'no'}
                  onChange={(e) => setRegisterWithBusiness(e.target.value)}
                />
                No
              </RadioOption>
            </RadioGroup>
          </RadioSection>
        </Section>

        <ButtonContainer>
          <SkipButton type="button" onClick={handleSkip}>Skip</SkipButton>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={!isFormValid()}
          >
            Complete Profile
          </Button>
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
};

export default CompleteProfileForm;
