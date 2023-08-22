const inputs = document.querySelectorAll('.controls input');
const handleUpdate = (event) => {
  const suffix = event.currentTarget.dataset.sizing || '';
  // console.log(event.currentTarget.name);
  document.documentElement.style.setProperty(`--${event.currentTarget.name}`, event.currentTarget.value + suffix);
}

// This will capture the value change whenever you let go of your mouse for the sliders and the color input.
inputs.forEach(input => input.addEventListener('change', handleUpdate));
// This will capture the value change at every movement of the mouse for the sliders
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
