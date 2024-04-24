"use client";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import { motion } from "framer-motion";
import {
    BatteryCharging,
    Drop,
    Sparkle,
    StarFour,
    TestTube,
    Timer,
    Wind,
} from "@phosphor-icons/react/dist/ssr";

import Navbar from "../Landing/Navbar";

const LandingLayout = () => {
    return (
        <div className="w-full h-svh max-md:h-max bg-pink-100/50 text-gray-700 overflow-x-hidden relative flex flex-col">
            <div className="hero-bg absolute w-full h-full hero-bg blur-sm z-[-2]"></div>

            <Navbar />

            <div className="flex max-md:flex-col flex-row-reverse h-full max-md:mt-32 min-h-full items-center justify-center ">
                <div
                    className="w-full relative flex  max-md:flex-col flex-row-reverse items-center"
                >
                    <div className="w-1/2 h-[calc(100%-12rem)] absolute max-md:top-0 top-1/2 -translate-y-1/2 translate-x-1/2 right-0 flex flex-col gap-4 blur-[1px] brightness-[0.98] opacity-[0.75] z-[-1] ">
                        <div className="flex gap-4">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh34W43HVKP6glQbGAYArDHVIaHvr_K4I0wtnZ9QAMeg&s"
                                className="w-fit h-[164px] rounded-xl shadow-lg relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-pink-100 after:z-10"
                            />
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdNEN8T8DudH7h9IDcfZLGvLU9lrmQ1ZC-HPZ7cQ4WQ&s"
                                className="w-fit h-[164px] rounded-xl shadow-lg relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-pink-100 after:z-10"
                            />
                        </div>
                        <div className="flex -translate-x-[12rem] gap-4">
                            <img
                                src="https://profashionhair.com/cdn/shop/articles/blow_dry_curly_hair.jpg?v=1600744047"
                                className="w-fit h-[164px] rounded-xl shadow-lg relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-pink-100 after:z-10"
                            />
                            <img
                                src="https://c8.alamy.com/comp/HGPFDF/happy-man-in-a-bathrobe-drying-his-hair-with-a-hairdryer-isolated-HGPFDF.jpg"
                                className="w-fit h-[164px] rounded-xl shadow-lg relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-pink-100 after:z-10"
                            />
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh34W43HVKP6glQbGAYArDHVIaHvr_K4I0wtnZ9QAMeg&s"
                                className="w-fit h-[164px] rounded-xl shadow-lg relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-pink-100 after:z-10"
                            />
                        </div>
                    </div>

                    <motion.img
                        initial={{ x: 250, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ stiffness: 100, type: "spring" }}
                        className="min-w-[400px] max-md:min-w-0 max-md:w-[calc(100%-8rem)] max-md:ml-8 lg:ml-auto my-auto lg:mr-16 z-20 max-md:mx-auto "
                        src="https://pngimg.com/d/hair_dryer_PNG10.png"
                    />
                </div>
                <motion.div
                initial={{ x:-250,opacity: 0 }}
                whileInView={{ x:0, opacity: 1 }}
                transition={{ damping: 10, type: "spring"}} className="ml-16 max-md:ml-0 justify-center flex flex-col z-10 gap-4 max-md:w-[calc(100%-8rem)] mb-16 ">
                    <h3 className="text-xl font-medium uppercase tracking-wide">
                        Bukan hair dryer biasa
                    </h3>
                    <h1 className="text-5xl font-semibold">Femme Theory</h1>
                    <span className="text-gray-700/90 text-lg lg:max-w-[70%]">
                        Femme Theory merupakan merek dari perusahaan kami yang
                        fokus produksinya adalah produk peralatan perawatan
                        rambut. Produk yang kami jual dibuat dengan teknologi
                        mutakhir dengan desain yang elegan, dan pastinya
                        fungsional. Temukan pengalaman berbelanja terbaikmu di
                        sini!
                    </span>
                    <PrimaryButton className="z-10" href="#product">
                        Lihat produk
                    </PrimaryButton>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ damping: 10, stiffness: 100 }}
                className="hidden lg:flex absolute w-[calc(100%-8rem)] left-1/2 -translate-x-1/2 bottom-8 rounded-xl border border-zinc-800/50 ps-16 pe-8 py-6 bg-zinc-800  text-slate-100 items-center max-md:flex-col max-md:p-8 max-md:relative max-md:translate-y-0"
            >
                <div className="flex flex-row justify-center items-center gap-4">
                    <Sparkle size={24} weight="bold" />
                    <h3 className="text-2xl font-semibold uppercase justify-center items-center gap-4">
                        Fitur Unggulan
                    </h3>
                </div>

                <div className="flex flex-col ml-auto mr-4 gap-2 pr-4 justify-center items-center border-r border-slate-400/70 w-28">
                    <TestTube size={36} />
                    <span className="text-xs font-medium uppercase">Tube</span>
                </div>

                <div className="flex flex-col gap-2 text-center mr-4 pr-4 border-r border-slate-400/70 justify-center items-center w-28">
                    <Wind size={36} />
                    <span className="text-xs font-medium uppercase">
                        Spray-mode
                    </span>
                </div>
                <div className="flex flex-col gap-2 text-center mr-4 pr-4 border-r border-slate-400/70 justify-center items-center w-28">
                    <Drop size={36} />
                    <span className="text-xs font-medium uppercase">
                        Multifungsi
                    </span>
                </div>

                <div className="flex flex-col gap-2 text-center border-slate-400/70 justify-center items-center w-28">
                    <Timer size={36} />
                    <span className="text-xs font-medium uppercase">
                        Efisien
                    </span>
                </div>
            </motion.div>
        </div>
    );
};

export default LandingLayout;
