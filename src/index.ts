import fs from "fs"
const url = process.argv[2];

if(!url){
    console.error("Usage: HTTPal <url>")
    process.exit(1)
}

async function fetchData(url: string){
    try {
        const response = await fetch(url)
        if(!response.ok){
            console.error(response.status + " " + response.statusText)
            const body = await response.text()
            console.error("Response body: ", body)
            process.exit(1)
        }  
        const contentType = response.headers.get('content-type')
        if(contentType && contentType.includes('application/json')){
            return response.json()
        }
        
        return response.text()
    } catch (error) {
        if(error instanceof Error){
            console.error('Request error: ', error.message);
        }
        else{
            console.error('Unknown error occured', error);
        }
    }
}

(async function(){
    const data = await fetchData(url)
    console.log(JSON.stringify(data))
})()