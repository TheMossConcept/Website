import { FC, MouseEventHandler, useState } from 'react';

type Props = {
  width: number;
  height: number;
  onClick: MouseEventHandler<SVGSVGElement>;
};

const InteractiveMenuIcon: FC<Props> = ({ width, height, onClick }) => {
  const [middlePathDValue, setMiddlePathDValue] = useState('M.986,7.986h20');

  const alignLines = () => {
    setMiddlePathDValue('M6.986,7.986h20');
  };

  const dealignLines = () => {
    setMiddlePathDValue('M.986,7.986h20');
  };

  return (
    <svg
      style={{ cursor: 'pointer' }}
      onMouseEnter={alignLines}
      onMouseLeave={dealignLines}
      onClick={onClick}
      width={width}
      height={height}>
      <path
        d="M6.986.986h20"
        fill="none"
        stroke="#383838"
        strokeLinecap="round"
        strokeWidth="1.972"
      />
      <path
        d={middlePathDValue}
        style={{ transition: 'd 350ms linear' }}
        fill="none"
        stroke="#383838"
        strokeLinecap="round"
        strokeWidth="1.972"
      />
      <path
        d="M6.986,14.986h20"
        fill="none"
        stroke="#383838"
        strokeLinecap="round"
        strokeWidth="1.972"
      />
    </svg>
  );
};

export default InteractiveMenuIcon;
