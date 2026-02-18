import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: {
    default: "Prime Shield",
    template: "%s | Prime Shield",
  },
  description: "Prime Shield Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body suppressHydrationWarning dir="rtl">
        {children}
      </body>
    </html>
  );
}
