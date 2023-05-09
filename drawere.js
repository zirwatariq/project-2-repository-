function closeSubmenu(button) {
    var submenu = button.parentNode.querySelector('.submenu'); // Get the corresponding submenu
  
    submenu.style.display = 'none'; // Hide the submenu
  }
  
  function toggleSubmenu(button) {
    var submenu = button.parentNode.querySelector('.submenu'); // Get the corresponding submenu
  
    if (submenu.style.display === 'block') {
      submenu.style.display = 'none'; // Hide the submenu
    } else {
      submenu.style.display = 'block'; // Show the submenu
    }
  }
  