"use client";
import React from "react";
import { Medal, Copy } from "@phosphor-icons/react/dist/ssr";
import currencyFormatter from "currency-formatter";
import { Masonry } from "react-plock";

const specialItems = [
    {
        id: "001",
        name: "Makarizo Hair Serum",
        og_price: 50_000,
        price: 30_000,
        bg_color: "#E3E2FF",
        image_url:
            "https://hairenergy.co/wp-content/uploads/2023/04/Makarizo-VitaGlitz-SRE-8ml-Tube-Imagery-08072021-1.png",
    },
    {
        id: "001",
        name: "Makarizo Hair Serum",
        og_price: 50_000,
        price: 30_000,
        bg_color: "#E3E2FF",
        image_url:
            "https://hairenergy.co/wp-content/uploads/2023/04/Makarizo-VitaGlitz-SRE-8ml-Tube-Imagery-08072021-1.png",
    },
    {
        id: "001",
        name: "Makarizo Hair Serum",
        og_price: 50_000,
        price: 30_000,
        bg_color: "#E3E2FF",
        image_url:
            "https://hairenergy.co/wp-content/uploads/2023/04/Makarizo-VitaGlitz-SRE-8ml-Tube-Imagery-08072021-1.png",
    },
    {
        id: "001",
        name: "Makarizo Hair Serum",
        og_price: 50_000,
        price: 30_000,
        bg_color: "#E3E2FF",
        image_url:
            "https://hairenergy.co/wp-content/uploads/2023/04/Makarizo-VitaGlitz-SRE-8ml-Tube-Imagery-08072021-1.png",
    },
    {
        id: "001",
        name: "Makarizo Hair Serum",
        og_price: 50_000,
        price: 30_000,
        bg_color: "#E3E2FF",
        image_url:
            "https://hairenergy.co/wp-content/uploads/2023/04/Makarizo-VitaGlitz-SRE-8ml-Tube-Imagery-08072021-1.png",
    },
    {
        id: "001",
        name: "Makarizo Hair Serum",
        og_price: 50_000,
        price: 30_000,
        bg_color: "#E3E2FF",
        image_url:
            "https://hairenergy.co/wp-content/uploads/2023/04/Makarizo-VitaGlitz-SRE-8ml-Tube-Imagery-08072021-1.png",
    },
];

const Membership = () => {
    return (
        <div className="w-full p-8 flex flex-col gap-6">
            <div className="w-full p-16 bg-pink-400/80 rounded-xl flex gap-2 shadow-lg lg:justify-center lg:items-center max-lg:flex-col">
                <h1 className="text-4xl uppercase font-semibold text-slate-100 flex gap-6 items-center justify-center">
                    <Medal size={38} />
                    Member Area
                </h1>
                <div className="flex flex-col lg:ml-auto text-slate-100 justify-center mt-6">
                    <div className="flex items-center w-full gap-4 lg:min-w-[198px]">
                        <span className="text-2xl font-semibold w-[40%]">
                            Bronze
                        </span>
                        <div className="w-full bg-white p-1 rounded-lg">
                            <div className="w-1/2 p-1 bg-zinc-800 rounded-md"></div>
                        </div>
                    </div>
                    <span className="ml-auto font-light">
                        50XP lagi ke <span className="font-bold">Platinum</span>
                    </span>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col gap-6 w-full">
                <div
                    className="flex flex-col gap-2 p-8 bg-zinc-800 rounded-xl text-slate-100 shadow-lg h-fit w-full lg:w-fit"
                >
                    <h1 className="text-3xl font-semibold">Punya teman?</h1>
                    <span className="text-lg">
                        Ajak temanmu bergabung dan dapatkan hadiah menarik!
                    </span>

                    <label className="text-base text-slate-100/70 mt-4">
                        Kode referalmu:
                    </label>
                    <div className="px-4 py-3 border rounded-md border-border-slate-100 flex items-center">
                        <span className="text-lg">41231232190</span>
                        <button className="flex ml-auto gap-2 bg-pink-300 px-4 py-2 rounded-md font-bold uppercase text-slate-100">
                            <Copy size={24} /> <span>Salin</span>
                        </button>
                    </div>
                </div>

                <div className="border border-slate-400/70 p-8 text-gray-700 w-full rounded-xl shadow-lg flex flex-col gap-6">
                    <h1 className="text-3xl font-semibold">
                        Hadiah spesial buat kamu!
                    </h1>
                    <div className="flex-col flex">
                        <Masonry
                            items={specialItems}
                            config={{
                                columns: [1, 2, 2],
                                gap: [16, 16, 16],
                                media: [640, 768, 1024],
                            }}
                            render={(item, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        backgroundColor: item.bg_color,
                                    }}
                                    className="rounded-xl hover:border-zinc-800 border-transparent border-2 transition-all p-8"
                                >
                                    <img
                                        src={item.image_url}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                    <p className="text-xl font-bold">
                                        {item.name}
                                    </p>
                                    <p className="text-lg line-through opacity-40">
                                        {currencyFormatter.format(
                                            item.og_price,
                                            {
                                                code: "IDR",
                                            }
                                        )}
                                    </p>
                                    <p className="text-2xl">
                                        {currencyFormatter.format(item.price, {
                                            code: "IDR",
                                        })}
                                    </p>
                                </div>
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;
