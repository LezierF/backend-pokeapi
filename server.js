const express = require('express');
const cors = require('cors');
const { GetPokemonByIdSchema, GetPokemonsSchema } = require('./schemas/get-pokemon-by-id');
const { validate } = require('./schemas');
const { fetchPokemonById, fetchAllPokemon, fetchTypePokemon } = require('./services/pokemon-service')
const app = express();

app.use(cors());
app.use(express.json());

app.listen(5050, () => {
  console.log('🚀 Listening on port 5050!');
});

// validate is the middleware for schema validation 
app.get("/pokemon/:id", validate(GetPokemonByIdSchema), async (req, res) => {
  try {
    const { id } = req.params
    const pokemon = await fetchPokemonById(id)

    if (pokemon) res.status(200).json(pokemon)

  } catch (err) {
    console.log(err)
    res.status(400).json({ message: 'Oops! An error occurred while fetching a pokemon' })
  }
})

// validate is the middleware for schema validation 
app.get("/pokemons", validate(GetPokemonsSchema), async (req, res) => {
  try {
    const { perPage, offset } = req.query
    const pokemons = await fetchAllPokemon(perPage, offset)

    if (pokemons) res.status(200).json(pokemons)

  } catch (err) {
    console.log(err)
    res.status(400).json({ message: 'Oops! An error occurred while fetching all the pokemons' })
  }
})

app.get("/poketype/:type", async (req, res) => {
  try {
    const { type } = req.params
    
    const pokemonsType = await fetchTypePokemon(type)

    if (pokemonsType) res.status(200).json(pokemonsType)

  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Oops! An error occurred while fetching all the pokemons' })
  }
})