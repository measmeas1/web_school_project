document.addEventListener('DOMContentLoaded', function () {
  const userProfile = document.querySelector('.user-profile');
  const dropdown = document.querySelector('.userTopCARDheader');

  userProfile.addEventListener('click', function () {
      dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function (event) {
      if (!userProfile.contains(event.target) && !dropdown.contains(event.target)) {
          dropdown.style.display = 'none';
      }
  });
});

const dropdowns = document.getElementsByClassName('dropdown');
for (let i = 0; i < dropdowns.length; i++){
  dropdowns[i].addEventListener("click", function(e){
    const content = this.getElementsByClassName("dropdown-content")[0];
    if(content.style.display === "block"){
      content.style.display = "none";
    }else{
      for (let j = 0; j < dropdowns.length; j++){
        dropdowns[j].getElementsByClassName("dropdown-content")[0].style.display = "none";
      }
      content.style.display = "block";
    }
    e.stopPropagation();
  })
}