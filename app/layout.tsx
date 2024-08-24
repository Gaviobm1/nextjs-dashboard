import "@/app/ui/global.css";
import { inter, newRocker } from "@/app/ui/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${newRocker.className} antialiased`}>{children}</body>
    </html>
  );
}
