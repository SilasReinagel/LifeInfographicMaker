import domtoimage from 'dom-to-image';

export default (elementId, filename) => { 
  const el = document.getElementById(elementId);
  const margin = el.style.margin;
  el.style.margin = "0";
  domtoimage.toJpeg(el, { quality: 0.95 })
    .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${filename}.jpeg`;
        link.href = dataUrl;
        link.click();
        el.style.margin = margin;
    });    
}
