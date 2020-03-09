import renderAbout, { renderLinks } from "./About.js";
import renderNavbar from "./Navbar.js";
import renderNews, { searchSort } from "./News.js";
import renderProjects, { radioSort } from "./Projects.js";

export default function renderMainPage(data) {
  document.querySelector(".container").innerHTML = `
        ${renderNavbar(data.navbar)}
        ${renderAbout(data.about)}
        ${renderLinks(data.links)}
        ${renderNews(data.news, data.misc)}
        <h1 id="projects" class="animated bounceInLeft">${
          data.misc.projectstitle
        }</h1>
        ${renderProjects(data.projects)}
        <div>
             <footer>Copyright © 2020 Eric Wang</footer>
        </div>
    `;
  searchSort(data);
  radioSort(data);
}
