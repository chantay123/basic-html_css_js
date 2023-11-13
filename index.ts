const studentform = document.getElementById("student-form");
const task = <HTMLInputElement>document.getElementById("Name");

const listtest = document.getElementById("list-test");

const submit = document.getElementById("submit");

let element: HTMLTableRowElement | null = null;

//Add
function taskadd() {
  if (element != null) {
    if (task.value === "") {
      alert("please fill in something!");
    } else {
      element.getElementsByTagName("td")[0].textContent = task.value;
      element = null;
      task.value = "";
    }
    return;
  }

  if (task.value === "") {
    alert("you must fill something!");
    console.log("success!");
  } else {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdAction = document.createElement("td");
    const btnDelete = document.createElement("button");
    const btnEdit = document.createElement("button");

    listtest?.appendChild(tr);
    tr.appendChild(tdName);
    tr.appendChild(tdAction);

    tdAction.appendChild(btnEdit);
    tdAction.appendChild(btnDelete);

    btnEdit.textContent = "Edit";
    btnDelete.textContent = "Delete";
    btnEdit.classList.add("btn", "btn-warning", "btn-sm", "edit");
    btnDelete.classList.add("btn", "btn-danger", "btn-sm", "delete");
    tdName.textContent = task.value;
    task.value = "";

    btnDelete.addEventListener("click", () => {
      listtest?.removeChild(tr);
    });

    btnEdit.addEventListener("click", edit);
    function edit() {
      element = tr;
      task.value = tdName.textContent ?? "";
      console.log(tdName.textContent);
    }
  }
}
