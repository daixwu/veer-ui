function judgeTypeFn (type) {
  const toString = Object.prototype.toString
  return function isType (o) {
    return toString.call(o) === `[object ${type}]`
  }
}

const isFunc = judgeTypeFn('Function')
const isUndef = judgeTypeFn('Undefined')
const isArray = judgeTypeFn('Array')
const isString = judgeTypeFn('String')
const isObject = judgeTypeFn('Object')
const isNumber = judgeTypeFn('Number')

export {
  isUndef,
  isFunc,
  isArray,
  isString,
  isObject,
  isNumber
}
