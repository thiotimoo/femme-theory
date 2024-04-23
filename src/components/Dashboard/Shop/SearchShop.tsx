import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const SearchShop = () => {
    return <div className="w-full bg-zinc-200 rounded-lg flex flex-row justify-center">
        <MagnifyingGlass size={24} weight="bold" className="m-4"/>
        <input placeholder="Cari sesuatu..." className="text-lg bg-transparent w-full rounded-md hover:outline-none active:outline-none outline-none"/>
    </div>;
};

export default SearchShop;
