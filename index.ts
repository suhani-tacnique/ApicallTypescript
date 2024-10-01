

interface Character {
    name: string;
    house: string;
    playsQuidditch: boolean;
    position: string;
    quidditchYears: number[];
  }
  
  
  fetch("https://coderbyte.com/api/challenges/json/quidditch-list")
    .then(result => result.json())
    .then(jsonformat => console.log(jsonformat));
  