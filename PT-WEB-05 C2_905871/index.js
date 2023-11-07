// fill in javascript code here

myForm = document.querySelector("form");


myForm.addEventListener("submit",function(e){

    e.preventDefault();

    
    let name = document.getElementById("name").value;
    let doctorId = document.getElementById("docID").value;
    let specialization = document.getElementById("dept").value;
    let exprience = document.getElementById("exp").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mbl").value;



    let role;
    if(exprience >5){
        role = "Senior"
    }
    else if (exprience >=2 && exprience <=5){
        role = "Junior"
    }
    else{
        role = "Trainee"
    }



    let tbody = document.querySelector("tbody");
    let row = document.createElement("tr");

    let data = [name,doctorId,specialization,exprience,email,mobile,role];


    data.forEach((ele)=>{
        let td = document.createElement("td");
        td.innerText = ele
        row.appendChild(td)
    })


     // Delete Function

     let deleteTd = document.createElement("td");
     let deleteBtn = document.createElement("button");
     deleteBtn.innerText = "Delete"
 
     deleteTd.addEventListener("click",function(){
         tbody.removeChild(row)
     })
 
 
     deleteTd.appendChild(deleteBtn);
     row.appendChild(deleteTd)


    tbody.appendChild(row)



})

