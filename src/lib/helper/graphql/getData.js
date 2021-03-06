import pick from "lodash/pick"
import flat from "lodash/flatten"

const isArray = Array.isArray

const getData = (...keys) => response => {
  if (!response.data) {
    return null
  }

  const data = pick(response.data, ...flat(keys, Infinity))

  if (keys.length === 1) {
    if (!isArray(keys[0])) {
      return data[keys[0]]
    }

    if (keys[0][0].length === 1) {
      return keys[0][0]
    }
  }

  return data
}

export default getData
