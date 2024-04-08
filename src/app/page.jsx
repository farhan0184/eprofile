import { Home1 } from "@/assets/images";
import Banner from "@/components/Home/Banner";
import BringBusiness from "@/components/Home/BringBusiness";
import HomeServicesCard from "@/components/Home/HomeServicesCard";
import LeadingCompany from "@/components/Home/LeadingCompany";
import ShareExperience from "@/components/Home/ShareExperience";

export default function Home() {
  // "background-image: url('your-image.jpg'); background-size: auto; background-position: center;"
  return (
    <div>
      <Banner />
      <HomeServicesCard />
      <LeadingCompany />
      <BringBusiness />
      <ShareExperience />
    </div>
  );
}
