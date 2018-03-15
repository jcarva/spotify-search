/* @flow */

class Utils {
  millisToMinutesAndSeconds = (millis: number): string => {
    const minutes = Math.floor(millis / 60000)
    const seconds = ((millis % 60000) / 1000)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds.toFixed(0)
  }
}

const utils = new Utils()

export default utils
