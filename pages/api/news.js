export default async (req, res) => {
    {
          const res1 = await fetch(
            `https://api.bing.microsoft.com/v7.0/search?q=ngo near agarpara`,
            {
              headers: {
                "Ocp-Apim-Subscription-Key": process.env.SEARCH_API_KEY,
              },
            }
          );
          const data = await res1.json();
          res.json(data);
    }

};
