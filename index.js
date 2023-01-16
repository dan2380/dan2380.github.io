"use strict"

function toggleTab(tab) {  
  let clickedTab = document.querySelector(tab).classList;
  if (clickedTab.contains("clicked")) {
    clickedTab.toggle("clicked");
  }

  let toggleClasses;
  
  switch(tab) {
    case ".home-link":
      toggleClasses = [".projects-link", ".contacts-link"];
      break;
    case ".projects-link":
      toggleClasses = [".home-link", ".contacts-link"];
      break;
    case ".contacts-link":
      toggleClasses = [".home-link", ".projects-link"];
      break;
  };
  
  for (let i = 0; i < toggleClasses.length; i++) {
    let classes = document.querySelector(toggleClasses[i]).classList;
    if (classes.contains("clicked")) {
      continue;
    }
    classes.toggle("clicked");
  }
}

function loadPage(page) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector("section").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", `pages/${page}`, true);
  xhttp.send();
}