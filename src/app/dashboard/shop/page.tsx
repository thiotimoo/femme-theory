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
            "https://media.discordapp.net/attachments/1234667423987269702/1234667490597015653/conditioner-bottle-JemWGA8-600-removebg-preview.png?ex=66319134&is=66303fb4&hm=864fa45d9c25bdd5dfb3bf0aa1721c30294c515dc44896cd456cb6bf056e3fe5&=&format=webp&quality=lossless&width=625&height=625",
    },
    {
        id: "001",
        name: "Hair Care Product Dummy 3",
        price: 200_000,
        bg_color: "#F0F0E0",
        image_url: "https://media.discordapp.net/attachments/1234667423987269702/1234667530774122496/shampoobottle-removebg-preview.png?ex=6631913e&is=66303fbe&hm=420fc6a2ec2955c1443f9ee27c06c1a0fe4d3cf182f4b0d1498abe4e7d83e4a4&=&format=webp&quality=lossless&width=291&height=437",
    }
];
const ShopPage = () => {
    return (
        <div className="md:p-8 p-4 gap-4 flex flex-col">            
            <div className="w-full md:p-16 p-4 bg-pink-400/80 rounded-xl flex gap-6 shadow-lg flex-col">
                <h1 className="text-4xl uppercase font-semibold text-slate-100 flex gap-6 p-6 md:p-0">
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
