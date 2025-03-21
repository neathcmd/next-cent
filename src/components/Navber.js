const Header = document.getElementById("Nav");
Header.classList.add(
  "flex",
  "items-center",
  "justify-between",
  "bg-white",
  "shadow-lg",
  "py-4",
  "px-4",
  "md:px-12",
  "border-b",
  "border-gray-200",
  "text-gray-900",
  "w-full",
  "fixed",
  "top-0",
  "z-50"
);

// Create Logo
const Logo = document.createElement("div");
const CreateImg = document.createElement("img");
const CreateA = document.createElement("a");

CreateImg.src = "/src/assect/Logo.png";
CreateImg.alt = "Logo";
CreateImg.classList.add("h-10", "w-auto");
CreateA.appendChild(CreateImg);
CreateA.href = "/index.html";
CreateA.classList.add("flex", "items-center");
Logo.appendChild(CreateA);
Header.appendChild(Logo);

// Create navigator container
const createNav = document.createElement("nav");
createNav.classList.add(
  "hidden",
  "md:flex",
  "items-center",
  "w-full",
  "md:w-auto",
  "absolute",
  "md:static",
  "top-16",
  "left-0",
  "bg-white",
  "md:bg-transparent",
  "flex-col",
  "md:flex-row",
  "p-4",
  "md:p-0",
  "shadow-md",
  "md:shadow-none"
);
Header.appendChild(createNav);

// Create Nav Items
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
Nav.classList.add(
  "flex",
  "flex-col",
  "md:flex-row",
  "space-y-4",
  "md:space-y-0",
  "md:space-x-6",
  "w-full"
);

NavItems.forEach((item) => {
  const NavItem = document.createElement("li");
  const NavLink = document.createElement("a");
  NavLink.href = item.href;
  NavLink.textContent = item.text;
  NavLink.classList.add(
    "hover:text-green-500",
    "transition",
    "duration-200",
    "text-center",
    "md:text-left"
  );
  NavItem.appendChild(NavLink);
  Nav.appendChild(NavItem);
});

createNav.appendChild(Nav);

// Create Login and Sign Up buttons
const buttonContainer = document.createElement("div");
buttonContainer.classList.add(
  "flex",
  "flex-col",
  "md:flex-row",
  "space-y-4",
  "md:space-y-0",
  "md:space-x-4",
  "mt-4",
  "md:mt-0",
  "w-full",
  "md:w-auto"
);

const loginButton = document.createElement("button");
loginButton.textContent = "Login";
loginButton.classList.add(
  "px-4",
  "py-2",
  "text-green-500",
  "hover:text-green-600",
  "bg-transparent",
  "rounded",
  "cursor-pointer",
  "w-full",
  "md:w-auto",
  "transition",
  "duration-200"
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
  "cursor-pointer",
  "w-full",
  "md:w-auto",
  "transition",
  "duration-200"
);

buttonContainer.appendChild(loginButton);
buttonContainer.appendChild(signUpButton);
createNav.appendChild(buttonContainer);

// Create menu button for mobile
const MenuButton = document.createElement("button");
MenuButton.classList.add(
  "md:hidden",
  "flex",
  "items-center",
  "justify-center",
  "text-gray-900",
  "hover:text-gray-800",
  "p-2",
  "cursor-pointer",
  "transition",
  "duration-300"
);

const MenuIcon = document.createElement("svg");
MenuIcon.classList.add("h-6", "w-6", "fill-current");
MenuIcon.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
  </svg>
`;

MenuButton.appendChild(MenuIcon);
Header.appendChild(MenuButton);

// Toggle mobile menu
let isMenuOpen = false;
MenuButton.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    createNav.classList.remove("hidden");
    createNav.classList.add("flex");
    MenuIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
      </svg>
    `;
  } else {
    createNav.classList.add("hidden");
    createNav.classList.remove("flex");
    MenuIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
      </svg>
    `;
  }
});

// Close mobile menu when window is resized above md breakpoint
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768 && isMenuOpen) {
    createNav.classList.add("hidden");
    createNav.classList.remove("flex");
    isMenuOpen = false;
    MenuIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
      </svg>
    `;
  }
});