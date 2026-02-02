
import { products } from "../data/products";

interface Product {
    id: string | number;
    name: string;
    price: string;
    image: string;
    description?: string;
    category: string;
    tags: string[];
}

interface CartItem extends Product {
    quantity: number;
}

let cart: CartItem[] = [];
let wishlist: (string | number)[] = [];

// --- STATE MANAGEMENT ---
function loadState() {
    cart = JSON.parse(localStorage.getItem("mf_shop_cart") || "[]");
    wishlist = JSON.parse(localStorage.getItem("mf_shop_wishlist") || "[]");
    updateCartUI();
    updateWishlistUI();
}

// --- TOAST FUNCTIONS ---
function showToast(message: string, type: "success" | "error" = "success") {
    const toastContainer = document.getElementById("toast-container");
    if (!toastContainer) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <span class="toast-icon">${type === "success" ? "✅" : "❌"}</span>
            <span class="toast-message">${message}</span>
        </div>
    `;

    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add("show");
    });

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// --- CART FUNCTIONS ---
function updateCartUI() {
    const cartCount = document.getElementById("cart-count");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalEl = document.getElementById("cart-total-price");
    const checkoutBtn = document.querySelector(
        ".checkout-btn",
    ) as HTMLAnchorElement;

    // Update badge
    if (cartCount) {
        const totalItems = cart.reduce(
            (acc, item) => acc + (Number(item.quantity) || 0),
            0,
        );
        cartCount.textContent = totalItems.toString();
    }

    // Render items
    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart-state">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <p class="empty-msg">Tu carrito está vacío</p>
                    <p class="empty-submsg">Descubre nuestros productos y encuentra lo que necesitas</p>
                    <button id="continue-shopping-btn-empty" class="browse-products-btn">
                        Explorar Productos
                    </button>
                </div>
            `;
        } else {
            const getProductDescription = (id: string | number) => {
                const product = products.find((p) => p.id == id);
                return product?.description || "";
            };

            cartItemsContainer.innerHTML = cart
                .map(
                    (item: CartItem) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" />
                <div class="cart-item-info">
                    <h5>${item.name}</h5>
                    <p class="cart-item-desc">${getProductDescription(item.id)}</p>
                    <p class="cart-item-price">${item.price}</p>
                    <div class="quantity-controls">
                        <button class="qty-btn minus" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn plus" data-id="${item.id}">+</button>
                    </div>
                </div>
                 <button class="remove-btn" data-id="${item.id}">&times;</button>
            </div>
        `,
                )
                .join("");
        }
    }

    // Calculate Total
    let total = 0;
    cart.forEach((item) => {
        const priceString = item.price.replace(/[^0-9]/g, "");
        const priceVal = parseInt(priceString);
        if (!isNaN(priceVal)) {
            total += priceVal * item.quantity;
        }
    });

    const totalFormatted = "$" + total.toLocaleString("es-CO");
    if (cartTotalEl) {
        cartTotalEl.textContent = totalFormatted;
    }

    // Save
    localStorage.setItem("mf_shop_cart", JSON.stringify(cart));

    // Update WhatsApp Link
    if (checkoutBtn) {
        if (cart.length > 0) {
            const getProductDescription = (id: string | number) => {
                const product = products.find((p) => p.id == id);
                return product?.description || "";
            };
            const itemsList = cart
                .map(
                    (item) =>
                        `- ${item.quantity}x ${item.name} (${item.price}) - ${getProductDescription(item.id)}`,
                )
                .join("%0A");

            const message = `Hola Mateo, estoy interesado en cotizar los siguientes productos:%0A%0A${itemsList}%0A%0ATotal estimado: ${totalFormatted}`;
            checkoutBtn.href = `https://wa.me/573005059987?text=${message}`;
            checkoutBtn.style.pointerEvents = "auto";
            checkoutBtn.style.opacity = "1";
        } else {
            checkoutBtn.href = "#";
            checkoutBtn.style.pointerEvents = "none";
            checkoutBtn.style.opacity = "0.5";
        }
    }
}

function addToCart(product: Product) {
    const existingItem = cart.find((item) => item.id == product.id);

    if (existingItem) {
        existingItem.quantity += 1;
        showToast(`Se aumentó la cantidad de <b>${product.name}</b>`);
    } else {
        cart.push({ ...product, quantity: 1 });
        showToast(`<b>${product.name}</b> agregado al carrito`);
    }

    updateCartUI();

    // Open cart feedback
    const cartSidebar = document.getElementById("cart-sidebar");
    const cartOverlay = document.getElementById("cart-overlay");
    if (cartSidebar) cartSidebar.classList.add("open");
    if (cartOverlay) cartOverlay.classList.add("open");
    document.body.classList.add("cart-open");
}

function updateQuantity(id: string, change: number) {
    const itemIndex = cart.findIndex((item) => item.id == id);
    if (itemIndex > -1) {
        const newQuantity = cart[itemIndex].quantity + change;
        if (newQuantity > 0) {
            cart[itemIndex].quantity = newQuantity;
        } else {
            cart.splice(itemIndex, 1);
        }
        updateCartUI();
    }
}

function removeFromCart(id: string) {
    cart = cart.filter((item) => item.id != id);
    updateCartUI();
}

// --- WISHLIST FUNCTIONS ---
function toggleWishlist(id: string | number) {
    // loose comparison
    const index = wishlist.findIndex((wId) => wId == id);
    if (index === -1) {
        wishlist.push(id);
        showToast("Agregado a favoritos");
    } else {
        wishlist.splice(index, 1);
        showToast("Eliminado de favoritos");
    }
    localStorage.setItem("mf_shop_wishlist", JSON.stringify(wishlist));
    updateWishlistUI();
}

function updateWishlistUI() {
    document.querySelectorAll(".wishlist-btn").forEach((btn) => {
        const id = btn.getAttribute("data-id");
        if (id && wishlist.some((wId) => wId == id)) {
            btn.classList.add("active");
            btn.querySelector(".heart-icon")?.setAttribute(
                "fill",
                "currentColor",
            );
        } else {
            btn.classList.remove("active");
            btn.querySelector(".heart-icon")?.setAttribute("fill", "none");
        }
    });
}

// --- MODAL FUNCTIONS ---
function openModal(productId: string | number) {
    const product = products.find((p) => p.id == productId);
    const modal = document.getElementById("product-modal");
    const modalImg = document.getElementById(
        "modal-img",
    ) as HTMLImageElement;
    const modalTitle = document.getElementById("modal-title");
    const modalPrice = document.getElementById("modal-price");
    const modalDesc = document.getElementById("modal-description");
    const modalCategory = document.getElementById("modal-category");
    const modalAddBtn = document.getElementById("modal-add-btn");

    if (!product || !modal) return;

    if (modalImg) modalImg.src = product.image;
    if (modalTitle) modalTitle.textContent = product.name;
    if (modalPrice) modalPrice.textContent = product.price;
    if (modalCategory)
        modalCategory.textContent = product.category.toUpperCase();
    if (modalDesc)
        modalDesc.textContent =
            product.description || "Sin descripción disponible.";

    // Update Add Button in Modal
    if (modalAddBtn) {
        // Store product data on the button for delegator
        modalAddBtn.setAttribute("data-id", String(product.id));
        modalAddBtn.setAttribute("data-name", product.name);
        modalAddBtn.setAttribute("data-price", product.price);
        modalAddBtn.setAttribute("data-image", product.image);
        modalAddBtn.setAttribute("data-from-modal", "true");
    }

    modal.classList.add("open");
}

// --- GLOBAL EVENT DELEGATION ---
function handleGlobalClick(e: MouseEvent) {
    const target = e.target as HTMLElement;

    // 1. Add to Cart Button (Card or Modal)
    const addBtn = target.closest(".add-cart-btn, #modal-add-btn");
    if (addBtn) {
        e.preventDefault();
        const product: Product = {
            id: addBtn.getAttribute("data-id") || "",
            name: addBtn.getAttribute("data-name") || "",
            price: addBtn.getAttribute("data-price") || "",
            image: addBtn.getAttribute("data-image") || "",
            category: "",
            tags: [],
        };
        addToCart(product);

        // Close modal if it came from modal
        if (addBtn.id === "modal-add-btn") {
            document
                .getElementById("product-modal")
                ?.classList.remove("open");
        }
        return;
    }

    // 2. Wishlist Button
    const wishBtn = target.closest(".wishlist-btn");
    if (wishBtn) {
        e.preventDefault();
        e.stopPropagation();
        const id = wishBtn.getAttribute("data-id");
        if (id) toggleWishlist(id);
        return;
    }

    // 3. Cart Controls (Plus/Minus/Remove)
    if (target.closest(".qty-btn")) {
        const btn = target.closest(".qty-btn")!;
        const id = btn.getAttribute("data-id");
        if (id) {
            if (btn.classList.contains("plus")) updateQuantity(id, 1);
            else updateQuantity(id, -1);
        }
        return;
    }
    if (target.closest(".remove-btn")) {
        const id = target.closest(".remove-btn")!.getAttribute("data-id");
        if (id) removeFromCart(id);
        return;
    }

    // 4. Cart Toggles
    if (target.closest("#cart-toggle")) {
        document.getElementById("cart-sidebar")?.classList.add("open");
        document.getElementById("cart-overlay")?.classList.add("open");
        document.body.classList.add("cart-open");
        return;
    }
    if (target.closest("#cart-close") || target.closest("#cart-overlay")) {
        document.getElementById("cart-sidebar")?.classList.remove("open");
        document.getElementById("cart-overlay")?.classList.remove("open");
        document.body.classList.remove("cart-open");
        return;
    }

    // 5. Product Card Click (Open Modal) - Ignore if hit existing interaction buttons
    const productCard = target.closest(".product-card");
    if (productCard && !target.closest("button") && !target.closest("a")) {
        const id = productCard.getAttribute("id")?.replace("product-", "");
        if (id) openModal(id);
        return;
    }

    // 6. Modal Close
    if (
        target.closest("#modal-close") ||
        target === document.getElementById("product-modal")
    ) {
        document.getElementById("product-modal")?.classList.remove("open");
        return;
    }

    // 7. Filters
    const filterBtn = target.closest(".filter-btn");
    if (filterBtn) {
        document
            .querySelectorAll(".filter-btn")
            .forEach((b) => b.classList.remove("active"));
        filterBtn.classList.add("active");
        filterProducts();
        return;
    }

    // 8. Continue Shopping
    if (target.closest("#continue-shopping-btn")) {
        document.getElementById("cart-sidebar")?.classList.remove("open");
        document.getElementById("cart-overlay")?.classList.remove("open");
        document.body.classList.remove("cart-open");
        document
            .getElementById("products-grid")
            ?.scrollIntoView({ behavior: "smooth" });
        return;
    }

    // 9. Empty Cart - Browse Products Button
    if (target.closest("#continue-shopping-btn-empty")) {
        document.getElementById("cart-sidebar")?.classList.remove("open");
        document.getElementById("cart-overlay")?.classList.remove("open");
        document.body.classList.remove("cart-open");
        document
            .getElementById("products-grid")
            ?.scrollIntoView({ behavior: "smooth" });
        return;
    }
}

// --- SEARCH ---
function filterProducts() {
    const searchInput = document.getElementById(
        "product-search",
    ) as HTMLInputElement;
    if (!searchInput) return;

    const query = searchInput.value.toLowerCase();
    const activeBtn = document.querySelector(".filter-btn.active");
    const activeCategory = activeBtn
        ? activeBtn.getAttribute("data-filter")
        : "all";

    const productCards = document.querySelectorAll(".product-card");
    let visibleCount = 0;

    productCards.forEach((card) => {
        const name = card.getAttribute("data-name") || "";
        const category = card.getAttribute("data-category") || "";

        const matchQuery = name.includes(query);
        const matchCategory =
            activeCategory === "all" || category === activeCategory;

        if (matchQuery && matchCategory) {
            (card as HTMLElement).style.display = "block";
            visibleCount++;
        } else {
            (card as HTMLElement).style.display = "none";
        }
    });

    const noResults = document.getElementById("no-results");
    if (noResults) {
        noResults.style.display = visibleCount === 0 ? "block" : "none";
    }
}

// --- DEBOUNCE UTILITY ---
function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number,
): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    return function (this: any, ...args: Parameters<T>) {
        const context = this;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// --- KEYBOARD SHORTCUTS ---
function handleKeyboard(e: KeyboardEvent) {
    // ESC to close cart
    if (e.key === "Escape" || e.key === "Esc") {
        const cartSidebar = document.getElementById("cart-sidebar");
        if (cartSidebar?.classList.contains("open")) {
            document
                .getElementById("cart-sidebar")
                ?.classList.remove("open");
            document
                .getElementById("cart-overlay")
                ?.classList.remove("open");
            document.body.classList.remove("cart-open");
        }
        // Close product modal
        const modal = document.getElementById("product-modal");
        if (modal?.classList.contains("open")) {
            modal.classList.remove("open");
        }
    }
}

// --- INITIALIZATION ---
function init() {
    loadState();

    // Debounced search for better performance (300ms delay)
    const searchInput = document.getElementById("product-search");
    if (searchInput) {
        const debouncedFilter = debounce(filterProducts, 300);
        searchInput.removeEventListener("input", filterProducts);
        searchInput.addEventListener("input", debouncedFilter);
    }

    // Add smooth scroll to all internal links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const href = anchor.getAttribute("href");
            if (href && href !== "#") {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }
        });
    });
}

// One-time global listener setup (idempotent checks or just run once)
// Since this script runs on page load, we should remove the old listener if it exists to prevent duplicates on re-navigation if Astro re-runs scripts.
// However, in Astro ViewTransitions, scripts in <script> tags run once unless marked otherwise.
// To be safe, we'll attach to document body.
document.removeEventListener("click", handleGlobalClick);
document.addEventListener("click", handleGlobalClick);

// Keyboard shortcuts
document.removeEventListener("keydown", handleKeyboard);
document.addEventListener("keydown", handleKeyboard);

// Initial load
init();

// Re-run init on navigation
document.addEventListener("astro:after-swap", init);
