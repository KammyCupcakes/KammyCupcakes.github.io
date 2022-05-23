function pet() {

// person = "nal"
var p = document.getElementById("personality").value;

switch (p) {

case "Hard-Working":

personality = "If you selected Hard-Working you are a reptile person. People with reptiles as pets are considered to be very unique and independent in nature. Just like how there pets like theirs. Reptile owners can be described as unpredictable, unconventional, hard-working, goal-oriented but reliable too.";
tt = "Hard-Working"
ig = "../Images/Reptile.png"
 break;

case "Energetic":

personality = "If you selected Energetic you are a dog person. Dog persons are more likely to be a stickler of rules and are associated with self-confidence and assertiveness. Just like their best pals they love being energetic.";
tt = "Energetic"
ig = "../Images/Dog.png"
break;

case "Calm":

personality = "If you selected Calm you are a fish person. A fish owner finds humor in situations and tends to lead a happy and satisfying life. Fish owners can be described as emotionally strong and calm than others.";
tt = "Calm"
ig = "../Images/Fish.png"
break;

case "Independant":

personality = "If you selected Independant you are a cat person. Cat people tend to be a rebel or a free spirit in nature. People with cats prefer living independently just like their cat friends.";
tt = "Independant"
ig = "../Images/Cat.png"
break;

case "Outgoing":

personality = "If you selected Outgoing you are a bird person. A bird person is very social and outgoing in nature. A person with a bird as a pet is more expressive in nature and are very caring and polite.";
tt = "Outgoing"
ig = "../Images/Bird.png"
break;

case "Introvert":

personality = "If you selected Introvert you are a rabbit person. Rabbit owners are the most introverted and neurotic of all pet owners. They are also sympathetic and open to new experiences.";
tt = "Introvert"
ig = "../Images/rabbit.png"
break;

default:

tt = "In case none of the values match"

break;

}

document.getElementById("title").innerHTML=tt
document.getElementById("one").innerHTML=personality
document.getElementById("pic").setAttribute("src",ig)
}

var personality = new Array('Hard-Working', 'Energetic', 'Calm', 'Independant', 'Outgoing', 'Introvert').sort()
var option = "";
for(var i =0;i<personality.length;i++)
{
option += '<option value="'+ personality[i] + '">' + personality[i] + "</option>"
}
document.getElementById('personality').innerHTML = option
