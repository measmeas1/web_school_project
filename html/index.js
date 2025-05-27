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

function toJobList() {
  const searchInput = document.getElementById('fixed_search_input').value;
  if (searchInput) {
      window.location.href = `/Jobs/jobs_list/key/${encodeURIComponent(searchInput)}.htm`;
  }
}

// function search() {
//   const query = document.getElementById('search-input').value;
//   if (query) {
//       window.location.href = `/Jobs/jobs_list/key/${encodeURIComponent(query)}.htm`;
//   }
// }