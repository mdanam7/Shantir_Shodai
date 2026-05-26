// ============================================
// Shantir Shodai — Modern E-Commerce
// Clean, modular JS with no external deps
// ============================================

// ---------- Product Data ----------
const products = [
    {
        id: 1, name: "Miniket Rice Premium", category: "groceries", type: "retail",
        unit: "5 kg", price: 320, originalPrice: 380, discount: "16%",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
        rating: 4.8, sold: "12k+", badge: "Best Seller"
    },
    {
        id: 2, name: "Miniket Rice (Wholesale)", category: "groceries", type: "wholesale",
        unit: "50 kg sack", price: 2850, originalPrice: 3200, discount: "11%",
        image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&h=300&fit=crop",
        rating: 4.9, sold: "5k+", badge: "Wholesale"
    },
    {
        id: 3, name: "Fortune Soyabean Oil", category: "groceries", type: "retail",
        unit: "5 liter", price: 720, originalPrice: 780, discount: "8%",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop",
        rating: 4.7, sold: "8k+", badge: "Popular"
    },
    {
        id: 4, name: "Moshur Dal (Red Lentil)", category: "groceries", type: "retail",
        unit: "1 kg", price: 145, originalPrice: 165, discount: "12%",
        image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e3?w=400&h=300&fit=crop",
        rating: 4.6, sold: "6k+", badge: null
    },
    {
        id: 5, name: "Moshur Dal (Wholesale)", category: "groceries", type: "wholesale",
        unit: "25 kg bag", price: 3200, originalPrice: 3750, discount: "15%",
        image: "https://images.unsplash.com/photo-1585996958207-0f9a3d7a28c2?w=400&h=300&fit=crop",
        rating: 4.8, sold: "2k+", badge: "Wholesale"
    },
    {
        id: 6, name: "Samsung Galaxy A54", category: "electronics", type: "retail",
        unit: "8GB/128GB", price: 42990, originalPrice: 48990, discount: "12%",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
        rating: 4.5, sold: "1.2k+", badge: "Hot"
    },
    {
        id: 7, name: "Xiaomi Redmi Note 13", category: "electronics", type: "retail",
        unit: "6GB/128GB", price: 24999, originalPrice: 27999, discount: "11%",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
        rating: 4.6, sold: "3k+", badge: "Trending"
    },
    {
        id: 8, name: "Walton Fridge 250L", category: "electronics", type: "retail",
        unit: "Non-Frost", price: 38500, originalPrice: 42500, discount: "9%",
        image: "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=400&h=300&fit=crop",
        rating: 4.7, sold: "800+", badge: null
    },
    {
        id: 9, name: "Panasonic Rice Cooker", category: "electronics", type: "retail",
        unit: "1.8L", price: 3200, originalPrice: 3800, discount: "16%",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop",
        rating: 4.4, sold: "4k+", badge: "Best Seller"
    },
    {
        id: 10, name: "Men's Panjabi Premium", category: "fashion", type: "retail",
        unit: "Cotton", price: 1250, originalPrice: 1800, discount: "31%",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop",
        rating: 4.5, sold: "2k+", badge: "Sale"
    },
    {
        id: 11, name: "Women's Sharee (Silk Katan)", category: "fashion", type: "retail",
        unit: "With Blouse Piece", price: 3500, originalPrice: 5500, discount: "36%",
        image: "https://images.unsplash.com/photo-1610189013417-ee3e5e3c71e4?w=400&h=300&fit=crop",
        rating: 4.8, sold: "900+", badge: "Premium"
    },
    {
        id: 12, name: "Sharee (Wholesale Lot)", category: "fashion", type: "wholesale",
        unit: "12 pieces", price: 28000, originalPrice: 36000, discount: "22%",
        image: "https://images.unsplash.com/photo-1605763240004-7e93b172d754?w=400&h=300&fit=crop",
        rating: 4.7, sold: "300+", badge: "Wholesale"
    },
    {
        id: 13, name: "Dettol Antiseptic Liquid", category: "household", type: "retail",
        unit: "500ml", price: 185, originalPrice: 210, discount: "12%",
        image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=400&h=300&fit=crop",
        rating: 4.9, sold: "15k+", badge: "Essential"
    },
    {
        id: 14, name: "Surf Excel Washing Powder", category: "household", type: "retail",
        unit: "2 kg", price: 280, originalPrice: 320, discount: "13%",
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop",
        rating: 4.6, sold: "9k+", badge: null
    },
    {
        id: 15, name: "Surf Excel (Wholesale)", category: "household", type: "wholesale",
        unit: "24 pieces", price: 5800, originalPrice: 7200, discount: "19%",
        image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=400&h=300&fit=crop",
        rating: 4.7, sold: "1k+", badge: "Wholesale"
    },
    {
        id: 16, name: "Dove Shampoo", category: "beauty", type: "retail",
        unit: "340ml", price: 320, originalPrice: 380, discount: "16%",
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop",
        rating: 4.5, sold: "5k+", badge: "Popular"
    },
    {
        id: 17, name: "Fair & Lovely Cream", category: "beauty", type: "retail",
        unit: "50g", price: 95, originalPrice: 110, discount: "14%",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
        rating: 4.3, sold: "7k+", badge: null
    },
    {
        id: 18, name: "Johnson's Baby Powder", category: "baby", type: "retail",
        unit: "200g", price: 145, originalPrice: 165, discount: "12%",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=300&fit=crop",
        rating: 4.8, sold: "10k+", badge: "Trusted"
    },
    {
        id: 19, name: "Pampers Baby Diapers", category: "baby", type: "retail",
        unit: "Medium 44pcs", price: 890, originalPrice: 1050, discount: "15%",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        rating: 4.7, sold: "6k+", badge: "Best Seller"
    },
    {
        id: 20, name: "Pampers (Wholesale Box)", category: "baby", type: "wholesale",
        unit: "6 packs", price: 4800, originalPrice: 6000, discount: "20%",
        image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=300&fit=crop",
        rating: 4.8, sold: "800+", badge: "Wholesale"
    }
];

// ---------- State ----------
let cart = [];
let wishlist = [];
let currentCategory = 'all';

// ---------- Render Products ----------
function renderProducts(filter = 'all', containerId = 'productGrid', typeFilter = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let filtered = products;

    if (filter !== 'all') {
        filtered = filtered.filter(p => p.category === filter);
    }
    if (typeFilter) {
        filtered = filtered.filter(p => p.type === typeFilter);
    }

    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) || 
            p.category.toLowerCase().includes(searchTerm)
        );
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 80px 20px; color: var(--text-muted);">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 20px; opacity: 0.2;"></i>
                <h3 style="font-size: 18px; font-weight: 600; color: var(--text-secondary); margin-bottom: 8px;">No products found</h3>
                <p style="font-size: 14px;">Try a different search or category</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map((product, index) => `
        <div class="product-card" style="animation-delay: ${index * 0.04}s">
            ${product.badge ? `<span class="product-badge ${product.type === 'wholesale' ? 'wholesale' : ''}">${product.badge}</span>` : ''}
            <button class="product-wishlist ${wishlist.includes(product.id) ? 'active' : ''}" 
                    onclick="toggleWishlist(${product.id})" 
                    aria-label="Add to wishlist">
                <i class="${wishlist.includes(product.id) ? 'fas' : 'far'} fa-heart"></i>
            </button>
            <img src="${product.image}" 
                 alt="${product.name}" 
                 class="product-img" 
                 loading="lazy"
                 onerror="this.src='https://via.placeholder.com/400x300/e5e7eb/6b7280?text=${encodeURIComponent(product.name)}'">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-unit">${product.unit} · ${product.type === 'wholesale' ? 'পাইকারি' : 'খুচরা'}</div>
                <div class="product-pricing">
                    <span class="price-current">৳${product.price.toLocaleString()}</span>
                    <span class="price-original">৳${product.originalPrice.toLocaleString()}</span>
                    <span class="price-discount">-${product.discount}</span>
                </div>
                <div class="product-meta">
                    <div class="product-rating">
                        <span class="stars"><i class="fas fa-star"></i></span>
                        <span>${product.rating}</span>
                    </div>
                    <div class="product-sold">${product.sold} sold</div>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})" id="btn-${product.id}">
                    <i class="fas fa-plus" style="font-size: 11px;"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// ---------- Category Filter ----------
function filterCategory(category, btn) {
    currentCategory = category;
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(category, 'productGrid');
    renderProducts(category, 'wholesaleGrid', 'wholesale');
}

// ---------- Search ----------
function handleSearch() {
    renderProducts(currentCategory, 'productGrid');
    renderProducts(currentCategory, 'wholesaleGrid', 'wholesale');
}

// ---------- Cart ----------
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    showToast(`${product.name} added to cart`);

    const btn = document.getElementById(`btn-${productId}`);
    if (btn) {
        btn.innerHTML = '<i class="fas fa-check" style="font-size: 11px;"></i> Added';
        btn.classList.add('added');
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-plus" style="font-size: 11px;"></i> Add to Cart';
            btn.classList.remove('added');
        }, 1800);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateQty(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
    }
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const cartCount = document.getElementById('cartCount');
    const cartSidebarCount = document.getElementById('cartSidebarCount');
    if (cartCount) cartCount.textContent = count;
    if (cartSidebarCount) cartSidebarCount.textContent = count;

    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    if (!cartItems || !cartFooter) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-basket"></i>
                <h4>Your cart is empty</h4>
                <p>Add some products to get started</p>
            </div>
        `;
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img" loading="lazy"
                     onerror="this.src='https://via.placeholder.com/80/e5e7eb/6b7280?text=Product'">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">৳${(item.price * item.qty).toLocaleString()}</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="updateQty(${item.id}, -1)" aria-label="Decrease quantity">
                            <i class="fas fa-minus" style="font-size: 9px;"></i>
                        </button>
                        <span style="font-weight: 600; font-size: 13px; min-width: 20px; text-align: center;">${item.qty}</span>
                        <button class="qty-btn" onclick="updateQty(${item.id}, 1)" aria-label="Increase quantity">
                            <i class="fas fa-plus" style="font-size: 9px;"></i>
                        </button>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove item">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        const cartSubtotal = document.getElementById('cartSubtotal');
        const cartTotal = document.getElementById('cartTotal');
        if (cartSubtotal) cartSubtotal.textContent = `৳${subtotal.toLocaleString()}`;
        if (cartTotal) cartTotal.textContent = `৳${subtotal.toLocaleString()}`;
        cartFooter.style.display = 'block';
    }
}

function toggleCart() {
    const overlay = document.getElementById('cartOverlay');
    const sidebar = document.getElementById('cartSidebar');
    if (overlay && sidebar) {
        overlay.classList.toggle('active');
        sidebar.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    }
}

function checkout() {
    if (cart.length === 0) return;
    showToast('Processing your order...');
    setTimeout(() => {
        const summary = cart.map(i => `${i.name} x${i.qty} = ৳${(i.price * i.qty).toLocaleString()}`).join('\n');
        const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
        alert(`Order Summary\n${'='.repeat(30)}\n\n${summary}\n\n${'='.repeat(30)}\nTotal: ৳${total.toLocaleString()}\n\nThis is a demo checkout. In production, this would redirect to a secure payment gateway (bKash/Nagad/Card).`);
    }, 600);
}

// ---------- Wishlist ----------
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist');
    } else {
        wishlist.push(productId);
        showToast('Added to wishlist');
    }
    const wishlistCount = document.getElementById('wishlistCount');
    if (wishlistCount) wishlistCount.textContent = wishlist.length;
    renderProducts(currentCategory, 'productGrid');
    renderProducts(currentCategory, 'wholesaleGrid', 'wholesale');
}

// ---------- Toast ----------
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.add('show');

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ---------- Countdown Timer ----------
function updateTimer() {
    const now = new Date();
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    let diff = end - now;
    if (diff < 0) diff = 0;

    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('minutes');
    const secsEl = document.getElementById('seconds');

    if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(m).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(s).padStart(2, '0');
}

// ---------- Header Scroll Effect ----------
function handleScroll() {
    const header = document.getElementById('mainHeader');
    if (header) {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 200));
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    setInterval(updateTimer, 1000);
    updateTimer();

    renderProducts('all', 'productGrid');
    renderProducts('all', 'wholesaleGrid', 'wholesale');
});

// ---------- Utils ----------
function debounce(fn, ms) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), ms);
    };
}