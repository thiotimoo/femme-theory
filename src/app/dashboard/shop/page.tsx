"use client";
import { Masonry } from "react-plock";
import React from "react";
import currencyFormatter from "currency-formatter";
import SearchShop from "@/components/Dashboard/Shop/SearchShop";
const items = [
    {
        id: "001",
        name: "Makarizo Hair Serum",
        price: 30_000,
        bg_color: "#E3E2FF",
        image_url:
            "https://hairenergy.co/wp-content/uploads/2023/04/Makarizo-VitaGlitz-SRE-8ml-Tube-Imagery-08072021-1.png",
    },
    {
        id: "001",
        name: "Hairdryer",
        price: 200_000,
        bg_color: "#F0F0E0",
        image_url: "https://pngimg.com/d/hair_dryer_PNG10.png",
    },
    {
        id: "001",
        name: "Makarizo Hair Serum",
        price: 30_000,
        bg_color: "#F1F1F1",
    },
    {
        id: "001",
        name: "Makarizo Hair Serum",
        price: 30_000,
        bg_color: "#E3E2FF",
    },
    {
        id: "001",
        name: "Makarizo Hair Serum",
        price: 30_000,
        bg_color: "#E3E2FF",
        image_url:
            "https://hairenergy.co/wp-content/uploads/2023/04/Makarizo-VitaGlitz-SRE-8ml-Tube-Imagery-08072021-1.png",
    },
    {
        id: "001",
        name: "Hairdryer",
        price: 200_000,
        bg_color: "#F0F0E0",
        image_url: "https://pngimg.com/d/hair_dryer_PNG10.png",
    },
    {
        id: "001",
        name: "Makarizo Hair Serum",
        price: 30_000,
        bg_color: "#F1F1F1",
    },
    {
        id: "001",
        name: "Makarizo Hair Serum",
        price: 30_000,
        bg_color: "#E3E2FF",
    },
    {
        id: "001",
        name: "Makarizo Hair Serum",
        price: 30_000,
        bg_color: "#E3E2FF",
        image_url:
            "https://hairenergy.co/wp-content/uploads/2023/04/Makarizo-VitaGlitz-SRE-8ml-Tube-Imagery-08072021-1.png",
    },
    {
        id: "001",
        name: "Hairdryer",
        price: 200_000,
        bg_color: "#F0F0E0",
        image_url: "https://pngimg.com/d/hair_dryer_PNG10.png",
    },
    {
        id: "001",
        name: "Makarizo Hair Serum",
        price: 30_000,
        bg_color: "#F1F1F1",
    },
    {
        id: "001",
        name: "Makarizo Hair Serum",
        price: 30_000,
        bg_color: "#E3E2FF",
    },
];
const ShopPage = () => {
    return (
        <div className="p-8 gap-4 flex flex-col max-sm:overflow-y-scroll">
            <h1 className="text-4xl font-bold">Shop</h1>
            <SearchShop/>
            <Masonry
                items={items}
                config={{
                    columns: [1, 2, 3],
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
                        <p className="text-2xl font-bold">{item.name}</p>
                        <p className="text-base">
                            {currencyFormatter.format(item.price, {
                                code: "IDR",
                            })}
                        </p>
                    </div>
                )}
            />
        </div>
    );
};

export default ShopPage;
