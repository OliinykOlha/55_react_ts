/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// Тип any - любой тип
let city: any = 'Berlin';
city = ['Paris', 1234];


// Типизация обьекта через интерфейс
interface User {
    name: string,
    age?: number|string
}

const userData: User = {
    name: 'Tom',
    age: 20
}

interface User {
    isAdmin?: boolean
}

// Наследование интерфейса

interface Admin extends User {
    email: string,
    tel: string
}

const personData: Admin = {
    name: 'Bob',
    email: 'jjj@gmail.com',
    tel:'7688999'
}

const newUser: User = {
    name: 'John'
}

// ----Type-----

type Weight = string|number|null;
let userWeight: Weight = 52;
let animalWeight: Weight = null;


// пример использ union для ограничения переменной по значению
type Status = 'success'|'error'|'loading';
let requestStatus: Status = 'success';
requestStatus = 'loading';
// requestStatus = 'eror';

// использ type для типиз обьекта

type Animal = {
    name: string,
    weight?: number 
}

const animalData: Animal = {
    name: 'Lion',
    weight: 200
}

// Обьединение типов 
type NewAnimal = Animal & {country: string};

const zebra: NewAnimal = {
    name: 'Zebra',
    country: 'Afrika'
}

const dog: Animal = {
    name: 'Dog'
}

// Дженерик - это как переменная в который можно подставлять тип
type CustomArrayType<T=null> = (string | T)[];

const arrayMix1: CustomArrayType<number> = ['red, 123'];
const arrayMix2: CustomArrayType<number[]> = ['red', [1, 2, 6]];
const arrayMix3: CustomArrayType = ['zebra', null];


// Generic&Interface
interface Fruit<T=number>{
title: string,
address: T
}

const fruitObj: Fruit<string> = {
title: 'Grape',
address: 'London, str...'
}


// --- Числовое перечисление----
enum Colors {Red, Black=6, Green};

// ----- Строковое перeчисление ---
export enum TRAFFIC_LIGHT {
RED = 'red',
YELLOW = 'yellow',
GREEN = 'green'
}

// Пример экспорта именнованого экспорта
export const getAction = (light: TRAFFIC_LIGHT) => {
switch (light) {
    case TRAFFIC_LIGHT.RED : 
    return 'Stop!';
    case TRAFFIC_LIGHT.YELLOW : 
    return 'Get Ready!';
    case TRAFFIC_LIGHT.GREEN : 
    return 'Go!';  
}
}

