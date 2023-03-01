const Mock = require('mockjs')
const random = Mock.Random


random.extend({
    statusCode: function () {
        const statusCodes = [{code: 200, msg: 'SUCCESS'}, {code: 100, msg: 'complete'}, {code: -100, msg: 'fail'}]
        return this.pick(statusCodes)
    }
})

const statusCode = Mock.mock('@statusCode')
console.log(statusCode)