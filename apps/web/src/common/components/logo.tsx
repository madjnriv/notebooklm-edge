import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}
export const LogoIcon = ({ width = 100, height = 100 }: LogoProps) => {
  return (
    <Image
      src={"/icon-logo-app.png"}
      alt="logo icon"
      width={width}
      height={height}
    />
  );
};
export const LogoWordMark = ({ width = 110, height = 100 }: LogoProps) => {
  return (
    <Image
      src={"/wordmark-logo.webp"}
      alt="logo word mark"
      width={width}
      height={height}
    />
  );
};
