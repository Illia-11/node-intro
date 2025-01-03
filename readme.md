# Робота з Node JS

## Створення пакета

Введіть в консолі команду `npm init` та заповність дані або просто введіть `npm init -y`

## Скрипти

В *package.json* у розділі *scripts* зберігаються скрипти пакету
Ключ - це назва скрипта
Значення - код, який буде виконано
Щоб запустити скрипт ваконати команду `npm run <назва_скрипта>`
"Тут була нода"
"Тут була Нода але аппендом"

## Робота з пакетами

Можна після створення власного пакету додати до проекту інші пакети з реєстру npm. Для цього знаючи назву покету треба ввести команду
`npm install <назва_пакету>`
або
`npm i <назва_пакету>`

Одночасно можна додавати декілька пакетів, для цього треба розділити їх назви комами, наприклад:
`npm i pg, react-redux, express`

Всі встановлені таким чином пакети зберігаються у папці `node_modules`.
Зазвичай вона має великі розміри, тому її необхідно ***завжди*** тримати у гітігнорі.

Щоб завантажені усі пакети, які вказані в `package.json` та `package-lock.json` можна виконати наступну команду
`npm install`
`npm i`
