let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `<li>${item.name} - Rp${item.price} <button onclick='removeFromCart(${index})'>Hapus</button></li>`;
  });
  document.getElementById("cart-total").innerText = `Rp${total}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function checkout() {
  alert("Checkout berhasil!");
  cart = [];
  updateCart();
}
