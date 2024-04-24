import React from "react";
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
import { Copy } from "@phosphor-icons/react/dist/ssr";
import currencyFormatter from "currency-formatter";
import { Separator } from "../ui/separator";
import {
    Star,
    UsersThree
} from "@phosphor-icons/react/dist/ssr";

interface ItemProps {
    children: React.ReactNode;
    item: any;
}
const PurchaseDialog = ({ children, item }: ItemProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="max-w-screen-lg lg:rounded-lg overflow-y-scroll h-svh md:h-auto">
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                </DialogHeader>
                <div className="flex md:flex-row flex-col">
                    <div
                        className=" min-h-72 p-6 flex justify-center items-center rounded-xl"
                        style={{ backgroundColor: item.bg_color }}
                    >
                        <img src={item.image_url} className="w-64" />
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
                                <h2 className="text-lg line-through opacity-50">
                                    {currencyFormatter.format(item.og_price, {
                                        code: "IDR",
                                    })}
                                </h2>
                            </div>
                        </div>
                        <Separator />

                        <div className = "flex gap-2 items-center">
                            <Star size={24} weight="fill" className="text-yellow-400"/>
                            <Star size={24} weight="fill" className="text-yellow-400"/>
                            <Star size={24} weight="fill" className="text-yellow-400"/>
                            <Star size={24} weight="fill" className="text-yellow-400"/>
                            <Star size={24} className="text-yellow-400"/>

                            <span className = "ml-2 opacity-70">4.0</span>

                            <UsersThree className = "opacity-70 ml-6" size={24}/>

                            <span className = "ml-2 opacity-70">125</span>
                        </div>

                        <span className="mb-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dolor cumque commodi soluta laboriosam id itaque assumenda! Facere odit repellat quidem! Eaque aliquam, labore molestiae non magnam in? Odit, sunt.</span>
                    
                        <div className = "flex ml-auto items-center gap-4">
                            <span className = "opacity-70 text-sm">Akan sampai pada 30 Januari 2024</span>
                            <button className = "bg-zinc-800 px-6 py-2 text-lg rounded-md text-slate-100">Checkout</button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PurchaseDialog;
