import DonutChart from '../node_modules/donut-chart-js/lib/index.js'; 

function showHomePage() {
  let tabcontents = document.getElementsByClassName("tab-contents");
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }
  document.getElementById('HomePage').style.display = "block";

  // reader's books stats donut chart
new DonutChart(document.getElementById('reading-donut'), {
    data: [
      { label: 'green', value: 250, color: '#51e55b' },
      { label: 'blue', value: 180, color: '#558eff' },
      { label: 'yellow', value: 70, color: '#ffea5f' },
    ],
    holeSize: 0.65,
    animationSpeed: 0.4,
});
}
showHomePage();

document.getElementById('logo').onclick = function() {
  showHomePage();
}


// onclick event from nav buttons
function openTab(navName) {
  // Declare all variables
  var i, tabcontents, tablinks;

  // Get all elements with class="tabcontent" and hide themv
  tabcontents = document.getElementsByClassName("tab-contents");
  for (i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(navName).style.display = "block";
}
// Adding on click to nav tab btns
var tabLinks = document.getElementsByClassName('tablinks')
for (let i=0; i<tabLinks.length; i++) {
  let btn = tabLinks[i];
  btn.onclick = function() {
   openTab(tabLinks[i].name);
   btn.className += " active";
  }
}

//B1E551