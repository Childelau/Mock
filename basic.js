const Mock = require('mockjs')
const random = Mock.Random

const dnum = random.float(10,20,2,2)
console.log(dnum)

//
/**
 * @pool
 * {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "0123456789",
    symbol: "!@#$%^&*()[]"
}
 */
const character = random.character()
console.log(character)
const lowerCharacter = random.character('lower')
console.log(lowerCharacter)
const symbolCharacter = random.character('symbol')
console.log(symbolCharacter)


//数组
const list = random.range(10)
console.log(list)
const list1 = random.range(3, 11, 2)
console.log(list1)