var _a;
//listing elements
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //const profilePictureInput =document.getElementById("profilePicture") as HTMLInputElement;
    //type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //const profilePicturefile = profilePictureInput.files?[0]
        //const profilePictureURL = profilePicturefile ? URL.createObjectURL(profilepicturefile) : ''};
        var resumeOutput = "\n    <h2>Resume</h2>\n    \n    \n    <p><strong>Name:</strong><span Id-'edit-name' class-'editable'>".concat(name_1, " </span></p>\n    <p><strong>Email:</strong><span Id-'edit-edit' class-'editable'>").concat(email, "</span></p>\n    <p><strong>Phone Number:</strong><span Id-'edit-phone' class-'editable'>").concat(phone, "</span></p>\n    \n    <h3>Education</h3>\n    \n    <p Id-'edit-education' class-'editable'>").concat(education, "</p>\n    \n    <h3>Experience</h3>\n    <p Id-'edit-experience' class-'editable'>").concat(experience, "</p>\n    \n    <h3>Skills</h3>\n    <p Id-'edit-skills' class-'editable'>").concat(skills, "</p>\n    ");
        //Display the resume output
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('one  or more form element are missing.');
    }
});
function makeEditable() {
    var editableElement = document.querySelectorAll('.editable');
    editableElement.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || '';
            //replace content
            if (currentElement.tagName === 'p' || currentElement.tagName === 'SPAN') {
                var Input_1 = document.createElement('input');
                Input_1.type = 'text';
                Input_1.value = currentValue;
                Input_1.classList.add('editing input');
                Input_1.addEventListener('blur', function () {
                    currentElement.textContent = Input_1.value;
                    currentElement.style.display = 'inline';
                    Input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(Input_1, currentElement);
                Input_1.focus();
            }
        });
    });
}
