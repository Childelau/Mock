const Mock = require('mockjs')
const Random = Mock.Random

//
const color1 = Random.hex()
console.log(color1)

//rgb
const color2 = Random.rgb()
console.log(color2)

//rgba
const color3 = Random.rgba()
console.log(color3)

//hsl
const color4 = Random.hsl()
console.log(color4)
