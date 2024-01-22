export const POST = async (req) => {
  const text = req.nextUrl.searchParams.get("text");

  console.log(text);

  try {
    const response = await fetch(
      "https://dd43-34-150-205-145.ngrok-free.app/run-script",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      }
    );

    const sendResponse = await response.json();
    return Response.json(sendResponse);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
