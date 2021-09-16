import axios from 'axios'

export const getPokemons = async () => {
  const results = await axios
    .get('https://unpkg.com/pokemons@1.1.0/pokemons.json', {
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then(resp => resp.data)
    .then(data => data.results)
    .catch(e => console.log(e))
  return results
}
