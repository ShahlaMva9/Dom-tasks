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

const portfolioData = [
  {
    title: "Ipsum feugiat et dolor",
    description:
      "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.",
    image: "images/pic02.jpg",
  },
  {
    title: "Sed etiam lorem nulla",
    description:
      "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.",
    image: "images/pic03.jpg",
  },
  {
    title: "Consequat et tempus",
    description:
      "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.",
    image: "images/pic04.jpg",
  },
  {
    title: "Blandit sed adipiscing",
    description:
      "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.",
    image: "images/pic05.jpg",
  },
  {
    title: "Etiam nisl consequat",
    description:
      "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.",
    image: "images/pic06.jpg",
  },
  {
    title: "Dolore nisl feugiat",
    description:
      "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.",
    image: "images/pic07.jpg",
  },
];
const myPortRow = document.querySelector("#main section .row");

function myPort() {
  portfolioData.forEach((el) => {
    const col = document.createElement("div");
    col.classList.add("col-4");

    const section = document.createElement("section");
    section.setAttribute("class", "box");

    const anchor = document.createElement("a");
    anchor.setAttribute("href", "#");
    anchor.setAttribute("class", "image featured");

    const img = document.createElement("img");
    img.setAttribute("src", el.image);
    img.setAttribute("alt", "");

    const header = document.createElement("header");

    const h3 = document.createElement("h3");
    h3.textContent = el.title;

    const p = document.createElement("p");
    p.textContent = el.description;

    const footer = document.createElement("footer");

    const ul = document.createElement("ul");
    ul.setAttribute("class", "actions");

    const li = document.createElement("li");

    const anchor2 = document.createElement("a");
    anchor2.setAttribute("href", "#");
    anchor2.setAttribute("class", "button alt");
    anchor2.textContent = "Find out more";

    myPortRow.appendChild(col);
    col.appendChild(section);
    section.appendChild(anchor);
    section.appendChild(header);
    section.appendChild(p);
    section.appendChild(footer);
    anchor.appendChild(img);
    header.appendChild(h3);
    footer.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(anchor2);
  });
}
myPort();

const blogData = [
  {
    title: "Magna tempus consequat",
    date: "21.08.2022",
    text: "Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.",
    commentCount: 33,
    link: "blog-1.html",
    image: "images/pic08.jpg",
  },
  {
    title: "Aptent veroeros aliquam",
    date: "22.08.2022",
    text: "Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.",
    commentCount: 63,
    link: "blog-2.html",
    image: "images/pic09.jpg",
  },
];

const blogRow = document.querySelector("#blog-section .row");
console.log(blogRow);
function createblog() {
  blogData.forEach((el) => {
    const col = document.createElement("div");
    col.setAttribute("class", "col-6");

    const section = document.createElement("section");
    section.classList.add("box");

    const anchor = document.createElement("a");
    anchor.setAttribute("href", "#");
    anchor.setAttribute("class", "image featured");

    const img = document.createElement("img");
    img.setAttribute("src", el.image);
    img.setAttribute("alt", "");

    const header = document.createElement("header");

    const h3 = document.createElement("h3");
    h3.textContent = el.title;

    const p = document.createElement("p");
    p.textContent = el.date;

    const p2 = document.createElement("p");
    p2.textContent = el.text;

    const footer = document.createElement("footer");

    const ul = document.createElement("ul");
    ul.classList.add = "actions";

    const li = document.createElement("li");

    const a2 = document.createElement("a");
    a2.setAttribute("href", el.link);
    a2.setAttribute("class", "button icon solid fa-file-alt");
    a2.textContent = "Continue Reading";

    const li2 = document.createElement("li");
    const a3 = document.createElement("a");
    a3.setAttribute("href", el.link);
    a3.setAttribute("class", "button alt icon solid fa-comment");
    a3.textContent = `${el.commentCount} comments`;

    blogRow.appendChild(col);
    col.appendChild(section);
    section.appendChild(anchor);
    section.appendChild(header);
    section.appendChild(p2);
    section.appendChild(footer);
    anchor.appendChild(img);
    header.appendChild(h3);
    header.appendChild(p);
    footer.appendChild(ul);
    ul.appendChild(li);
    ul.appendChild(li2);
    li.appendChild(a2);
    li2.appendChild(a3);
  });
}
createblog();

const socialLink = document.querySelector("#social-section .social ");

const socialLinks = [
  {
    icon: "facebook-f",
    name: "Facebook",
    link: "https://www.facebook.com",
  },
  {
    icon: "twitter",
    name: "Twitter",
    link: "https://www.twitter.com",
  },
  {
    icon: "dribbble",
    name: "Dribbble",
    link: "https://www.dribbble.com",
  },
  {
    icon: "tumblr",
    name: "Tumblr",
    link: "https://www.tumblr.com",
  },
  {
    icon: "linkedin-in",
    name: "LinkedIn",
    link: "https://www.linkedin.com",
  },
];

socialLinks.forEach((el) => {
  socialLink.innerHTML += `
                    <li>
                    <a class="icon brands fa-${el.icon}" href="${el.link}"
                      ><span class="label">${el.name}</span></a
                    >
                    </li>
                           `;
}
