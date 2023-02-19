const Mock = require('mockjs')
const Random = Mock.Random

/**
 * @paragraph
 * Random.paragraph()
 * Random.paragraph( len )
 * Random.paragraph( min, max )
 */

const text1 = Random.paragraph(2)
console.log(text1)
const text2 = Random.paragraph(1,3)
console.log(text2)


/**
 * @cparagraph
 */
const text3 = Random.cparagraph(3)
console.log(text3)


/**
 * @sentence
 * 
 */
const text4 = Random.sentence(10)
console.log(text4)
const text5 = Random.csentence(10)
console.log(text5)


