
import react from 'react';

const makeReq = async ({endpoint, data=null, method="GET", requireAuth=true, getAccessTokenSilently=null}) => {
  
    let options = {
      method:method,
      headers:{
        "Accept": "application/json",
        "Content-Type":"application/json",
        
      },
    }
      if(requireAuth){
    
        const accessTkn = await getAccessTokenSilently()
       options.headers =  {...options.headers, ...{"Authorization":`Bearer ${accessTkn}`}}
      }
      if(data){
        options['body'] = JSON.stringify(data)
      }
      const url = `${process.env?.REACT_APP_BACKEND}${endpoint}`
      console.log("URLLL", url)
      const response = await fetch(url, options)
      console.log("response", response)
      return response
    }


export default makeReq;