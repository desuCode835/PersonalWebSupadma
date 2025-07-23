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
 document.getElementById("contactForm1").addEventListener("submit", function(event){
    event.preventDefault(); // mencegah form submit normal

    // ambil data
    const name = document.getElementById("name").value;
    const produk = document.getElementById("email").value;
    const message = document.getElementById("subject").value;
    const message1 = document.getElementById("message").value;

    // bikin format pesan WA
    const text = `Nama saya: ${name}%0AEmail: ${produk}%0ARPesan: ${message}%0ASubjek : ${message1}`;

    // Ganti dengan nomor WhatsApp kamu (tanpa + dan tanpa spasi)
    const phoneNumber = "+6287761428070";

    // Buka WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  });
