function shout(string) {
    return string.toUpperCase();
  }

  function whisper(string) {
    return string.toLowerCase();
  }

  function logShout(string) {
    console.log(string.toUpperCase());
  }

  function logWhisper(string) {
    console.log(string.toLowerCase());
  }

  function sayHiToHeadphonedRoommate(string){
    var noHear = "I can't hear you!";
    var yesHear = "YES INDEED!";
    var loveHear = "I would love to!";
    if(string.toLowerCase(string) === string) {
    return noHear;
    }

    else if(string.toUpperCase(string) === string){
    return yesHear;
    }

    else if("Let's have dinner together!" === string){
    return loveHear;
  }
  }