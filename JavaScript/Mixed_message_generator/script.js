console.log("Welcome to mood message generator");
console.log(`              _                          
__      _____| | ___ ___  _ __ ___   ___ 
\ \ /\ / / _ \ |/ __/ _ \| '_ ` _ \ / _ \
 \ V  V /  __/ | (_| (_) | | | | | |  __/
  \_/\_/ \___|_|\___\___/|_| |_| |_|\___|`);
const randNumber = (rand) => {
  return Math.floor(Math.random() * rand);
};
const data = {
  _mood: ["happy", "sad", "angry"],
  _activity: ["joke", "poem", "song"],
  _song: [
    "Twinkle, twinkle, little star, How I wonder what you are.",
    "Row, row, row your boat, Gently down the stream.",
    "London Bridge is falling down, Falling down, falling down.",
    "Mary had a little lamb, Its fleece was white as snow.",
  ],
  _joke: [
    "What do you call fake spaghetti? An impasta.",
    "Why couldn't the bicycle stand up by itself? It was two-tired.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why don't scientists trust atoms? Because they make up everything.",
  ],
  _poem: [
    "A man is a man, a man is a man.",
    "In the quiet of the night, Underneath the stars so bright, Whispers float upon the air, Telling tales of love and care.",
    "Nature's lullaby gently sings, As the moon its light it brings, Dreams dance in the silent space, where worries vanish without trace",
    "Roses are red, violets are blue, Sugar is sweet, and so are you.",
  ],
  get mood() {
    return this._mood[randNumber(this._mood.length)];
  },
  get activity() {
    return this._activity[randNumber(this._activity.length)];
  },
  get song() {
    return this._song[randNumber(this._song.length)];
  },
  get joke() {
    return this._joke[randNumber(this._joke.length)];
  },
  get poem() {
    return this._poem[randNumber(this._poem.length)];
  },
};

const messegae = (data) => {
  const mood = data.mood;
  const activity = data.activity;
  console.log(`You are feeling ${mood} today.`);
  console.log(`You can listen to ${activity} today.`);
  if (activity === "song") {
    console.log(`Here is a song for you: ${data.song}`);
  } else if (activity === "joke") {
    console.log(`Here is a joke for you: ${data.joke}`);
  } else if (activity === "poem") {
    console.log(`Here is a poem for you: ${data.poem}`);
  }
};

messegae(data);
