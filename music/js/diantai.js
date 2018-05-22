window.onload = function() {
	var label = document.getElementById("search_label");
	label.onclick = function() {
		//					label.innerHTML=" "
		label.style.display = "none"
	}

	var prev = document.getElementById("raditype-prev");
	var next = document.getElementById("raditype-next");
	var btn1 = document.getElementById("dotpage-pg1");
	var btn2 = document.getElementById("dotpage-pg2");
	var box1 = document.getElementById("raditype-box1");
	var box2 = document.getElementById("raditype-box2");
	prev.onclick = function() {
		box2.style.display = "none";
		box1.style.display = "block";
		btn1.style.backgroundPosition = "-30px 0px";
		btn2.style.backgroundPosition = "0px 0px";
		next.style.opacity = "0.25";
		prev.style.opacity = "0.08";

	}
	next.onclick = function() {
		box1.style.display = "none";
		box2.style.display = "block";
		btn1.style.backgroundPosition = "0px 0px";
		btn2.style.backgroundPosition = "-30px 0px";
		prev.style.opacity = "0.25";
		next.style.opacity = "0.08";
	}
	btn1.onclick = function() {
		box2.style.display = "none";
		btn2.style.backgroundPosition = "0px 0px";
		box1.style.display = "block";
		btn1.style.backgroundPosition = "-30px 0px";
		next.style.opacity = "0.25";
		prev.style.opacity = "0.08";
	}
	btn2.onclick = function() {
		box1.style.display = "none";
		btn1.style.backgroundPosition = "0px 0px";
		box2.style.display = "block";
		btn2.style.backgroundPosition = "-30px 0px";
		prev.style.opacity = "0.25";
		next.style.opacity = "0.08";
	}

	var myajax = new XMLHttpRequest();
	myajax.open("GET", "data/diantai.json", true);
	myajax.send();
	myajax.onreadystatechange = function() {

		if(myajax.readyState == 4 && myajax.status == 200) {

			var data = JSON.parse(myajax.response);
			var tpimg = document.getElementsByClassName("raditype-icon");
			var tptxt = document.getElementsByClassName("raditype-txt");

			var title = document.getElementsByClassName("dt-title");
			var note = document.getElementsByClassName("dt-list-cont-note");
			var dtimg = document.getElementsByClassName("dt-img")
			var arr1 = data.diantai;

			var arr = data.types;
			//console.log(myajax.response);

			for(var i = 0; i < arr.length; i++) {

				tpimg[i].style.backgroundImage = arr[i].tpimg;
				tptxt[i].innerHTML = arr[i].tptxt;
			}

			for(var i = 0; i < arr1.length; i++) {
				dtimg[i].src = arr1[i].diantaiimg;
				title[i].innerHTML = arr1[i].title;
				note[i].innerHTML = arr1[i].note;
			}
			//音乐播放条部分
						var lay=data.Music;
						console.log(lay)
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
						
						var playBar_unlock=document.getElementById("playBar-main-right-btn")
						var playBar=document.getElementById("playBar")
						playBar_unlock.onclick=function(){
							if(playBar_unlock.id=="playBar-main-right-btn"){
							playBar.style.height="53px";
							playBar_unlock.style.backgroundPosition="-100px -380px"
							playBar_unlock.id="playBar_lock"
							}else{
								playBar.style.height="6px";
							playBar_unlock.style.backgroundPosition="-80px -380px"
							playBar_unlock.id="playBar-main-right-btn"
							}
						}
						
						//播放与暂停
						var indexx = 0;
						btn.onclick=function(){
							if(indexx<0)indexx=0
							ad.src = "mp3/" + lay[indexx].song_name+".mp3";
							
							if(btn.id == "btn") {
								ad.play()
								btn.style.backgroundPosition = "0px -164px"	
								song.innerHTML=lay[indexx].song_name
								singer.innerHTML=lay[indexx].singer
								play_pic.src=lay[indexx].pic
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
							ad.src = "mp3/" + lay[indexx].song_name+".mp3";
							song.innerHTML=lay[indexx].song_name
							singer.innerHTML=lay[indexx].singer
							play_pic.src=lay[indexx].pic
							ad.play()
						}
						//下一曲
						btn_next.onclick = function() {
							indexx++;
							song.innerHTML=lay[indexx].song_name
							singer.innerHTML=lay[indexx].singer
							play_pic.src=lay[indexx].pic
							ad.src = "mp3/" + lay[indexx].song_name+".mp3";
							
							ad.play()		
							if(indexx == lay.length - 1) {
								indexx = -1
							}
						}
		}
	}
}