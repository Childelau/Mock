const Mock = require('mockjs')
const Random = Mock.Random

//date 年月日
const date1 = Random.date()
const date2 = Random.date('yyyy/MM/dd')
console.log(date2)

//time 时分秒
const date3 = Random.time('A hh:mm:ss')
console.log(date3)

//datetime 年月日 时分秒
const date4 = Random.datetime('yyyy-MM-dd hh:mm:ss')
console.log(date4)

//now 现在的时间
const date5 = Random.now('day', 'yyyy-MM-dd HH:mm:ss SS')
console.log(date5)
