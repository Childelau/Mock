const Mock = require('mockjs')
const random = Mock.Random


const data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name': '@cname',
        'idCard': ()=>random.id()
    }]
})

console.log(JSON.stringify(data, null,2))

// const email = random.email()
// console.log(email)
const email1 = Mock.mock('@email')
console.log(email1)
const email2 = Mock.mock({email: '@email'})
console.log(email2)

//扩展
random.extend({
    constellation: function () {
        const constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    }
})

const constellation = Mock.mock('@constellation')
console.log(constellation)

const data1 = Mock.mock({
	"number|1-8.2":0
})
console.log(data1)
