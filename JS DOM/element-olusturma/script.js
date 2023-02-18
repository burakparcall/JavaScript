let sonuc;

let ul = document.getElementById("task-list"); 

// let count = ul.children.length;

// let li =`
//  <li class="task list-group-item">
//      <div class="form-check">
//          <input type="checkbox" class="form-check-input" id="${count+1}" />
//          <label for="${count+1}" class="form-check-label">Görev ${count+1}</label>
//      </div>
// </li>
// `
// ul.insertAdjacentHTML("beforeend",li);
// console.log(li);

// let gorevListesi =  ["Görev 1", "Görev 2", "Görev 3", "Görev 4", "Görev 5"]


// for (let index in gorevListesi) {
//     let li = 
//     `
//     <li class="task list-group-item">
//         <div class="form-check">
//         <input type="checkbox" class="form-check-input" id="${index+1}" />
//         <label for="${index+1}" class="form-check-label">${gorevListesi[index]}</label>
//         </div>
//     </li>
//     `
//     ul.insertAdjacentHTML("beforeend",li);
    
// }


// for (let gorev of gorevListesi) {
//     let li = `
//     <li class="task list-group-item">
//         <div class="form-check">
//         <input type="checkbox" class="form-check-input" id="${gorev}" />
//         <label for="${gorev}" class="form-check-label">${gorev}</label>
//         </div>
//     </li>
//     `
//     ul.insertAdjacentHTML("beforeend",li);

// }

// let gorevListesi = [
//     {"id": 1, "gorevAdi": "Görev 1"},
//     {"id": 2, "gorevAdi": "Görev 2"},
//     {"id": 3, "gorevAdi": "Görev 3"},
//     {"id": 4, "gorevAdi": "Görev 4"},
// ]

// for (let gorev of gorevListesi) {
//     let li = `
//     <li class="task list-group-item">
//         <div class="form-check">
//         <input type="checkbox" class="form-check-input" id="${gorev.id}" />
//         <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
//         </div>
//     </li>
//     `
//     // ul.insertAdjacentHTML("beforeend",li);
// }

for (let i = 1; i <= 5; i++) {
    let li = `
    <li class="task list-group-item">
        <div class="form-check">
        <input type="checkbox" class="form-check-input" id="${i}" />
        <label for="${i}" class="form-check-label">Görev ${i}</label>
        </div>
    </li>
    `
    ul.insertAdjacentHTML("beforeend",li);
}


// console.log(gorevListesi);
