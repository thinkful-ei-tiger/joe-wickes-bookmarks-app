import $ from 'jquery';
import store from './store';

function createHeadingSection() {
  return `
    <section class="heading">
      <h1>My Bookmarks</h1>
    </section>
  `;
}

function createNewAndFilterButtonsSection() {
  return `
    <section class="buttons">
      <div class="left-button">
        <button id="new">+ New</button>
      </div>

      <div class="right-button">
        <form id="rating-filter">
          <select name="" id="rating">
            <option value="">Filter By</option>
            <option value="five">*****</option>
            <option value="four">****</option>
            <option value="three">***</option>
            <option value="two">**</option>
            <option value="one">*</option>
          </select>
        </form>
      </div>
    </section>
  `;
}


function createLiElement(singleBookmark) {
  return `
    <li>
      <div class="li-title">
        <div class="left-li-block">
          <p>${singleBookmark.title}</p>
        </div>
        <div class="right-li-block">
          <p>${singleBookmark.rating} Stars</p>
        </div>
      </div>
    </li>
  `;
}

function createAllLiElements(allBookmarks) {
  const liArr = allBookmarks.map(bookmark => {
    return createLiElement(bookmark);
  });

  const liEl = liArr.join('');

  return `
    <section class="bookmark-display">
      <ul>
        ${liEl}
      </ul>
    </section>
  `;
}

function createFormSection() {
  return `
    <section class="new-bookmark-section">
      <form id="new-bookmark-form">
        <div class="link-text-container">
          <label for="link-text">Add a new bookmark</label>
          <input type="text" name="" id="link-text" required>
        </div>

        <div class="description-container">
          <input type="text" name="" id="link-title" placeholder="Link Title" required>
          
          <div class="star-input">
            <div class="star">
              <label for="star-1">1</label>
              <input type="radio" name="stars" id="star-1" value="1">
            </div>
            <div class="star">
              <label for="star-2">2</label>
              <input type="radio" name="stars" id="star-2" value="2">
            </div>
            <div class="star">
              <label for="star-3">3</label>
              <input type="radio" name="stars" id="star-3" value="3">
            </div>
            <div class="star">
              <label for="star-4">4</label>
              <input type="radio" name="stars" id="star-4" value="4">
            </div>
            <div class="star">
              <label for="star-5">5</label>
              <input type="radio" name="stars" id="star-5" value="5" checked>
            </div>
          </div>

          <textarea name="" id="" cols="30" rows="10" placeholder="Add a description (optional)"></textarea>
        </div>
      </form>
      <div class="form-buttons">
        <div class="left-button">
          <button id="cancel">Cancel</button>
        </div>
        <div class="right-button">
          <button type="submit" id="create" form="new-bookmark-form">Create</button>
        </div>
      </div>
    </section>
  `;
}

function createHomePage() {
  const heading = createHeadingSection();
  const homeButtons = createNewAndFilterButtonsSection();
  const list = createAllLiElements(store.localBookmarks);

  return heading + homeButtons + list;
}

function createFormPage() {
  const heading = createHeadingSection();
  const form = createFormSection();

  return heading + form;
}

function renderMain() {
  let createdPage = null;

  if (store.adding) {
    createdPage = createFormPage();
  } else if (!store.adding) {
    createdPage = createHomePage();
  }

  $('body').html(createdPage);
}

function clickNew() {
  $('body').on('click', '#new', function(e) {
    e.preventDefault();

    console.log('new clicked');
  
    store.adding = true;
    renderMain();
  });
}

function clickCancel() {
  $('body').on('click', '#cancel', function(e) {
    e.preventDefault();

    console.log('cancel clicked');

    store.adding = false;
    renderMain();
  });
}

function submitNew() {
  $('body').on('submit', '#new-bookmark-form', function(e) {
    e.preventDefault();

    console.log('submit clicked');
  
    store.adding = false;
    renderMain();
  });
}

export default {
  renderMain,
  clickNew,
  clickCancel,
  submitNew,
};