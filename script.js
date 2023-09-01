  var typed = new Typed('.text', {
    strings: ['Frontend Devloper', 'Automation Tester','Developer'],
    typeSpeed: 70,
    backSpeed:70,
    backDelay:1000,
    loop:true
  });


function reveal() {
  var reveals = document.querySelectorAll(".container1");
  // console.log(prog_line);
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = -200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  } 
}
 

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();