import React from "react";

const Navbar = () => {
    return (
        <div className="px-8 py-6 border-b border-slate-400/70 w-full flex flex-row text-lg fixed items-center h-24 bg-white z-[20]">
            <div className="font-semibold">Nama produk</div>

            <div className="ml-auto flex gap-6">
                <span>Lorem</span>
                <span>Ipsum</span>
                <span>Dolor</span>
            </div>
        </div>
    );
};

export default Navbar;
