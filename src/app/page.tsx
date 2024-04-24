import DescriptionLayout from "@/components/Landing/DescriptionLayout";
import FooterLayout from "@/components/Landing/FooterLayout";
import LandingLayout from "@/components/Landing/LandingLayout";
import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col overflow-x-hidden ">
            <LandingLayout/>
            <DescriptionLayout />
            <FooterLayout/>
        </div>
    );
}
