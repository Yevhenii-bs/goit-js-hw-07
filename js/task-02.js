// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


// ingredients.map((el) => {
//   const li = document.createElement("li");

//   li.appendChild(document.createTextNode(el));
  
//   document.getElementById("ingredients").appendChild(li)
// });

// const ul = document.querySelector("#ingredients");
// const list = ingredients.reduce((str, item) =>
//   str + `<li>${item}</li>`, '');
// ul.innerHTML = list;

const ingredientsList = document.querySelector('#ingredients')
console.log(ingredientsList);

const ingredientsItem = ingredients.map(el => {
    const item = document.createElement('li');
    item.textContent = el;

    return item;
});

ingredientsList.append(...ingredientsItem);