const myForm = document.getElementById("myForm");
const inpTask = document.getElementById("task");
const prioritySelect = document.getElementById("priority");
const tbody = document.getElementById("tbody");

let allTask = [];

myForm.addEventListener("submit", function (ele) {
  ele.preventDefault();
  let data = {
    input: inpTask.value,
    priority: prioritySelect.value,
  };
  allTask.push(data);

  tbody.innerHTML= "";

  allTask.map((ele) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    td1.innerText = ele.input;
    td2.innerText = ele.priority;
    tr.append(td1, td2);
    tbody.append(tr);
  });
});





