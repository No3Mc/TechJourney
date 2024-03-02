        // Toggle theme
        const themeToggle = document.getElementById("theme-toggle");
        const sunIcon = document.getElementById("sun-icon");
        const moonIcon = document.getElementById("moon-icon");
        let isNightMode = true;
    
        themeToggle.addEventListener("mouseenter", () => {
            if (isNightMode) {
                sunIcon.style.display = "inline-block";
                moonIcon.style.display = "none";
            } else {
                sunIcon.style.display = "none";
                moonIcon.style.display = "inline-block";
            }
        });
    
        themeToggle.addEventListener("mouseleave", () => {
            if (isNightMode) {
                sunIcon.style.display = "none";
                moonIcon.style.display = "inline-block";
            } else {
                sunIcon.style.display = "inline-block";
                moonIcon.style.display = "none";
            }
        });
    
        themeToggle.addEventListener("click", () => {
            const themeStyle = document.getElementById("theme-style");
            if (themeStyle.getAttribute("href") === "theme/lm.css") {
                themeStyle.setAttribute("href", "theme/nm.css");
                document.body.classList.add("night-mode");
                isNightMode = true;
            } else {
                themeStyle.setAttribute("href", "theme/lm.css");
                document.body.classList.remove("night-mode");
                isNightMode = false;
            }
        });