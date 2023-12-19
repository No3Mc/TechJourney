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

