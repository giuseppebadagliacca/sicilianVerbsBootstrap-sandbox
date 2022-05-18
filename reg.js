let 
ulDom = document.querySelector('ul'),
highlightedVerb = ''
const 
verbDisplayDiv = document.querySelector('#verbDisplay')


ulDom.addEventListener('click', myFunc)

function myFunc(e){
    const verb = e.target.innerText

    highlightedVerb.className = ''
    highlightedVerb = ''

    switch(verb){
      // reg verbs
        case "Mancari (To Eat)":
            verbDisplay('Manciari (To Eat)','Manciavi', 'Manciu','Stiau Manciannu','Manciasti','Manci',
            'Stai Manciannu','Manciau','Mancia','Sta Manciannu','Manciamu','Manciamu','Stamu Manciannu','Manciàstivu','Manciati','Stati Manciannu','Manciaru','Màncianu','Stannu Manciannu', 'm')
            break;
        case "Parrari (To Speak)":
            verbDisplay('Parrari (To Speak)','Parravi', 'Parru','Stiau Parrannu','Parrasti','Parri',
            'Stai Parrannu','Parrau','Parra','Sta Parrannu','Parramu','Parramu','Stamu Parrannu','Parràstivu','Parrati','Stati Parrannu','Parraru','Pàrranu','Stannu Parrannu', 'par')
            break;   
        case "Lassari (To Leave)":
            verbDisplay('Lassari (To Leave)','Lassavi', 'Lassu','Stiau Lassannu','Lassasti','Lassi',
            'Stai Lassannu','Lassau','Lassa','Sta Lassannu','Lassamu','Lassamu','Stamu Lassannu','Lassàstivu','Lassati','Stati Lassannu','Lassaru','Lassanu','Stannu Lassannu', 'l')
            break;   
        case "Taliari (To Look)":
            verbDisplay('Taliari (To Look)','Taliavi', 'Taliu','Stiau Taliannu','Taliasti','Talii',
            'Stai Taliannu','Taliau','Talia','Sta Taliannu','Taliamu','Taliamu','Stamu Taliannu','Taliàstivu','Taliati','Stati Taliannu','Taliaru','Talianu','Stannu Taliannu', 't')
            break;   
        case "Piaciri (To Like)":
            verbDisplay('Piaciri (To Like)','Piacivi', 'Piaciu','Stiau Piacennu','Piacisti','Piaci',
            'Stai Piacennu','Piacìu','Piaci','Sta Piacennu','Piaciemu','Piaciemu','Stamu Piacennu','Piacìstivu','Piaciti','Stati Piacennu','Piaceru','Piàciunu','Stannu Piacennu', 'pia')
            break;     
    }
    
}

function verbDisplay(verb,ioPast,ioPresent,ioGerrund,tuPast,tuPresent,tuGerrund, iddruPast,iddruPresent,iddruGerrund, nuiPast,nuiPresent,nuiGerrund,vuiPast,vuiPresent,vuiGerrund,iddriPast,iddriPresent,iddriGerrund,id){

  highlightedVerb = document.getElementById(`${id}`)
  highlightedVerb.className += ' on'

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
