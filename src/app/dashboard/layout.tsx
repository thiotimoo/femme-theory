"use client";
import React from "react";
import {
    House,
    Medal,
    Basket,
    SealPercent,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ItemNavigationProps {
    children: React.ReactNode;
    href: string;
}
function ItemNavigation({ children, href }: ItemNavigationProps) {
    const pathname = usePathname();
    const _style_class =
        pathname == href ? "bg-zinc-800 text-white" : "text-gray-700 max-sm:text-slate-100";
    return (
        <Link
            className={`transition-all px-6 py-3.5 max-sm:p-3 rounded-lg flex gap-3 ${_style_class}`}
            href={href}
        >
            {children}
        </Link>
    );
}
export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full flex flex-col overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-400/70 w-full flex flex-row text-lg fixed items-center h-24">
                <div className="font-semibold">Nama produk</div>

                <div className="ml-auto flex gap-6">
                    <span>Lorem</span>
                    <span>Ipsum</span>
                    <span>Dolor</span>
                </div>
            </div>

            <div className="max-h-screen pt-24 w-full flex flex-1  items-stretch">
                <div className="w-1/4 border-r border-slate-400/70 p-8 flex flex-col gap-6 max-sm:fixed max-sm:w-[calc(100%-4rem)] max-sm:bottom-8  max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:bg-pink-300 max-sm:rounded-xl max-sm:shadow-lg max-sm:p-4">
                    <div className="flex w-full border border-slate-400/70 rounded-xl p-6 gap-4 max-sm:hidden">
                        <img
                            src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"
                            className="w-16 h-16 rounded-full"
                            alt="Profile Picture"
                        />

                        <div className="flex flex-col justify-center gap-0.5">
                            <span className="text-sm text-gray-700/70">
                                Hey,{" "}
                            </span>
                            <span className="font-medium text-lg">
                                Lorem Ipsum
                            </span>
                            <span></span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 font-semibold text-lg max-sm:flex-row max-sm:gap-2 max-sm:items-center max-sm:justify-center">
                        <ItemNavigation href="/dashboard">
                            <House size={24} />
                            <span className = "max-sm:hidden">Home</span>
                        </ItemNavigation>
                        <ItemNavigation href="/dashboard/membership">
                            <Medal size={24} />
                            <span className = "max-sm:hidden">Member Area</span>
                        </ItemNavigation>
                        <ItemNavigation href="/dashboard/shop">
                            <Basket size={24} />
                            <span className = "max-sm:hidden">Shop</span>

                            <span className="bg-pink-300 px-4 py-1.5 uppercase text-xs ml-auto rounded-md text-slate-100 max-sm:hidden">
                                Promo{" "}
                            </span>
                        </ItemNavigation>
                    </div>
                </div>
                <div className="w-3/4 max-sm:w-full overflow-y-scroll pb-24">{children}</div>
            </div>
        </div>
    );
}
