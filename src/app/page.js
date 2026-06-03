import ClientReview from "./components/ClientReview";
import Banner from "./components/Banner";
import MarqueeCard from "./components/MarqueeCard";
import FeaturedBooks from "./components/FeaturedBooks";
import { ClientPageRoot } from "next/dist/client/components/client-page";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Banner />
      <MarqueeCard />
      <FeaturedBooks />
      <ClientReview/>

      
      
   </div>

  );
}
