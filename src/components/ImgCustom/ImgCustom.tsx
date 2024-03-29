import {Box, Dialog} from '@mui/material';
import {useState} from 'react';

type ImgCustomProps = {
  src: string;
  width: string | number;
  height: string | number;
};

export const ImgCustom = ({src, width, height}: ImgCustomProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
      <img onClick={() => setIsOpen(true)} src={src} width={width} height={height} style={{borderRadius: '15%'}} />
      {isOpen && (
        <Dialog fullWidth open={isOpen} onClose={() => setIsOpen(false)}>
          <img src={src} height={'100%'} width={'100%'} />
        </Dialog>
      )}
    </Box>
  );
};
