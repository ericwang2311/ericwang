fetch("assets/data.json")
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
    const params = new URLSearchParams(window.location.search);
    console.log("project param", params.get("project"));
    console.log(params.get("return"));

    if (params.get("project") === null) {
      renderPage(data);
      
    } else {
      console.log("renderProjectPage");
      let id = params.get("project");
      let project = data.projects.find(function (project){
        return project.id === id;
      });//project => project.id === id);
      console.log("project", project);
      renderProjectPage(project);
    }

  });

function renderPage(data)  {
  document.querySelector(".container").innerHTML =   renderMainPage(data);
}

function renderNavbar(navbar){
  return (
    `
<nav>
    <ul>
        <li>
            <a href="#about"  top:30px>
                    <i class="fas fa-user-circle"></i> About
                </a>
        </li>
        <li>
            <a href="#news">
                <i class="fas fa-newspaper"></i> News
            </a>
        </li>
        <li>
            <a href="#projects">
                <i class="fas fa-laptop-code"></i> Projects
            </a>
        </li>
    </ul>
</nav>`
  )
}

function renderAbout(about){ 
   return (
      `
      <div id="about" class="row">
        <div class="col-6">
          <h1 class="animated bounceInDown"> ${about.name} </h1>
          <img src="${about.photo}" style="width: 70%; margin-left: 0px; border-radius: 25px" /> 
          <div class="title"> ${about.title} </div>
          <div class="email"> ${about.email} </div>
        </div>
        <div class="col-6">
          <br><br><br><br>
          <div class="description" style="text-align:center"> ${about.description} </div>
        </div>
      </div>

     `
   )
}

function renderLinks(links){
  return (
    `
    <div>
          <span><a href="${links.resumePath}"> <i class="fas fa-file-alt"></i> ${links.resume} </a></span> |
          <span><a href="${links.twitterPath}"> <i class="fab fa-twitter-square"></i></a></span> |
          <span><a href="${links.linkedInPath}"> <i class="fab fa-linkedin"></i></a></span> |
          <span><a href="${links.githubPath}"> <i class="fab fa-github"></i></a></span> 
    </div>
    
    `
  )
}

function renderNews(news){
  return (
  `
  <div id="news" class="animated bounceInLeft" class="row">
    <h1 class="title"> ${news.title} </h1>
  </div>

  <div class="row">
    <div class="col-6">
      <div class="title"> ${news.info} </div>
    </div>
    <div class="col-6">
      <div class="date" style="text-align:right"> ${news.date} </div>
    </div>
  </div>
  </br>
  `
  )
}

function renderProjects(projects) {
  return projects.map(
    d => `
      <div>
        <div class="title"><a href="?project=${d.id}"> <i class="fas fa-code"></i> ${d.title} </a></div>
      </div>
      <div class="row">
        <div class="col-6">
          <img src="${d.teaser}"/>
        </div>
        <div class="col-6">
          <div class="authors" style="text-align:right"> ${d.authors} </div>
          <div class="source" style="text-align:right"> 
            <em>${d.source}</em> 
          </div>

          

          <div class="label" style="text-align:right">
            <span><a href="${d.materials[0].path}"> <i class="fas fa-info-circle"></i> ${d.materials[0].label} </a></span> |
            <span><a href="${d.materials[1].path}"> <i
            class="fab fa-github"></i> ${d.materials[1].label} </a></span>
          </div>
          

        </div>
      </div>
      <br>
  `
  ).join('');
}

function renderProjectPage(d) {

  document.querySelector(".container").innerHTML = `

  <nav>
  <ul>
      <li>
          <a href="https://bcwebcourse.github.io/portfolio-ericwang2311/" top:30px>
              <i class="fas fa-user-circle"></i> Return
          </a>
      </li>
  </ul>
</nav>
<br>

  <div>
      <div class="title"><h1 "${d.id}" class="animated bounceInDown"> <i class="fas fa-code"></i> ${d.title} </h1></div>
  </div>
  <div class="row">
      <div class="col-6">
        <img src="${d.teaser}"/>
      </div>
      <div class="col-6">
          <div class="authors" style="text-align:right"> ${d.authors} </div>
          <div class="source" style="text-align:right"> 
              <em>${d.source}</em> 
          </div>
          
      </div>
  </div>
      <br>
  <div>
    <div class = "description"> ${d.description} </div>
  </div>
  <br>
  <div>
  
  <footer>Copyright © 2020 Eric Wang</footer>
  
  </div>
  <br>
  </div>`;
}



function renderMainPage(data){
  return (
  document.querySelector('.container').innerHTML = `
      ${renderNavbar(data.navbar)}
      ${renderAbout(data.about)}
      ${renderLinks(data.links)}
      ${renderNews(data.news)}
      <h1 id="projects" class="animated bounceInLeft">${data.misc.projectTitle}</h1>
      ${renderProjects(data.projects)}
      ${renderProjectPage(data.projects)}
  `);
}

//      ${renderNavbar('main', Object.keys(data))}