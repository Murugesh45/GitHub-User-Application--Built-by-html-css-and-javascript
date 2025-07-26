const btn=document.getElementById("btn")
const input=document.getElementById("input")
const con=document.getElementById("con1")



async function api(){
    con.textContent=""
    const loading = document.createElement("h5");
    loading.textContent = "Fetching user data...";
    con.appendChild(loading);

    try{
    const user=input.value
    const value= await fetch(`https://api.github.com/users/${user}`)
     if (!value.ok) {
      throw new Error("User not found");
    }
     con.textContent=""
    const value1=await value.json()
   

   
    data1(value1)
    
    console.log(value1)
}catch(err){
        
        con.textContent=""
        const text=document.createElement("h5")
        text.textContent="User Not Found"
        con.appendChild(text)
        console.log("error")
        
    }
}
btn.addEventListener("click",api)

function data1(value1){
       var value=document.createElement("h1")
       value.textContent=value1.login
       con.appendChild(value)
        var value2=document.createElement("img")
       value2.src=value1.avatar_url
       con.appendChild(value2)
       var value3=document.createElement("p")
       value3.textContent=value1.bio || "Bio not available"
       con.appendChild(value3)
        var value4=document.createElement("li")
       value4.innerHTML= `<strong>public repositories</strong>: ${value1.public_repos}`
       con.appendChild(value4)
       var value4=document.createElement("li")
       value4.innerHTML= `<strong>created_at</strong>: ${value1.created_at}`
       con.appendChild(value4)
       var value4=document.createElement("li")
       value4.innerHTML= `<strong>updated_at</strong>: ${value1.updated_at}`
       con.appendChild(value4)
       var value4=document.createElement("li")
       value4.innerHTML= `<strong>Followers</strong>: ${value1.followers}`
       con.appendChild(value4)
       var value4=document.createElement("li")
       value4.innerHTML= `<strong>Following</strong>: ${value1.following}`
       con.appendChild(value4)
       var value5=document.createElement("a")
       value5.href= value1.html_url
       value5.innerHTML="<strong>Profile Details</strong>"
       con.appendChild(value5)

       
       

}
input.addEventListener("keypress",(e)=>{
      if(e.key==="Enter"){
        return api()
      }
})






    
   
