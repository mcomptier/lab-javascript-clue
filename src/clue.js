// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "white",
    },
    {
        firstName: "profPlum",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        color: "purple"
    },
    {
        firstName: "missScarlet",
        lastName: "Scarlet",
        occupation: "Actor",
        age: 31,
        description: "A-list movie star with a dark past",
        image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "red"
    },
    {
        firstName: "mrsPeacock",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "From a wealthy family, uses status and money for popularity",
        image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        color: "blue"
    },
    {
      firstName: "Victor",
      lastName: "Plum",
      occupation: "Designer",
      age: 22,
      description: "Billionaire video game designer",
      image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
      color: "purple"
    },
    {
        firstName: "mrMustard",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "Former football player trying to get by on former glory",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "yellow"
    }
  ];
  
  
  // Check requirements
  console.log("suspectsArray is an array:", Array.isArray(suspectsArray));
  console.log("suspectsArray has 6 suspects:", suspectsArray.length === 6);
  
  // Check properties for each suspect
  suspectsArray.forEach((suspect, index) => {
    console.log(`Suspect ${index + 1} properties:`);
    console.log("firstName is a string:", typeof suspect.firstName === "string");
    console.log("lastName is a string:", typeof suspect.lastName === "string");
    console.log("occupation is a string:", typeof suspect.occupation === "string");
    console.log("age is a number:", typeof suspect.age === "number");
    console.log("description is a string:", typeof suspect.description === "string");
    console.log("image is a string:", typeof suspect.image === "string");
    console.log("color is a string:", typeof suspect.color === "string");
    console.log("--------------------");
  });

// Rooms Array

const weaponsArray = [
    { name: "rope", weight: 10 },
    { name: "knife", weight: 8 },
    { name: "candlestick", weight: 2 },
    { name: "dumbbell", weight: 30 },
    { name: "poison", weight: 2 },
    { name: "axe", weight: 15 },
    { name: "bat", weight: 13 },
    { name: "trophy", weight: 25 },
    { name: "pistol", weight: 20 }
  ];
  const roomsArray = [
    { name: "Dining Room" },
    { name: "Conservatory" },
    { name: "Kitchen" },
    { name: "Study" },
    { name: "Library" },
    { name: "Billiard Room" },
    { name: "Lounge" },
    { name: "Ballroom" },
    { name: "Hall" },
    { name: "Spa" },
    { name: "Living Room" },
    { name: "Observatory" },
    { name: "Theater" },
    { name: "Guest House" },
    { name: "Patio" }
  ];  

 
  

// ITERATION 2

function selectRandom(array) {
    if (array.length === 0) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
 
  
  function pickMystery(suspects, weapons, rooms) {
    if (suspects.length === 0 || weapons.length === 0 || rooms.length === 0) {
      return undefined;
    }
  
    const randomSuspect = selectRandom(suspects);
    const randomWeapon = selectRandom(weapons);
    const randomRoom = selectRandom(rooms);
  
    return {
      suspect: randomSuspect,
      weapon: randomWeapon,
      room: randomRoom
    };
  }
  
  // ITERATION 3
  
  function revealMystery(mystery) {
    if (!mystery || !mystery.suspect || !mystery.weapon || !mystery.room) {
      return "Invalid mystery";
    }
  
    const { suspect, weapon, room } = mystery;
    return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
  }
  