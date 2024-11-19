// підʼєднання сторонніх бібліотек
import _ from 'lodash'

const randomNum = _.random(5, 50, false);
console.log(randomNum)

class MyMath {
  static sum = (...nums) => nums.reduce((acc, num) => acc + num)

  static substract = (...nums) => nums.reduce((acc, num) => acc - num)

  static multiply = (...nums) => nums.reduce((acc, num) => acc * num)

  static divide = (...nums) => nums.reduce((acc, num) => acc / num)
}

class MyTrigonometryMath {
  static func1 = () => {}
}

class MyBoolAlgebra {
  static func2 = () => {}
}

// Експорт даних з модуля

// 1. Експорт за замовчанням - може використовуватися один раз за модуль
export default MyMath

// export default 10

// const obj = {
//   // MyTrigonometryMath: MyTrigonometryMath
//   MyTrigonometryMath
// }

// obj.MyTrigonometryMath

// 2. Іменний експорт
export {
  MyTrigonometryMath,
  MyBoolAlgebra
}

export const PIValue = 3.14

export function testFunc() {
  console.log('testFunction')
}
