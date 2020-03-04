import sample from 'lodash/sample';

export default function renderAbout(about){ 
    return (
       `
       <div id="about" class="row">
            <div class="col-6">
                <h1 class="animated bounceInDown"> 
                    ${about.name} 
                </h1>
                <img src="${sample(about.photos)}" style="width: 70%; margin-left: 0px; border-radius: 25px" /> 
                <div class="title">
                    ${about.title} 
                </div>
                <div class="email"> 
                    ${about.email}
                </div>

            </div>
            <div class="col-6">
                <br><br><br><br>
                <div class="description" style="text-align:center"> ${about.description} </div>
            </div>
       </div>
      `
    );
 }

 export function renderLinks(links){
    return (
      `
      <div>
            <span><a href="${links.resumePath}"> <i class="fas fa-file-alt"></i> ${links.resume} </a></span> |
            <span><a href="${links.twitterPath}"> <i class="fab fa-twitter-square"></i></a></span> |
            <span><a href="${links.linkedInPath}"> <i class="fab fa-linkedin"></i></a></span> |
            <span><a href="${links.githubPath}"> <i class="fab fa-github"></i></a></span> 
      </div>
      `)
}