document.getElementById('position_box__item').onchange = function() {
  var block = document.getElementById('position_box__block_' + this.value),
      active = document.querySelector('.block_active');

      if (active) {
          active.classList.remove('block_active');
      }

      if (!block) {
          return false;
      }

      block.classList.add('block_active');
}
