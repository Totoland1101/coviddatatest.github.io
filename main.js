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
  .then(data =>{
    // console.log (data.status)
    return data.json().then(data.status)
  }).then(displayresults)
}

function getResult (query) {
  fetch(`https://corona.lmao.ninja/v3/covid-19/states/${query}`)
  .then(data =>{
    // console.log (data)
    return data.json()
  }).then(displayresults).then(data.status)
  console.log (data.status)
}

  fetch ('https://corona.lmao.ninja/v3/covid-19/countries/Thailand')
  .then(data =>{
    // console.log (data)
    // console.log (data.status)
    return data.json() 

  }).then(displayresults)
 
function displayresults (data,status){
    // console.log (data)

  let active = document.querySelector('.active')
  active.innerText = `${data.active.toLocaleString()}`

  let recovered = document.querySelector('.recovered')
  recovered.innerText = `${data.recovered.toLocaleString()}`
    
  let city = document.querySelector('.country')
  city.innerText= `${data.country}`

  // let state = document.getElementById("state")
  // state.innerText= `${data.state}`

  let cases =document.getElementById("cases")
  cases.innerText= `${ data.cases.toLocaleString()}`
    
  let critical = document.getElementById("critical")
  critical.innerText=`${data.critical.toLocaleString()}` 

  let death = document.getElementById("death")
  death.innerText=`${data.deaths.toLocaleString()}` 
 
  let tests = document.getElementById("tests")
  tests.innerText=`${data.deaths.toLocaleString()}` 
  
  let flag =document.querySelector('.flag')
  flag.src=`${data.countryInfo.flag}` 
  
  if (status == 404){
    city.style.visibility = 'hidden';
    flag.style.visibility = 'hidden';
    
  } else {
    // active.style.visibility = 'visible';
    // recovered.style.visibility = 'visible';
    // cases.style.visibility = 'visible';
    // critical.style.visibility = 'visible';
    // active.style.visibility = 'visible';
    // death.style.visibility = 'visible';
    // tests.style.visibility = 'visible';
  }

}

fetch('https://covid19-cdn.workpointnews.com/api/vaccine.json')
  .then((response) => {
  return response.json();
})
  .then((data) => {
    //  console.log(data)
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
  // console.log(data);    

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
  // console.log(data);    

  //   Object.keys(data.timeline).forEach(elem => {
  //   console.log(data.timeline[elem]);
  // });
  
  
   Object.keys(data).forEach((value, index) => {
   if(index==Object.keys(data).length-1){
    //  console.log(data[value]);

    //  document.getElementById("all").innerHTML = data.timeline[value]


   }
   })
});