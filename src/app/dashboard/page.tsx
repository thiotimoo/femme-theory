import {
  House
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  return (
    <div className = "w-full h-full p-8 flex flex-col gap-6">
      <div className = "w-full p-16 bg-pink-400/80 rounded-xl flex gap-2 shadow-lg items-center">
        <h1 className = "text-4xl uppercase font-semibold text-slate-100 flex gap-6">
          <House size={38}/>
          Home
        </h1>
      </div>

      <div className = "text-gray-700 flex flex-col gap-6 pb-8">
        <h2 className = "text-3xl font-medium">Lihat apa yang baru</h2>
      
        <div className = "w-full border border-slate-400/70 rounded-lg p-8 flex max-md:flex-col gap-6">
          <img src = "https://s2.bukalapak.com/bukalapak-kontenz-production/content_attachments/websites/3/94307/w-960/Happy_Shopping_artinya.jpg" className = "h-[256px] rounded-lg"/>

          <div className = "flex flex-col gap-2">
            <h3 className = "text-xl font-medium">Dapatkan bonus akhir tahun!</h3>
            <span className = "text-sm text-gray-700/70">24 April 2024</span>

            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia culpa eveniet dolor non, nobis tempora odio. Odit ducimus eveniet, ea labore architecto blanditiis cumque quos fugit laboriosam maxime laborum minus?</span>
          
            <Button className = "mt-auto ml-auto text-lg">Cek promo</Button>
          </div>
        </div>

        <div className = "w-full border border-slate-400/70 rounded-lg p-8 flex max-md:flex-col gap-6">
          <img src = "https://s2.bukalapak.com/bukalapak-kontenz-production/content_attachments/websites/3/94307/w-960/Happy_Shopping_artinya.jpg" className = "h-[256px] rounded-lg"/>

          <div className = "flex flex-col gap-2">
            <h3 className = "text-xl font-medium">Dapatkan bonus akhir tahun!</h3>
            <span className = "text-sm text-gray-700/70">24 April 2024</span>

            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia culpa eveniet dolor non, nobis tempora odio. Odit ducimus eveniet, ea labore architecto blanditiis cumque quos fugit laboriosam maxime laborum minus?</span>
          
            <Button className = "mt-auto ml-auto text-lg">Cek promo</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage