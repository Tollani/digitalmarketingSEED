
import React, { useState } from 'react';
import styled from 'styled-components';
import { Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import UploadArea from './UploadArea';

const CompleteProfileFormContainer = styled.div`
  width: 100%;
  max-width: 500px;
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

const ProfileCompletionForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormSection = styled.div`
  margin-bottom: 24px;
`;

const FormSectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 12px;
  font-family: 'Sora', sans-serif;
`;

const FormSectionSubtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  margin-bottom: 16px;
  line-height: 1.4;
  font-family: 'Sora', sans-serif;
`;

const AdditionalInstructionText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #777;
  margin-top: 8px;
  font-style: italic;
  font-family: 'Sora', sans-serif;
`;

const ProfilePictureUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const ProfilePictureUploadCircle = styled.div`
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

const ProfilePictureUploadButton = styled.button`
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

const ProfilePictureDisplayContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 16px;
`;

const ProfilePictureDisplayImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfilePictureChangeButton = styled.button`
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

const HiddenFileInput = styled.input`
  display: none;
`;

const UploadedDocumentsPreview = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  overflow-x: auto;
  padding-bottom: 10px;
`;

const UploadedDocumentImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

const BusinessQuestionSection = styled.div`
  margin: 10px 0;
`;

const BusinessQuestionText = styled.p`
  font-family: 'Sora', sans-serif;
  font-size: 14px;
  color: #000000;
  margin-bottom: 12px;
  line-height: 1.4;
`;

const RadioOptionsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RadioOptionLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Sora', sans-serif;
  font-size: 14px;
  color: #000000;
  cursor: pointer;
`;

const RadioOptionInput = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  accent-color: #7642FE;
`;

const ActionButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`;

const SkipActionButton = styled.button`
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

  const handleProfilePictureUpload = (imageUrl: string) => {
    setProfilePicture(imageUrl);
  };

  const handleIdentificationUpload = (imageUrl: string) => {
    setIdentificationFiles(prev => [...prev, imageUrl]);
  };

  const handleSubmit = () => {
    console.log({
      profilePicture,
      identificationFiles,
      ownsBusiness,
      registerWithBusiness
    });
  };

  const handleSkip = () => {
    console.log('Skipped profile completion');
  };

  return (
    <CompleteProfileFormContainer>
      <PageHeaderTitle>Complete Your Profile</PageHeaderTitle>
      <PageSubtitle>Complete your KYC registration</PageSubtitle>
      
      <ProfileCompletionForm>
        <FormSection>
          <FormSectionTitle>Upload Your Profile Picture</FormSectionTitle>
          {profilePicture ? (
            <ProfilePictureDisplayContainer>
              <ProfilePictureDisplayImage src={profilePicture} alt="Profile" />
              <ProfilePictureChangeButton 
                onClick={() => document.getElementById('profile-upload')?.click()}
              >
                Change image
              </ProfilePictureChangeButton>
              <HiddenFileInput
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
            </ProfilePictureDisplayContainer>
          ) : (
            <ProfilePictureUploadContainer>
              <ProfilePictureUploadCircle>
                <Camera size={32} />
              </ProfilePictureUploadCircle>
              <ProfilePictureUploadButton 
                onClick={() => document.getElementById('profile-upload')?.click()}
              >
                Upload
              </ProfilePictureUploadButton>
              <HiddenFileInput
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
            </ProfilePictureUploadContainer>
          )}
        </FormSection>

        <FormSection>
          <FormSectionTitle>Upload Valid Means of Identification</FormSectionTitle>
          <FormSectionSubtitle>e.g. National ID, Drivers License, International Passport, Voters ID.</FormSectionSubtitle>
          <AdditionalInstructionText>Upload multiple high quality images for better results</AdditionalInstructionText>
          
          <UploadArea onImageUpload={handleIdentificationUpload} />
          
          {identificationFiles.length > 0 && (
            <UploadedDocumentsPreview>
              {identificationFiles.map((file, index) => (
                <UploadedDocumentImage key={index} src={file} alt={`ID ${index + 1}`} />
              ))}
            </UploadedDocumentsPreview>
          )}
        </FormSection>

        <FormSection>
          <FormSectionTitle>Do you own a registered business?</FormSectionTitle>
          <BusinessQuestionSection>
            <BusinessQuestionText>
              Please let us know if you own a registered business. This will help us tailor your experience and provide the most relevant services for your needs.
            </BusinessQuestionText>
            <RadioOptionsGroup>
              <RadioOptionLabel>
                <RadioOptionInput
                  type="radio"
                  name="ownsBusiness"
                  value="yes"
                  checked={ownsBusiness === 'yes'}
                  onChange={(e) => setOwnsBusiness(e.target.value)}
                />
                Yes
              </RadioOptionLabel>
              <RadioOptionLabel>
                <RadioOptionInput
                  type="radio"
                  name="ownsBusiness"
                  value="no"
                  checked={ownsBusiness === 'no'}
                  onChange={(e) => setOwnsBusiness(e.target.value)}
                />
                No
              </RadioOptionLabel>
            </RadioOptionsGroup>
          </BusinessQuestionSection>
        </FormSection>

        <FormSection>
          <FormSectionTitle>Are you registered with a business or organization?</FormSectionTitle>
          <BusinessQuestionSection>
            <BusinessQuestionText>
              Please let us know if you are registered with a business or organization. This will help us tailor your experience and provide the most relevant services for your needs.
            </BusinessQuestionText>
            <RadioOptionsGroup>
              <RadioOptionLabel>
                <RadioOptionInput
                  type="radio"
                  name="registerWithBusiness"
                  value="yes"
                  checked={registerWithBusiness === 'yes'}
                  onChange={(e) => setRegisterWithBusiness(e.target.value)}
                />
                Yes
              </RadioOptionLabel>
              <RadioOptionLabel>
                <RadioOptionInput
                  type="radio"
                  name="registerWithBusiness"
                  value="no"
                  checked={registerWithBusiness === 'no'}
                  onChange={(e) => setRegisterWithBusiness(e.target.value)}
                />
                No
              </RadioOptionLabel>
            </RadioOptionsGroup>
          </BusinessQuestionSection>
        </FormSection>

        <ActionButtonContainer>
          <SkipActionButton onClick={handleSkip}>Skip</SkipActionButton>
          <Button onClick={handleSubmit}>Complete Profile</Button>
        </ActionButtonContainer>
      </ProfileCompletionForm>
    </CompleteProfileFormContainer>
  );
};

export default CompleteProfileForm;
