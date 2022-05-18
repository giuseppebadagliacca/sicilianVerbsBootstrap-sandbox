let 
ulDom = document.querySelector('ul'),
highlightedVerb = ''
const 
verbDisplayDiv = document.querySelector('#verbDisplay')


ulDom.addEventListener('click', myFunc)

function myFunc(e){
    const verb = e.target.innerText
    if(highlightedVerb){
      highlightedVerb.className = ''
      highlightedVerb = ''
    }


    switch(verb){
      // ireg verbs
        case "Vùliri (To Want)":
          verbDisplay('Vùliri (To Want)','Vulia', 'Vogghiu','Stiau Vulennu','Vulia','Voi','Stai Vulennu','Vulia','Voli','Sta Vulennu','Vuliàmu','Vulèmu','Stamu Vulennu','Vuliàvu','Vuliti','Stati Vulennu','Vuliànu','Vonnu','Stannu Vulennu', 'v')
            break;  
        case "Fari (To Do)":
        verbDisplay('Fari (To Do)','Fici', 'Fazzu','Stiau Facennu','Facisti','Fai', 'Stai Facennu','Fici','Fa','Sta Facennu','Ficimu','Facemu','Stamu Facennu','Facìstivu','Faciti','Stati Facennu','Ficiru','Fannu','Stannu Facennu', 'f')
            break;  
        case "Diri (To Say)":
        verbDisplay('Diri (To Say)','Dissi', 'Dicu','Stiau Dicennu','Dicisti','Dici', 'Stai Dicennu','Dissi','Dici','Sta Dicennu','Dissimu','Dicemu','Stamu Dicennu','Dicìstivu','Diciti','Stati Dicennu','Dissiru','Dìcunu','Stannu Dicennu', 'd')
            break;  
        case "Pùtiri (To Be Able, Possible)":
          verbDisplay('Pùtiri (To Be Able, Possible)','Sapià', 'Pozzu','Stiau Putennu','Putià','Poi', 'Stai Putennu','Putià','Po','Sta Putennu','Putíamu','Putèmu','Stamu Putennu','Putíavu','Putiti','Stati Putennu','Putíanu','Ponnu','Stannu Putennu', 'p')
            break;  
        case "Sapiri (To Know)":
          verbDisplay('Sapiri (To Know)','Sappía', 'Sacciu','Stiau Sapennu','Sappía','Sai', 'Stai Sapennu','Sappía','Sapí','Sta Sapennu','Sappíamu','Sapèmu','Stamu Sapennu','Sappíavu','Sapiti','Stati Sapennu','Sappíanu','Sannu','Stannu Sapennu', 's')
          break;  
    }      
}

function verbDisplay(verb,ioPast,ioPresent,ioGerrund,tuPast,tuPresent,tuGerrund, iddruPast,iddruPresent,iddruGerrund, nuiPast,nuiPresent,nuiGerrund,vuiPast,vuiPresent,vuiGerrund,iddriPast,iddriPresent,iddriGerrund,id){

  highlightedVerb = document.getElementById(`${id}`)
  highlightedVerb.className += 'on'

    verbDisplayDiv.innerHTML =`
    <table class="table">
    <tr>
      <th scope="col" class= "on">${verb}</th>
      <th scope="col">Past</th>
      <th scope="col">Present</th>
      <th scope="col">Gerund</th>
    </tr>
    <tr>
      <th scope="row">Jo</th>
      <td>${ioPast}</td>
      <td>${ioPresent}</td>
      <td>${ioGerrund}</td>
    </tr>
    <tr>
      <th scope="row">Tu</th>
      <td>${tuPast}</td>
      <td>${tuPresent}</td>
      <td>${tuGerrund}</td>
    </tr>
    <tr>
      <th scope="row">Iddru/Iddra</th>
      <td>${iddruPast}</td>
      <td>${iddruPresent}</td>
      <td>${iddruGerrund}</td>
    </tr>
    <tr>
      <th scope="row">Nui</th>
      <td>${nuiPast}</td>
      <td>${nuiPresent}</td>
      <td>${nuiGerrund}</td>
    </tr>
    <tr>
      <th scope="row">Voi</th>
      <td>${vuiPast}</td>
      <td>${vuiPresent}</td>
      <td>${vuiGerrund}</td>
    </tr>
    <tr>
      <th scope="row">Iddri</th>
      <td>${iddriPast}</td>
      <td>${iddriPresent}</td>
      <td>${iddriGerrund}</td>
    </tr>
</table>`
}