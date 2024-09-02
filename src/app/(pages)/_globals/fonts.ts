import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const fonts = [inter];
const fontVariables = fonts.map((font) => font.variable);
const fontString = fontVariables.join(' ');

export default fontString;
