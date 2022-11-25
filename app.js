var email = document.querySelector(".navbar-email");
var desktioMenu = document.querySelector(".desktop-menu");
var menubtn = document.querySelector(".menu");
var mobile = document.querySelector(".mobile-menu");
var carrito = document.querySelector(".navbar-shopping-cart");
var detail = document.querySelector(".product-detail");
var cardContainer = document.querySelector(".cards-container");
email.addEventListener("click", () => {
    /*   const detailClosed = detail.classList.contains("inactive");
    if (!detailClosed) {
      //Si no esta cerrado
      detail.classList.add("inactive");
    } */
    detail.classList.add("inactive");
    desktioMenu.classList.toggle("inactive"); // lo que hacemos es ejecutar la funcion para quitar o poner la clase inactive con el toggle
  
    // Tambien podemos hacerlo con condicionales en la cual hacemos una variable donde mostremos si lo que queremos cerrar esta inactivo
    // const detailClosed = detail.classList.contains("inactive");
    // y hacemos la condicional
    /* if (!detailClosed) {
      //Si no esta cerrado
      detail.classList.add("inactive");
    }  */ //Donde decimos que si la variable que creamos no esta cerrada o no tiene el inactive pues le agregamos el inactive y ahi si luego colocamos el toggle que queremos que se vea
  });
  
  menubtn.addEventListener("click", () => {
    detail.classList.add("inactive");
    mobile.classList.toggle("inactive");
  });
  carrito.addEventListener("click", () => {
    desktioMenu.classList.add("inactive");
    mobile.classList.add("inactive");
    detail.classList.toggle("inactive");
  });
/* const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Compu",
  price: 620,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}); */
var productListsss = [];
productListsss.push({
  name: "bike",
  precio: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productListsss.push({
  name: "Pantalla",
  precio: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productListsss.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
  for (product of productListsss) {
    /* const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    productInfoFigure.appendChild(productImgCart);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardContainer.appendChild(productCard); */
    const htmlCards = ` <div class="product-card">
  <img src=${product.image} >
  <div class="product-info">
    <div>
      <p>$${product.price}</p>
      <p>${product.name}</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div>`
 cardContainer.innerHTML += htmlCards 
  }
