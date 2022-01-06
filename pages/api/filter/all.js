export default async (req, res) => {
    {
          const res1 = await fetch(
            `https://bookleesearch.search.windows.net/indexes/cosmosdb-index/docs?api-version=2020-06-30-Preview&search=*`,
            {
              headers: {
                "Content-Type": "application/json",
                "api-key": process.env.FILTER_API_KEY,
              },
            }
          );
          const data = await res1.json();
          res.json(data);
    }

};
