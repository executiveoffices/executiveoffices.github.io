/* Cowboy Creek box: fades in a few seconds after the home page loads. */
(function () {
  var box = document.getElementById('cc-box');
  if (!box) return;
  setTimeout(function () { box.classList.add('is-visible'); }, 4000);
})();
