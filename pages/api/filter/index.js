export default async (req, res) => {
    if(req.method === "POST") //As it is a post Method we nedd to Sepecify that.

    {
        const {category, state ,city, condition, price ,book}  = req.body;  // Destructuring the info got from the body
        
          const priceMax = price;
          const priceMin = 0;

        
          let categoryFinal = ""
          let categoryRaw = `'${category}'`

          if(category == null || category == 0 || category == "" || category == undefined){
              categoryRaw  = null
          }
          else{
              categoryRaw = `'${category}'`
          }

            if(categoryRaw == null)
            {
                categoryFinal = "%20"
            }
            else{
                
                categoryFinal = `and%20category%20eq%20${categoryRaw}`
            }
            

            let stateFinal = ""
            let stateRaw = `'${state}'`
  
            if(state == null || state == 0 || state == "" || state == undefined){
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
  
            if(city == null || city == 0 || city == "" || city == undefined){
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
  
            if(condition == null || condition == 0 || condition == "" || condition == undefined){
                conditionRaw  = null
            }
            else{
                conditionRaw = condition
            }
  
              if(conditionRaw == null)
              {
                  conditionFinal = "%20"
              }
              else{
                  
                  conditionFinal = `and%20condition%20gt%20${conditionRaw}`
              }

              let bookMain = ""
              if(book == undefined || book == "")
              {
                bookMain = ""
              }
              else{
                bookMain = `${book}~`
              }



          const res1 = await fetch(
            `https://bookleesearch.search.windows.net/indexes/cosmosdb-index/docs?api-version=2021-04-30-Preview&search=*${bookMain}&$count=true&category=*&facet=category&%24filter=price%20ge%20${priceMin}%20and%20price%20lt%20${priceMax}${categoryFinal}${stateFinal}${cityFinal}${conditionFinal}` ,
            {
              headers: {
                "Content-Type": "application/json",
                "queryType": "full",
                "api-key": process.env.FILTER_API_KEY,
              },
            }
          );
        
          const data = await res1.json();
          res.json(data);
    }

};
