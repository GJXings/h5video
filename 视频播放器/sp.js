var videolists =[
        {
            "id":"1",
            "name":"未知",
           
            "duration":"00:01:05",
            "src":"video/01.mp4",
         
        },
        {
            "id":"2",
            "name":"扑克",
           
            "duration":"00:00:17",
            "src":"video/02.mp4",
           
        },
 {
 	"id":"3",
            "name":"浮夸",
           
            "duration":"00:04:30",
            "src":"video/浮夸.mp4",

        }]

var videos=document.getElementsByClassName("right")[0];
var left=document.getElementsByClassName("left")[0];
var ul=videos.children[0];
var lis=ul.children;
var tiao1=document.getElementsByClassName("tiao1")[0];
var tiao=document.getElementsByClassName("tiao")[0];
var b1=document.getElementsByClassName("b1")[0];
var buttom=document.getElementsByClassName("buttom")[0];
var bntplay=document.getElementById("play");
var off=document.getElementById("up")
var up=document.getElementById("off")
var currenttime=document.getElementById("currenttime")
var toaltime=document.getElementById("toaltime")
var play=document.getElementsByTagName("video")[0]
var box=document.getElementsByClassName("box")[0];
var bck=document.getElementById("bck");
var full=document.getElementById("full");
var ico=document.getElementById("ico");
var say=document.getElementById("say");


 lodelist()
  var play_index=0;
  function lodelist(){
           	for(var i=0;i<videolists.length;i++){
           		var video=videolists[i]
           		var li=document.createElement("li")
           		ul.appendChild(li)
           		var span=document.createElement("span")
           		li.appendChild(span)
           		var p=document.createElement("p")
           		li.appendChild(p)
           		span.innerHTML=video.name
           		p.innerHTML=video.duration

           		li.setAttribute("index",i)

           		li.onclick=function(){
   		var index=this.getAttribute("index")
   		play_index=index;
   		for(var j=0;j<videolists.length;j++){
      		lis[j].children[0].style.color="#fff"
      }	
      this.children[0].style.color="green"
   		lodevideo();
   		play.play();
   		bntplay.setAttribute("class","fa fa-pause")
   	}
           	}
           }
play.onmouseover=function(){
	buttom.style.display="block";
}
play.onmouseout=function(){
	buttom.style.display="none";
}
           bntplay.onclick=function(){
           	if(play.paused){
           		play.play();
   		bntplay.setAttribute("class","fa fa-pause")
           		
           	}else{
           		play.pause();
   		bntplay.setAttribute("class","fa fa-play")
           	}
           }
       function lodevideo(){
	    var video=videolists[play_index]
           play.src=video.src;
           		toaltime.innerHTML=video.duration
           
}    
              
    function backward(){

		if(play_index==0){
			play_index=videolists.length-1
		}else{
			play_index--;
		}
      	for(var i=0;i<videolists.length;i++){
      		lis[i].children[0].style.color="#fff"
      	}
   		
      	lis[play_index].children[0].style.color="green"
 
		lodevideo()
		play.play();
   		bntplay.setAttribute("class","fa fa-pause")
   		
	}  
	 function forward(){

		if(play_index==videolists.length-1){
			play_index=0
		}else{
			play_index++;
		}
      	for(var i=0;i<videolists.length;i++){
      		lis[i].children[0].style.color="#fff"
      	}
   		
      	lis[play_index].children[0].style.color="green"
 
		lodevideo()
		play.play();
   		bntplay.setAttribute("class","fa fa-pause")
   		
	}  
	function stopward(){

		
      	for(var i=0;i<videolists.length;i++){
      		lis[i].children[0].style.color="#fff";
      		if(play_index==i){
			play.pause()
		}
      	}
   		
      	lis[play_index].children[0].style.color="green"
 
		lodevideo()
		play.play();
   		bntplay.setAttribute("class","fa fa-pause")
   		
	} 
	timer= window.setInterval(js,100)
      	function js(){

     	currenttime.innerHTML=time2(play.currentTime);
     
     	var currenValue=play.currentTime/play.duration
     	b1.style.width=currenValue*100+"%"
     }
      	function time2(time){
//	if(time>=3600){
	var hour=parseInt(time/3600)
	var minute=parseInt(time%3600/60)
	var second=parseInt(time%3600%60);
	hour=hour<10?"0"+hour:hour;
	minute=minute<10?"0"+minute:minute;
	second=second<10?"0"+second:second;
	return hour+":"+minute+":"+second
//	}else{
//		
//	var minute=parseInt(time/60)
//	var second=parseInt(time%60)
//	minute=minute<10?"0"+minute:minute;
//	second=second<10?"0"+second:second;
//	return minute+":"+second;	
//	}
	
}
      	 play.onclick=function(event){
       	var e=event||window.event
        console.log(e.clientX-this.offsetLeft)
       	
       play.process=(e.clientX-this.offsetLeft-220)/this.offsetWidth;
       play.currentTime= play.process*play.duration
       }
      	off.onclick=function(){
       	play.volume=0;
       	tiao1.style.width="0";
       }
      	up.onclick=function(){
       	play.volume=1;
      tiao1.style.width="100%";;
       }
       tiao.onclick=function(event){
 var e=event||window.event
       play.volume=(e.clientX-this.offsetLeft-220)/this.offsetWidth;
//      console.log(e.clientX-this.offsetLeft-200)
        tiao1.style.width=play.volume*100+"%";
       }
       play.addEventListener("dblclick",function(){
//			play.addEventListener("dblclick",function(){
			          if (play.requestFullscreen)   
            if (document.fullScreenElement) {
                document.cancelFullScreen();       
            } else {
              play.requestFullscreen();
            }
          else if (play.msRequestFullscreen)
            if (document.msFullscreenElement) {
                document.msExitFullscreen();
              } else {
              play.msRequestFullscreen();
            }
          else if (play.mozRequestFullScreen)
            if (document.mozFullScreenElement) {
                document.mozCancelFullScreen();
            } else {
              play.mozRequestFullScreen();
            }
          else if (play.webkitRequestFullscreen)
            if (document.webkitFullscreenElement) {
                document.webkitCancelFullScreen();
              } else {
              play.webkitRequestFullscreen();
            }
    	})
       play.addEventListener("dblclick",function(){
       	
       if(play.requestFullscreen){
       play.requestFullscreen();
       	
       }else if(play.webkitRequestFullScreen){
       	play.webkitRequestFullScreen()
       }else if(play.msRequestFullScreen){
       	play.msRequestFullScreen()
       }else if(play.mozRequestFullScreen()){
       	play.mozRequestFullScreen()
       }
       })
       play.addEventListener("dblclick",function(){
       	if(play.exitFullScreen){
      play.exitFullScreen();
       	
       }else if(play.webkitExitFullScreen){
       	play.webkitExitFullScreen();
       }else if(play.msExitFullScreen){
       	play.msExitFullScreen()
       }else if(play.mozExitFullScreen){
       	play.mozExitFullScreen()
       }
       })
       
      full.onclick=function(){
    
       if(play.requestFullscreen){
       play.requestFullscreen();
       	
       }else if(play.webkitRequestFullScreen){
       	play.webkitRequestFullScreen()
       }else if(play.msRequestFullScreen){
       	play.msRequestFullScreen()
       }else if(play.mozRequestFullScreen()){
       	play.mozRequestFullScreen()
       }
//
       }
      var dict = [
		{
			id:"没毛病老铁"
		},{
			id:"梦回唐朝!"
		},{
			id:"我曹操不服！"
		},{
			id:"列国在哪！"
		},{
			id:"这算哪根葱？"
		},{
			id:"小子别惹事"
		},{
			id:"赌圣归来"
		},{
			id:"我是小马哥"
		},{
			id:"6666666"
		},{
			id:"说曹操曹操就到"
		},{
			id:"看我72变"
		},{
			id:"吉吉斗地主"
		}]
		
		
		
		
		var box2 = document.querySelector(".box2");
		var time5= null;

		
		function Creat () {
			var child = document.createElement('span');
			child.className = "ball";
			box2.appendChild(child);

			child.style.left = "550px";
			child.style.top = Math.floor(Math.random()*260)+'px';
			child.innerHTML=dict[Math.floor(Math.random()*dict.length)].id;
			var l = child.offsetLeft;
			var time4 = null;
			time4 = setInterval(function(){
			 	 l=l-1;
				if(l<10){
					clearInterval(time4);
					 box2.removeChild(child);
				}
				child.style.left = l+'px';
			},10); 	
		}


		var says=1;
		say.onclick=function(){
			if(says){
				says=0;
		time5=setInterval(Creat,1500);
				box2.style.display="block"
				
			}else{
				says=1;
				clearInterval(time5);
				box2.style.display="none"
			}
		}
//   plajy.style.height="800px"
       var can=document.getElementById("cd1");
		var tet=can.getContext("2d");
	play.addEventListener("play",function(){
		setInterval(function(){
			tet.drawImage(play,0,0,300,200)
		},17)
	})
	window.onscroll=function(){
		var top=document.body.scrollTop;
		console.log(top)
		if(top>=380){
			can.style.display="block";
		}else{
			can.style.display="none";
			
		}
	}
		
