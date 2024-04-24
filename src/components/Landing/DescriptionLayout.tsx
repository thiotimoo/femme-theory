import {
    BatteryCharging,
    Drop,
    SealQuestion,
    Sparkle,
    StarFour,
    Wind,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";

interface FeatureItemsProps {
    children: React.ReactNode;
    header: React.ReactNode;
    icon: React.ReactNode;
    reverse?: boolean;
}
const FeatureItems = ({
    children,
    icon,
    reverse,
    header,
}: FeatureItemsProps) => {
    const _alignment_class = reverse
        ? "md:text-end flex-col md:flex-row-reverse"
        : "text-start flex-col md:flex-row";
    return (
        <div
            className={`flex gap-8 max-w-screen-md w-full  ${_alignment_class}`}
        >
            <div className="flex flex-row gap-4 items-center">
                <div className="flex flex-col rounded-2xl bg-pink-300 h-16 md:h-48 aspect-square text-zinc-800 md:w-auto w-max ">
                    {icon}
                </div>
                <div className="block md:hidden">{header}</div>
            </div>
            <div className="flex flex-col flex-1 justify-center gap-2 max-w-screen-sm max-sm:w-full ">
                <div className="hidden md:block">{header}</div>

                {children}
            </div>
        </div>
    );
};
const FiturUnggulanSection = () => {
    return (
        <>
            <h2 className="text-4xl font-bold flex flex-row gap-4 items-center">
                <StarFour className="text-orange-400" weight="fill" size={48} />
                Fitur Unggulan
            </h2>
            <FeatureItems
                icon={
                    <BatteryCharging
                        size={48}
                        className="w-full h-full md:p-12 p-2"
                    />
                }
                header={
                    <h2 className="font-semibold md:text-3xl text-2xl">
                        Portability
                    </h2>
                }
            >
                <p className="text-lg">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facere itaque natus corrupti laudantium facilis magnam
                    sapiente molestiae delectus in dolores quidem, corporis
                    numquam veniam tempore nostrum porro tenetur repudiandae
                    placeat!
                </p>
            </FeatureItems>
            <FeatureItems
                reverse
                icon={<Drop size={48} className="w-full h-full md:p-12  p-2" />}
                header={
                    <h2 className="font-semibold md:text-3xl text-2xl">
                        Vitamin Tank
                    </h2>
                }
            >
                <p className="text-lg">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facere itaque natus corrupti laudantium facilis magnam
                    sapiente molestiae delectus in dolores quidem, corporis
                    numquam veniam tempore nostrum porro tenetur repudiandae
                    placeat!
                </p>
            </FeatureItems>
            <FeatureItems
                icon={<Wind size={48} className="w-full h-full md:p-12  p-2" />}
                header={
                    <h2 className="font-semibold md:text-3xl text-2xl">
                        Comfortability
                    </h2>
                }
            >
                <p className="text-lg">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facere itaque natus corrupti laudantium facilis magnam
                    sapiente molestiae delectus in dolores quidem, corporis
                    numquam veniam tempore nostrum porro tenetur repudiandae
                    placeat!
                </p>
            </FeatureItems>
        </>
    );
};

const AboutProductSection = () => {
    return (
        <>
            <h2 className="text-4xl font-bold flex flex-row gap-4 items-center">
                <SealQuestion
                    className="text-purple-400"
                    weight="fill"
                    size={48}
                />
                Apa itu Femme Vit?
            </h2>
            <div className="flex md:flex-row flex-col justify-center items-center ">
                <div className="pt-10 pl-20">
                    <div className="bg-orange-200 rounded-2xl">
                        <div className="overflow-visible -mt-10 -ml-20 relative">
                            <img
                                src="https://pngimg.com/d/hair_dryer_PNG10.png"
                                className="z-20 h-80"
                            />
                        </div>
                    </div>
                </div>
                <p className="w-full flex-1  max-w-screen-sm p-6 text-xl">Femme Vit merupakan produk pertama dari Femme Theory yang merupakan hairdryer 2 in 1 yang multifungsi. Produk ini tidak hanya dapat mengeringkan rambut, tapi juga dapat menyimpan hair vitamin di dalam tube, sehingga bisa disemprotkan. Hanya dengan mengaktifkan mode spray di sela mengeringkan rambut, Anda sudah menata rambut sekaligus menjaga kesehatan rambut Anda!</p>
            </div>
        </>
    );
};

const DescriptionLayout = () => {
    return (
        <div className="bg-zinc-800 text-white px-16 py-12 flex flex-col items-center gap-8 w-full">
            <AboutProductSection />
            <FiturUnggulanSection />
        </div>
    );
};

export default DescriptionLayout;
