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
var product = [];
product.push({
  name: "bike",
  precio: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
product.push({
  name: "Pantalla",
  precio: 120,
  image:
    "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
});
product.push({
  name: "Bike",
  precio: 120,
  image:
    "https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__480.jpg",
});

function renderProducts(arr){
  for (productList of product) {
    /*   const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      const img = document.createElement("img");
      img.setAttribute("src", product.image);
      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");
    
      const productInfoDiv = document.createElement("div");
      const productPrice = document.createElement("p");
      productPrice.innerText = "$" + product.precio;
      const productName = document.createElement("p");
      productName.innerText = product.name;
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
      const productFig = document.createElement("figure");
      const producImgCard = document.createElement("img");
      producImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
      productFig.appendChild(producImgCard);
    
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productFig);
    
      productCard.appendChild(img);
      productCard.appendChild(productInfo);
    
      cardContainer.appendChild(productCard); */
      
      const htmlCards = ` <div class="product-card">
      <img src=${productList.image} >
      <div class="product-info">
        <div>
          <p>$${productList.precio}</p>
          <p>${productList.name}</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    </div>`
     cardContainer.innerHTML += htmlCards// esto es igual a  cardContainer.innerHTML = cardContainer.innerHTML +  htmlCards
     // lo que hace el operador += es simplificar para no repetir lo que está antes del igual
    }
    
}
renderProducts(product)
