// DOM
const $slider = document.querySelector(".slider__wrapper");
const $menuItems = document.querySelectorAll(".nav__menu-item");
const $currentProductImg = document.querySelector(".product__img");
const $currentProductName = document.querySelector(".product__name");
const $currentProductPrice = document.querySelector(".product__price");
const $currentProductDesc = document.querySelector(".product__description");
const $currentProductVariants = document.querySelector(".product__variants");
const $currentProductSizes = document.querySelector(".product__sizes");

const products = [
  {
    id: 1,
    title: "Air Forces",
    price: 119,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab blanditiis dignissimos temporibus asperiores! Amet.",
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
    sizes: [42, 43, 44],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet saepe quo molestias? adipisicing elit. Eveniet.",
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
    sizes: [41, 42, 43, 44],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi. adipisicing elit. Eveniet.",
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
    sizes: [42, 43, 44],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, laborum qui? adipisicing elit.",
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
    sizes: [42, 43, 44],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, quis. adipisicing elit. Eveniet.",
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
    sizes: [42, 43, 44],
  },
];

// state
let currentProduct = products[0];

// functions
function changeProductDOM(product) {
  $currentProductImg.src = product.colors[0].img;
  $currentProductName.innerText = product.title;
  $currentProductPrice.innerText = `$${product.price}`;
  $currentProductDesc.innerText = product.desc;
  // creating variants
  let colorsHTML = ``;
  product.colors.forEach((color) => {
    colorsHTML += `<div class="color" style='background-color:${color.code}'></div>`;
  });

  // creating sizes
  let sizesHTML = ``;
  product.sizes.forEach((size) => {
    sizesHTML += `<div class="size">${size}</div>`;
  });

  $currentProductVariants.innerHTML = colorsHTML;
  $currentProductSizes.innerHTML = sizesHTML;
}

function changeProductVariantImg(productVariantImg) {
  $currentProductImg.src = productVariantImg;
}

function addVariantsListeners() {
  $currentProductColors = $currentProductVariants.querySelectorAll(".color");

  $currentProductColors.forEach((color, idx) => {
    color.addEventListener("click", () => {
      const productVariantImg = currentProduct.colors[idx].img;
      changeProductVariantImg(productVariantImg);
    });
  });
}

function addSizesListeners() {
  $currentProductAvailableSizes =
    $currentProductSizes.querySelectorAll(".size");

  $currentProductAvailableSizes.forEach(($size, idx) => {
    $size.addEventListener("click", () => {
      // remove active class from all sizes
      $currentProductAvailableSizes.forEach(($size) => {
        $size.classList.remove("active");
      });
      // add active class to selected size
      $size.classList.add("active");
    });
  });
}

function updateProduct(product) {
  // change DOM with new product info
  changeProductDOM(product);
  // add listeners to color varients
  addVariantsListeners();
  // add listeners to sizes
  addSizesListeners();
}

// menu items event listener
$menuItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    $slider.style.transform = `translateX(-${idx * 100}vw)`;
    // change current product and product DOM
    currentProduct = products[idx];
    updateProduct(currentProduct);
  });
});

// set to default product on page load
updateProduct(currentProduct);
