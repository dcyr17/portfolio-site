

// Animate circular skill charts on scroll
window.addEventListener('scroll', () => {
  const skills = document.querySelectorAll('.skill-circle');
  const triggerBottom = window.innerHeight * 0.9;

  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    if (skillTop < triggerBottom) {
      const circle = skill.querySelector('.circle');
      const percent = skill.dataset.percent;
      const dashArray = `${percent}, 100`;
      circle.style.strokeDasharray = dashArray;
    }
  });
});
