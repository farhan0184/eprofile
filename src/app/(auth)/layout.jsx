import { Blob1, Blob2, Blob3 } from "@/assets/images";
import Image from "next/image";

export default function Layout({ children }) {
    return (
      <section className="bg-background h-[100vh] relative">
        <Image src={Blob1} alt="blob1" width={250} height={100} className="absolute bottom-0 left-0 "/>
        {children}
        <Image src={Blob2} alt="blob2" width={100} height={100} className="absolute top-20 md:right-56 right-10"/>
        <Image src={Blob3} alt="blob3" width={100} height={100} className="absolute bottom-24 right-2 "/>
      </section>
    );
  }