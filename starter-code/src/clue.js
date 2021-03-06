// Characters
var MrGreen = {
  first_name: "Jacob",
  last_name: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: "45",
  image:
    "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};
var DrOrchid = {
  first_name: "Doctor",
  last_name: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: "26",
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
};
var ProfPlum = {
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: "22",
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
};
var MissScarlet = {
  first_name: "Kasandra",
  last_name: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past,",
  age: "31",
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg,",
  occupation: "Actor"
};
var MrsPeacock = {
  first_name: "Eleanor",
  last_name: "Peacock",
  color: "blue",
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  age: "36",
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};
var MrMustard = {
  first_name: "Jack",
  last_name: "Mustard",
  color: "yellow",
  description:
    "He is a former football player who tries to get by on his former glory",
  age: "62",
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
};

//Weapons

var Rope = { name: "rope", weight: 10 };
var Knife = { name: "knife", weight: 8 };
var Candlestick = { name: "Candlestick", weight: 2 };
var Dumbbell = { name: "Dumbbell", weight: 30 };
var Poison = { name: "Poison", weight: 2 };
var Axe = { name: "axe", weight: 15 };
var Bat = { name: "bat", weight: 13 };
var Trophy = { name: "trophy", weight: 25 };
var Pistol = { name: "pistol", weight: 20 };

// Rooms' Collectio
var roomsArray = [
  "DinningRoom",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "BilliardRoom",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "LivingRoom",
  "Observatory",
  "Theater",
  "GuestHouse",
  "Patio"
];

// Characters Collection
var charactersArray = [
  MrGreen,
  DrOrchid,
  ProfPlum,
  MissScarlet,
  MrsPeacock,
  MrMustard
];

// Weapons Collection
var weaponsArray = [
  Rope,
  Knife,
  Candlestick,
  Dumbbell,
  Poison,
  Axe,
  Bat,
  Trophy,
  Pistol
];

//pick a random character
function randomSelector(arr1) {
  if (arr1 == false) return undefined;
  else var randomIndex = Math.floor(Math.random() * Math.floor(arr1.length));
  return arr1[randomIndex];
}

function pickMistery() {
var envelope = []
var randomChar = randomSelector(charactersArray)
var randomWeapon = randomSelector(weaponsArray)
var randomRoom = randomSelector(roomsArray)
envelope.push(randomChar,randomWeapon,randomRoom)
return envelope
}
var misteryEnvelope = pickMistery();

function revealMistery(arr3) {
 return arr3[0].first_name + " " + arr3[0].last_name + " killed Mr.Boddy using the " + arr3[1].name
   + " in the " + misteryEnvelope[2].name + " !!!!"

}
 console.log(revealMistery(misteryEnvelope))