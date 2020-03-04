export default function renderNews(news, misc){
    return (
        `
        <div id="news" class="animated bounceInLeft" class="row">
            <h1 class="title"> ${misc.newstitle} </h1>
        </div>

        <div class="search">
            <input type="search" name='news' placeholder="Search News...">
        </div>
    
        <div class = "news-list">
            ${renderNewsItems(news)}
        </div>`
    )
}

export function renderNewsItems(news){
    return news.map(d=>
        `
        <br>
        
        <div>
            <div class="row">
                <div class="col-6">
                    <div class="title"> ${d.info} </div>
                </div>
                <div class="col-6">
                    <div class="date" style="text-align:right"> ${d.date} </div>
                </div>
            </div>
        </div>
        </br>`
    ).join('');
}

export function searchSort(data){
    let input = document.querySelector('input[type=search]');
    input.addEventListener('input',(event)=>{
        console.log(event.target.value);
        const filtered = data.news.filter(news=>news.info.toLowerCase().includes(event.target.value.toLowerCase()));
        document.querySelector('.news-list').innerHTML = renderNewsItems(filtered);
    });
}