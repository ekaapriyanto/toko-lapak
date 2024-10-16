import Image from "next/image";
import BannerSale from "@/assets/bannerSale.png";

export default function LandingLayout({
  children,
  banner,
  category,
  newArrival,
  faq,
}: {
  children: React.ReactNode;
  banner: React.ReactNode;
  category: React.ReactNode;
  newArrival: React.ReactNode;
  faq: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        {banner}
        {category}
        <div className="mt-5">
          <Image src={BannerSale} alt="banner" width={1200} height={1200} />
        </div>
        {newArrival}
        {children}
        {faq}
      </div>
    </main>
  );
}
