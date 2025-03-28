function getElementWidth(content, padding, border) {
  function parsePx(value) {
    return parseFloat(value);
  }

  let contentWidth = parsePx(content);
  let paddingWidth = parsePx(padding) * 2;
  let borderWidth = parsePx(border) * 2;

  return contentWidth + paddingWidth + borderWidth;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
