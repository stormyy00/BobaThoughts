// import axios from "axios";

export const GET = async (req, res) => {
  console.log("API route handler called");
  const searchTerm = req.query.searchTerm;
  const location = req.query.location;

  try {
    const response = await fetch(
      `https://proxy.cors.sh/https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}`,
      {
        headers: {
          Authorization:
            "Bearer oMxyNN8K_x1GTfigxjR0npSd3la7VETdEJYq6MqczLVfIx3fYPjkIJLp6qqaXjPjSrcA_R5tsAR5mTpiHX8DIgUbr7fetqGuNOD7F5RqVVwaUC3XFfmVEvUg2s3eZXYx",
          accept: "application/json",
          "x-requested-with": "xmlhttprequest",
          "Access-Control-Allow-Origin": "*",
          Origin: "localhost:3000",
          "x-cors-api-key": "temp_4407c675df9080e95c5e6bfd9e7089d8",
        },
      },
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
