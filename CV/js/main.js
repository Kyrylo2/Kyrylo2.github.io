let buttonCV = document.getElementById('resume-button');

let areaCV = document.getElementById('area-pdf');

function generateResume() {
  html2pdf(areaCV);
}

buttonCV.addEventListener('click', () => {
  generateResume();
})
