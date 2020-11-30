 class ChangeLanguage {
    static changeEng() {
      const nameTitleEn = "Iurii Arhipenko";
      const aboutmeEn = `About me<br> 
      - I live and work in St. Petersburg.<br> 
      - Languages: eng/hebr/russ<br> 
      - Completed Frontend dev courses.<br> 
      - The work experience is described on <a href="https://spb.hh.ru/applicant/resumes/view?resume=04e9becfff081c8c040039ed1f44524f444772">hh.ru</a><br> 
      - Married, have children.`;
      const mySkillEn = `Tech Stack:<br>
      - Development of adaptive web interfaces.<br>
      - Proficiency in professional tools:<br>
      Ps, Ai, Figma, Sketch, Avocode, Zeplin.<br>
      - Knowledge and understanding of modern web standards:<br>
      BEM, HTML5 (Flexbox), CSS3(Sass),<br>
      JS (Native, Vue.js(start)<br>
      Node.JS ( babel, eslint, yarn, webpack, gulp)).<br>
      Git for version control.<br>
      - Ability to work independently and find solutions in google, mdn.<br>
      - I can work on MacOS / Win / Linux.<br>
      - In my spare time, i'm fond of photography, ruby, and writing telegram bots (node.js).`;
     
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
      - Разработка адаптивных web interfaces .<br>
      - Владение профессиональными инструментами: <br>Ps, Ai, Figma, Sketch, Avocode, Zeplin.<br>
      - Знание и понимание современных web стандартов:<br>
        BEM, HTML5(Flexbox), CSS3(Sass),<br>
        JS (Нативный, Vue.js(start)<br> 
        Node.JS ( babel, eslint, yarn, webpack, gulp)).<br>
        Git для контроля версий.<br>
      - Умение работать самостоятельно и находить решения в google, mdn.<br>
      - Я могу работать на MacOS / Win / Linux.<br>
      - В свободное время увлекаюсь фотографией, ruby и пишу ботов для телеграмм (node.js).`;
  
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
  