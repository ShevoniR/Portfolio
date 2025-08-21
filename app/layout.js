import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Shevoni — Portfolio",
  description: "Software Engineering Student",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
