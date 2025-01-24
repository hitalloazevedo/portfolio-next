import sendIcon from '@/../../public/send-icon.svg'
import Image from "next/image";

export default function Contact(){
    return (
        <section>
            <header className="flex flex-col items-center pt-20 pb-10 text-white">
            <h1 className="text-3xl text-center font-semibold mb-5">Reach me out</h1>
            <p className="text-center w-10/12 tracking-wide">Let&#39;s connect! If you have some doubts, tips or suggestions, do not leave without write a message for me.</p>
            </header>
            <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col w-11/12 gap-1">
                <label className="text-white font-medium text-sm" htmlFor="name">Name</label>
                <input placeholder="Your name" className="border bg-transparent border-zinc-600 rounded-md p-2 text-sm text-white focus:outline-none focus:ring-1 focus:outline-offset-0 focus:ring-transparent focus:border-[#009900]" type="text" name="name"/>
            </div>
            <div className="flex flex-col w-11/12 gap-1">
                <label className="text-white font-medium text-sm" htmlFor="email">Email</label>
                <input placeholder="your@email.com" className="border bg-transparent border-zinc-600 rounded-md p-2 text-sm text-white focus:outline-none focus:ring-1 focus:outline-offset-0 focus:ring-transparent focus:border-[#009900]" type="text" name="email"/>
            </div>
            <div className="flex flex-col w-11/12 gap-1">
                <label className="text-white text-sm font-medium" htmlFor="message">Message</label>
                <textarea placeholder="Your message" rows={5} className="border bg-transparent border-zinc-600 rounded-md p-2 text-sm text-white focus:outline-none focus:ring-1 
                focus:ring-transparent focus:outline-offset-0 focus:border-[#009900]" name="" id=""></textarea>
            </div>
            <div className="w-11/12">
                <button className="flex justify-center bg-[#00f500] w-full rounded-md p-2"><Image className="w-[20px]" src={sendIcon} alt=""></Image></button>
            </div>

            </div>

            <hr className='m-auto w-11/12 mt-8'/>
      </section>
    )
}