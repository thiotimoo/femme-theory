"use client"
import {
    ArrowRight,
    Envelope,
    FacebookLogo,
    InstagramLogo,
    MapPin,
    PhoneCall,
} from "@phosphor-icons/react/dist/ssr";
import {motion} from "framer-motion";
import Link from "next/link";
import React from "react";

const FooterLayout = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ stiffness: 100 }}
            className="flex flex-col px-8 py-12 text-white bg-zinc-900">
            <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                    <span className="text-6xl">
                        be confident,
                        <br />
                        with us!
                    </span>
                </div>
                <div className="flex-1 gap-2 flex flex-col justify-center">
                    <p className="text-xl flex-row flex items-center gap-2">
                        <Envelope weight="bold" />
                        testing123@sma-yosuka.sch.id
                    </p>
                    <p className="text-xl flex-row flex items-center gap-2">
                        <PhoneCall weight="bold" />
                        +62 085X-XXXX-XXXX
                    </p>
                    <p className="text-xl flex-row flex items-center gap-2">
                        <MapPin weight="bold" />
                        Jakarta, Indonesia
                    </p>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-2">
                    
                    <p className="text-xl">Mau tips perawatan rambut?</p>
                    <Link className="underline font-bold text-pink-400 flex-row flex items-center gap-2" href="/newsletteer">
                            Ikuti Newsletter Kami
                            <ArrowRight weight="bold"/>
                        </Link>
                    <p className="text-xl font-bold">Follow Us</p>
                    <div className="flex flex-row gap-2">
                        <Link href="instagram.com">
                            <InstagramLogo size={24} weight="fill" />
                        </Link>
                        <Link href="facebook.com">
                            <FacebookLogo size={24} weight="fill" />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default FooterLayout;
