import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchImages } from './helpers/api';
import { getTemplate } from './helpers/helpers';

const formEl = document.querySelector('#search-form');
const galleryEl = document.querySelector('.gallery');
const loadMoreButtonEl = document.querySelector('.load-more');

