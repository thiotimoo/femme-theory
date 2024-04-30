import ThreeScene from "@/components/ThreeScene";
import React from "react";

const ThreePage = () => {
    return (
        <div className="w-full h-screen bg-black" id="3d-container">
            <ThreeScene parent="3d-container" color="#FFFFFF" />
        </div>
    );
};

export default ThreePage;
