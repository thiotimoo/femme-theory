"use client";
import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Check, Copy } from "@phosphor-icons/react/dist/ssr";
import currencyFormatter from "currency-formatter";
import { Separator } from "../ui/separator";
import { Star, UsersThree } from "@phosphor-icons/react/dist/ssr";
import ThreeScene from "../ThreeScene";
interface ItemProps {
    children: React.ReactNode;
    item: any;
}

interface ItemVariantColorProps {
    variantColor: string;
    selected: boolean;
    handleColor: any;
}
const ItemVariantColors = ({
    variantColor,
    selected,
    handleColor,
}: ItemVariantColorProps) => {
    const _selected = selected ? "border-black" : "border-transparent";
    return (
        <button
            className={
                "border-2 bg-zinc-100 w-12 h-12 rounded-lg p-1.5 " + _selected
            }
            onClick={() => handleColor(variantColor)}
        >
            <div
                style={{ backgroundColor: variantColor }}
                className="w-full h-full rounded-md flex items-center justify-center text-white"
            ></div>
        </button>
    );
};

const PurchaseDialogContent = ({ item }: any) => {
    let defaultColor = "";
    if (item.variantColors) {
        defaultColor = item.variantColors[0].color;
    }
    const [variantColor, setVariantColor] = useState(defaultColor);
    const handleColor = (color: string) => {
        setVariantColor(color);
    };
    return (
        <div className="flex md:flex-row flex-col mt-12 md:mt-0">
            <div
                className="flex justify-center items-center rounded-xl min-h-72"
                style={{ backgroundColor: item.bg_color }}
            >
                {item.model ? (
                    <div
                        className="bg-zinc-900 rounded-2xl lg:w-[448px] lg:h-[448px] w-full h-full md:flex-1 relative flex flex-auto overflow-clip items-center justify-center"
                        id="3d-container"
                    >
                        <ThreeScene
                            customModel={item.model}
                            color={variantColor}
                            parent="3d-container"
                        />
                    </div>
                ) : (
                    <img src={item.image_url} className="w-64" />
                )}
            </div>
            <div className="md:py-0 md:px-6 py-6 w-full flex flex-col gap-4">
                <div className="flex flex-col">
                    <h2 className="font-bold text-2xl">{item.name}</h2>

                    <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-2xl">
                            {currencyFormatter.format(item.price, {
                                code: "IDR",
                            })}
                        </h2>
                        {item.og_price && (
                            <h2 className="text-lg line-through opacity-50">
                                {currencyFormatter.format(item.og_price, {
                                    code: "IDR",
                                })}
                            </h2>
                        )}
                    </div>
                </div>
                <Separator />
                <div className="flex gap-2 items-center">
                    <Star size={24} weight="fill" className="text-yellow-400" />
                    <Star size={24} weight="fill" className="text-yellow-400" />
                    <Star size={24} weight="fill" className="text-yellow-400" />
                    <Star size={24} weight="fill" className="text-yellow-400" />
                    <Star size={24} className="text-yellow-400" />

                    <span className="ml-2 opacity-70">4.0</span>

                    <UsersThree className="opacity-70 ml-6" size={24} />

                    <span className="ml-2 opacity-70">125</span>
                </div>
                <span>{item.description || "Ini adalah produk demo."}</span>
                {item.model ? (
                    <div className="flex flex-col mb-auto gap-2">
                        <h2 className="font-medium text-xl">Varian warna</h2>
                        <div className="flex gap-3">
                            {item.variantColors.map((item: any, i: number) => {
                                return (
                                    <ItemVariantColors
                                        key={i}
                                        variantColor={item.color}
                                        selected={item.color === variantColor}
                                        handleColor={handleColor}
                                    />
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
                <div className="ml-auto  items-end flex h-full">
                    <div className="flex items-center gap-4 ">
                        <span className="opacity-70 text-sm">
                            Akan sampai pada 30 Januari 2024
                        </span>
                        <button className="bg-zinc-800 px-6 py-2 text-lg rounded-md text-slate-100">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
const PurchaseDialog = ({ children, item }: any) => {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="max-w-screen-lg lg:rounded-lg overflow-y-auto h-svh md:h-auto">
                <PurchaseDialogContent item={item} />
            </DialogContent>
        </Dialog>
    );
};

export default PurchaseDialog;
