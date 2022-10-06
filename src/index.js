import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getRandomPhoto, getBreeds, searchByBreed } from './helpers/api';
import { getTemplate } from './helpers/helpers';


const formEl = document.querySelector('#search-form');
const galleryEl = document.querySelector('.gallery');
const loadMoreButtonEl = document.querySelector('.load-more');
const randomBtn = document.querySelector('.random-btn');
const photoDiv = document.querySelector('.photo');
const breedDiv = document.querySelector(".breed-photo");

const formBreeds = document.querySelector('.breeds-form');
const selectBreeds = document.querySelector('.breeds-select');
// console.log(selectBreeds.value);
const buttonBreeds = document.querySelector('.button-breeds');


randomBtn.addEventListener("click", async event => {
  const photo = await getRandomPhoto();
  const template = `<img src="${photo.url}"/>`;
  photoDiv.innerHTML = template; 
})


const drawBreeds = async () => {
  const breeds = await getBreeds();
  // console.log(breeds);
  const template = breeds.map(({ name, id }) => {
     return `<option value="${id}">${name}</option>`
  })
  // console.log(template);
  selectBreeds.innerHTML = template.join("");
} 

drawBreeds();

formBreeds.addEventListener('submit', submitForm);

async function submitForm (event) {
  event.preventDefault();
  const breedId = event.currentTarget.elements.breed.value;
  const searchResult = await searchByBreed(breedId);
  console.log(searchResult);
  const template = searchResult.map(breed => {
  return `<img src="${breed.url}"/>`
  })
  breedDiv.innerHTML = template.join("");
}

selectBreeds.addEventListener("change", event => {
//  console.log(event.currentTarget.value);
 
} )
 

