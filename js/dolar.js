


let dataBank = document.querySelector("#dataBank")
        const apiUrl = "usd";
        const proxyUrl = "https://bcra-proxy-cors.vercel.app";

        fetch(`${proxyUrl}/${apiUrl}`,{
            headers: {
                Authorization: "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDgyOTU5NzMsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJtYXVyb2phZHNAeWFob28uY29tLmFyIn0.SpzmdhwFJTSsqgS1OzdtrISdSUg0bLGa3AO7fDgCkOwvts0lK8_JQjqC7e5L-WT196s0LeiwZoZzwd2a1pY70g",
            },
        })
        .then((response) => response.json())
        
        .then((data) => {
            let i=0;
            console.log(data)
            const content = document.createElement("div")
            data.forEach((info) => {
                    
             content.innerHTML= `<h6>${info.d}  -  Dolar: $${info.v}</h6>`

             dataBank.append(content)                 
            });
            
           
        })      
        
             
    