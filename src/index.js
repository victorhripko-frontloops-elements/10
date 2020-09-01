import './style.scss';

(() => {
  const block = document.querySelector('.block');

  let draggable = false;
  let blockX = null;
  let blockY = null;
  let startLeft = null;
  let startTop = null;

  block.addEventListener('mousedown', (evt) => {
    const rect = block.getBoundingClientRect();

    draggable = true;
    blockX = evt.pageX;
    blockY = evt.pageY;

    startLeft = rect.left;
    startTop = rect.top;
  });

  block.addEventListener('mouseup', (evt) => {
    draggable = false;
    blockX = null;
    blockY = null;
    startLeft = null;
    startTop = null;
  });

  document.addEventListener('mousemove', (evt) => {
    if (!draggable) return;

    const deltaX = evt.pageX - blockX;
    const deltaY = evt.pageY - blockY;

    block.style = `
      position: fixed;
      margin: 0;
      top: ${startTop + deltaY}px;
      left: ${startLeft + deltaX}px;
    `;
  });
})();
