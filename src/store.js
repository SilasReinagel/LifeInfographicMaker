import { writable } from 'svelte/store';
import createInitialCardData from './initialCardData';

export const cardData = writable(createInitialCardData());
