export default function renderProjects(projects) {
  return `

        <div class="filter">
            <label>
                <input type="radio" name="filter" value="all" checked> All
            </label>
            <label>
                <input type="radio" name="filter" value="2020"> 2020
            </label>
            <label>
                <input type="radio" name="filter" value="2019"> 2019
            </label>
            <label>
                <input type="radio" name="filter" value="2018"> 2018
            </label>
            <label>
                <input type="radio" name="filter" value="2017"> 2017
            </label>
        </div>

        <br>
        
        <div class= "project-items">
            ${renderProjectItems(projects)}
        </div>
        `;
}

export function renderProjectItems(projects) {
  return projects
    .map(
      d => `

        <div>
            <div class="title">
                <a href="?project=${d.id}"> <i class="fas fa-code"></i> ${d.title} </a>
            </div>
        </div>

        <div class="row">
            <div class="col-6">
                <img src="${d.teaser}"/>
            </div>
        <div class="col-6">
            <div class="authors" style="text-align:right"> 
                ${d.authors} 
            </div>
            <div class="source" style="text-align:right"> 
                <em>${d.source}</em> 
            </div>
            
  
            <div class="label" style="text-align:right">
                <span><a href="${d.materials[0].path}"> <i class="fas fa-info-circle"></i> 
                    ${d.materials[0].label} </a>
                </span> |
                <span><a href="${d.materials[1].path}"> <i class="fab fa-github"></i> 
                    ${d.materials[1].label} </a>
                </span>
            </div>
            
  
        </div>
        </div>
    <br>`
    )
    .join("");
}

export function radioSort(data) {
  let buttons = document.querySelectorAll('.filter input[name="filter"]');
  buttons.forEach(cond =>
    cond.addEventListener("change", function(event) {
      let tag = event.target.value;
      if (tag === "all") {
        document.querySelector(".project-items").innerHTML = renderProjectItems(
          data.projects
        );
      } else {
        const filtered = data.projects.filter(
          projects => projects.year === event.target.value
        );
        document.querySelector(".project-items").innerHTML = renderProjectItems(
          filtered
        );
      }
    })
  );
}
