const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "mate",
    category: "shakes",
    price: 7.99,
    img: "./images/item-10.jpeg",
    desc: "Infusion drink with energizing properties. Good for all ocasions. Specialy for daytime. Waring: provides hi levels of caffeine."
  },
  {
    id: 11,
    title: "pica-pica",
    category: "pica-pica",
    price: 10.99,
    img: "./images/item-11.jpeg",
    desc: `Starters that go well with wvery other dish and drink you want to serve afterwards.`,
  },
];

const menuCont = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');

function loadData(menu) {

  let displayMenuTemp = [];
  menu.forEach((menu) => displayMenuTemp.push(menu));

  let menuStringHTML = displayMenuTemp.map(mapMenu).join('');

  menuCont.innerHTML = menuStringHTML;


};

function createFilters(menu) {
  const categories = menu.reduce((catList, item) => {

    if (!catList.includes(item.category)) {
      catList.push(item.category);
    }
    return catList;
  }, ["all"] );

  const buttonsHTML = categories
  .map((btn_cat) => {
    return `<button class="filter-btn" type="button" data-cat_filter="${btn_cat}">${btn_cat}</button>`
  })
  .join('');

  const btnContainer = document.querySelector('.btn-container');
  btnContainer.innerHTML = buttonsHTML;

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => btn.addEventListener('click', filterHandler));
  console.log(buttonsHTML);
}

function mapMenu(item) {
  return `<article class="menu-item">
            <img src="${item.img}" class="photo" alt="menu item">
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}€</h4>
              </header>
              <p class="item-text">${item.desc}</p>
            </div>
          </article>`;
};

function filterHandler(e) {
  // console.log(e.currentTarget.dataset.cat_filter);
  const filter = e.currentTarget.dataset.cat_filter;
  if (filter === 'all') {
    loadData(menu);
  }
  else {
    filteredMenu = menu.filter((m) => m.category === filter);
    loadData(filteredMenu);
  }
}
window.addEventListener('DOMContentLoaded', function() {
  loadData(menu);
  createFilters(menu);
});

