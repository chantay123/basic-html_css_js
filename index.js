var studentform = document.getElementById("student-form");
var task = document.getElementById("Name");
var listtest = document.getElementById("list-test");
var submit = document.getElementById("submit");
var element = null;
//Add
function taskadd() {
    if (element != null) {
        if (task.value === "") {
            alert("please fill in something!");
        }
        else {
            element.getElementsByTagName("td")[0].textContent = task.value;
            element = null;
            task.value = "";
        }
        return;
    }
    if (task.value === "") {
        alert("you must fill something!");
        console.log("success!");
    }
    else {
        var tr_1 = document.createElement("tr");
        var tdName_1 = document.createElement("td");
        var tdAction = document.createElement("td");
        var btnDelete = document.createElement("button");
        var btnEdit = document.createElement("button");
        listtest === null || listtest === void 0 ? void 0 : listtest.appendChild(tr_1);
        tr_1.appendChild(tdName_1);
        tr_1.appendChild(tdAction);
        tdAction.appendChild(btnEdit);
        tdAction.appendChild(btnDelete);
        btnEdit.textContent = "Edit";
        btnDelete.textContent = "Delete";
        btnEdit.classList.add("btn", "btn-warning", "btn-sm", "edit");
        btnDelete.classList.add("btn", "btn-danger", "btn-sm", "delete");
        tdName_1.textContent = task.value;
        task.value = "";
        btnDelete.addEventListener("click", function () {
            listtest === null || listtest === void 0 ? void 0 : listtest.removeChild(tr_1);
        });
        btnEdit.addEventListener("click", edit);
        function edit() {
            var _a;
            element = tr_1;
            task.value = (_a = tdName_1.textContent) !== null && _a !== void 0 ? _a : "";
            console.log(tdName_1.textContent);
        }
    }
}
