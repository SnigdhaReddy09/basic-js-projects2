let color=document.getElementById("input1")
function colorchange(z){
    if(z.key==="Enter"){
        document.body.style.backgroundColor=color.value
    }
}

let bRadius=document.getElementById("input2")
let image=document.querySelector("img")
function borderchange(x){
    if(x.key==="Enter"){
        image.style.borderRadius=bRadius.value+"px"
    }
}