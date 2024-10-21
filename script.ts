//listing elements
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();
    //const profilePictureInput =document.getElementById("profilePicture") as HTMLInputElement;
    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    
    
    if (  nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
    
        //const profilePicturefile = profilePictureInput.files?[0]
        //const profilePictureURL = profilePicturefile ? URL.createObjectURL(profilepicturefile) : ''};
    
    const resumeOutput =`
    <h2>Resume</h2>
    
    
    <p><strong>Name:</strong><span Id-'edit-name' class-'editable'>${name} </span></p>
    <p><strong>Email:</strong><span Id-'edit-edit' class-'editable'>${email}</span></p>
    <p><strong>Phone Number:</strong><span Id-'edit-phone' class-'editable'>${phone}</span></p>
    
    <h3>Education</h3>
    
    <p Id-'edit-education' class-'editable'>${education}</p>
    
    <h3>Experience</h3>
    <p Id-'edit-experience' class-'editable'>${experience}</p>
    
    <h3>Skills</h3>
    <p Id-'edit-skills' class-'editable'>${skills}</p>
    `;
    
    //Display the resume output
    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML  = resumeOutput;
    
    makeEditable();
    }
} else {
    console.error('one  or more form element are missing.');
}
});
    
    function makeEditable(){
        const editableElement = document.querySelectorAll('.editable');
        editableElement.forEach(element => {
            element.addEventListener('click', function() {
                const currentElement = element as HTMLElement;
                const currentValue = currentElement.textContent ||'';
            
                //replace content
                if (currentElement.tagName ==='p' || currentElement.tagName === 'SPAN') {
                    const Input = document.createElement('input')
                    Input.type = 'text'
                    Input.value = currentValue
                    Input.classList.add('editing input')



Input.addEventListener('blur',function(){
    currentElement.textContent = Input.value;
    currentElement.style.display = 'inline'
    Input.remove()
})
             currentElement.style.display = 'none'
                    currentElement.parentNode?.insertBefore(Input,currentElement)
                    Input.focus()
                }
        })
        })
    }
    


    
    
    