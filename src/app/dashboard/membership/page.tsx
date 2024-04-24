import React from 'react'
import {
  Medal,
  Copy
} from "@phosphor-icons/react/dist/ssr";

const Membership = () => {
  return (
    <div className = "w-full p-8 flex flex-col gap-6">
      <div className = "w-full p-16 bg-pink-400/80 rounded-xl flex gap-2 shadow-lg md:justify-center md:items-center max-sm:flex-col">
        <h1 className = "text-4xl uppercase font-semibold text-slate-100 flex gap-6 items-center justify-center">
          <Medal size={38}/>
          Member Area
        </h1>
        <div className = "flex flex-col md:ml-auto text-slate-100 justify-center mt-6">
          <div className = "flex items-center w-full gap-4 md:min-w-[198px]">
            <span className = "text-2xl font-semibold w-[40%]">Bronze</span>
            <div className = "w-full bg-white p-1 rounded-lg">
              <div className = "w-1/2 p-1 bg-zinc-800 rounded-md"></div>
            </div>
          </div>
          <span className = "ml-auto font-light">50XP lagi ke <span className = "font-bold">Platinum</span></span>
        </div>
      </div>

      <div className = "flex md:flex-row flex-col gap-6 w-full">
        <div className = "flex flex-col gap-2 p-8 bg-zinc-800 rounded-xl text-slate-100 w-fit shadow-lg h-fit">
          <h1 className = "text-3xl font-semibold">Punya teman?</h1>
          <span className = "text-lg">Ajak temanmu bergabung dan dapatkan hadiah menarik!</span>

          <label className = "text-base text-slate-100/70 mt-4">Kode referalmu:</label>
          <div className = "px-4 py-3 border rounded-md border-border-slate-100 flex items-center">
            <span className = "text-lg">41231232190</span>
            <button className = "flex ml-auto gap-2 bg-pink-300 px-4 py-2 rounded-md font-bold uppercase text-slate-100"><Copy size={24}/> <span>Salin</span></button>
          </div>
        </div>

        <div className = "border border-slate-400/70 p-8 text-gray-700 w-full rounded-xl shadow-lg flex flex-col gap-6">
          <h1 className = "text-3xl font-semibold">Hadiah spesial buat kamu!</h1>

          <div className = "p-8 bg-green-300 rounded-lg text-gray-700 w-fit">
            <h2 className = "text-2xl font-semibold">Hairdyer</h2>
            <div className = "flex gap-2">
             <span className = "line-through opacity-75">Rp. 30.000</span>
             <span className = "font-semibold">Rp. 25.000</span>
            </div>
          </div>

          <div className = "p-8 bg-green-300 rounded-lg text-gray-700 w-fit">
            <h2 className = "text-2xl font-semibold">Hairdyer</h2>
            <div className = "flex gap-2">
             <span className = "line-through opacity-75">Rp. 30.000</span>
             <span className = "font-semibold">Rp. 25.000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Membership