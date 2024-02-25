export const GET = async (res) => {
  const { term, location } = req.query;

  try {
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_YELP_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from Yelp API");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
