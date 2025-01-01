window.addEventListener('load', function() {
  let tpContainerInner = document.evaluate("//div[@class='tp-container-inner']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (tpContainerInner) {
    tpContainerInner.remove();
  }

  let adsElm = document.evaluate("//p[@class='st-inarticle-paragraph']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (adsElm) {
    tpContainerInner.remove();
  }

  let evMeterContent = document.evaluate("//div[@class='ev-meter-content']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (evMeterContent) {
    evMeterContent.style.filter = 'grayscale(0) blur(0px)';
    evMeterContent.style.pointerEvents = 'inherit';
    evMeterContent.style.userSelect = 'inherit';
  }
});
