import React from 'react'
import {
  UsersThree,
  SealQuestion,
  Gear,
  ArrowFatUp,
  ChatCircleDots,
  CheckFat
} from "@phosphor-icons/react/dist/ssr";
import { Metadata } from 'next'

const Forum = () => {
  return (
    <div className = "w-full md:p-8 p-4 flex flex-col gap-6 text-gray-700">
      <div className = "w-full md:p-16 p-4 bg-pink-400/80 rounded-xl flex gap-2 shadow-lg items-center">
        <h1 className = "text-4xl uppercase font-semibold text-slate-100 flex gap-6  p-6 md:p-0">
          <UsersThree size={38}/>
          Forum
        </h1>
      </div>

      <div className = "flex md:flex-row flex-col-reverse gap-6 w-full h-full items-stretch">
        <div className = "w-full h-full flex flex-col gap-4 md:border-r border-slate-400/70 md:pr-6">
            <input className = "border border-slate-400/70 px-8 py-3 rounded-lg" placeholder="Cari sesuatu..."/>
            <div className = "border border-slate-400/70 p-8 rounded-lg flex flex-col gap-4">
                <div className = "w-full flex items-center max-sm:flex-col">
                    <div className = "flex flex-col">
                        <div className = "flex text-pink-400 font-semibold text-sm items-center gap-2 mb-2">
                            <Gear size={24}/>
                            <span className = "">Teknis Produk</span>
                        </div>
                        <h2 className='text-xl font-medium'>Hair dryer saya konslet. Kira2 gimana ya?</h2>
                        <span className = "text-sm text-gray-700/70">25 April 2024</span>
                    </div>
                    
                    <div className='flex gap-3 items-center md:ml-auto max-sm:mr-auto max-sm:mt-4'>
                        <img
                            src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"
                            className="w-8 h-8 rounded-full"
                            alt="Profile Picture"
                        />
                        <div className = "flex flex-col">
                            <span className = "font-medium">Lindawati</span>
                            <span className = "text-sm">Member - Silver</span>
                        </div>
                    </div>
                </div>

                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae omnis dolore cupiditate quos ut voluptatem maxime eligendi architecto, impedit quis distinctio corporis ipsam sunt maiores fugiat, provident optio aperiam ad.</span>
            
                <div className = "flex items-center ml-auto gap-2">
                    <ArrowFatUp size={28}/>
                    <span className= 'text-gray-700/70'>5</span>
                    <ChatCircleDots size={28} className='ml-4'/>
                    <span className= 'text-gray-700/70'>2</span>
                </div>
            </div>

            <div className = "border border-slate-400/70 p-8 rounded-lg flex flex-col gap-4">
                <div className = "w-full flex items-center max-sm:flex-col">
                    <div className = "flex flex-col">
                        <div className = "flex text-pink-400 font-semibold text-sm items-center gap-2 mb-2">
                            <SealQuestion size={24}/>
                            <span>Umum</span>
                            <span> - Terjawab</span>
                        </div>
                        <h2 className='text-xl font-medium'>Apakah produknya bisa dikirim ke ngawi?</h2>
                        <span className = "text-sm text-gray-700/70">25 April 2024</span>
                    </div>
                    
                    <div className='flex gap-3 items-center md:ml-auto max-sm:mr-auto max-sm:mt-4'>
                        <img
                            src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"
                            className="w-8 h-8 rounded-full"
                            alt="Profile Picture"
                        />
                        <div className = "flex flex-col">
                            <span className = "font-medium">Ambatron</span>
                            <span className = "text-sm">Member - Bronze</span>
                        </div>
                    </div>
                </div>

                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae omnis dolore cupiditate quos ut voluptatem maxime eligendi architecto, impedit quis distinctio corporis ipsam sunt maiores fugiat, provident optio aperiam ad.</span>
            
                <div className = "text-pink-400 flex md:items-center gap-2 max-sm:flex-col">
                    <CheckFat size={28}/>
                    <span className = "text-lg mr-2">Jawaban terverifikasi</span>
                    <span className = "text-sm text-slate-700 opaccity-70">Dari Aguswati, Support Team</span>
                </div>

                <span className = "ml-4 border-l-2 border-pink-400 px-4">Bisa, kami support ke seluruh dunia kak.</span>

                <div className = "flex items-center ml-auto gap-2">
                    <ArrowFatUp size={28}/>
                    <span className= 'text-gray-700/70'>5</span>
                    <ChatCircleDots size={28} className='ml-4'/>
                    <span className= 'text-gray-700/70'>2</span>
                </div>
            </div>
        </div>
 
        <div className = "md:w-[30%] h-full flex flex-col gap-4">
            {/* samain tinggi kyk search bar */}
            <span className='font-semibold h-full text-2xl h-[49.33px] flex items-center'>Kategori</span>
            
            <div className = "w-full flex flex-col gap-4 text-lg font-semibold">
                <div className = "px-4 py-3 flex gap-4 w-full">
                    <SealQuestion size={28} />
                    <span>Umum</span>
                </div>

                <div className = "px-4 py-3 flex gap-4 w-full">
                    <UsersThree size={28} />
                    <span>Membership</span>
                </div>

                <div className = "px-4 py-3 flex gap-4 w-full">
                    <Gear size={28} />
                    <span>Teknis Produk</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Forum