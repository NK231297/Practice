let image = document.getElementById("imgelement");

let button = document.getElementById("btelement");

const imageProcess = ()=>{
    try{
        button.addEventListener( "click", async()=>{
            let response = await fetch("https://api.waifu.pics/sfw/neko")
        
            let data = await response.json()
        
            image.src = data.url
        } )
    }
        catch(error){
            console.log(error)
        }
    


}

imageProcess()