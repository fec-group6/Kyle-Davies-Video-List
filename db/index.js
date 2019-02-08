const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:')); 
db.once('open', function() { 
  console.log('DATABASE OPEN'); 
});


let videoListSchema = mongoose.Schema({
  videoID: String,
  VideoName: String,
  creatorName: String,


})

let Video = mongoose.model('Video', videoListSchema);














module.exports.Video = Video;