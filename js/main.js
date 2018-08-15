$.ajax({
  url:'http://freegeoip.net/json/',
  type:'get',
  dataType:'json'
}).done(function(data) {
  alert(data.ip);
});
// $(document).ready(function() {
//  var w =  $('.r');
//  console.log(w);
// });