import axios from "axios";

export const GET = async (req, res) => {
  console.log("API route handler called");
  const searchTerm = req.query.searchTerm;
  const location = req.query.location;

  try {
    const response = await fetch(
      `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_YELP_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from Yelp API");
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
