import axios from 'axios';

axios.defaults.baseURL = 'https://api.thedogapi.com/v1/';
const keyApi = "live_NL54OJNpOrjWkzTor3m8MN0wdf0o7yHHKIrYIFMnjaGrnUGlb0yAMUXXA5XGJRWk"

export async function getRandomPhoto () {
  const { data } = await axios.get('images/search');
  
  return data[0];
}


export const searchByBreed = async function (breedId) {
 const { data } = await axios.get("images/search", {
   params: {
  breed_ids: breedId
 }  
 })
 return data;

}

export const getBreeds = async () => {
  const { data } = await axios.get("breeds")
  return data;

}