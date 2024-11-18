// Імпорт даних з інших модулей

// 1. Імпорт за замовчанням
// import MyMath from './myMath.js'

// при імпорті за замовчанням назва необовʼязково має співпадати
import TheBestMath from './myMath.js'

// 2. Іменний імпорт
import {PIValue, testFunc as newTest, MyBoolAlgebra, MyTrigonometryMath} from './myMath.js'

// 3. Комбінований імпорт
// import MyMath, {MyBoolAlgebra, MyTrigonometryMath} from './myMath.js'

import TheBestMath, {PIValue, testFunc as newTest, MyBoolAlgebra, MyTrigonometryMath} from './myMath.js'

import * as AllExportsFromMyMath from './myMath.js'

console.log('Hello from Node')

console.log(AllExportsFromMyMath)

console.log(PIValue)

newTest()

function testFunc() {

}

const numbers = [1,2,3,4,5,6,7,8,9,-1]

// console.log(sum(...numbers))

console.log(TheBestMath.sum(...numbers))
// console.log(MyMath.sum(...numbers))
