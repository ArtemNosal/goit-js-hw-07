// Завдання 1
const categories = document.querySelectorAll("#categories .item");

console.log(`Кількість категорій: ${categories.length}`);

categories.forEach(category => {
  const title = category.querySelector("h2").textContent;
  const items = category.querySelectorAll("ul li").length;
  console.log(`Категорія: ${title}, Кількість елементів: ${items}`);
});

// Завдання 2
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector(".gallery");
const galleryItems = images.map(({ url, alt }) => {
  const listItem = document.createElement("li");
  const img = document.createElement("img");
  img.src = url;
  img.alt = alt;
  listItem.appendChild(img);
  return listItem;
});

gallery.append(...galleryItems);

// Завдання 3
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  const trimmedName = nameInput.value.trim();
  nameOutput.textContent = trimmedName || "Anonymous";
});

// Завдання 4
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Забороняємо перезавантаження сторінки

  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log("Form submitted with data:", formData);
  loginForm.reset(); // Очистити форму після успішної відправки
});

