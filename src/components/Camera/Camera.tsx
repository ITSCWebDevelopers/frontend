import {useRef, useState} from 'react';
import Webcam from 'react-webcam';

export const Camera = () => {
  const webcamRef = useRef<any>(null);
  const [imageSrc, setImageSrc] = useState(null);

  const videoConstraints = {
    width: 300,
    height: 300,
    facingMode: 'environment',
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  };

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat='image/jpeg' videoConstraints={videoConstraints} />
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
