import React from "react";
import { User, Key, Eyes, Eye } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
    return (
        // <div className="flex flex-col justify-center items-center w-full h-full bg-pink-100 py-12">
        //     <img className = "w-16 h-16 object-contain" src = "../assets/branding/brand-icon.png"/>
        //     <div className = "absolute w-1/3 h-auto left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-xl border border-zinc-800/50 p-8 bg-zinc-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 text-slate-100 flex flex-col gap-6 items-center shadow-lg">
        //         <div>
        //             <h1 className = "text-4xl font-semibold">Welcome back!</h1>
        //             <p className = "text-base">We glad to see you again.</p>
        //         </div>
        //         <div>
        //             <label className = "font-medium text-sm" for="input-email">Email Address</label>
        //             <input id = "input-email" className = "border-gray-400 border rounded-lg w-full px-4 py-3 text-lg" placeholder = "joe@gmail.com"/>
        //         </div>
        //         <div>
        //             <label className="font-medium text-sm" for="input-email">Password</label>

        //             <input id="input-email" className="border-gray-400 border rounded-lg w-full px-4 py-3 text-lg" placeholder="xxxxxxx"/>
        //         </div>
        //         <a href="/forgot-password" className="underline font-bold">Forgot password?</a>
        //         <button className="bg-zinc-800 rounded-lg text-white p-4 font-bold text-lg">Log In</button>
        //         <span className="text-center">Belum punya akun?
        //             <a href="#sign-up" className="font-bold text-pink-800 underline">Daftar Disini</a>
        //         </span>
        //     </div>
        // </div>

        <div className="absolute w-full h-full bg-pink-100 text-lg">
            <div className="absolute right-0 top-0 h-full w-full bg-pink-100"></div>

            <div className = "absolute w-1/2 h-full left-0 top-0 p-8 flex items-center">
                <img
                    className="absolute w-[512px] right-24"
                    src="https://pngimg.com/d/hair_dryer_PNG10.png"
                />

                <div className = "flex w-full gap-4 relative mt-auto overflow-x-auto items-center">
                    <div className = "p-8 rounded-xl bg-zinc-800 text-white shadow-lg flex flex-col gap-2 w-full">
                        <span className = "font-semibold text-lg">Lorem ipsum</span>

                        <span className = "text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex voluptas.</span>
                    </div>

                    <div className = "flex flex-col gap-2 h-full items-center justify-center">
                        <div className = "w-4 h-4 bg-zinc-800 border rounded-full"></div>
                        <div className = "w-4 h-4 bg-white border border-slate-500 rounded-full"></div>
                        <div className = "w-4 h-4 bg-white border border-slate-500 rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="absolute w-1/2 h-full right-0 top-0 flex flex-col gap-6 justify-center">
                <div className="bg-white shadow-lg p-16 text-gray-700 flex flex-col gap-8 z-10 w-full h-[calc(100%-4rem)] rounded-l-2xl border border-slate-300/50">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-bold">Welcome back!</h1>
                        <div>
                            <span className="text-lg">
                                We glad to see you again.
                            </span>
                            <span className = "text-lg text-pink-400 font-semibold ml-2">New here?</span>
                        </div>
                    </div>

                    <div className = "flex flex-col gap-6 my-auto">
                        <div className="flex flex-col gap-4">
                            <label>Username: </label>
                            <div className="px-4 flex py-3 rounded-lg text-gray-700 bg-white border border-slate-300 gap-4 text-base">
                                <User size={24} className="text-slate-400" />
                                <div className="border-r-2 border-slate-300"></div>
                                <input
                                    placeholder="Lorem ipsum"
                                    className="outline-none w-full"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className = "flex w-full items-center">
                                <label>Password: </label>
                                <label className = "text-sm ml-auto">Forgot yours?</label>
                            </div>
                            <div className="px-4 flex py-3 rounded-lg text-gray-700 bg-white border border-slate-300 gap-4 text-base">
                                <Key size={24} className="text-slate-400" />
                                <div className="border-r-2 border-slate-300"></div>
                                <input
                                    placeholder="Lorem ipsum"
                                    className="outline-none w-full"
                                    type="password"
                                />
                                <Eye size={24} className="text-gray-700" />
                            </div>
                        </div>

                        <Button className = "text-lg py-4">Login</Button>

                        <div className = "w-full flex relative border border-slate-300 my-6">
                            <span className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-white uppercase">or</span>
                        </div>

                        <div className = "flex gap-6 w-full">
                            <div className = "px-6 py-3 w-full border border-slate-300 rounded-md shadow text-center">
                                <span>Login with Google</span>
                            </div>

                            <div className = "px-6 py-3 w-full border border-slate-300 rounded-md shadow text-center">
                                <span>Login with Facebook</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
