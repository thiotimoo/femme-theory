import React from "react";
import PrimaryButton from "../PrimaryButton";
import {
    BatteryCharging,
    Drop,
    Sparkle,
    StarFour,
    Wind,
} from "@phosphor-icons/react/dist/ssr";

const LandingLayout = () => {
    return (
        <div className="w-full h-screen max-sm:h-max bg-pink-100/50 text-gray-700 overflow-x-hidden relative flex flex-col overflow-visible">
            <div className="hero-bg absolute w-full h-full hero-bg blur-sm z-[-2]"></div>
            <div className="absolute top-0 left-0 px-16 py-12 w-full flex text-lg">
                <span className="font-medium tracking-wide z-[10]">
                    Nama hair dryer
                </span>
                <nav className="ml-auto">
                    <ul className="flex gap-6">
                        <li>
                            <a>Lorem</a>
                        </li>

                        <li>
                            <a>Ipsum</a>
                        </li>

                        <li>
                            <a>Dolor</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex max-sm:flex-col flex-row-reverse h-full max-sm:mt-24 min-h-full items-center justify-center">
                <div className="w-full relative">
                    <div className="w-1/2 h-[calc(100%-12rem)] absolute max-sm:top-0 top-1/2 -translate-y-1/2 translate-x-1/2 right-0 flex flex-col gap-4 blur-[1px] brightness-[0.98] opacity-[0.75] z-[-1]">
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

                    <img
                        className="w-[400px] ml-auto my-auto mr-16 z-20"
                        src="https://pngimg.com/d/hair_dryer_PNG10.png"
                    />
                </div>
                <div className="ml-16 max-sm:ml-0 justify-center flex flex-col z-10 gap-4 max-sm:w-[calc(100%-8rem)] mb-16">
                    <h3 className="text-xl font-medium uppercase tracking-wide">
                        Bukan hair dryer biasa
                    </h3>
                    <h1 className="text-5xl font-semibold">
                        Femme Theory
                    </h1>
                    <span className="text-gray-700/90 text-lg">
                        Femme Theory merupakan merek dari perusahaan kami yang fokus produksinya adalah produk peralatan perawatan rambut. Produk yang kami jual dibuat dengan teknologi mutakhir dengan desain yang elegan, dan pastinya fungsional. Temukan pengalaman berbelanja terbaikmu di sini!
                    </span>
                    <PrimaryButton className="z-10" href="/dashboard">Pergi ke Dasbor</PrimaryButton>
                </div>
            </div>

            <div className="max-sm:hidden absolute w-[calc(100%-8rem)] left-1/2 -translate-x-1/2 bottom-8 rounded-xl border border-zinc-800/50 ps-16 pe-8 py-6 bg-zinc-800  text-slate-100 flex items-center max-sm:flex-col max-sm:p-8 max-sm:relative max-sm:translate-y-0">
                <div className="flex flex-row justify-center items-center gap-4">
                    <Sparkle size={24} weight="bold" />
                    <h3 className="text-2xl font-semibold uppercase justify-center items-center gap-4">
                        Fitur Unggulan
                    </h3>
                </div>

                <div className="flex flex-col ml-auto mr-4 gap-2 pr-4 justify-center items-center border-r border-slate-300 w-28">
                    <BatteryCharging size={36} />
                    <span className="text-xs font-medium uppercase">
                        Portable
                    </span>
                </div>

                <div className="flex flex-col gap-2 text-center mr-4 pr-4 border-r border-slate-300 justify-center items-center w-28">
                    <Drop size={36} />
                    <span className="text-xs font-medium uppercase">
                        Vitamin Tank
                    </span>
                </div>

                <div className="flex flex-col gap-2 text-center border-slate-300 justify-center items-center w-28">
                    <Wind size={36} />
                    <span className="text-xs font-medium uppercase">
                        Comfortable
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LandingLayout;
