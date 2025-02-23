import SocialLink from "../ui/SocialLink"

export default function Footer(){
    return (
        <footer className="flex flex-col gap-12 mt-16">
            <div className="flex justify-center">
                <a href="#home" className="flex flex-col-reverse items-center gap-1 text-white hover:text-zinc-400 duration-300 box-border">Launch to the top <p className="animate-floating-animation">🚀</p></a>
            </div>
            <div className="text-white px-4 md:text-center">
                <h2 className="text-xl font-semibold">hitallo-<span className="text-[#00f500]">dev</span></h2> 
                <p className="text-sm text-zinc-400 mt-1">Driven by curiosity, fueled by code, focused on impact.</p>
            </div>
            <SocialLink/>
            <div className="bg-zinc-900 p-3">
                <p className="text-white text-center text-sm">© 2025 hitalloazevedo. All rights reserved.</p>
            </div>
        </footer>
    )
}