export async function GET() {
    const backendUrl = "https://projects-repository.onrender.com/";
    try {
      const response = await fetch(backendUrl);
      if (response.ok) {
        return new Response(JSON.stringify({ message: "Backend pinged successfully!" }), { status: 200 });
      } else {
        return new Response(JSON.stringify({ message: "Failed to ping backend." }), { status: 500 });
      }
    } catch (error) {
      console.error("Error pinging backend:", error);
      return new Response(JSON.stringify({ message: "Error pinging backend." }), { status: 500 });
    }
  }