let Items = [];

fetch("./Page/data.json")
  .then(response => response.json())
  .then(data => {
    Items = data;
    renderProducts();
  });

const productList = document.querySelector(".product-list");

function createProductCard(item){
    const li = document.createElement("li");
    li.classList.add("card");
    const div = document.createElement("div");
    div.classList.add("container_img");
    const img = document.createElement("img");
    img.classList.add("img_item");
    img.src=item.image.desktop;
    const button = document.createElement("button");
    button.classList.add("add_item");
    const btn_img = document.createElement("img");
    btn_img.classList.add("add_to_cart");
    btn_img.src = "./assets/images/icon-add-to-cart.svg";
    button.append(btn_img, "Add to cart");
    button.addEventListener("click", () => {
        console.log(item);
    });
    div.append(img, button);
    const category = document.createElement("span");
    category.classList.add("type");
    category.textContent = item.category;
    const third_header = document.createElement("h3");
    third_header.textContent = item.name;
    const price_for_one = document.createElement("span");
    price_for_one.classList.add("price");
    price_for_one.textContent = item.price.toFixed(2);
    li.append(div,category, third_header, price_for_one);
    return li;
}

function renderProducts() {
  Items.forEach(item => {
    const card = createProductCard(item);
    productList.append(card);
  });
}