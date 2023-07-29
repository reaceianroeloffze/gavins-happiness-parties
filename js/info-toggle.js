// This JS File is for the services page. There will be 2 buttons on the page. When clicked, they will expand. That is the purpose of this file.

const infoToggle = () => {

    document.querySelector('.hidden-section').classList.toggle('expanded-section');

}
const infoToggle2 = () => {

    document.querySelector('.hidden-section2').classList.toggle('expanded-section2');

}

const moreInfo = document.querySelector('.section-toggle');
const moreInfo2 = document.querySelector('.section-toggle2');

moreInfo.onclick = infoToggle;
moreInfo2.onclick = infoToggle2;