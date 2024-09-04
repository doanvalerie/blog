import { Assistant, Inter, Rubik } from 'next/font/google';

const assistant = Assistant({
  subsets: ['latin'],
  variable: '--font-assistant',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
});

const fonts = [assistant, inter, rubik];
const fontVariables = fonts.map((font) => font.variable);
const fontString = fontVariables.join(' ');

export default fontString;
