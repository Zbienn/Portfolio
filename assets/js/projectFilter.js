document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-card");

    let activeFilter = null;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;

            // If clicking the same active filter → reset
            if (activeFilter === filter) {
                activeFilter = null;

                buttons.forEach(btn => btn.classList.remove("primary"));
                projects.forEach(project => {
                    project.style.display = "block";
                });

                return;
            }

            // Set new active filter
            activeFilter = filter;

            // Button styling
            buttons.forEach(btn => btn.classList.remove("primary"));
            button.classList.add("primary");

            // Filter projects
            projects.forEach(project => {
                const category = project.dataset.category;
                project.style.display = category === filter ? "block" : "none";
            });
        });
    });
});
