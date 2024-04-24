"use client";
import React from "react";
import { Medal, Copy } from "@phosphor-icons/react/dist/ssr";
import currencyFormatter from "currency-formatter";
import { Masonry } from "react-plock";
import PurchaseDialog from "@/components/Dialogs/PurchaseDialog";

const specialItems = [
    {
        id: "001",
        name: "Hair Care Product Dummy",
        og_price:65_000,
        price: 30_000,
        bg_color: "#F1F1F1",
        image_url:
            "https://static.vecteezy.com/system/resources/previews/008/520/741/non_2x/shampoo-bottle-mockup-file-png.png",
    },
    {
        id: "001",
        name: "Hair Care Product Dummy 2",
        og_price:50_000,
        price: 30_000,
        bg_color: "#E3E2FF",
        image_url:
            "https://media.discordapp.net/attachments/1231949327400960032/1232709978188546190/conditioner-bottle-JemWGA8-600-removebg-preview.png?ex=662a7221&is=662920a1&hm=c2b014399fd60221619998f89c503ed3aadbaac28e9bc3b011085b46f9ebae5b&=&format=webp&quality=lossless&width=421&height=421",
    },
    {
        id: "001",
        name: "Hair Care Product Dummy 3",
        og_price:250_000,
        price: 200_000,
        bg_color: "#F0F0E0",
        image_url: "https://cdn.discordapp.com/attachments/1231949327400960032/1232710310402719844/shampoobottle-removebg-preview.png?ex=662a7270&is=662920f0&hm=6c471ef462f5b1b1aa7972e4af72c3b699599a1a4ba6397f389dbdd6ff21a0f0&",
    }
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
                            Gold
                        </span>
                        <div className="w-full bg-white p-1 rounded-lg">
                            <div className="w-[80%] p-1 bg-zinc-800 rounded-md"></div>
                        </div>
                    </div>
                    <span className="ml-auto font-light">
                        50XP lagi ke <span className="font-bold">Platinum</span>
                    </span>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col gap-6 w-full">
                <div className="flex flex-col gap-2 p-8 bg-zinc-800 rounded-xl text-slate-100 shadow-lg h-fit w-full lg:w-fit">
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
                                <PurchaseDialog item={item} key={idx}>
                                    <div
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
                                        {item.og_price && item.og_price > 0 && (
                                            <p className="text-lg line-through opacity-40">
                                                {currencyFormatter.format(
                                                    item.og_price,
                                                    {
                                                        code: "IDR",
                                                    }
                                                )}
                                            </p>
                                        )}
                                        <p className="text-2xl">
                                            {currencyFormatter.format(
                                                item.price,
                                                {
                                                    code: "IDR",
                                                }
                                            )}
                                        </p>
                                    </div>
                                </PurchaseDialog>
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;
