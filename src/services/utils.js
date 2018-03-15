/* @flow */

class Utils {
  /**
   * Converts a number in milisecondes to m inutes and seconds
   * @param  {number} millis The number that will be converted
   * @return {string}
   */
  millisToMinutesAndSeconds = (millis: number): string => {
    const minutes = Math.floor(millis / 60000)
    const seconds = ((millis % 60000) / 1000)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds.toFixed(0)
  }

  /**
   * Formates a big number to be readble
   * @param  {string} millis The number that will be formated
   * @return {string}
   */
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

  /**
   * Calculates the album duration time from a group of tracks
   * @param  {Array<Object>} tracks The group of trackes that will be calculated
   * @return {string}
   */
  albumDurationCalculator = (tracks: Array<Object>): number => tracks && tracks.length
    ? tracks.reduce((a, b) => ({duration_ms: a.duration_ms + b.duration_ms})).duration_ms
    : 0
}

const utils = new Utils()

export default utils
