"use client";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react"

export default function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    async function login(e: FormEvent) {
        e.preventDefault();

        setIsLoading(true);

        const response = await fetch("/api/signin", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                email, 
                password
            })
        });
        
        if (response.ok){
            redirect("/dashboard");
        }

        setIsLoading(false);

        const body = await response.json();
        setError(body.error);
        console.log(body)
        
    }

    return (
        <>
            <div className="flex justify-center h-screen bg-[#2f2f2f]">
                <form onSubmit={login} className="flex flex-col min-w-[600px] max-w-[600px] gap-2 m-auto bg-indigo-300 p-5 rounded-md">
                    <input className="p-4 rounded-md bg-white text-black" type="email" onChange={(e) => { setEmail(e.target.value); setError("")}} />
                    <input className="p-4 rounded-md bg-white text-black" type="password" onChange={(e) => { setPassword(e.target.value); setError(""); }}/>
                    <input type="submit" disabled={isLoading} aria-disabled={isLoading} value={!isLoading ? "Login" : "Logging in..."} className={"rounded-md bg-blue-600 p-4 hover:bg-blue-500 active:bg-blue-300 duration-300 disabled:opacity-75 disabled:hover:bg-blue-600"}/>
                    <p className="text-red-600 text-center font-bold">{error}</p>
                </form>
            </div>
        </>
    )
}