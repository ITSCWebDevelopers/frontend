import {useRef, useState} from 'react';
import Webcam from 'react-webcam';
import {VIDEO_CONSTRAINTS} from './Camera.constants';

export const Camera = () => {
  const webcamRef = useRef<Webcam>(null);
  const [imageSrc, setImageSrc] = useState<string | null>();

  const capture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setImageSrc(imageSrc);
  };

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat='image/jpeg' videoConstraints={VIDEO_CONSTRAINTS} />
      <button onClick={capture}>Capture Photo</button>
      {imageSrc && (
        <div>
          <h2>Captured Photo:</h2>
          <img src={imageSrc} alt='Captured' />
        </div>
      )}
    </div>
  );
};
