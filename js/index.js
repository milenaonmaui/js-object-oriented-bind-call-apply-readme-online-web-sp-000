// use this to copy code snippets or use your browser's console
class Event {
  constructor (title, keywords) {
    this.title = title;
    this.keywords=keywords;
  }
}

class User {
  consructor(name, interests){
    this.name = name;
    this.interests = interests;
  }
  
  matchInterests(event){
    console.log(this.interests)
    return event.keywords.some(function(word){
      return this.interests.includes(word)
    });
  }
}

let billy = new User('billy', ['music', 'art', 'movies'])
let freeMusic = new Event('Free MusicShow', ['music', 'free', 'outside'])

console.log(billy.matchInterests(freeMusic))