import cuid from 'cuid';
import api from './api';

const localBookmarks = [];
const a = 'howdy';

let error = null;

function createStoreArray(apiBookmarks) { //Works
  apiBookmarks.forEach(bookmark => {
    this.localBookmarks.push(bookmark);
  });
}

console.log('store connected');

export default {
  a,
  localBookmarks,
  createStoreArray,
};