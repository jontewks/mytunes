// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    });

    this.on('ended', function(){
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    });

    this.on('dequeue', function() {
      this.shift();
    });

    this.on('removal', function(song) {
      this.remove(song);
    });

  },
  playFirst: function(){
    // if length ===1 && not playing LATER FARID
    this.models[0].play();

  }


});
