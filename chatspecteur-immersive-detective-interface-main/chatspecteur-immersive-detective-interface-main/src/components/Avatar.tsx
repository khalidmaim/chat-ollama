import React from "react";
import Image from "next/image";

export type AvatarSize = "small" | "medium" | "large";

interface AvatarProps {
  src: string;
  size?: AvatarSize;
  borderColor?: string;
  isAccused?: boolean;
  isCriminal?: boolean;
  hasClue?: boolean;
}

const sizeMap: Record<AvatarSize, number> = {
  small: 46,
  medium: 54,
  large: 66,
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  size = "large",
  borderColor = "#3B82F6",
  isAccused = false,
  isCriminal = false,
  hasClue = false,
}) => {
  const dimension = sizeMap[size];
  
  const getBorderStyle = () => {
    if (isAccused) return "#DC2626";
    if (isCriminal) return "#EF4444";
    if (hasClue) return "#10B981";
    return borderColor;
  };

  return (
    <div
      className="rounded-full overflow-hidden relative transition-all duration-300 hover:scale-110"
      style={{
        width: `${dimension}px`,
        height: `${dimension}px`,
        border: `3px solid ${getBorderStyle()}`,
        boxShadow: `0 0 20px ${getBorderStyle()}40, 0 0 40px ${getBorderStyle()}20`,
      }}
    >
      <Image
        src={src}
        alt="Suspect"
        width={dimension}
        height={dimension}
        objectFit="cover"
        className="grayscale hover:grayscale-0 transition-all duration-500"
      />
      {hasClue && (
        <div 
          className="absolute -top-1 -right-1 w-4 h-4 rounded-full animate-pulse"
          style={{
            backgroundColor: "#10B981",
            boxShadow: "0 0 10px #10B981",
          }}
        />
      )}
    </div>
  );
};

export default Avatar;