const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".search-toggle"),
      sidebarOpen = document.querySelector(".sidebar-open"),
      sidebarClose = document.querySelector(".sidebar-close");

      let getMode  = localStorage.getItem('mode');
        if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
        }

    //dark mode
      modeToggle.addEventListener( "click", () => {
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
    
    // if it refreshes it still retain its previous command
        if(!body.classList.contains('dark')){
            localStorage.setItem("mode", "light-mode");
        } else {
            localStorage.setItem("mode","dark-mode");
        }
      });
    
    // searchbar
        searchToggle.addEventListener( "click", () => {
        searchToggle.classList.toggle("active");
        });

    // togglebar
        sidebarOpen.addEventListener( "click", () => {
            nav.classList.add("active");
        });

        body.addEventListener( "click", e => {
            let clickedElm = e.target;

            if(!clickedElm.classList.contains("sidebar-open") && !clickedElm.classList.contains("menu")) {
                nav.classList.remove("active");
            }
        });