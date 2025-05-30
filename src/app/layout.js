import { Inter } from 'next/font/google';
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: "0px" }} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
