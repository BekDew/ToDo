let elForm = document.querySelector(".form");
let elInput = document.querySelector(".text-input");

let elResultsWrapper = document.querySelector(".results-wrapper");

let todos = [];

// elForm.addEventListener("submit", function (evt) {
//     evt.preventDefault()
//     var newProduct = elInput.value

//     if (newProduct === "") {
//         alert("Please select a new product")
//     } else {
//         todos.push(newProduct)

//     }
//     elInput.value = null;
//     render(todos)

// });

// function render(todos) {
//     let result = "";
//     for (let i = 0; i < todos.length; i++) {
//         result += `
//         <div class='card-footer col-4 d-flex align-items-center offset-4 mt-2 ps-3 pe-3 pt-1 pb-1 rounded bg-white'>
//             ${todos[i]}
//             <div class="ms-auto">
//                 <button class='delete-btn btn btn-danger' onclick="deletItem(${i})">Delete</button>
//                 <button class='btn btn-warning'>Edit</button>
//             </div>
//         </div>
//         `
//     }
//     elResultsWrapper.innerHTML = result;
// }

// function deletItem(item) {
//     // console.log(item);
//     todos.splice(item, 1);
//     render(todos)
// }




elForm.addEventListener("submit", function (evt) {
    evt.preventDefault()
    var newProduct = elInput.value
    const obj = {
        id: Date.now(),
        name:newProduct,
        complited:false,
    }
    if (newProduct === "") {
        alert("Please select a new product")
    } else {
        todos.push(obj)

    }
    elInput.value = null;
    render(todos)

});

function render(todos) {
    elResultsWrapper.innerHTML = ""
    for (let i = 0; i < todos.length; i++) {
        elResultsWrapper.innerHTML += `
        <div class='card-footer col-4 d-flex align-items-center offset-4 mt-2 ps-3 pe-3 pt-1 pb-1 rounded bg-white'>
            ${todos[i].name}
            <div class="ms-auto">
                <button class='delete-btn btn btn-danger' onclick="deletItem(${i})">Delete</button>
                <button class='btn btn-warning' onclick="editItem(${todos[i].id})">Edit</button>
            </div>
        </div>
        `
    }

}

function deletItem(item) {
    // console.log(item);
   let it = todos.splice(item, 1);
   console.log(it);
    render(todos)
}

function editItem(id) {
    const editValue = prompt("malumot kiriting")
    todos = todos.map(el => {
        if (el.id === id) {
            return {
                ...el,
                name: editValue,
            }
        }
        return el;
    }
    )
    render(todos)
}
