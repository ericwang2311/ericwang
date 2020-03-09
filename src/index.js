import renderMainPage from "./Components/MainPage.js";
import renderPageOfProject from "./Components/ProjectPage.js";

fetch("assets/data.json")
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
    const params = new URLSearchParams(window.location.search);
    console.log(params);
    console.log("projects.param", params.get("project"));
    if (params.get("project") === null) {
      renderMainPage(data);
    } else {
      let id = params.get("project");
      console.log(id);
      let project = data.projects.find(function(project) {
        console.log(project.id);
        return project.id === id;
      });
      renderPageOfProject(project);
    }
  });
