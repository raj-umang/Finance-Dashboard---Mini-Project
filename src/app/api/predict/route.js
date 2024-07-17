// app/api/predict/route.js

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const stockSymbol = searchParams.get("stockSymbol");

  if (!stockSymbol) {
    return new Response(JSON.stringify({ error: "Stock symbol is required" }), {
      status: 400,
    });
  }

  try {
    const response = await fetch(
      `http://localhost:5000/predict?symbol=${stockSymbol}`
    );
    const data = await response.json();

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch predictions" }),
      { status: 500 }
    );
  }
}
