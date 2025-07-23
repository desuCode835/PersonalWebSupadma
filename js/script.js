/*============================ typing animation*/
var typed = new Typed(".typing",{
    strings:["","Students", "Front End Beginner", "Calisthenics Enthusiast"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop:true
})
/*============================ aside*/
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i = 0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            removeBackSection();
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                    // allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active")
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection()
    {
        for(let i=0; i < totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");
    }
    function showSection(element)
    {
        for(let i=0; i < totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
       const target = element.getAttribute("href").split("#")[1];
       document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element)
    {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function() 
    {
        const sectionIndex = this.getAttribute("data-section-index");
        // console.log(sectionIndex)
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"), 
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () => 
        {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn()
        {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.toggle("open");
            }
        }

// Untuk form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const subject = form.querySelector('input[name="subject"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();

      const phoneNumber = "+6287761428070";

      const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

      const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

      window.open(whatsappURL, "_blank");
    });
  });
