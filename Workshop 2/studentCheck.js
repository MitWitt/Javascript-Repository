window.onload = function() {
    const isStudent = confirm("Are you a student?");
    
    const output = document.createElement('div');
    
    if (isStudent) {
        output.textContent = "Welcome student";
    } else {
        output.textContent = "Sorry, this page is for students only";
    }
    
    document.body.appendChild(output);
};