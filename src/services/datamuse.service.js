import axios from 'axios';


const URL = 'https://api.datamuse.com/words';

export default function fetchSynonyms(word) {
  return axios.get(URL, {
    params: {
      rel_syn: word
    }
  });
}
