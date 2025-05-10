import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const baseUrl = "https://projects-repository.onrender.com";

    const { email, password } = await request.json();

    const backendResponse = await fetch(`${baseUrl}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    if (!backendResponse.ok) {
        const body = await backendResponse.json();
        console.log(body);
        return NextResponse.json({ error: body.message }, { status: backendResponse.status });
    }

    const token = String(backendResponse.headers.get("authorization")?.split(" ")[1]);

    const response = NextResponse.json({}, { status: 200 });
    response.cookies.set("token", token, { path: "/" });

    return response;
}
