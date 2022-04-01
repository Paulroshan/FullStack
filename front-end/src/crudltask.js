let final=new Array("ravi", "karthi","paul roshan","dhanush","gokul","indra","harish","tharun");

const lists=()=>{
    let collect="";
    collect+="<table><thread><tr><th>elements</th></tr></thead><tbody>"
    final.map((elem)=>{
        collect+="<tr><td>"+ elem +"</tr></td>"
    })
    collect+="</tbody></table>";
    document.getElementById("tap").innerHTML=collect;

}

const update=()=>{
    let ed=document.getElementById("data").value;
    const yet=prompt("enter the value :"+ final[ed], "")
    final[ed]=yet
    lists();
}



const create =()=>{
    let cr=document.getElementById("data").value;
    final.push(cr)
    alert("array created successfully")
    lists();
}

const erase=()=>{
   
let temp=prompt("tell us which position to be deleted")

 final=final.filter((value,index)=>
 {
   return value!==final[temp]
 })

}

