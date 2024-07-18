/*window.addEventListener("load",function(){
    var second=document.getElementById['second']
})*/
setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hr_rotation = 30*htime + mtime/2;
  min_rotation = 6*mtime;
  sec_rotation = 6*stime;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
},1000);