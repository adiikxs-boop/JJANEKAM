// Products Data
const products = [
  // Диваны
  {
    id: 1,
    name: 'Диван "Модерн" угловой',
    category: 'sofas',
    categoryName: 'Диваны',
    price: 89990,
    oldPrice: 119990,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    isNew: false,
    isSale: true
  },
  {
    id: 7,
    name: 'Диван 3-местный "Классик"',
    category: 'sofas',
    categoryName: 'Диваны',
    price: 74990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80',
    isNew: false,
    isSale: false
  },
  {
    id: 13,
    name: 'Диван "Велюр" раскладной',
    category: 'sofas',
    categoryName: 'Диваны',
    price: 95990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?w=600&q=80',
    isNew: true,
    isSale: false
  },
  {
    id: 14,
    name: 'Диван "Честерфилд"',
    category: 'sofas',
    categoryName: 'Диваны',
    price: 145990,
    oldPrice: 189990,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80',
    isNew: false,
    isSale: true
  },
  {
    id: 15,
    name: 'Диван-кровать "Комфорт"',
    category: 'sofas',
    categoryName: 'Диваны',
    price: 62990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?w=600&q=80',
    isNew: false,
    isSale: false
  },
  {
    id: 16,
    name: 'Диван "Милан" кожаный',
    category: 'sofas',
    categoryName: 'Диваны',
    price: 189990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80',
    isNew: true,
    isSale: false
  },

  // Кресла
  {
    id: 2,
    name: 'Кресло "Скандинавия"',
    category: 'chairs',
    categoryName: 'Кресла',
    price: 34990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80',
    isNew: true,
    isSale: false
  },
  {
    id: 8,
    name: 'Кресло-качалка "Уют"',
    category: 'chairs',
    categoryName: 'Кресла',
    price: 29990,
    oldPrice: 39990,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80',
    isNew: false,
    isSale: true
  },
  {
    id: 17,
    name: 'Кресло "Барселона"',
    category: 'chairs',
    categoryName: 'Кресла',
    price: 67990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80',
    isNew: false,
    isSale: false
  },
  {
    id: 18,
    name: 'Кресло офисное "Директор"',
    category: 'chairs',
    categoryName: 'Кресла',
    price: 45990,
    oldPrice: 59990,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80',
    isNew: false,
    isSale: true
  },
  {
    id: 19,
    name: 'Кресло "Яйцо"',
    category: 'chairs',
    categoryName: 'Кресла',
    price: 89990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    isNew: true,
    isSale: false
  },
  {
    id: 20,
    name: 'Пуф "Марокко"',
    category: 'chairs',
    categoryName: 'Кресла',
    price: 12990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    isNew: false,
    isSale: false
  },

  // Столы
  {
    id: 3,
    name: 'Стол обеденный "Лофт"',
    category: 'tables',
    categoryName: 'Столы',
    price: 45990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&q=80',
    isNew: false,
    isSale: false
  },
  {
    id: 9,
    name: 'Журнальный стол "Минимал"',
    category: 'tables',
    categoryName: 'Столы',
    price: 18990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?w=600&q=80',
    isNew: true,
    isSale: false
  },
  {
    id: 21,
    name: 'Стол письменный "Офис"',
    category: 'tables',
    categoryName: 'Столы',
    price: 35990,
    oldPrice: 45990,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80',
    isNew: false,
    isSale: true
  },
  {
    id: 22,
    name: 'Стол-трансформер "Умник"',
    category: 'tables',
    categoryName: 'Столы',
    price: 54990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&q=80',
    isNew: true,
    isSale: false
  },
  {
    id: 23,
    name: 'Консоль "Прихожая"',
    category: 'tables',
    categoryName: 'Столы',
    price: 24990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=600&q=80',
    isNew: false,
    isSale: false
  },
  {
    id: 24,
    name: 'Стол обеденный "Семейный"',
    category: 'tables',
    categoryName: 'Столы',
    price: 79990,
    oldPrice: 99990,
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=600&q=80',
    isNew: false,
    isSale: true
  },

  // Шкафы
  {
    id: 4,
    name: 'Шкаф-купе "Премиум"',
    category: 'wardrobes',
    categoryName: 'Шкафы',
    price: 129990,
    oldPrice: 159990,
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&q=80',
    isNew: false,
    isSale: true
  },
  {
    id: 10,
    name: 'Комод "Ретро"',
    category: 'wardrobes',
    categoryName: 'Шкафы',
    price: 54990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1551298370-9d3d53f6f33a?w=600&q=80',
    isNew: false,
    isSale: false
  },
  {
    id: 25,
    name: 'Гардероб "Мечта"',
    category: 'wardrobes',
    categoryName: 'Шкафы',
    price: 189990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80',
    isNew: true,
    isSale: false
  },
  {
    id: 26,
    name: 'Стеллаж "Библиотека"',
    category: 'wardrobes',
    categoryName: 'Шкафы',
    price: 42990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&q=80',
    isNew: false,
    isSale: false
  },
  {
    id: 27,
    name: 'Тумба ТВ "Медиа"',
    category: 'wardrobes',
    categoryName: 'Шкафы',
    price: 32990,
    oldPrice: 42990,
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80',
    isNew: false,
    isSale: true
  },
  {
    id: 28,
    name: 'Витрина "Коллекционер"',
    category: 'wardrobes',
    categoryName: 'Шкафы',
    price: 67990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    isNew: true,
    isSale: false
  },

  // Кровати
  {
    id: 5,
    name: 'Кровать "Комфорт" 180x200',
    category: 'beds',
    categoryName: 'Кровати',
    price: 67990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80',
    isNew: true,
    isSale: false
  },
  {
    id: 11,
    name: 'Кровать "Элегант" 160x200',
    category: 'beds',
    categoryName: 'Кровати',
    price: 59990,
    oldPrice: 79990,
    image: 'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=600&q=80',
    isNew: false,
    isSale: true
  },
  {
    id: 29,
    name: 'Кровать "Принцесса" детская',
    category: 'beds',
    categoryName: 'Кровати',
    price: 34990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80',
    isNew: false,
    isSale: false
  },
  {
    id: 30,
    name: 'Кровать "Лофт" двухъярусная',
    category: 'beds',
    categoryName: 'Кровати',
    price: 89990,
    oldPrice: 109990,
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80',
    isNew: false,
    isSale: true
  },
  {
    id: 31,
    name: 'Кровать "Император" 200x200',
    category: 'beds',
    categoryName: 'Кровати',
    price: 149990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=600&q=80',
    isNew: true,
    isSale: false
  },
  {
    id: 32,
    name: 'Кровать с подъемным механизмом',
    category: 'beds',
    categoryName: 'Кровати',
    price: 75990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&q=80',
    isNew: false,
    isSale: false
  },

  // Декор
  {
    id: 6,
    name: 'Ваза декоративная "Арт"',
    category: 'decor',
    categoryName: 'Декор',
    price: 4990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
    isNew: true,
    isSale: false
  },
  {
    id: 12,
    name: 'Зеркало настенное "Солнце"',
    category: 'decor',
    categoryName: 'Декор',
    price: 12990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80',
    isNew: true,
    isSale: false
  },
  {
    id: 33,
    name: 'Картина "Абстракция"',
    category: 'decor',
    categoryName: 'Декор',
    price: 8990,
    oldPrice: 12990,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80',
    isNew: false,
    isSale: true
  },
  {
    id: 34,
    name: 'Светильник напольный "Торшер"',
    category: 'decor',
    categoryName: 'Декор',
    price: 15990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80',
    isNew: false,
    isSale: false
  },
  {
    id: 35,
    name: 'Подушки декоративные (набор)',
    category: 'decor',
    categoryName: 'Декор',
    price: 5990,
    oldPrice: 7990,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80',
    isNew: false,
    isSale: true
  },
  {
    id: 36,
    name: 'Часы настенные "Минимализм"',
    category: 'decor',
    categoryName: 'Декор',
    price: 6990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600&q=80',
    isNew: true,
    isSale: false
  },
  {
    id: 37,
    name: 'Плед "Альпака"',
    category: 'decor',
    categoryName: 'Декор',
    price: 9990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    isNew: false,
    isSale: false
  },
  {
    id: 38,
    name: 'Ковер "Скандинавия" 200x300',
    category: 'decor',
    categoryName: 'Декор',
    price: 34990,
    oldPrice: 44990,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80',
    isNew: false,
    isSale: true
  }
];

// Cart State
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];

// Pagination State
const PRODUCTS_PER_PAGE = 8;
let currentPage = 1;
let currentFilter = 'all';
const MAX_RECENT = 6;

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartFooter = document.getElementById('cartFooter');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const filterBtns = document.querySelectorAll('.filter-btn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const newsletterForm = document.getElementById('newsletterForm');

// New DOM Elements
const favoritesCount = document.getElementById('favoritesCount');
const favoritesBtn = document.getElementById('favoritesBtn');
const favoritesSidebar = document.getElementById('favoritesSidebar');
const favoritesOverlay = document.getElementById('favoritesOverlay');
const favoritesClose = document.getElementById('favoritesClose');
const favoritesItems = document.getElementById('favoritesItems');
const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const recentlyViewedSection = document.getElementById('recentlyViewed');
const recentlyViewedGrid = document.getElementById('recentlyViewedGrid');
const modalOverlay = document.getElementById('modalOverlay');
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

// Auth DOM Elements
const accountBtn = document.getElementById('accountBtn');
const authModal = document.getElementById('authModal');
const authOverlay = document.getElementById('authOverlay');
const authClose = document.getElementById('authClose');
const tabLogin = document.getElementById('tabLogin');
const tabRegister = document.getElementById('tabRegister');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const authProfile = document.getElementById('authProfile');
const authTabs = document.querySelector('.auth-tabs');

// Auth State
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  updateCartUI();
  updateFavoritesCount();
  renderRecentlyViewed();
  
  // Mobile menu toggle
  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
    });
  });

  // Cart toggle
  cartBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  // Favorites toggle
  favoritesBtn.addEventListener('click', openFavorites);
  favoritesClose.addEventListener('click', closeFavorites);
  favoritesOverlay.addEventListener('click', closeFavorites);

  // Search toggle
  searchBtn.addEventListener('click', openSearch);
  searchClose.addEventListener('click', closeSearch);
  searchInput.addEventListener('input', (e) => renderSearchResults(e.target.value));

  // Modal close
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  // Auth
  updateAuthUI();
  accountBtn.addEventListener('click', openAuth);
  authClose.addEventListener('click', closeAuth);
  authOverlay.addEventListener('click', closeAuth);
  tabLogin.addEventListener('click', () => switchAuthTab('login'));
  tabRegister.addEventListener('click', () => switchAuthTab('register'));
  loginForm.addEventListener('submit', handleLogin);
  registerForm.addEventListener('submit', handleRegister);
  document.getElementById('logoutBtn').addEventListener('click', handleLogout);

  // Filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.filter);
    });
  });

  // Category cards
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const category = card.dataset.category;
      filterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category);
      });
      renderProducts(category);
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Newsletter form
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    showToast('Спасибо за подписку!');
    e.target.reset();
  });
});

// Render Products with Pagination
function renderProducts(filter, resetPage = true) {
  if (resetPage) {
    currentPage = 1;
  }
  currentFilter = filter;
  
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  const totalProducts = filteredProducts.length;
  const productsToShow = filteredProducts.slice(0, currentPage * PRODUCTS_PER_PAGE);
  const hasMore = productsToShow.length < totalProducts;

  if (totalProducts === 0) {
    productsGrid.innerHTML = '<p class="products-empty">Товары не найдены</p>';
    updateLoadMoreButton(false, 0, 0);
    return;
  }

  productsGrid.innerHTML = productsToShow.map(product => `
    <article class="product-card">
      <div class="product-image" onclick="openProductModal(${product.id})">
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <div class="product-badges">
          ${product.isNew ? '<span class="badge badge-new">Новинка</span>' : ''}
          ${product.isSale ? '<span class="badge badge-sale">Скидка</span>' : ''}
        </div>
        <button 
          class="product-favorite ${favorites.includes(product.id) ? 'active' : ''}" 
          onclick="event.stopPropagation(); toggleFavorite(${product.id})"
          aria-label="Добавить в избранное"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${favorites.includes(product.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
        </button>
      </div>
      <div class="product-info">
        <span class="product-category">${product.categoryName}</span>
        <h3 class="product-name" onclick="openProductModal(${product.id})" style="cursor:pointer">${product.name}</h3>
        <div class="product-price">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ''}
        </div>
        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
          В корзину
        </button>
      </div>
    </article>
  `).join('');

  // Add or remove "Load More" button
  updateLoadMoreButton(hasMore, productsToShow.length, totalProducts);
}

// Update Load More Button
function updateLoadMoreButton(hasMore, shown, total) {
  let loadMoreContainer = document.getElementById('loadMoreContainer');
  
  if (!loadMoreContainer) {
    loadMoreContainer = document.createElement('div');
    loadMoreContainer.id = 'loadMoreContainer';
    loadMoreContainer.className = 'load-more-container';
    productsGrid.parentNode.appendChild(loadMoreContainer);
  }

  if (hasMore) {
    loadMoreContainer.innerHTML = `
      <button class="btn btn-secondary load-more-btn" onclick="loadMoreProducts()">
        Показать еще
        <span class="load-more-count">(показано ${shown} из ${total})</span>
      </button>
    `;
  } else {
    loadMoreContainer.innerHTML = total > 0 ? `
      <p class="all-products-shown">Показаны все товары (${total})</p>
    ` : '';
  }
}

// Load More Products
function loadMoreProducts() {
  currentPage++;
  renderProducts(currentFilter, false);
}

// Format Price in Tenge
function formatPrice(price) {
  return new Intl.NumberFormat('kk-KZ', {
    style: 'currency',
    currency: 'KZT',
    minimumFractionDigits: 0
  }).format(price);
}

// Add to Cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartUI();
  showToast('Товар добавлен в корзину');
}

// Add to Cart from Favorites (also removes from favorites)
function addToCartFromFavorites(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartUI();

  // Remove from favorites
  const index = favorites.indexOf(productId);
  if (index > -1) {
    favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesCount();
    renderFavoritesUI();
    renderProducts(currentFilter, false);
  }

  showToast('Товар добавлен в корзину');
}
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

// Update Quantity
function updateQuantity(productId, delta) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
      updateCartUI();
    }
  }
}

// Toggle Favorite
function toggleFavorite(productId) {
  const index = favorites.indexOf(productId);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast('Удалено из избранного');
  } else {
    favorites.push(productId);
    showToast('Добавлено в избранное');
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
  updateFavoritesCount();
  renderFavoritesUI();
  renderProducts(currentFilter, false);
  // Update modal heart if open
  const modalFav = document.querySelector('.modal-fav-btn');
  if (modalFav && Number(modalFav.dataset.id) === productId) {
    modalFav.classList.toggle('active', favorites.includes(productId));
  }
}

// Update Favorites Count Badge
function updateFavoritesCount() {
  favoritesCount.textContent = favorites.length;
  favoritesCount.style.display = favorites.length > 0 ? 'flex' : 'none';
}

// Open / Close Favorites Sidebar
function openFavorites() {
  renderFavoritesUI();
  favoritesSidebar.classList.add('active');
  favoritesOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeFavorites() {
  favoritesSidebar.classList.remove('active');
  favoritesOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Render Favorites Sidebar
function renderFavoritesUI() {
  if (favorites.length === 0) {
    favoritesItems.innerHTML = `
      <div class="cart-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
        <p>В избранном пусто</p>
      </div>
    `;
    return;
  }

  const favProducts = favorites.map(id => products.find(p => p.id === id)).filter(Boolean);
  favoritesItems.innerHTML = favProducts.map(item => `
    <div class="cart-item">
      <div class="cart-item-image" onclick="openProductModal(${item.id})" style="cursor:pointer">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-info">
        <h4 class="cart-item-name">${item.name}</h4>
        <p class="cart-item-price">${formatPrice(item.price)}</p>
        <div class="cart-item-actions">
          <button class="add-to-cart-btn" style="padding:0.4rem 0.75rem;font-size:0.75rem" onclick="addToCartFromFavorites(${item.id})">В корзину</button>
          <button class="cart-item-remove" onclick="toggleFavorite(${item.id})" aria-label="Удалить">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Search
function openSearch() {
  searchBar.classList.add('active');
  searchInput.focus();
}

function closeSearch() {
  searchBar.classList.remove('active');
  searchInput.value = '';
  searchResults.innerHTML = '';
}

function renderSearchResults(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    searchResults.innerHTML = '';
    return;
  }
  const matches = products.filter(p =>
    p.name.toLowerCase().includes(q) || p.categoryName.toLowerCase().includes(q)
  );
  if (matches.length === 0) {
    searchResults.innerHTML = '<p class="search-empty">Ничего не найдено</p>';
    return;
  }
  searchResults.innerHTML = matches.map(p => `
    <div class="search-result-item" onclick="openProductModal(${p.id}); closeSearch();">
      <img src="${p.image}" alt="${p.name}">
      <div class="search-result-info">
        <div class="search-result-name">${p.name}</div>
        <div class="search-result-category">${p.categoryName}</div>
      </div>
      <div class="search-result-price">${formatPrice(p.price)}</div>
    </div>
  `).join('');
}

// Product Modal & Recently Viewed
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  addToRecentlyViewed(productId);

  modalContent.innerHTML = `
    <div class="modal-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="modal-details">
      <span class="modal-category">${product.categoryName}</span>
      <h2 class="modal-name">${product.name}</h2>
      <div class="modal-price">
        <span class="modal-price-current">${formatPrice(product.price)}</span>
        ${product.oldPrice ? `<span class="modal-price-old">${formatPrice(product.oldPrice)}</span>` : ''}
      </div>
      <p class="modal-description">Качественная мебель из категории «${product.categoryName}». Идеально подойдёт для создания уютного и стильного интерьера вашего дома. Долговечные материалы и продуманный дизайн.</p>
      <div class="modal-actions">
        <button class="btn btn-primary" style="flex:1" onclick="addToCart(${product.id})">В корзину</button>
        <button class="modal-fav-btn ${favorites.includes(product.id) ? 'active' : ''}" data-id="${product.id}" onclick="toggleFavorite(${product.id})" aria-label="В избранное">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="${favorites.includes(product.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
        </button>
      </div>
    </div>
  `;
  modalOverlay.classList.add('active');
  productModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  productModal.classList.remove('active');
  document.body.style.overflow = '';
}

// ===== Auth =====
function openAuth() {
  authModal.classList.add('active');
  authOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAuth() {
  authModal.classList.remove('active');
  authOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

function switchAuthTab(tab) {
  if (tab === 'login') {
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
  } else {
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
  }
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  if (users.some(u => u.email === email)) {
    showToast('Пользователь с таким email уже существует');
    return;
  }

  const user = { name, email, password };
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  currentUser = { name, email };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));

  registerForm.reset();
  updateAuthUI();
  showToast('Аккаунт успешно создан!');
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    showToast('Неверный email или пароль');
    return;
  }

  currentUser = { name: user.name, email: user.email };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));

  loginForm.reset();
  updateAuthUI();
  showToast('Вы вошли в аккаунт');
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem('currentUser');
  switchAuthTab('login');
  updateAuthUI();
  showToast('Вы вышли из аккаунта');
}

function updateAuthUI() {
  if (currentUser) {
    // Show profile view
    authTabs.style.display = 'none';
    loginForm.classList.remove('active');
    registerForm.classList.remove('active');
    authProfile.classList.add('active');
    document.getElementById('authProfileName').textContent = currentUser.name;
    document.getElementById('authProfileEmail').textContent = currentUser.email;
    document.getElementById('authAvatar').textContent = currentUser.name.charAt(0);
    accountBtn.classList.add('logged-in');
  } else {
    authTabs.style.display = 'flex';
    authProfile.classList.remove('active');
    switchAuthTab('login');
    accountBtn.classList.remove('logged-in');
  }
}

function addToRecentlyViewed(productId) {
  // Remove if already exists, then add to front
  recentlyViewed = recentlyViewed.filter(id => id !== productId);
  recentlyViewed.unshift(productId);
  if (recentlyViewed.length > MAX_RECENT) {
    recentlyViewed = recentlyViewed.slice(0, MAX_RECENT);
  }
  localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
  renderRecentlyViewed();
}

function renderRecentlyViewed() {
  const recentProducts = recentlyViewed.map(id => products.find(p => p.id === id)).filter(Boolean);
  if (recentProducts.length === 0) {
    recentlyViewedSection.style.display = 'none';
    return;
  }
  recentlyViewedSection.style.display = 'block';
  recentlyViewedGrid.innerHTML = recentProducts.map(p => `
    <div class="recent-card" onclick="openProductModal(${p.id})">
      <img src="${p.image}" alt="${p.name}">
      <div class="recent-card-info">
        <div class="recent-card-name">${p.name}</div>
        <div class="recent-card-price">${formatPrice(p.price)}</div>
      </div>
    </div>
  `).join('');
}

// Save Cart to LocalStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Update Cart UI
function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = totalItems;
  cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
  cartTotal.textContent = formatPrice(totalPrice);

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
        <p>Корзина пуста</p>
      </div>
    `;
    cartFooter.style.display = 'none';
  } else {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-info">
          <h4 class="cart-item-name">${item.name}</h4>
          <p class="cart-item-price">${formatPrice(item.price)}</p>
          <div class="cart-item-actions">
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
            <span class="cart-item-quantity">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Удалить">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `).join('');
    cartFooter.style.display = 'block';
  }
}

// Open Cart
function openCart() {
  cartSidebar.classList.add('active');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close Cart
function closeCart() {
  cartSidebar.classList.remove('active');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Show Toast
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 3000);
}

// Close cart on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCart();
    closeFavorites();
    closeSearch();
    closeModal();
    closeAuth();
    mobileNav.classList.remove('active');
  }
});
