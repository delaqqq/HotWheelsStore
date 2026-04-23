// ========== ТОВАРИ З КАТЕГОРІЯМИ ТА ОПИСАМИ ==========
const toysCatalog = [
    { id: 1, name: "Машинка-позашляховик Hot Wheels Monster Trucks Bone Shaker HWN86-89", price: 599, category: "Машинки", img: "https://hot-wheels.com.ua/system/0312/0464/1.jpg", description: "Класична модель Hot Wheels з черепом. Металевий кузов.", material: "Метал, пластик", age: "3+", country: "Китай", features: "Світіння в темряві" },
    { id: 2, name: "Тематична машинка Hot Wheels Silver Series Twin Mill III JKY47-JKY51", price: 219, category: "Машинки", img: "https://hot-wheels.com.ua/system/0384/0431/17.jpg", description: "Два двигуни, агресивний дизайн.", material: "Пластик, метал", age: "4+", country: "Китай", features: "Двигуни обертаються" },
    { id: 3, name: "Трек Hot Wheels Чемпіон кола серії Змагання за кубок Чемпіона GJM75", price: 890, category: "Автомобільні треки", img: "https://hot-wheels.com.ua/system/0347/7855/01.jpg", description: "Довгий трек з петлею, 2 машинки в комплекті.", material: "Пластик", age: "5+", country: "Китай", features: "Легке складання" },
    { id: 4, name: "Контейнер для машинок Hot Wheels Mattel HWCC2-23B", price: 1250, category: "Гаражи та контейнери", img: "https://hot-wheels.com.ua/system/0333/5786/HWCC2-23B-1.jpg", description: "контейнер для 18 машинок ідеально підходить для зберігання іграшок вашого малюка.", material: "Пластик", age: "4+", country: "Китай", features: "Звукові ефекти" },
    { id: 5, name: "Колекційна машинка-конструктор Hot Wheels Brick Shop Elite Custom '62 Chevy Pickup 858 деталей JFT20'", price: 1200, category: "Конструктори", img: "https://hot-wheels.com.ua/system/0371/6377/1.jpg", description: "Справжнє втілення американської класики. Дверцята, регульована підвіска і серфборд в кузові надають моделі характеру.", material: "метал", age: "10+", country: "Китай", features: "Сумісний з LEGO" },
    { id: 6, name: "Автомобіль на радіокеруванні Hot Wheels Lamborghini Revuelto Mattel HWW55", price: 1599, category: "Машинки на радіоуправлінні", img: "https://hot-wheels.com.ua/system/0377/6756/2.jpg", description: "Автомобіль на радіокеруванні Hot Wheels Lamborghini Revuelto Mattel HWW55 – культові автомобілі Hot Wheels, які дозволяють дітям сидіти за кермом, дозволяючи їм контролювати швидкість та навігацію у необмежених пригодах. Кожна машина постачається із контролером.", material: "Пластик, гума", age: "5+", country: "Таїланд", features: "На радіокеруванні" },
    { id: 7, name: "Подарунковий набір з 3-х автомобілів Hot Wheels в асортименті K5904", price: 349, category: "Машинки", img: "https://hot-wheels.com.ua/system/0291/3779/1.jpg", description: "Потрійні розваги для хлопців із набором із 3-х базових машинок Hot Wheels. Набір представлений в асортименті. Це буде найкращим подарунком для справжнього гонщика для поповнення колекції машинок та нескінченної гонки. Колекціонуй та запрошуй друзів до гри!", material: "Сталь", age: "3+", country: "Китай", features: "3 машинки в комплекті" },
    { id: 8, name: "Колекційний болід Hot Wheels Team McLaren Formula 1 HRV11-JKD81", price: 699, category: "Машинки", img: "https://hot-wheels.com.ua/system/0379/5716/17.jpg", description: "Колекційний болід Hot Wheels Team McLaren Formula 1 HRV11-JKD81 - болід з литим корпусом, виконаний у масштабі 1:64, оснащений колесами Real Riders і має металевий корпус та шасі (Metal/Metal).", material: "Металл", age: "14+", country: "Китай", features: "Formula 1" },
    { id: 9, name: "Автомобиль базовий Hot Wheels Metro Small Bloc HYW65-N521", price: 148, category: "Машинки", img: "https://hot-wheels.com.ua/system/0379/5716/17.jpg", description: "Автомобіль базовий Hot Wheels Metro Small Bloc HYW65-N521 – це барвиста та деталізована модель автомобіля, є однією з колекційних моделей, яка відома своєю високою якістю та реалістичним виконанням.", material: "Металл", age: "3-8", country: "Таиланд", features: "Formula 1" },
    { id: 10, name: "Трек Hot Wheels Випробування гіперпетлі HTK16", price: 3228, category: "Автомобільні треки", img: "https://hot-wheels.com.ua/system/0347/7865/01.jpg", description: "Трек Hot Wheels Випробування гіперпетлі HTK16 – у цьому динамічному наборі можна грати двома способами: запуск машинки петель-бумеранг для повторної гонки або стрибки та заробляння балів. Обидва варіанти відправляють автомобілі через епічні петлі та повороти, що викликають хвилювання на високій швидкості.", material: "Пластик, Метал", age: "4+", country: "Таиланд", features: "Пусковий механізм спуску" },
    { id: 11, name: "Ігровий набір Hot Wheels Автомийка HDP05", price: 2013, category: "Автомобільні треки", img: "https://hot-wheels.com.ua/system/0260/3276/__75645.jpg", description: "Під'їжджайте до вежі автомийки та покрутіть ручку, щоб підняти машинку спіраллю. Нагорі розміщено два резервуари, які розпорошують гарячу та холодну воду на машинку серії \"Зміни колір\", магічно змінюючи її забарвлення.", material: "Пластик", age: "4+", country: "В'єтнам", features: "Пусковий механізм спуску" },
    { id: 12, name: "Контейнер для машинок Hot Wheels Car Storage Case HWCC18", price: 899, category: "Гаражи та контейнери", img: "https://hot-wheels.com.ua/system/0299/9485/1.jpg", description: "Зручний металевий контейнер у формі колеса для зберігання та транспортування вашої колекції машинок Hot Wheels. У ньому можна розмістити до 29 машинок різних розмірів завдяки спеціально розробленим відділенням та універсальній конструкції.", material: "Пластик", age: "4+", country: "Китай", features: "Має унікальний дизайн" },
];

// ========== ГЛОБАЛЬНІ ЗМІННІ ==========
let currentUser = null;
let currentCart = [];
let currentCategory = "all";
let searchTerm = "";

// ========== ФІЛЬТРАЦІЯ ТА ВІДОБРАЖЕННЯ ==========
function getFilteredProducts() {
    return toysCatalog.filter(p => {
        const matchCategory = currentCategory === "all" || p.category === currentCategory;
        const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchCategory && matchSearch;
    });
}

function renderCatalog() {
    const container = document.getElementById('catalog');
    if(!container) return;
    const filtered = getFilteredProducts();
    if(filtered.length === 0) {
        container.innerHTML = "<p style='text-align:center; padding:40px;'>Товарів не знайдено</p>";
        return;
    }
    container.innerHTML = filtered.map(p => `
        <div class="product-card" onclick="openProductModal(${p.id})">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <div class="price">${p.price} ₴</div>
            <button onclick="event.stopPropagation(); addToCart(${p.id})">В кошик</button>
        </div>
    `).join('');
}

function setCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('#categoriesList li').forEach(li => {
        if(li.getAttribute('data-category') === cat) li.classList.add('active');
        else li.classList.remove('active');
    });
    renderCatalog();
}

function updateSearch() {
    searchTerm = document.getElementById('searchInput')?.value || "";
    renderCatalog();
}

// ========== ОПИС ТОВАРУ (МОДАЛКА) ==========
function openProductModal(id) {
    const product = toysCatalog.find(p => p.id === id);
    if(!product) return;
    const modal = document.getElementById('productModal');
    const body = document.getElementById('productModalBody');
    body.innerHTML = `
        <img src="${product.img}" style="width:100%; border-radius:10px;">
        <h2>${product.name}</h2>
        <p><strong>Ціна:</strong> ${product.price} ₴</p>
        <p><strong>Категорія:</strong> ${product.category}</p>
        <p><strong>Опис:</strong> ${product.description}</p>
        <p><strong>Матеріал:</strong> ${product.material}</p>
        <p><strong>Вік:</strong> ${product.age}</p>
        <p><strong>Країна:</strong> ${product.country}</p>
        <p><strong>Особливості:</strong> ${product.features}</p>
        <button class="btn-main" style="margin-top:15px;" onclick="addToCart(${product.id}); closeProductModal();">Додати в кошик</button>
    `;
    modal.style.display = 'flex';
}
function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
}

// ========== КОШИК ==========
function getCartKey() { return currentUser ? `cart_${currentUser.username}` : null; }
function saveCart() { if(currentUser) localStorage.setItem(getCartKey(), JSON.stringify(currentCart)); }
function loadCart() {
    if(currentUser) {
        const saved = localStorage.getItem(getCartKey());
        currentCart = saved ? JSON.parse(saved) : [];
    } else currentCart = [];
    updateCartCounter();
}
function updateCartCounter() {
    const badges = document.querySelectorAll('#cartCount');
    badges.forEach(b => { if(b) b.innerText = currentCart.length; });
    if(currentUser) saveCart();
    if(document.getElementById('cartPageItems')) renderCartPage();
}
function addToCart(id) {
    if(!currentUser) { alert("Увійдіть або зареєструйтесь"); openAuthModal(); return; }
    const item = toysCatalog.find(p => p.id === id);
    if(item) { currentCart.push({...item}); updateCartCounter(); alert(`${item.name} додано до кошика`); }
}
function removeFromCart(index) { currentCart.splice(index,1); updateCartCounter(); }

function renderCartPage() {
    const container = document.getElementById('cartPageItems');
    if(!container) return;
    if(currentCart.length === 0) {
        container.innerHTML = `<div class="empty-cart"><i class="fas fa-box-open"></i><p>Кошик порожній</p><a href="catalog.html" class="btn-main">Перейти до каталогу</a></div>`;
        document.getElementById('totalPrice').innerText = '0';
        if(document.getElementById('cartTotalCount')) document.getElementById('cartTotalCount').innerText = '0';
        return;
    }
    container.innerHTML = currentCart.map((item, idx) => `
        <div class="cart-item">
            <div class="cart-item-info">
                <img class="cart-item-img" src="${item.img}" alt="${item.name}">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-price">${item.price} ₴</span>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${idx})"><i class="fas fa-trash-alt"></i></button>
        </div>
    `).join('');
    const total = currentCart.reduce((s,i)=>s+i.price,0);
    document.getElementById('totalPrice').innerText = total;
    if(document.getElementById('cartTotalCount')) document.getElementById('cartTotalCount').innerText = currentCart.length;
}

function openOrderModal() {
    if(!currentUser) { alert("Авторизуйтесь для оформлення замовлення"); openAuthModal(); return; }
    if(currentCart.length === 0) { alert("Кошик порожній"); return; }
    document.getElementById('orderModal').style.display = 'flex';
}
function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
}
function submitOrder(e) {
    e.preventDefault();
    const name = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    if(!name || !address || !phone) { alert("Заповніть всі поля"); return; }
    const order = {
        id: Date.now(),
        user: currentUser.username,
        date: new Date().toLocaleString(),
        items: [...currentCart],
        total: currentCart.reduce((s,i)=>s+i.price,0),
        delivery: { name, address, phone, payment: document.getElementById('payment').value }
    };
    let orders = JSON.parse(localStorage.getItem(`orders_${currentUser.username}`)) || [];
    orders.push(order);
    localStorage.setItem(`orders_${currentUser.username}`, JSON.stringify(orders));
    alert(`Дякуємо! Замовлення №${order.id} прийнято. Менеджер зв'яжеться з вами.`);
    currentCart = [];
    updateCartCounter();
    closeOrderModal();
    renderCartPage();
}

// ========== АВТОРИЗАЦІЯ ==========
function loadUsers() { return JSON.parse(localStorage.getItem('hotwheels_users')) || [{ username: "admin", password: "admin123" }]; }
function saveUsers(users) { localStorage.setItem('hotwheels_users', JSON.stringify(users)); }
function openAuthModal() { document.getElementById('authModal').style.display = 'flex'; }
function closeAuthModal() { document.getElementById('authModal').style.display = 'none'; }
function processLogin() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    const users = loadUsers();
    const user = users.find(u => u.username === username && u.password === password);
    if(user) {
        currentUser = user;
        localStorage.setItem('hotwheels_current_user', JSON.stringify(currentUser));
        loadCart();
        updateUserUI();
        closeAuthModal();
        alert(`Вітаємо, ${username}!`);
        renderCatalog();
    } else alert("Невірний логін або пароль");
}
function processRegister() {
    const username = document.getElementById('regUsername').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirm = document.getElementById('regConfirm').value;
    if(!username || !password) { alert("Заповніть поля"); return; }
    if(password !== confirm) { alert("Паролі не співпадають"); return; }
    const users = loadUsers();
    if(users.find(u => u.username === username)) { alert("Користувач існує"); return; }
    users.push({ username, password });
    saveUsers(users);
    currentUser = { username, password };
    localStorage.setItem('hotwheels_current_user', JSON.stringify(currentUser));
    currentCart = [];
    updateCartCounter();
    updateUserUI();
    closeAuthModal();
    alert("Реєстрація успішна!");
    renderCatalog();
}
function logout() {
    currentUser = null;
    localStorage.removeItem('hotwheels_current_user');
    currentCart = [];
    updateCartCounter();
    updateUserUI();
    alert("Ви вийшли");
    renderCatalog();
}
function updateUserUI() {
    const greeting = document.getElementById('userGreeting');
    const logoutBtn = document.getElementById('logoutBtn');
    const loginBtn = document.getElementById('loginBtn');
    if(currentUser) {
        if(greeting) greeting.innerText = currentUser.username;
        if(logoutBtn) logoutBtn.style.display = 'inline-block';
        if(loginBtn) loginBtn.style.display = 'none';
    } else {
        if(greeting) greeting.innerText = '';
        if(logoutBtn) logoutBtn.style.display = 'none';
        if(loginBtn) loginBtn.style.display = 'inline-block';
    }
}

// ========== ІНІЦІАЛІЗАЦІЯ КАТЕГОРІЙ ==========
function initCategories() {
    const categoriesList = document.getElementById('categoriesList');
    if(!categoriesList) return;
    const uniqueCategories = ["all", ...new Set(toysCatalog.map(p => p.category))];
    categoriesList.innerHTML = uniqueCategories.map(cat => `
        <li data-category="${cat}" class="${cat === 'all' ? 'active' : ''}">
            ${cat === 'all' ? 'Всі товари' : cat}
        </li>
    `).join('');
    document.querySelectorAll('#categoriesList li').forEach(li => {
        li.addEventListener('click', () => setCategory(li.getAttribute('data-category')));
    });
}

// ========== ПОПУЛЯРНІ НА ГОЛОВНІЙ ==========
function displayFeatured() {
    const grid = document.getElementById('featuredGrid');
    if(grid) {
        const popular = toysCatalog.slice(0,4);
        grid.innerHTML = popular.map(p => `
            <div class="product-card" onclick="openProductModal(${p.id})">
                <img src="${p.img}">
                <h3>${p.name}</h3>
                <div class="price">${p.price} ₴</div>
                <button onclick="event.stopPropagation(); addToCart(${p.id})">В кошик</button>
            </div>
        `).join('');
    }
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('hotwheels_current_user');
    if(saved) { currentUser = JSON.parse(saved); loadCart(); updateUserUI(); }
    else updateUserUI();

    if(document.getElementById('catalog')) {
        initCategories();
        renderCatalog();
        const searchInput = document.getElementById('searchInput');
        if(searchInput) searchInput.addEventListener('input', updateSearch);
    }
    if(document.getElementById('featuredGrid')) displayFeatured();
    if(document.getElementById('cartPageItems')) renderCartPage();

    document.getElementById('loginBtn')?.addEventListener('click', openAuthModal);
    document.getElementById('logoutBtn')?.addEventListener('click', logout);
    document.getElementById('checkoutBtn')?.addEventListener('click', openOrderModal);
    document.getElementById('orderForm')?.addEventListener('submit', submitOrder);

    window.onclick = (e) => {
        if(e.target.classList.contains('modal')) e.target.style.display = 'none';
    };
    function switchAuthTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const btns = document.querySelectorAll('.tab-btn');
    btns.forEach(btn => {
        if (btn.getAttribute('data-tab') === tab) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    if (tab === 'login') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    } else {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
    }
}

// Додати обробники на кнопки вкладок
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchAuthTab(btn.getAttribute('data-tab')));
});
});