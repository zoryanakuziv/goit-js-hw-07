// В HTML є пустий список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS є масив рядків.

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().

 const ingredientList = document.querySelector('ul#ingredients');

const createItems = ingredients => {
    return ingredients.map(ingredient => {
 const itemEl = document.createElement('li');
itemEl.textContent = ingredient;
     return itemEl;
  })
}
const items = createItems(ingredients);
ingredientList.append(...items);