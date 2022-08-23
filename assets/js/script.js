const nav = document.querySelector("#nav");

const navDats = [
  {
    title: "Home",
    link: "index.html",
    children: [],
  },
  {
    title: "left sidebar",
    link: "left-sidebar.html",
    children: [],
  },
  {
    title: "Right Sidebar",
    link: "right-sidebar.html",
    children: [],
  },
  {
    title: "no-sidebar",
    link: "no-sidebar.html",
    children: [],
  },
  {
    title: "Dropdown",
    link: "#",
    children: [
      { title: "Lorem ipsum dolor", link: "#" },
      { title: "Magna phasellus", link: "#" },
      { title: "Etiam dolore nisl", link: "#" },
    ],
  },
];

function createUl(listItems, container) {
  const navUl = document.createElement("ul");
  listItems.forEach((el, index) => {
    const navLi = document.createElement("li");

    if (index == 0) {
      navLi.classList.add("current");
    }

    const navA = document.createElement("a");
    navA.setAttribute("href", el.link);
    navA.textContent = el.title;
    navLi.appendChild(navA);
    navUl.appendChild(navLi);
    if (el.children && el.children.length) {
      console.log("sd");
      //   el.children; // data
      //   navLi; //li
      createUl(el.children, navLi);
    }
  });
  container.appendChild(navUl);
}
createUl(navDats, nav);

const data = [
  {
    section: "first",
    title: "Ipsum consequat",
    description:
      "Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.",
    icon: ["icon", "solid", "featured", "fa-cog"],
  },
  {
    section: "second",
    title: "Magna etiam dolor",
    description:
      "Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.",
    icon: ["icon", "solid", "featured", "alt", "fa-bolt"],
  },
  {
    section: "third",
    title: "Tempus adipiscing",
    description:
      "Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.",
    icon: ["icon", "solid", "featured", "alt2", "fa-star"],
  },
];
const intorRow = document.querySelector("#intro .row");
function createIntroCol(data) {
  data.forEach((el) => {
    const col = document.createElement("div");
    col.classList.add("col-4");

    const section = document.createElement("section");
    section.classList.add(el.section);

    const icons = document.createElement("i");
    if (el.icon && el.icon.length) {
      el.icon.forEach((i) => {
        icons.classList.add(i);
      });
    }

    const header = document.createElement("header");

    const h2 = document.createElement("h2");
    h2.textContent = el.title;

    const p = document.createElement("p");
    p.textContent = el.description;

    intorRow.appendChild(col);
    col.appendChild(section);
    section.appendChild(icons);
    section.appendChild(header);
    section.appendChild(p);
    header.appendChild(h2);
  });
}

createIntroCol(data);
