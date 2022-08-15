const axios = require('axios').default;

exports.fetchPokemonById = async (id) => {
    const uri = `https://pokeapi.co/api/v2/pokemon/${id}`
    const { data } = await axios.get(uri)
    return data
}

exports.fetchAllPokemon = async (perPage, offset) => {
    const uri = `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`
    const { data } = await axios.get(uri)
    return data
}

exports.fetchTypePokemon = async (type) => {
    const uri = `https://pokeapi.co/api/v2/type/${type}`
    const { data } = await axios.get(uri)
    return data
}