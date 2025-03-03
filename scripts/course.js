const courses = [
    { name: "CSE 110 - Intro to Programming", code: "CSE", completed: true, credits: 3 },
    { name: "WDD 130 - Web Fundamentals", code: "WDD", completed: true, credits: 3 },
    { name: "CSE 111 - Programming with Functions", code: "CSE", completed: true, credits: 3 },
    { name: "CSE 210 - Programming with Classes", code: "CSE", completed: true, credits: 3 },
    { name: "WDD 131 - Dynamic Web Fundamentals", code: "WDD", completed: true, credits: 3 },
    { name: "WDD 231 - Web Frontend Development I", code: "WDD", completed: false, credits: 3 } // Only this course is NOT completed
];

function displayCourses(filter) {
    const container = document.getElementById('course-list');
    container.innerHTML = "";  // Clear previous content

    let filteredCourses = courses.filter(course => filter === "all" || course.code === filter);

    filteredCourses.forEach(course => {
        let courseItem = document.createElement('div');
        courseItem.textContent = `${course.name} (${course.credits} credits)`;
        courseItem.style.backgroundColor = course.completed ? "#d4edda" : "#f8d7da";  // Green for completed, red for incomplete
        courseItem.style.color = "#333";
        courseItem.style.padding = "10px";
        courseItem.style.margin = "5px";
        courseItem.style.borderRadius = "5px";
        courseItem.style.fontWeight = "bold";
        courseItem.style.border = "1px solid #666";
        container.appendChild(courseItem);
    });

    // Calculate and display total credits
    let totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    let creditDisplay = document.createElement('p');
    creditDisplay.textContent = `Total Credits: ${totalCredits}`;
    creditDisplay.style.fontSize = "18px";
    creditDisplay.style.fontWeight = "bold";
    creditDisplay.style.color = "#333";
    container.appendChild(creditDisplay);
}

// Default display (show all courses)
displayCourses("all");
