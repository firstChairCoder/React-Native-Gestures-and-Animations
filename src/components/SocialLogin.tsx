/* eslint-disable max-len */
import type { ReactNode } from "react";
import React from "react";
import Svg, { Path } from "react-native-svg";

import theme, { Box } from "./Theme";
const SIZE = theme.borderRadii.l * 1.5;

interface SocialIconProps {
  children: ReactNode;
}

const Facebook = () => (
  <Svg viewBox="0 0 100 100" width={24} height={24}>
    <Path
      d="M43.5 96a6.508 6.508 0 0 1-6.5-6.5V62h-4.5a6.508 6.508 0 0 1-6.5-6.5v-14c0-3.584 2.916-6.5 6.5-6.5H36v-2.143C36 19.427 47.047 8.5 60.625 8.5c3.595 0 7.673.216 11.532.608A6.484 6.484 0 0 1 78 15.575V27.5c0 3.584-2.916 6.5-6.5 6.5h-6.857a.651.651 0 0 0-.643.643V35h7.537a6.502 6.502 0 0 1 6.449 7.31l-1.755 13.998A6.508 6.508 0 0 1 69.782 62H64v27.5c0 3.584-2.916 6.5-6.5 6.5h-14z"
      opacity={0.35}
    />
    <Path
      fill="#f2f2f2"
      d="M41.5 94a6.508 6.508 0 0 1-6.5-6.5V60h-4.5a6.508 6.508 0 0 1-6.5-6.5v-14c0-3.584 2.916-6.5 6.5-6.5H34v-2.143C34 17.427 45.047 6.5 58.625 6.5c3.595 0 7.673.216 11.532.608A6.484 6.484 0 0 1 76 13.575V25.5c0 3.584-2.916 6.5-6.5 6.5h-6.857a.651.651 0 0 0-.643.643V33h7.537a6.502 6.502 0 0 1 6.449 7.31l-1.755 13.998A6.508 6.508 0 0 1 67.782 60H62v27.5c0 3.584-2.916 6.5-6.5 6.5h-14z"
    />
    <Path
      fill="#70bfff"
      d="M62.643 25.5H69.5V13.575c-3.46-.352-7.393-.582-10.875-.575C48.615 13 40.5 20.995 40.5 30.857V39.5h-10v14h11v34h14v-34h12.282l1.755-14H55.5v-6.857a7.143 7.143 0 0 1 7.143-7.143z"
    />
    <Path
      fill="#40396e"
      d="M55.5 89h-14a1.5 1.5 0 0 1-1.5-1.5V55h-9.5a1.5 1.5 0 0 1-1.5-1.5v-14a1.5 1.5 0 0 1 1.5-1.5H39v-7.143C39 20.184 47.804 11.5 58.625 11.5c3.354-.002 7.263.2 11.026.583A1.5 1.5 0 0 1 71 13.575V25.5a1.5 1.5 0 0 1-1.5 1.5h-6.857A5.649 5.649 0 0 0 57 32.643V38h12.537a1.5 1.5 0 0 1 1.488 1.687l-1.755 14A1.499 1.499 0 0 1 67.782 55H57v32.5a1.5 1.5 0 0 1-1.5 1.5zM43 86h11V53.5a1.5 1.5 0 0 1 1.5-1.5h10.959l1.378-11H55.5a1.5 1.5 0 0 1-1.5-1.5v-6.857C54 27.877 57.877 24 62.643 24H68v-9.062c-3.182-.284-6.405-.438-9.222-.438h-.15C49.458 14.5 42 21.838 42 30.857V39.5a1.5 1.5 0 0 1-1.5 1.5H32v11h9.5a1.5 1.5 0 0 1 1.5 1.5V86z"
    />
  </Svg>
);

const Google = () => (
  <Svg viewBox="0 0 48 48" width={24} height={24}>
    <Path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <Path
      fill="#FF3D00"
      d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <Path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <Path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </Svg>
);

const Apple = () => (
  <Svg viewBox="0 0 50 50" width={24} height={24}>
    <Path
      d="M44.527 34.75c-1.078 2.395-1.597 3.465-2.984 5.578-1.941 2.953-4.68 6.64-8.063 6.664-3.011.028-3.789-1.965-7.878-1.93-4.086.02-4.938 1.97-7.954 1.938-3.386-.031-5.976-3.352-7.918-6.3-5.43-8.27-6.003-17.966-2.648-23.122 2.375-3.656 6.129-5.805 9.656-5.805 3.594 0 5.852 1.973 8.82 1.973 2.883 0 4.637-1.976 8.794-1.976 3.14 0 6.46 1.71 8.836 4.664-7.766 4.257-6.504 15.347 1.34 18.316ZM31.195 8.469c1.512-1.942 2.66-4.68 2.242-7.469-2.464.168-5.347 1.742-7.03 3.781-1.528 1.86-2.794 4.617-2.302 7.285 2.692.086 5.477-1.52 7.09-3.597Z"
      fill="#000"
    />
  </Svg>
);

const SocialIcon = ({ children }: SocialIconProps) => {
  return (
    <Box
      marginHorizontal={"s"}
      backgroundColor={"white"}
      width={SIZE}
      height={SIZE}
      borderRadius={"l"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection={"row"} justifyContent={"center"}>
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
