"use client";
import {
    BatteryCharging,
    Drop,
    SealQuestion,
    Sparkle,
    StarFour,
    Wind,
    PaperPlaneRight,
    TestTube,
    Timer,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";
import ThreeScene from "../ThreeScene";
import { motion } from "framer-motion";

interface FeatureItemsProps {
    children: React.ReactNode;
    header: React.ReactNode;
    icon: React.ReactNode;
    reverse?: boolean;
}
const FeatureItems = ({
    children,
    icon,
    reverse,
    header,
}: FeatureItemsProps) => {
    const _alignment_class = reverse
        ? "md:text-end flex-col md:flex-row-reverse"
        : "text-start flex-col md:flex-row";
    const _offset_anim = reverse ? 250 : -250;
    return (
        <motion.div
            initial={{ x: _offset_anim, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ stiffness: 100, type: "spring" }}
            className={`flex gap-8 max-w-screen-md w-full  ${_alignment_class}`}
        >
            <div className="flex flex-row gap-4 items-center">
                <div className="flex flex-col rounded-2xl bg-pink-300 h-16 md:h-48 aspect-square text-zinc-800 md:w-auto w-max ">
                    {icon}
                </div>
                <div className="block md:hidden">{header}</div>
            </div>
            <div className="flex flex-col flex-1 justify-center gap-2 max-w-screen-sm max-sm:w-full ">
                <div className="hidden md:block">{header}</div>

                {children}
            </div>
        </motion.div>
    );
};
const FiturUnggulanSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ stiffness: 100 }}
            className="bg-white text-gray-700 px-8 py-12 flex flex-col items-center justify-center gap-8 w-full min-h-svh"
        >
            <h2 className="text-4xl font-bold flex flex-row gap-4 items-center">
                <StarFour className="text-orange-400" weight="fill" size={48} />
                Fitur Unggulan
            </h2>
            <FeatureItems
                icon={
                    <TestTube size={48} className="w-full h-full md:p-12 p-2" />
                }
                header={
                    <h2 className="font-semibold md:text-3xl text-2xl">Tube</h2>
                }
            >
                <p className="text-xl">
                    Terdapat tube untuk diisi produk rambut yang dapat diisi
                    dengan zat cair seperti hair vitamin.
                </p>
            </FeatureItems>
            <FeatureItems
                reverse
                icon={<Wind size={48} className="w-full h-full md:p-12  p-2" />}
                header={
                    <h2 className="font-semibold md:text-3xl text-2xl">
                        Spray-mode
                    </h2>
                }
            >
                <p className="text-xl">
                    Diaktifkan ketika ingin menyemprotkan hair-care product.
                </p>
            </FeatureItems>
            <FeatureItems
                icon={
                    <Timer size={48} className="w-full h-full md:p-12  p-2" />
                }
                header={
                    <h2 className="font-semibold md:text-3xl text-2xl">
                        Multifungsi
                    </h2>
                }
            >
                <p className="text-xl">
                    Selain berfungsi untuk mengeringkan, dapat juga
                    menyemprotkan zat cair.
                </p>
            </FeatureItems>
            <FeatureItems
                reverse
                icon={<Drop size={48} className="w-full h-full md:p-12  p-2" />}
                header={
                    <h2 className="font-semibold md:text-3xl text-2xl">
                        Efisien
                    </h2>
                }
            >
                <p className="text-xl">
                    Mengeringkan rambut sekaligus menjaga kesehatannya dalam
                    waktu yang lebih singkat dengan Femme Vit!
                </p>
            </FeatureItems>
        </motion.div>
    );
};

const AboutProductSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ stiffness: 100 }}
            className="bg-zinc-800 text-white px-8 py-8 flex flex-col items-center gap-8 w-full max-sm:h-max lg:h-svh"
        >
            <h2 className="text-4xl font-bold flex flex-row gap-4 items-center" id = "product">
                <SealQuestion
                    className="text-purple-400"
                    weight="fill"
                    size={48}
                />
                Apa itu Femme Vit?
            </h2>
            <div className="flex md:flex-row flex-col justify-center items-center w-full max-w-screen-md gap-6 h-full">
            <motion.div
                    initial={{ x: -250, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{  type: "tween" }}
                    className="bg-zinc-900 rounded-2xl w-full h-96 md:flex-1 flex-auto overflow-clip"
                    id="3d-container"
                >
                    <ThreeScene parent="3d-container" color="#FFFFFF" />
                    {/* <img
                                src="https://pngimg.com/d/hair_dryer_PNG10.png"
                                className="z-20 h-80"
                            /> */}
                </motion.div>
                <motion.div
                    initial={{ x: 250, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{  type: "tween" }}
                    className="w-full flex-1  max-w-screen-sm text-xl gap-6 flex flex-col"
                >
                    <p>
                        <b>Femme Vit</b> merupakan produk pertama dari Femme
                        Theory yang merupakan hairdryer 2 in 1 yang multifungsi.
                        Produk ini tidak hanya dapat mengeringkan rambut, tapi
                        juga dapat menyimpan hair vitamin di dalam tube,
                        sehingga bisa disemprotkan.
                    </p>
                    <p className="text-zinc-800 bg-green-400 p-4 rounded-2xl">
                        Hanya dengan mengaktifkan mode spray di sela
                        mengeringkan rambut, Anda sudah menata rambut sekaligus
                        menjaga kesehatan rambut Anda!
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Newsletter = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ stiffness: 100 }}
            className="bg-zinc-800 text-white px-8 py-12 flex flex-col items-center justify-center gap-8 w-full"
        >
            <h1 className="text-4xl font-semibold">
                Mau dapat info terbaru dari kami?
            </h1>
            <span className="text-xl">
                Join newsletter untuk mendapatkan info-info dan promo menarik
                dari kami!
            </span>

            <div className="py-2 pr-2 border border-slate-400/70 w-1/2 max-md:w-full text-gray-700 rounded-lg text-lg bg-white flex">
                <input
                    className="w-full outline-none px-6"
                    placeholder="me@mail.com"
                    type="email"
                />
                <button className="bg-pink-300 text-slate-100 rounded-md px-6 py-2 flex gap-3 items-center">
                    <PaperPlaneRight size={24} /> Gabung
                </button>
            </div>

            <span className="opacity-70">Kami gak akan spam kok! Janji.</span>
        </motion.div>
    );
};

const DescriptionLayout = () => {
    return (
        <div>
            <AboutProductSection />
            <FiturUnggulanSection />
            <Newsletter />
        </div>
    );
};

export default DescriptionLayout;
