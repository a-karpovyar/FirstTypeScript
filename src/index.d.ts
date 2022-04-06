/*
Типизируйте функцию getPersons, возвращающую массив объектов со следующими свойствами:
- name - строка
- age - число
- gender - 'male' или 'female'
 */
type imya = string;
type vozrast = number;
type gender = 'male' | 'female';
type people = { name: imya; age: vozrast; gender: gender };
export function getPersons(): Array<people>;
/*
Типизируйте функцию personToString, возвращающую строку и принимающую объект одного из следующих форматов:
   1. Пользователь:
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   2. Сотрудник
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   - company- строка
 */

type employer = people & { company: string };

export function personToString(person: people | employer): string;
