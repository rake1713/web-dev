"use strict";

const input = document.getElementById("taskk");
const addBtn = document.getElementById("add-btn");
const tasksList = document.getElementById("all-tasks");

addBtn.onclick = () => {
    const text = input.value.trim();
    if (!text) return;
    const li = document.createElement("li");
    li.innerHTML = `
    <input type="checkbox" class="check">
    <label>${text}</label>
    <button class="del-btn">
        <i class="fa fa-trash-o"></i> 
    </button>
    `;
    
    tasksList.append(li);
    input.value = "";
};

tasksList.onclick = (event) => {
    const target = event.target;
    const li = target.closest("li");

    if (target.className === "del-btn") {
        li.remove();
    } else if (target.className === "check") {
        li.classList.toggle("complete", target.checked);
    }
};