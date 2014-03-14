// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    this.set('playcount', 0);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);

  },
  enqueue: function(){
    this.trigger('enqueue',this);
  },
  dequeue: function(){
    this.trigger('dequeue', this);
  },
  ended: function(){
    var count = this.get('playcount');
    this.set('playcount', count+1);
    this.trigger('ended', this);
  },
  removal: function(){
    this.trigger('removal', this);
  }
});
