import "../app/ui/globals.css";
import {Tilt} from '../app/ui/fonts'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Tilt.className} antialiased`}>{children}</body>
    </html>
  );
}
