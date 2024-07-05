import React, { useRef, useEffect } from 'react';

const CameraComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const startFrontCamera = async () => {
      try {
        const constraints: MediaStreamConstraints = {
          video: {
            facingMode: 'user'
          }
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        if (videoRef.current && stream) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing media devices:', error);
      }
    };

    startFrontCamera();
  }, []); 

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline className="p-2 w-[360px] h-[480px]" />
    </div>
  );
};

export default CameraComponent;
