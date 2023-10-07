let image = document.querySelector(".image img");
const btns = [...document.querySelectorAll("button")];
let content = document.querySelector(".text");
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
btns.map(e=>{
    e.addEventListener("click", function(){
        audio.play();
        if(e.id==="first"){
            image.src = "./1.webp"
            btns[0].classList.add('live');
            btns[1].classList.remove('live');
            btns[2].classList.remove('live');
            console.log(btns);
            content.innerHTML= `<h3>1. Microlearning</h3>
            <p>
                Microlearning refers to a set of compact e- learning modules that are designed to reduce learner fatigue. The modules can be educational, professional, or skill based, and are usually designed to be less than 20 minutes long, with a single learning objective or topic. The name originates from the Greek word 'micro' meaning 'small'. Furthermore, microlearning marks a transition from common models of learning towards micro perspectives on and the significance of micro dimensions in the process of learning.Microlearning has also been considered as a promising topic in work-based learning and the applications of microlearning have been widely studied in different fields. As of 2020, there were at least 476 relevant publications exploring the concept.  It is functional not only for skill based education but also for sustainable socioeconomic development and without taking care of micro-perspectives in the context of learning, education, training and skill development, a skill based education cannot be imparted effectively.</p>`
        }
        else if(e.id==="second"){
            image.src = "./2.png"
            btns[0].classList.remove('live');
            btns[1].classList.add('live');
            btns[2].classList.remove('live');
            console.log(btns);
            content.innerHTML= `<h3>2. Spaced Repetition</h3>
            <p>
            Spaced repetition is a method of reviewing material at systematic intervals. At the beginning of the
            learning process, the intervals are spaced closely together (for example, one hour; four hours; one
            day). As the material is reviewed, the intervals become systematically longer (four days; one week;
            two weeks). An ideal system of spaced repetition allows you to review the material before it is
            forgotten, helping you to retain it in your long term memory.
            Spaced repetition is in many ways the opposite of "cramming". Rather than learning information in a
            short time period, which can lead to quick forgetting, spaced repetition focuses on long-term retention
            of new information. For example, if you learned material from a textbook chapter in the first week of
            the semester, you would want to review it on a regular schedule – perhaps the second, fourth, eighth,
            and last weeks of the semester in order to retain the information in your long-term memory.</p>`
        }
        else{
            image.src = "./3.jpg"
            btns[0].classList.remove('live');
            btns[1].classList.remove('live');
            btns[2].classList.add('live');
            console.log(btns);
            content.innerHTML= `<h3>3. Retrieval Method</h3>
            <p>
            Retrieval practice involves recreating something you’ve learned in the past from your memory, and thinking about it right now. In other words, a while after you’ve learned something by reading it in a book or hearing it in a class or from a teacher, you need to bring it to mind (or “retrieve” it). The word after is really important; you need to forget the information at least a little in order for retrieval to be effective! You don’t want to just immediately recite what you see in the book or what the teacher told you, but rather you want to bring the information to mind on your own, once it starts to get a little more difficult to remember what you studied.This process of retrieving makes the information more retrievable later; compared to simply studying by looking over your notes, if you practice retrieval you’re more likely to remember the information later, and also more likely to be able to use and apply the information in new situations.</p>`
        }
    })
});