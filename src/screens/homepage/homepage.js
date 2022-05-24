const tabLinks = document.getElementsByClassName('read-tab')
const readcontents = document.getElementsByClassName('read-contents')

for(let i= 0; i<tabLinks.length; i++) {
    let tab = tabLinks[i]
    tab.onclick = () =>{
        openPage(i)
        tab.style.backgroundColor = "white"
        tab.style.color = "black"
    }
}

function openPage (id) {
    for(let i = 0; i<readcontents.length; i++) {
        readcontents[i].style.display = "none"
        tabLinks[i].style.backgroundColor = ""
        tabLinks[i].style.color = "white"
    }
    document.getElementById(id).style.display = 'block';
}

const displayOnLoad = function() {
    document.getElementById('Default').click();
}

displayOnLoad();
