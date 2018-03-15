/* @flow */

class Utils {
  millisToMinutesAndSeconds = (millis: number): string => {
    const minutes = Math.floor(millis / 60000)
    const seconds = ((millis % 60000) / 1000)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds.toFixed(0)
  }

  bigNumberParser = (bigNumber: string): string => {
    bigNumber = bigNumber.toString().split('').reverse().join('')
    let result = ''
    const gapSize = 3

    while (bigNumber.length > 0) {
      result = result + ' ' + bigNumber.substring(0, gapSize)
      bigNumber = bigNumber.substring(gapSize)
    }

    return result.split('').reverse().join('')
  }
}

const utils = new Utils()

export default utils
