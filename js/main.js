$.ajax({
  url:'http://freegeoip.net/json/',
  type:'get',
  dataType:'json'
}).done(function(data) {
  alert(data.ip);
});