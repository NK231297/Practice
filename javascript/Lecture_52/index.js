let loadscript = (src, callback)=>{
    let script = document.createElement("script")
    script.src = src
    
    script.onload = ()=>{
        console.log("script loaded with SRC: " + src)
        callback(null, src);
    }

    script.onerror = ()=>{
        console.log("script did not load")
        callback(new Error("SRC got some error"));
        
    }

    document.body.appendChild(script)

};

let goodmorning = (error, src)=>{
    if(error){
        console.log(error)
        return
    }
    alert("this alert is executed by callback function" + src)
}





loadscript("index_copy.js", goodmorning)

