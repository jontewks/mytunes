// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },
  playFirst: function(){
    // if length ===1 && not playing LATER FARID
    if(this.length === 1){
      this.models[0].trigger('play',this.models[0]);
    }
  }

});
