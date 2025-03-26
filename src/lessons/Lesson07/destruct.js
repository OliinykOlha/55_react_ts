console.log("Hi");


// массивы
const fruits = ['apple', 'grape']; // старый

const arr = [... fruits, 'cherry']; // новый  (... spread оператор)


console.log(fruits);
console.log(arr);

// Обьекты
const bookObj = {
    bookName: 'Great Gatsby',
    price: 20,
}

// Создать новый обьект newBookObj и добавить свойство новое
const newBookObj = {...bookObj, author: 'Fitzgerald'};
console.log(newBookObj);


// Деструктурирующее присваивание
// Массивы
const colors = ['red', 'black'];

//Вариант 1 Копирование значений из массива
// const color1 = colors[0];
// const color2 = colors[1];

// Вариант 2 с помощью деструкт присваивания
const [color1, color2] = colors;

console.log(color1);
console.log(color2);
console.log(colors);

////// Обьекты
const animal = {
    title: 'Dod',
    weight: 20
}

//const title = animal.title;

const {title, weight: animalWeight} = animal;
console.log(title);
console.log(animalWeight);
console.log(animal);

