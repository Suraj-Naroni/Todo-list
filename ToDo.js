function addToList() {
  let task = document.getElementById("task").value;
  let list = document.getElementById("list");

  let myList = document.createElement("div");
  let li = document.createElement("li");
  li.innerHTML = task;
  let delBtn = document.createElement("i");
  delBtn.classList.add("bi");
  delBtn.classList.add("bi-trash3-fill");

  myList.appendChild(li);
  myList.appendChild(delBtn);

  list.appendChild(myList);
}

let list = document.getElementById("list");
list.addEventListener("click", deleteList);

function deleteList(e) {
  let element = e.target;
  if (element.classList.contains("bi-trash3-fill")) {
    element.parentElement.remove();
  }
}
