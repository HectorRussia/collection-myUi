import { IconChevronRight } from "@tabler/icons-react";

const NetFlix = () => {
    const topic = `src/assets/NetFlix/topic.png`;
    return (
        <>
            <div className="relative h-screen">
                <div className="absolute inset-0 bg-[url(src/assets/NetFlix/Header.jpg)] bg-cover opacity-35"></div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
                        <div className="relative z-10 flex flex-col md:flex-row lg:flex-row xl:flew-row justify-around items-center ">
                            <img src={topic} alt="topic" className="w-[15rem] lg:w-[25rem] p-5 mt-3 " />
                            <div className="flex gap-4 mx-10 mt-3 ">
                                <select className="p-2 px-5 rounded-lg bg-black bg-opacity-55 border-2 text-white font-bold">
                                    <option className="bg-white text-black">English</option>
                                    <option className="bg-white text-black">Japanese</option>
                                    <option className="bg-white text-black">Italian</option>
                                </select>
                                <button className=" bg-red-600 p-2 px-10 rounded-lg text-white font-bold transform transition-transform duration-200 active:scale-95">Sign In</button>
                            </div>
                    </div>
                </div>
               <div className="relative py-[2rem] md:[3rem] lg:md:[3rem] xl:md:[3rem] flex flex-col items-center">
                    <h1 className=" text-[2rem] lg:text-[4rem] font-bold text-white text-wrap ml-10">Unlimited movies, TV shows, and more</h1>
                        <p className="mt-3 sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] text-white ">Starts at THB 99. Cancel anytime.</p>
                        <p className="mt-4 sm:text-[1.5rem] md:text-[1.4rem] lg:text-[2rem]  text-white text-wrap ml-10">Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flew-row gap-2 mt-6 items-center ">
                        <input type="email" placeholder="Email address" className="rounded-lg opacity-75 border-2 border-white p-4 text-white font-bold lg:h-[4rem]" />
                        <button className=" flex items-center gap-4 bg-red-600 px-8 mt-2 md:mt-[0rem] h-[3rem] sm:h-[4rem] md:h-[4rem] lg:h-[4rem] rounded-lg text-white font-bold transform transition-transform duration-200 active:scale-95">Get Started <IconChevronRight stroke={2} /></button>
                    </div>
               </div>
            </div>
        </>
  )
}

export default NetFlix