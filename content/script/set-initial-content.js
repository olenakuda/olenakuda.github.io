const keySkills = document.querySelector(`.keySkills`);

const skills = [`Java 11`, `Kotlin`, `Spring Boot`,
    `Spring Data (JPA NoSQL)`, `Spring Security`, 
    `Spring Web`, `Android`, `Linux`, `IntelliJ`,
    `GitHub`, `JavaScript`, `CSS`, `HTML5`,
    `Microservice architecture`, `JSON`, `REST API`, 
    `Lombok`, `Docker`, `Maven`, `TDD`, `JUnit`, `Mockito`]


function createInitialContent() {
    keySkills.innerHTML = '';
    for (let i = 0; i < skills.length; i++) {
        const skill = document.createElement('li');
        skill.textContent = skills[i];
        keySkills.append(skill);
    }

}
createInitialContent();
setEnglishContent();