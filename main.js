const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
    getResult(searchbox.value);
    getelem(searchbox.value);
    getelems(searchbox.value);
  }
}

function getResults (query) {
  fetch(`https://corona.lmao.ninja/v3/covid-19/countries/${query}`)
    .then(search => {
      return search.json();
    }).then(displayresults);
}

function getResult (query) {
  fetch(`https://corona.lmao.ninja/v3/covid-19/states/${query}`)
    .then(search => {
      return search.json();
    }).then(displayresults);
}

  fetch ('https://corona.lmao.ninja/v3/covid-19/countries/Thailand')
  .then(data =>{
    // console.log (data)
    return data.json()
  }).then(displayresults)
 
  function displayresults (data){
    console.log (data)

    let active = document.querySelector('.active')
    active.innerText = `${data.active.toLocaleString()}`

    let recovered = document.querySelector('.recovered')
    recovered.innerText = `${data.recovered.toLocaleString()}`
    
    let city = document.querySelector('.country')
    city.innerText= `${data.country}`

  // let cases =document.querySelector('.cases')
  // cases.innerText= `${ data.cases.toLocaleString()}`
    
  // let critical = document.querySelector('.critical')
  // critical.innerText=`${data.critical.toLocaleString()}` 

  // let death = document.querySelector('.death')
  // death.innerText=`${data.death.toLocaleString()}` 
 
  document.getElementById("cases").innerHTML = data.cases.toLocaleString();
  document.getElementById("critical").innerHTML = data.critical.toLocaleString();
  document.getElementById("death").innerHTML = data.deaths.toLocaleString();
  document.getElementById("tests").innerHTML = data.tests.toLocaleString();
  document.getElementById("flag").src = data.countryInfo.flag;
  


}

fetch('https://covid19-cdn.workpointnews.com/api/vaccine.json')
  .then((response) => {
  return response.json();
})
  .then((data) => {
     console.log(data)
      // document.getElementById("vac").innerHTML = data.all.today;

      let all = document.querySelector('.all')
          all.innerText = `${data.all.total}`         
});

function getelem (query) {

  fetch(`https://corona.lmao.ninja/v3/covid-19/vaccine/coverage/countries/${query}`)
    .then((response) => {
      return response.json();
      })
      .then((data) => {
      
        Object.keys(data.timeline).forEach((value, index) => {
          if(index==Object.keys(data.timeline).length-1){
            console.log(data.timeline[value]);
 
            let all = document.querySelector('.all')
            all.innerText = `${data.timeline[value]}`



        }
     })
  });
}

function getelems (query) {

  fetch(`https://corona.lmao.ninja/v3/covid-19/vaccine/coverage/states/${query}`)
   .then((response) => {
     return response.json();
     })
     .then((data) => {
       console.log(data)
       Object.keys(data.timeline).forEach((value, index) => {
         if(index==Object.keys(data.timeline).length-1){
           console.log(data.timeline[value]);

           let all = document.querySelector('.all')
           all.innerText = `${data.timeline[value]}`

           
      }  
     })
  });
}


fetch('https://covid19-cdn.workpointnews.com/api/constants.json')
.then((res) => {
  return res.json();

})
.then((data) => {
  console.log(data);    

  //   Object.keys(data.timeline).forEach(elem => {
  //   console.log(data.timeline[elem]);
  // });
  
  
  //  Object.keys(data).forEach((value, index) => {
  //  if(index==Object.keys(data).length-1){
  //    console.log(data[value].substring(6,12));
  //    console.log(data[value]);
  //    document.getElementById("all").innerHTML = data.timeline[value]


  //  }
  //  })

});

fetch('https://covid19-cdn.workpointnews.com/api/trend/th.json')
.then((res) => {
  return res.json();

})
.then((data) => {
  console.log(data);    

  //   Object.keys(data.timeline).forEach(elem => {
  //   console.log(data.timeline[elem]);
  // });
  
  
   Object.keys(data).forEach((value, index) => {
   if(index==Object.keys(data).length-1){
     console.log(data[value]);

    //  document.getElementById("all").innerHTML = data.timeline[value]


   }
   })
});