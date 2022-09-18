const getWeatherURL = (lat, long) => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=51f808ad6044666815ba2f99bc610f0b&units=imperial`
}

// not working
const getAllFlowsURL = (site) => {
  const date = new Date()
  const dateNow = date.toISOString()
  const dateWeekAgo = new Date(date.setDate(date.getDate() - 7)).toISOString()

  return `https://waterservices.usgs.gov/nwis/iv/?format=json&sites=${site}&startDT=${dateWeekAgo}&endDT=${dateNow}&parameterCd=00060,00065&siteStatus=all`
}

const weatherAPIcall =
  "https://api.openweathermap.org/data/2.5/weather?lat=39.253786&lon=-105.229840&appid=51f808ad6044666815ba2f99bc610f0b&units=imperial"

const riverAPIcall = async () => {
  const info = await fetch(
    "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=06701900&startDT=2022-09-11T10:00-0600&endDT=2022-09-18T10:00-0600&parameterCd=00060,00065&siteStatus=all",
  )
  const infoson = await info.json()
  console.log(infoson.value.timeSeries[0].values[0].value)
}
