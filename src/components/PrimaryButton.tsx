"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
interface ItemProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
}

const PrimaryButton = ({ children, href, className }: ItemProps) => {
    return (
        <Link
            className={`w-fit text-lg mt-4 px-12 py-3 shadow-md rounded-full bg-zinc-800 text-white p-4 font-bold border border-slate-400/70 hover:border-green-400 transition duration-300 flex flex-row justify-center items-center gap-2 ${className}`}
            href={href ?? ""}
        >
            {children}
            <ArrowUpRight weight="bold" />
        </Link>
    );
};

export default PrimaryButton;
