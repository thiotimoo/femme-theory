"use client";
import { List } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

interface ItemNavigationProps {
    children: React.ReactNode;
    href: string;
}

function ItemNavigation({ children, href }: ItemNavigationProps) {
    const pathname = usePathname();
    const _style_class =
        pathname == href ? "bg-zinc-800 text-white" : "text-gray-700";
    return (
        <Link
            className={`transition-all px-2 rounded-sm ${_style_class}`}
            href={href}
        >
            {children}
        </Link>
    );
}

const Navbar = () => {
    
    const router = useRouter();
    const pathname = usePathname();
    const [position, setPosition] = React.useState(pathname)
    const handlePosition = (newPos: string) => {
        router.push(newPos);
        setPosition(newPos);
    }

    const transparency = pathname === "/" ? "bg-transparent absolute border border-transparent px-12" : "bg-white border border-slate-400/70 fixed px-12";

    return (
        <div className={`w-full flex flex-row text-lg items-center h-24 z-50 ${transparency}`}>
            <Link href={"/"} className="flex flex-row items-end">
                <Image
                    src="/branding/logo.png"
                    width={100}
                    height={100}
                    className="h-8 w-8 object-contain"
                    alt="Femme Theory"
                />
                <span className="-ml-2.5 text-lg text-black">emme Theory</span>
            </Link>
            <div className="ml-auto flex gap-6 max-sm:hidden ">
                <ItemNavigation href="/dashboard">Dashboard</ItemNavigation>
                <ItemNavigation href="/dashboard/shop">Shop</ItemNavigation>
                <ItemNavigation href="/dashboard/forum">Forum</ItemNavigation>
                <ItemNavigation href="/login">Login</ItemNavigation>
            </div>
            <div className="ml-auto hidden gap-6 max-sm:flex">
                
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant={"outline"}>
                    <List weight="bold" size={24} className="w-6 h-6" />
                </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuRadioGroup
                            value={position}
                            onValueChange={handlePosition}
                        >
                            <DropdownMenuRadioItem value="/dashboard">
                                Dashboard
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="/dashboard/shop">
                                Shop
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="/dashboard/forum">
                                Forum
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="/login">
                                Login
                            </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default Navbar;
