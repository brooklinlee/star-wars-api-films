const BASE_URL = 'https://swapi.dev/api/'

async function index() {
  try {
    const res = await fetch(`${BASE_URL}films/`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show(movieId) {
  try {
    const res = await fetch(`${BASE_URL}films/${movieId}/`, {
      method: 'GET'
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  show
}