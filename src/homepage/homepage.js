const tabLinks = document.getElementsByClassName('read-tab')
const readcontents = document.getElementsByClassName('read-contents')

for(let i= 0; i<tabLinks.length; i++) {
    let tab = tabLinks[i]
    tab.onclick = () =>{
        openPage(i)
        tab.style.backgroundColor = "white"
    }
}

function openPage (id) {
    for(let i = 0; i<readcontents.length; i++) {
        readcontents[i].style.display = "none"
        tabLinks[i].style.backgroundColor = ""
    }
    document.getElementById(id).style.display = 'block';
}

const displayOnLoad = function() {
    document.getElementById('Default').click();
    console.log('page loaded')
}

displayOnLoad();
