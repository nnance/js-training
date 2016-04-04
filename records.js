// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};
function update(id, prop, value) {
  var rec = collection[id]
  if (value) {
    if (prop !== "tracks") {
      rec[prop] = value
    } else {
      rec[prop].push(value)
    }
  } else {
    delete rec[prop]
  }
  return collection;
}
console.log(update(5439, "artist", "ABBA")[5439].artist) // ABBA
console.log(update(1245, "tracks", "Addicted to Love")[1245].tracks[0]) // Addicted to Love
