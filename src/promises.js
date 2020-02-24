async function fetchDataPromises(url) {
  const response = await fetch(url)
  const json = await response.json()
  debugger
  return json
}

fetchDataPromises('/foo.json').then(
  data => {
    console.log(data)
  },
  error => {
    console.error(error)
  },
)
