import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Timer({ initialMinutes = 5, onExpire }) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60); // in seconds

  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft <= 0) {
      toast.error('Session Expired. Payment Unsuccessful');
      navigate('/');
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onExpire]);

  // Format as MM:SS
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="text-lg font-semibold  text-red-600 bg-red-300 w-screen text-center">
      Time Remaining: {formatTime()}
    </div>
  );
}

export default Timer;
