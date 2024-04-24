import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const SearchShop = () => {
    return <div className="w-full rounded-lg flex flex-row justify-center items-center border border-slate-400/70 bg-white text-slate-700">
        <input placeholder="Cari sesuatu..." className="text-lg bg-transparent w-full rounded-md hover:outline-none active:outline-none outline-none px-4 py-2.5"/>
        <MagnifyingGlass size={24} weight="bold" className="mx-4"/>
    </div>;
};

export default SearchShop;
