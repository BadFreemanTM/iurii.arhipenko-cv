class ChangeLanguage {
  static changeEng() {
    const nameTitleEn = "Iurii Arhipenko";
    const aboutmeEn = `About me<br> 
      - I live and work in St. Petersburg.<br> 
      - Languages: eng/hebr/russ<br> 
      - Completed Frontend dev courses.<br> 
      - My work experience is described on <a href="https://spb.hh.ru/applicant/resumes/view?resume=04e9becfff081c8c040039ed1f44524f444772">hh.ru</a><br> 
      - Married, have children.`;
    const mySkillEn = `
      Tech Stack:<br>
        - Development of adaptive web interfaces.<br>
        - Knowledge and understanding of modern web standards:<br>
        BEM, HTML5(Flexbox), CSS3(sass).<br>
        JS: ES6 (Vue.js, React base knowledge) <br>
        Node.JS (npm, babel, eslint, yarn, docker).<br>
        Build: webpack, gulp,<br>
        - Git for version control.<br>
        - Web Design tools: Ps (Zeplin), Ai, Figma, Avocade.<br>
        - QA manual (Jira), writing test plans and bug reports.<br>
        - Ability to work independently (google, mdn).<br>
        - I can work in MacOS / Win / Linux.<br>
        - In my spare time, i enjoy photography, <br>coding ruby / swift,writing bots for telegram.`;

    let btn = document.querySelector(".form__btn");

    const nameTitleRu = "Юрий Архипенко";
    const aboutmeRu = `Обо мне:<br>
      - Живу и работаю в Санкт-Петербурге.<br>
      - Языки: eng/hebr/russ<br>
      - Курсы Frontend dev.<br>
      - Опыт работы описан в <a href="https://spb.hh.ru/applicant/resumes/view?resume=04e9becfff081c8c040039ed1f44524f444772">hh.ru</a><br>
      - Женат, дети есть.<br>`;

    const mySkillRu = `
      Tech Stack:<br>
					- Разработка адаптивных веб интерфейсов.<br>
					- Знание и понимание современных web стандартов:<br>
					БЭМ, HTML5(Flexbox), CSS3(sass).<br>
					JS: ES6 (Vue.js, React - базовые знания)<br>
					Node.JS ( babel, eslint, yarn), docker).<br>
					Сборка: webpack, gulp<br>
					- Git для контроля версий.<br>
					- Инструменты верстки: Ps (Zeplin), Ai, Figma, Avocode.<br>
					- QA manual (Jira), написание тест планов и баг репортов.<br>
					- Умение работать самостоятельно (google, mdn).<br>
					- Могу работать в среде MacOS / Win / Linux.<br>
					- В свободное время увлекаюсь фотографией,<br> ruby/swift,боты для телеграмма.`;

    btn.addEventListener("click", (event) => {
      event.preventDefault();
      //console.log(event.target.getAttribute('lang'))

      if (event.target.getAttribute("data-lang") === "en") {
        document.querySelector(".content__name").innerHTML = nameTitleRu;
        document.querySelector(".content__text-about").innerHTML = aboutmeRu;
        document.querySelector(".content__text-stack").innerHTML = mySkillRu;
        btn.innerHTML = "Press for Eng";
        btn.dataset.lang = "ru";
      } else {
        btn.dataset.lang = "en";
        document.querySelector(".content__name").innerHTML = nameTitleEn;
        document.querySelector(".content__text-about").innerHTML = aboutmeEn;
        document.querySelector(".content__text-stack").innerHTML = mySkillEn;
        btn.innerHTML = "Press for Rus";
      }
    });
  }
}
ChangeLanguage.changeEng();
