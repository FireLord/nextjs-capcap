// components/DottedBackground.tsx

import React, { ReactNode } from 'react';

interface DottedBackgroundProps {
  bgColor?: string;
  dotColor?: string;
  children?: ReactNode;
}

export const DottedBackground: React.FC<DottedBackgroundProps> = ({
  bgColor = 'white',
  dotColor = 'black',
  children,
}) => {
  const style = {
    backgroundColor: bgColor,
    backgroundImage: `radial-gradient(${dotColor} 10%, transparent 10%)`,
    backgroundSize: '20px 20px',
  };

  return (
    <div style={style} className="w-full h-full">
      {children}
    </div>
  );
};
