
import React, { useState } from 'react';
import styled from 'styled-components';
import { Upload, Plus } from 'lucide-react';

const MediaUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px dashed #D1D5DB;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: #FAFAFA;
  min-height: 180px;
  transition: border-color 0.2s ease;
  
  @media (max-width: 480px) {
    min-height: 150px;
  }
  
  &:hover {
    border-color: #7642FE;
    background: #FEFEFE;
  }
`;

const EmptyUploadState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  height: 100%;
  min-height: 180px;
  
  @media (max-width: 480px) {
    min-height: 150px;
    padding: 20px 15px;
  }
`;

const MediaDisplayState = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 16px;
`;

const MediaPreviewGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-start;
`;

const MediaThumbnailContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  border: 1px solid #E5E7EB;
`;

const MediaThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AddMediaButton = styled.div`
  width: 80px;
  height: 80px;
  border: 2px dashed #D1D5DB;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #7642FE;
  font-size: 12px;
  font-weight: 500;
  gap: 4px;
  background: white;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #7642FE;
    background: #F8F7FF;
  }
`;

const DragInstructionText = styled.p`
  font-size: 14px;
  color: #6B7280;
  margin: 0 0 16px 0;
  font-family: 'Sora', sans-serif;
  font-weight: 400;
`;

const UploadMediaButton = styled.button`
  background: #7642FE;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: 'Sora', sans-serif;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: #5f35cc;
  }
`;

const HiddenFileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

interface MediaUploadAreaProps {
  onImageUpload: (imageUrl: string) => void;
}

const DMAMediaUploadArea: React.FC<MediaUploadAreaProps> = ({ onImageUpload }) => {
  const [uploadedMediaFiles, setUploadedMediaFiles] = useState<string[]>([]);

  const handleMediaFileSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const mediaFileUrl = URL.createObjectURL(selectedFile);
      setUploadedMediaFiles([...uploadedMediaFiles, mediaFileUrl]);
      onImageUpload(mediaFileUrl);
      console.log('DMA-Media file uploaded:', selectedFile.name);
    }
  };

  const handleAdditionalMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const mediaFileUrl = URL.createObjectURL(selectedFile);
      setUploadedMediaFiles([...uploadedMediaFiles, mediaFileUrl]);
      onImageUpload(mediaFileUrl);
      console.log('Additional DMA-Media file uploaded:', selectedFile.name);
    }
  };

  return (
    <MediaUploadContainer>
      {uploadedMediaFiles.length === 0 ? (
        <EmptyUploadState>
          <DragInstructionText>Hold and drag DMA-Media to reorder</DragInstructionText>
          <UploadMediaButton>
            <Upload size={16} />
            Upload New DMA-Media
          </UploadMediaButton>
          <HiddenFileInput 
            type="file" 
            accept="image/*,video/*,.3ds,.obj,.gltf" 
            onChange={handleMediaFileSelection} 
          />
        </EmptyUploadState>
      ) : (
        <MediaDisplayState>
          <DragInstructionText>Hold and drag DMA-Media to reorder</DragInstructionText>
          <MediaPreviewGrid>
            {uploadedMediaFiles.map((mediaFile, index) => (
              <MediaThumbnailContainer key={index}>
                <MediaThumbnailImage src={mediaFile} alt={`DMA-Media ${index + 1}`} />
              </MediaThumbnailContainer>
            ))}
            <AddMediaButton>
              <Plus size={16} />
              <span>Add</span>
              <HiddenFileInput 
                type="file" 
                accept="image/*,video/*,.3ds,.obj,.gltf" 
                onChange={handleAdditionalMediaUpload} 
              />
            </AddMediaButton>
          </MediaPreviewGrid>
        </MediaDisplayState>
      )}
    </MediaUploadContainer>
  );
};

export default DMAMediaUploadArea;
