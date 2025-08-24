document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('avatar');
  const layer   = wrapper.querySelector('.spark-layer');

  wrapper.addEventListener('click', (e) => burst(e));

  function burst(e) {
    // Use the wrapper as the coordinate frame
    const rect = wrapper.getBoundingClientRect();
    const p = (e.touches && e.touches[0]) ? e.touches[0] : e;

    // Offset from the wrapper's CENTER (not from page)
    const ox = (p.clientX - rect.left) - rect.width / 2;
    const oy = (p.clientY - rect.top)  - rect.height / 2;

    const COUNT = 8;
    for (let i = 0; i < COUNT; i++) {
      const node = document.createElement('div');
      node.className = 'star';
      node.textContent = Math.random() < 0.5 ? '✨' : '⭐';

      // random direction, distance, duration, rotation, size
      const angle = Math.random() * Math.PI * 2;
      const dist  = 60 + Math.random() * 60;          // 60–120px
      const dx    = Math.cos(angle) * dist;
      const dy    = Math.sin(angle) * dist;

      node.style.setProperty('--ox', ox + 'px');
      node.style.setProperty('--oy', oy + 'px');
      node.style.setProperty('--dx', dx + 'px');
      node.style.setProperty('--dy', dy + 'px');
      node.style.setProperty('--dur', (600 + Math.random() * 500) + 'ms');
      node.style.setProperty('--rot', ((Math.random()*720 - 360) + 'deg'));
      node.style.fontSize = (10 + Math.random()*10) + 'px';

      layer.appendChild(node);
      node.addEventListener('animationend', () => node.remove());
    }
  }
});

