
/**
 *
 *
 * @export date string formated
 * @param {Date} date
 * @param {String} format
 */
function format (date, format) {
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    date = new Date(date)
  }

  const formatObj = {
    'Y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    'S+': date.getSeconds()
  }

  Object.entries(formatObj).forEach(item => {
    // const reg = new RegExp('(' + item[0] + ')')
    item[1] = '' + item[1]
    if (item[0] === 'Y+') {
      console.log(RegExp.$1.length, 'length')
      format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? item[1] : ('00' + item[1]).substr(item[1].length))
  })
  console.log(format)
  return format
}

format(new Date(), 'YY-MM-DD HH:mm:SS')

export default format