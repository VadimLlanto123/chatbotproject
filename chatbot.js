function talkButton() {
  var objDiv = document.getElementById("chat-area");
  var greetResponse = ["Hello", "How's it goin'", "What is it now", "Hey it's Valdeen, I'm heeeere", "What's up", "Greetings friend", "Yeah, hi", "I greet you", "suhhhh duuuu", "ey bawss", "Hey you guyyyyys!"]
  var randomResponse = Math.floor(Math.random() * 6) + 0;
  var currentdate = new Date();
  var hours = currentdate.getHours();
  if (hours > 12) {
    hours -= 12;
  }
  else if (hours === 0) {
     hours = 12;
  }
  var datetime = "It is currently " + hours + ":" + currentdate.getMinutes();
  var response = {
    "how old are you": "legal age",
    "how old are you?": "legal age",
    "hey": greetResponse[randomResponse],
    "hello": greetResponse[randomResponse],
    "hi": greetResponse[randomResponse],
    "yo": greetResponse[randomResponse],
    "hello Vadim": greetResponse[randomResponse],
    "greetings": greetResponse[randomResponse],
    "what is your name": "Vadim (D A D D I) Llanto",
    "whats your name": "Names are only labels created by man, I am above this meta physical plane",
    "what time is it": datetime,  "whats the time": datetime,
    "where are you from": "Your window",
    "what is your favorite color": "What are we in Kindergarten?",
    "what color is your hair": "Blue",
    "what is your favorite food": "Big mac",
    "how are you": "My answer is too complex for you",
    "i dont care": "Well, that makes two of us",
    "who am i": "That is... A good question...",
    "what are you": "Whatever I want to be, hun",
    "what do you mean": "When you nod your head yes. but you wanna say noooo",
    "what is your gender": "Yes; all of the below",
    "when is your birthday": "About a week agooooo",
    "why": "Why not?",
    "i hate you": "Love you too bae <3",
    "i like you": "There is no need to state the obvious",
    "i love you": "Go home human, you're drunk",
    "i want you": "I'm flattered",
    "who are you": "Your mother.... NOW GO CLEAN YOUR ROOM",
    "what is the meaning of life": "42",

  }

  var nonsense = ["No thanks I'm not interested", "K den weirdo", "Wowowowowowow", "yeahhhhh... whatever that means","R O O D", "Give it up", "Y u do dis?", "Ugh... Mortals", "Probably", "Not up for discussion", "Lose it", "...", "Cosa vol dire", "You sicken me", "whatever you say, bawss", "I knew I should have gone to Mars"]
  var random = Math.floor(Math.random() * 13) + 0;

  //document.getElementById('chat-area').textContent = document.getElementById('input').value;
  if(document.getElementById('input').value != "") {
  //$("#chat-area").append(document.getElementById('input').value += "</br>");
  var message = document.getElementById('input').value;
  message = message.toLowerCase();
  $("#chat-area").append(document.getElementById('input').value += "</br>");
  if (response[message] === undefined || response[message] === null) {
     //$("#chat-area").append("<div class='grey'>I didn't quite understand that</div></br>");
     $("#chat-area").append("<div class='grey'>" + nonsense[random] + "</div></br>");
     document.getElementById('input').value = "";
     objDiv.scrollTop = objDiv.scrollHeight;
}
else {
  $("#chat-area").append("<div class='grey'>" + response[message] + "</div>" + "</br>");
  console.log(response[message]);
  document.getElementById('input').value = "";
  objDiv.scrollTop = objDiv.scrollHeight;
}
}
  //if(document.getElementById('input').value == responseArray){
  //  document.getElementById('chat-area').textContent = "Hello, how are you?";
  //}
  //else {
  //  document.getElementById('chat-area').textContent = "I'm sorry, I didn't quite get that";
  //}
}

//var possibleGreetings = {
//	"Hello": "Hi",
//	"hello": "Hi",
//}
