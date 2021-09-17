/* eslint-disable no-self-compare */
export const filterPoks = (array = [], value: string) => {
  return array.filter((values, index) =>
    values.name.toLowerCase().includes(value.toLowerCase())
      ? array
      : values.national_number.includes(value)
      ? array
      : null
  )
}

export const filterOrder = (value: string, options: any[]) => {
  return value === '1'
    ? options[0]
    : value === '2'
    ? options[1]
    : value === '3'
    ? options[2]
    : value === '4'
    ? options[3]
    : null
}

export const filterTypes = (arr = [], arrAdd = [], value: { type: any[] }) => {
  arr.forEach((pok: any) => {
    if (pok?.type.some((resp: any) => value.type.indexOf(resp) >= 0)) {
      arrAdd.push(pok)
    }
  })
  return arrAdd
}

export const orderAzFunc = (arr: any = []) => {
  return arr.slice(0).sort(function (a, b) {
    return a?.name.toLowerCase() > b.name.toLowerCase()
      ? 1
      : b?.name.toLowerCase() > a?.name.toLowerCase()
      ? -1
      : 0
  })
}

export const orderZaFunc = (arr: any = []) => {
  return arr.slice(0).sort(function (a, b) {
    return a?.name.toLowerCase() > b.name.toLowerCase()
      ? -1
      : b?.name.toLowerCase() > a?.name.toLowerCase()
      ? 1
      : 0
  })
}
