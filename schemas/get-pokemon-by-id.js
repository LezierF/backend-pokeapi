const yup = require("yup")
const { POKEMON_ID_IS_REQUIRED, POKEMON_PER_PAGE_IS_REQUIRED, POKEMON_OFFSET_IS_REQUIRED } = require('../constants/messages');

exports.GetPokemonByIdSchema = yup.object({
    params: yup.object({
      id: yup.string().required(POKEMON_ID_IS_REQUIRED),
    }),
  }); 

  exports.GetPokemonsSchema = yup.object({
    query: yup.object({
      perPage: yup.number().required(POKEMON_PER_PAGE_IS_REQUIRED),
      offset: yup.number().required(POKEMON_OFFSET_IS_REQUIRED),
    }),
  }); 
