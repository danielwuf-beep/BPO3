import './globals.css';
export const metadata = { title: "BPO Cost Dashboard" };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
