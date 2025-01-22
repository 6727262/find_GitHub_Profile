 let btn=document.querySelector("#btn")
 let input=document.querySelector("input")

let a2=document.querySelector(".a2")
let  fb=async(user)=>{
    let data=await window.fetch(`https://api.github.com/users/${user}`)
let finalData=await data.json()

let {id,name,avatar_url,company}=finalData

a2.innerHTML=`<img src=${avatar_url} alt="img-1"/>
<h1>${name}</h1>
<h1>${id}</h1>
<h1>${company}</h1>
`
}
btn.addEventListener("click",()=>{
    let user=input.value
    fb(user)
})