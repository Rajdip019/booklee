export default async (req, res) => {
    if(req.method === "POST") //As it is a post Method we nedd to Sepecify that.

    {
        const {state ,city, condition}  = req.body;  // Destructuring the info got from the body      

            let stateFinal = ""
            let stateRaw = `'${state}'`
  
            if(state == null || state == 0){
                stateRaw  = null
            }
            else{
                stateRaw = `'${state}'`
            }
  
              if(stateRaw == null)
              {
                  stateFinal = "%20"
              }
              else{
                  
                  stateFinal = `and%20state%20eq%20${stateRaw}`
              }

              
            let cityFinal = ""
            let cityRaw = `'${city}'`
  
            if(city == null || city == 0){
                cityRaw  = null
            }
            else{
                cityRaw = `'${city}'`
            }
  
              if(cityRaw == null)
              {
                  cityFinal = "%20"
              }
              else{
                  
                  cityFinal = `and%20city%20eq%20${cityRaw}`
              }

                    
            let conditionFinal = 0
            let conditionRaw = condition
  
            if(condition == null || condition == 0){
                conditionRaw  = null
            }
            else{
                conditionRaw = condition
            }
  
              if(conditionRaw == null)
              {
                  conditionFinal = "condition%20gt%200"
              }
              else{
                  
                  conditionFinal = `condition%20gt%20${conditionRaw}`
              }




          const res1 = await fetch(
            `https://booklee-donate.search.windows.net/indexes/cosmosdb-index/docs?api-version=2020-06-30-Preview&search=*&$count=true&%24filter=${conditionFinal}${stateFinal}${cityFinal}`,
            {
              headers: {
                "Content-Type": "application/json",
                "api-key": process.env.FILTER_API_KEY_D,
              },
            }
          );
        
          const data = await res1.json();
          res.json(data);
    }

};
