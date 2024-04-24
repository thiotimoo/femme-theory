"use client";
import { Masonry } from "react-plock";
import React from "react";
import currencyFormatter from "currency-formatter";
import SearchShop from "@/components/Dashboard/Shop/SearchShop";
import PurchaseDialog from "@/components/Dialogs/PurchaseDialog";
import {
    Basket
} from "@phosphor-icons/react/dist/ssr";
import Head from 'next/head'

const items = [
    {
        id: "001",
        name: "Femme Fit Hairdryer",
        model: "/models/glb/hairdryer.glb",
        description: "Femme Vit merupakan produk pertama dari Femme Theory yang merupakan hairdryer 2 in 1 yang multifungsi. Produk ini tidak hanya dapat mengeringkan rambut, tapi juga dapat menyimpan hair vitamin di dalam tube, sehingga bisa disemprotkan. Hanya dengan mengaktifkan mode spray di sela mengeringkan rambut, Anda sudah menata rambut sekaligus menjaga kesehatan rambut Anda!",
        price: 671_800,
        bg_color: "#F0F0E0",
        image_url: "https://pngimg.com/d/hair_dryer_PNG10.png",
        variantColors: [
            { color: "#ffffff" },
            { color: "#f66d9b" },
            { color: "#4299e1" },
            { color: "#38c172" },
            { color: "#1a202c" },
        ]
    },
    {
        id: "001",
        name: "Hair Care Product Dummy",
        og_price:65_000,
        price: 50_000,
        bg_color: "#F1F1F1",
        image_url:
            "https://static.vecteezy.com/system/resources/previews/008/520/741/non_2x/shampoo-bottle-mockup-file-png.png",
    },
    {
        id: "001",
        name: "Hair Care Product Dummy 2",
        price: 30_000,
        bg_color: "#E3E2FF",
        image_url:
            "https://media.discordapp.net/attachments/1231949327400960032/1232709978188546190/conditioner-bottle-JemWGA8-600-removebg-preview.png?ex=662a7221&is=662920a1&hm=c2b014399fd60221619998f89c503ed3aadbaac28e9bc3b011085b46f9ebae5b&=&format=webp&quality=lossless&width=421&height=421",
    },
    {
        id: "001",
        name: "Hair Care Product Dummy 3",
        price: 200_000,
        bg_color: "#F0F0E0",
        image_url: "https://cdn.discordapp.com/attachments/1231949327400960032/1232710310402719844/shampoobottle-removebg-preview.png?ex=662a7270&is=662920f0&hm=6c471ef462f5b1b1aa7972e4af72c3b699599a1a4ba6397f389dbdd6ff21a0f0&",
    }
];
const ShopPage = () => {
    return (
        <div className="p-8 gap-4 flex flex-col">            
            <div className="w-full p-16 bg-pink-400/80 rounded-xl flex gap-6 shadow-lg flex-col">
                <h1 className="text-4xl uppercase font-semibold text-slate-100 flex gap-6">
                    <Basket size={38} />
                    Shop
                </h1>

                <SearchShop />
            </div>
            <Masonry
                items={items}
                config={{
                    columns: [1, 2, 3],
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
                            <p className="text-xl font-bold">{item.name}</p>
                            {item.og_price && item.og_price > 0 && (
                                <p className="text-lg line-through opacity-40">
                                    {currencyFormatter.format(item.og_price, {
                                        code: "IDR",
                                    })}
                                </p>
                            )}
                            <p className="text-2xl">
                                {currencyFormatter.format(item.price, {
                                    code: "IDR",
                                })}
                            </p>
                        </div>
                    </PurchaseDialog>
                )}
            />
        </div>
    );
};

export default ShopPage;
