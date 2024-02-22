import React, { useState, useEffect } from 'react';

const CurrentDate: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        month: 'numeric',
        year: 'numeric',
        second:'numeric',
        hour12: false,
      };
      const formattedDate = now.toLocaleDateString(undefined, options);
      setCurrentDate(formattedDate);
    }, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means useEffect runs once on mount

  return (
    <div>
      <h3>{currentDate}</h3>
    </div>
  );
};

export default CurrentDate;
