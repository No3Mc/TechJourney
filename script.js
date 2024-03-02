// import { getDocument } from 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.269/pdf.mjs';

// pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.269/pdf.worker.mjs';

// getDocument('https://no3mc.com/cv.pdf').promise.then(pdfDoc_ => {
//   pdfDoc_.getPage(1).then(page => {
//     renderPage(page, 'pdf-canvas-1');
//   });

//   pdfDoc_.getPage(2).then(page => {
//     renderPage(page, 'pdf-canvas-2');
//   });
// });

// function renderPage(page, canvasId) {
//   var scale = 1.5;
//   var viewport = page.getViewport({ scale: scale });
//   var canvas = document.getElementById(canvasId);
//   var context = canvas.getContext('2d');
//   canvas.height = viewport.height;
//   canvas.width = viewport.width;

//   var renderTask = page.render({ canvasContext: context, viewport: viewport });
//   renderTask.promise.then(() => {
//     console.log('Page rendered', canvasId);
//   });
// }

        // Toggle theme
        const themeToggle = document.getElementById("theme-toggle");
        const sunIcon = document.getElementById("sun-icon");
        const moonIcon = document.getElementById("moon-icon");
        let isNightMode = true;
    
        themeToggle.addEventListener("mouseenter", () => {
            if (isNightMode) {
                sunIcon.style.display = "inline-block";
                moonIcon.style.display = "none";
            } else {
                sunIcon.style.display = "none";
                moonIcon.style.display = "inline-block";
            }
        });
    
        themeToggle.addEventListener("mouseleave", () => {
            if (isNightMode) {
                sunIcon.style.display = "none";
                moonIcon.style.display = "inline-block";
            } else {
                sunIcon.style.display = "inline-block";
                moonIcon.style.display = "none";
            }
        });
    
        themeToggle.addEventListener("click", () => {
            const themeStyle = document.getElementById("theme-style");
            if (themeStyle.getAttribute("href") === "lm.css") {
                themeStyle.setAttribute("href", "nm.css");
                document.body.classList.add("night-mode");
                isNightMode = true;
            } else {
                themeStyle.setAttribute("href", "lm.css");
                document.body.classList.remove("night-mode");
                isNightMode = false;
            }
        });