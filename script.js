// For the fact generator

var factList = [
"...there are 16,306 (and counting) endangered species threatened with extinction?",/*0*/ "...there are estimated to be around 1.8 TRILLION pieces of trash in the Great Pacific Garbage Patch alone?",/*1*/ "...pollution commonly affects the poor and people of color? Studies show lower income neighborhoods are exposed to more toxic chemicals in the air.",/*2*/ "...less than 1% of all species that have existed in the world are still here? The other 99% went extinct.",/*3*/ "...as the diversity of species in our world plummets, our food supply and economy are likely to as well?",/*4*/ "...some corporate companies target lower income communities to establish their factories in because of their lack of resources and connections?",/*5*/ "...one of the main reasons our biodiversity is decreasing is because of human's interference with natural habitats such as forests or grasslands?",/*6*/ "...we are overfishing and overhunting?",/*7*/ "...over 1/3 of all marine species are threatened by extinction?",/*8*/ "...children of color who live in low income areas are 9x more likely to develop learning disabilities compared to higher income areas due to the extent of air pollution and toxic waste?",/*9*/ "...wildlife are forced to either change their habits or die off when their habitat gets destroyed by air or plastic pollution?",/*10*/ "...as extreme temperatures result from human pollution, lower income communities are at a disadvantage due to less government aid and a lack of insurance or protection?"];/*11*/

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if(factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}


// for the message generator

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if(scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  var name1 = document.getElementById("name1").value;
  var reasons = document.getElementById("reasons").value;
  var name2 = document.getElementById("name2").value;

  if (name1 == "" || name2 == "" || reasons == "")
    displayScript.innerHTML = "Please enter all fields."
  else
  {
  displayScript.innerHTML = "Dear " + name1 + ", I'm writing to you to express my concern about the diminshing biodiversity and increase in air pollution that our world, especially the lower income community, faces. The Earth continues to heat up due to human activity, and habitats are being destroyed, causing many species to go endangered and then extinct. Similarly, many communities, such as that of the lower class, face additional challenges from the air pollution that results from our increase in the release of greenhouse gasses. A few reasons I care are: " + reasons + ". Please consider taking action to help aid our planet. Some ways you can help is by addressing the issue in a speech to spread awareness or proposing legislatives aimed to aid in maintaining biodiversity and diminishing air pollution. We only have one Earth. Thank you for reading. Regards, " + name2;
  }
}