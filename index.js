     var inputbox=document.querySelector(".inputone");

    var lst=document.querySelector(".lis")

function add(){
    if(inputbox.value===''){
        alert("enter something");
    }
    else{
        var l=document.createElement("li");
    l.innerHTML=inputbox.value+`<span>\u00d7</span>`
    lst.appendChild(l)

    inputbox.value="";
    saveData();
   
    }
}
lst.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data",lst.innerHTML)
}
function show(){
    lst.innerHTML=localStorage.getItem("data");
}
show()