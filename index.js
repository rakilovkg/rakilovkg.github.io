document.addEventListener('DOMContentLoaded', function (event) {
  const list = document.getElementById('list');
  const x = document.getElementById('x');
  const sidebar = document.getElementById('sidebar');
  
  list.addEventListener('click', function (event) {
    sidebar.style.right = '0';
  });
  
  x.addEventListener('click', function (event) {
    sidebar.style.right = '-35vw';
  });
});