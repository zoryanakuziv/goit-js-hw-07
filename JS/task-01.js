// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.

// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).

// Наприклад, для першої категорії вийде:

// Категорія: Тварини
// Кількість елементів: 4
const category = document.querySelector('ul#categories');
const countCategoryQuantity = category.children.length;
console.log(`У списку ${countCategoryQuantity} категорії.`);

const categories = document.querySelectorAll('.item');

categories.forEach((category) => 
    console.log(
    `Категорія: ${category.firstElementChild.textContent}
    Кількість елементів: ${category.querySelectorAll('li').length}`
    )
);