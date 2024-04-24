"use client";
import React from "react";
import {
    House,
    Medal,
    Basket,
    UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Landing/Navbar";
import PageTransitionEffect from "@/components/PageTransitionEffect";

interface ItemNavigationProps {
    children: React.ReactNode;
    href: string;
}
function ItemNavigation({ children, href }: ItemNavigationProps) {
    const pathname = usePathname();
    const _style_class =
        pathname == href
            ? "bg-zinc-800 text-white"
            : "text-gray-700 max-lg:text-slate-100";
    return (
        <Link
            className={`transition-all px-6 py-3.5 max-lg:p-3 rounded-lg flex gap-3 items-center ${_style_class}`}
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
            <Navbar />
            <div className="max-h-svh pt-24 w-full flex flex-1 items-stretch">
                <div className="lg:w-1/4 border-r border-slate-400/70 p-8 flex flex-col gap-6 max-lg:fixed max-lg:w-[calc(100%-4rem)] max-lg:bottom-8  max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:bg-pink-300 max-lg:rounded-xl max-lg:shadow-lg max-lg:p-4 z-50">
                    <div className="flex w-full border border-slate-400/70 rounded-xl p-6 gap-4 max-lg:hidden">
                        <img
                            src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"
                            className="w-16 h-16 rounded-full"
                            alt="Profile Picture"
                        />

                        <Link className="flex flex-col justify-center gap-0.5" href={"/login"}>
                            <span className="text-sm text-gray-700/70">
                                Hey,{" "}
                            </span>
                            <span className="font-medium text-lg">
                                Anonymous Guest
                            </span>
                            <span className="text-gray-700/70">Tap here to login</span>
                        </Link>
                    </div>

                    <div className="flex flex-col gap-4 font-semibold text-lg max-lg:flex-row max-lg:gap-2 max-lg:items-center max-lg:justify-center z-20">
                        <ItemNavigation href="/dashboard">
                            <House size={24} />
                            <span className="max-lg:hidden">Home</span>
                        </ItemNavigation>
                        <ItemNavigation href="/dashboard/membership">
                            <Medal size={24} />
                            <span className="max-lg:hidden">Member Area</span>
                        </ItemNavigation>
                        <ItemNavigation href="/dashboard/shop">
                            <Basket size={24} />
                            <span className="max-lg:hidden">Shop</span>

                            <span className="bg-pink-300 px-4 py-1.5 uppercase text-xs ml-auto rounded-md text-slate-100 max-xl:hidden">
                                Promo{" "}
                            </span>
                        </ItemNavigation>
                        <ItemNavigation href="/dashboard/forum">
                            <UsersThree size={24} />
                            <span className="max-lg:hidden">Forum</span>
                        </ItemNavigation>
                    </div>
                </div>
                <div
                    className={"overflow-y-scroll w-3/4 max-lg:pb-48 max-lg:w-full"}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
