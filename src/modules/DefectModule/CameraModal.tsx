import {VIDEO_CONSTRAINTS} from '@/components/Camera/Camera.constants';
import {Box, Button, Dialog} from '@mui/material';
import {Ref} from 'react';
import Webcam from 'react-webcam';

type CameraModalProps = {
  webcamRef: Ref<Webcam>;
  open: boolean;
  onClose: () => void;
  capture: any;
};

export const CameraModal = ({webcamRef: ref, open, onClose, capture}: CameraModalProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Webcam ref={ref} audio={false} screenshotFormat='image/jpeg' videoConstraints={VIDEO_CONSTRAINTS} />
        <Button variant='contained' size='large' onClick={capture}>
          Фото
        </Button>
      </Box>
    </Dialog>
  );
};
