window.onload=function(){
var myajax = new XMLHttpRequest();
myajax.open("GET", "songlist.json", true);
myajax.send();
myajax.onreadystatechange = function() {

	if(myajax.readyState == 4 && myajax.status == 200) {
		var data = JSON.parse(myajax.response);
		
		var label=document.getElementById("search_label_me");
						
							label.onclick=function(){
			//					label.innerHTML=" "
							label.style.display="none"
							}
		var arr1 = data.list;
			var pic1 = document.getElementsByClassName("pic1");
			var number = document.getElementsByClassName("nav_text");
			var introduce_text = document.getElementsByClassName("introduce_text");
			var author =document.getElementsByClassName("author")
			

			for (var i = 0; i < 35; i++) {
				pic1[i].style.backgroundImage = arr1[i].img;				
				introduce_text[i].innerHTML = arr1[i].test;
				author[i].innerHTML =arr1[i].auther;
				number[i].innerHTML = arr1[i].num;
			}
			
			 //音乐播放条部分
						var arr=data.Music;
						var song_name=document.getElementById("song")
						var singer=document.getElementById("singer")
						var play_pic=document.getElementById("playBar_img");
						var ad = document.getElementById("ad")
						var btn=document.getElementById("btn")						
						var btn_prev=document.getElementById("btn_prev")
						var btn_next=document.getElementById("btn_next")
						var time1 = document.getElementById("time1")
						var time2 = document.getElementById("time2")
//						var playBar_black=document.getElementById("playBar_black");
						var playBar_red=document.getElementById("playBar_red");
						var playBar_btn=document.getElementById("playBar-main-pbar-btn");
						
						//播放与暂停
						var indexx = 0;
						btn.onclick=function(){
							if(indexx<0)indexx=0
							ad.src = "mp3/" + arr[indexx].song_name+".mp3";
							
							if(btn.id == "btn") {
								ad.play()
								btn.style.backgroundPosition = "0px -164px"	
								song.innerHTML=arr[indexx].song_name
								singer.innerHTML=arr[indexx].singer
								play_pic.src=arr[indexx].pic
							ad.oncanplay = function() {
							var str = ""							
							if(ad.duration >= 60) {
								var m = Math.floor(ad.duration / 60)
								var str = "0" + m + ":";
								
								var s = Math.floor(ad.duration) - m * 60
								str += s;

							} else {
								str = "00:" + ad.duration
							}
							time2.innerText = str;
							setInterval(function() {
								playBar_red.style.width=(ad.currentTime/ad.duration)*493+"px";
								playBar_btn.style.left=(ad.currentTime/ad.duration)*493-16+"px";
								if(ad.currentTime >= 60) {
									var m = Math.floor(ad.currentTime / 60)
									var str = "0" + m + ":";

									var s = Math.floor(ad.currentTime) - m * 60
									str += s;

								} else {
									if(ad.currentTime<10){
										str = "00:" + "0"+Math.floor(ad.currentTime)
									}
									else{
										str = "00:" +Math.floor(ad.currentTime)
									}
									
								}
								time1.innerText = str;								
							}, 800)

						}
								btn.id = "pause"
							}else{
								ad.pause()
								btn.style.backgroundPosition = "0px -203px"
								btn.id = "btn"
							}
						}
						//上一曲
						btn_prev.onclick = function() {
							indexx--;
							if(indexx <0) {
								indexx = 0
							}
							ad.src = "mp3/" + arr[indexx].song_name+".mp3";
							song.innerHTML=arr[indexx].song_name
							singer.innerHTML=arr[indexx].singer
							play_pic.src=arr[indexx].pic
							ad.play()
						}
						//下一曲
						btn_next.onclick = function() {
							indexx++;
							song.innerHTML=arr[indexx].song_name
							singer.innerHTML=arr[indexx].singer
							play_pic.src=arr[indexx].pic
							ad.src = "mp3/" + arr[indexx].song_name+".mp3";
							
							ad.play()		
							if(indexx == arr.length - 1) {
								indexx = -1
							}
						}
		}

	}

   var more =document.getElementById("all_more")
   var search_label =document.getElementById("search_label")
   var content =document.getElementById("content")
    
    search_label.onclick=function(e){
   	more.style.display="block";
   	e.preventDefault();
   	e.stopPropagation();
   }
   
   content.onclick =function(){
   	more.style.display="none"
   }
    var pic0 =document.getElementById("pic0")
    pic0.onclick=function(){
 	location.href="detail.html"
 }
    
    
   
}