export default function renderPageOfProject(d) {
  document.querySelector(".container").innerHTML = `
        ${renderProjectPage(d)}
    `;
}

function renderProjectPage(d) {
  return `


    <nav>
        <ul>
            <li>
                <a href="." top:30px>
                    <i class="fas fa-undo"></i> Return
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
            <div class="authors" style="text-align:right"> 
                ${d.authors} 
            </div>
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


    <div class="label" style="text-align:left">
        <span><a href="${d.materials[0].path}"> <i class="fas fa-info-circle"></i> 
            ${d.materials[0].label} </a>
        </span> |
        <span><a href="${d.materials[1].path}"> <i class="fab fa-github"></i> 
          ${d.materials[1].label} </a>
         </span>
    </div>


    <div>
        <footer>Copyright © 2020 Eric Wang</footer>
    </div>


    <br>`;
}
