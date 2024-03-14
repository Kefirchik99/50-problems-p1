//functions

function saveBookmark(bookmark) {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarks.push({
    title: bookmark.title,
    url: bookmark.url,
    category: bookmark.category || "Uncategorized",
  });

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  fetchBookmarks();
}

function fetchBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  
    const bookmarkList = document.getElementById("bookmark-list");
    bookmarkList.innerHTML = "";
  
    bookmarks.forEach((bookmark, index) => {
      const div = document.createElement("div");
      div.className = "bookmark-item";

      const category = document.createElement("div");
      category.className = "bookmark-category";
      category.textContent = `Category: ${bookmark.category} `;
      div.appendChild(category);
    
      const title = document.createElement("div");
      title.className = "bookmark-title";
      title.textContent = `Name: ${bookmark.title} `; 
      div.appendChild(title);
      
    
      const url = document.createElement("div");
      url.className = "bookmark-url"
      const link = document.createElement("a");
      link.href = bookmark.url;
      link.textContent = bookmark.url;
      link.target = "_blank";
      url.appendChild(link);
      div.appendChild(url);
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
     
      removeButton.onclick = function() { removeBookmark(index); };
      div.appendChild(removeButton);
  
      bookmarkList.appendChild(div);
    });
  }
  

function removeBookmark(index) {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarks.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  fetchBookmarks();
}

fetchBookmarks();

function validateInput(url, title) {
  if (!url) {
    alert("Please enter a valid url");
    return false;
  }
  if (!url.startsWith("https://") && !url.startsWith("http://")) {
    alert("Please enter a valid URL. It should start with http:// or https://");
    return false;
  }
  if (title && title.length > 50) {
    alert("Please enter a valid title. It should be less than 50 characters");
    return false;
  }
  return true;
}

document.getElementById("submit").addEventListener("click", () => {
  const url = document.getElementById("bookmarkUrl").value.trim();
  const title =
    document.getElementById("bookmarkTitle").value.trim() || "No title";
  const category = document.getElementById("bookmarkCategory").value.trim();

  if (!validateInput(url, title)) {
    return;
  }
  saveBookmark({ title, url, category });
  document.getElementById("bookmarkUrl").value = "";
  document.getElementById("bookmarkTitle").value = "";
  document.getElementById("bookmarkCategory").value = "";
});

function clearAllBookmarks() {
  const confirmation = confirm("Are you sure you want to clear all bookmarks?");
  if (!confirmation) {
    return;
  }
  localStorage.removeItem("bookmarks");
  document.getElementById("bookmark-list").innerHTML = "";
}

document.getElementById("clear").addEventListener("click", clearAllBookmarks);
