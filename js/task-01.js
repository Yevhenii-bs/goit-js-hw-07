// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// const allCategories = document.querySelectorAll('.item'); {
//     console.log('В списке',allCategories.length, 'категории')
// }

// const items = document.querySelectorAll('.item');

// items.forEach(element => {
//     const title = element.querySelector('h2').textContent;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Категория: ${title}`);
//     console.log(`Количество элементов: ${itemsLength}`);
// });

const ul = document.querySelector('#categories');
const countOfChildren = ul.children.length;
console.log(`В списке ${countOfChildren} категории.`);

const li = ul.children;
console.log("li: ", li); 

for (let i = 0; i < li.length; i++) {
  const childrenOfLi = li[i].children;
  const textContent = childrenOfLi[0].textContent;
  console.log("Категория: ", textContent);
  const countOfChild = childrenOfLi[1].children.length;
  console.log("Количество элементов: ", countOfChild);
}