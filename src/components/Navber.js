const Header = document.getElementById("Nav");
Header.classList.add(
  "flex",
  "items-center",
  "justify-between",
  "bg-light",
  "shadow-lg",
  "py-4",
  "px-12",
  "border-b",
  "border-gray-200",
  "text-gray-900",
  "h-16",
  "w-full",
  "position-fixed",
  "top-0",
  "z-100"
);

// create Logo
const Logo = document.createElement("div");
const CreateImg = document.createElement("img");
const CreateA = document.createElement("a");

CreateImg.src = "/src/assect/Logo.png";
CreateA.appendChild(CreateImg);
CreateA.href = "/index.html";
CreateA.classList.add("text-3xl", "font-bold");
Logo.appendChild(CreateA);
Header.appendChild(Logo);

// create navigator
const createNav = document.createElement("nav");
createNav.classList.add("flex", "items-center");
Header.appendChild(createNav);

// create Nav Items
const NavItems = [
  { text: "Home", href: "#" },
  { text: "About", href: "#" },
  { text: "Services", href: "#" },
  { text: "Feature", href: "#" },
  { text: "Product", href: "#" },
  { text: "Testimonial", href: "#" },
  { text: "FAQ", href: "#" },
];

const Nav = document.createElement("ul");
Nav.classList.add("flex", "space-x-4");
createNav.appendChild(Nav);

NavItems.forEach((item) => {
  const NavItem = document.createElement("li");
  const NavLink = document.createElement("a");
  NavLink.href = item.href;
  NavLink.textContent = item.text;
  NavItem.appendChild(NavLink);
  Nav.appendChild(NavItem);
});

createNav.appendChild(Nav);

// create Login and Sign Up buttons
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("flex", "space-x-4");

const loginButton = document.createElement("button");
loginButton.textContent = "Login";
loginButton.classList.add(
  "px-4",
  "py-2",
  "text-green-500",
  "hover:text-green-600",
  "bg-transparent",
  "rounded",
  "cursor-pointer"
);

const signUpButton = document.createElement("button");
signUpButton.textContent = "Sign Up";
signUpButton.classList.add(
  "px-4",
  "py-2",
  "text-white",
  "bg-green-500",
  "rounded",
  "hover:bg-green-600",
  "cursor-pointer"
);

buttonContainer.appendChild(loginButton);
buttonContainer.appendChild(signUpButton);

Header.appendChild(buttonContainer);

// create menubarButton
const MenuButton = document.createElement("button");
MenuButton.textContent = "Menu";
MenuButton.classList.add(
  "flex",
  "items-center",
  "justify-center",
  "text-gray-900",
  "hover:text-gray-800",
  "border",
  "border-gray-200",
  "rounded",
  "p-2",
  "cursor-pointer",
  "text-black",
  "hidden",
  "md:block",
  "transition",
  "duration-300",
  "transform",
  "scale-100",
  "hover:scale-120"
);

const MenuIcon = document.createElement("svg");
MenuIcon.classList.add("h-6", "w-6", "fill-current");
MenuIcon.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`;

MenuButton.appendChild(MenuIcon);
