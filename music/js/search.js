var mx = new XMLHttpRequest();
mx.open("GET", "data/search.json", true);
mx.send();
mx.onreadystatechange = function() {
	if(mx.readyState == 4 && mx.status == 200) {

		var search_text = document.getElementById("search_text");
		var searchname=document.getElementById("search-input-flag");
		var searchbtn=document.getElementById("btn-search");
		search_text.onclick = function() {
			search_text.placeholder = ""
		}
		search_text.onkeydown = function() {
			if(search_text.value == "chenyi" && event.keyCode==13) {
				search_text.value == "chenyi";
				searchname.value="chenyi";
			}
		}
		
		searchbtn.onclick=function(){
			if(searchname.value == "chenyi") {
			searchname.value="chenyi"
			}
			
		}
		

		var data = JSON.parse(mx.response);
		var songname = document.getElementsByClassName("songname");
		var tv = document.getElementsByClassName("tv");
		var songer = document.getElementsByClassName("songer");
		var cd = document.getElementsByClassName("cd");
		var time = document.getElementsByClassName("song-time");

		var arr = data.songInfo;

		for(var i = 0; i < arr.length; i++) {
			songname[i].innerHTML = arr[i].songname;
			songer[i].innerHTML = arr[i].songer;
			cd[i].innerHTML = arr[i].cd;
			tv[i].innerHTML = arr[i].tv;
			time[i].innerHTML = arr[i].time;
		}
		var pg1 = document.getElementById("change1");
		var pg2 = document.getElementById("change2");
		var pg3 = document.getElementById("change3");
		var pg4 = document.getElementById("change4");
		var pg5 = document.getElementById("change5");
		var pg6 = document.getElementById("change6");
		var pg7 = document.getElementById("change7");
		var pg8 = document.getElementById("change8");

		var l1 = document.getElementById("song-listlist");
		var l2 = document.getElementById("song-listlist2");
		var l3 = document.getElementById("song-listlist3");
		var l4 = document.getElementById("song-listlist4");
		var l5 = document.getElementById("song-listlist5");
		var l6 = document.getElementById("song-listlist6");
		var l7 = document.getElementById("song-listlist7");
		var l8 = document.getElementById("song-listlist8");
		pg1.onclick = function() {
			pg1.id = "change1";
			pg1.style.left = "none";
			pg2.id = "";
			pg3.id = "";
			pg4.id = "";
			pg5.id = "";
			pg6.id = "";
			pg7.id = "";
			pg8.id = "";
			l1.id = "song-listlist";
			l2.id = "song-listlist2";
			l3.id = "song-listlist2";
			l4.id = "song-listlist2";
			l5.id = "song-listlist2";
			l6.id = "song-listlist2";
			l7.id = "song-listlist2";
			l8.id = "song-listlist2";
		}
		pg2.onclick = function() {
			pg1.id = "";
			pg2.id = "change1";
			pg3.id = "";
			pg4.id = "";
			pg5.id = "";
			pg6.id = "";
			pg7.id = "";
			pg8.id = "";
			l1.id = "song-listlist2";
			l2.id = "song-listlist";
			l3.id = "song-listlist2";
			l4.id = "song-listlist2";
			l5.id = "song-listlist2";
			l6.id = "song-listlist2";
			l7.id = "song-listlist2";
			l8.id = "song-listlist2";
		}
		pg3.onclick = function() {
			pg1.id = "";
			pg2.id = "";
			pg3.id = "change1";
			pg4.id = "";
			pg5.id = "";
			pg6.id = "";
			pg7.id = "";
			pg8.id = "";
			l3.id = "song-listlist";
			l1.id = "song-listlist2";
			l2.id = "song-listlist2";
			l4.id = "song-listlist2";
			l5.id = "song-listlist2";
			l6.id = "song-listlist2";
			l7.id = "song-listlist2";
			l8.id = "song-listlist2";
		}
		pg4.onclick = function() {
			pg1.id = "";
			pg4.id = "change1";
			pg2.id = "";
			pg3.id = "";
			pg5.id = "";
			pg6.id = "";
			pg7.id = "";
			pg8.id = "";
			l4.id = "song-listlist";
			l1.id = "song-listlist2";
			l2.id = "song-listlist2";
			l3.id = "song-listlist2";
			l5.id = "song-listlist2";
			l6.id = "song-listlist2";
			l7.id = "song-listlist2";
			l8.id = "song-listlist2";
		}
		pg5.onclick = function() {
			pg1.id = "";
			pg2.id = "";
			pg3.id = "";
			pg4.id = "";
			pg5.id = "change1";
			pg6.id = "";
			pg7.id = "";
			pg8.id = "";
			l5.id = "song-listlist";
			l1.id = "song-listlist2";
			l2.id = "song-listlist2";
			l3.id = "song-listlist2";
			l4.id = "song-listlist2";
			l6.id = "song-listlist2";
			l7.id = "song-listlist2";
			l8.id = "song-listlist2";
		}
		pg6.onclick = function() {
			pg1.id = "";
			pg2.id = "";
			pg3.id = "";
			pg4.id = "";
			pg5.id = "";
			pg6.id = "change1";
			pg7.id = "";
			pg8.id = "";
			l6.id = "song-listlist";
			l1.id = "song-listlist2";
			l2.id = "song-listlist2";
			l3.id = "song-listlist2";
			l4.id = "song-listlist2";
			l5.id = "song-listlist2";
			l7.id = "song-listlist2";
			l8.id = "song-listlist2";
		}
		pg7.onclick = function() {
			pg1.id = "";
			pg2.id = "";
			pg3.id = "";
			pg4.id = "";
			pg5.id = "";
			pg6.id = "";
			pg7.id = "change1";
			pg8.id = "";
			l1.id = "song-listlist2";
			l2.id = "song-listlist2";
			l3.id = "song-listlist2";
			l4.id = "song-listlist2";
			l5.id = "song-listlist2";
			l6.id = "song-listlist2";
			l7.id = "song-listlist";
			l8.id = "song-listlist2";
		}
		pg8.onclick = function() {
			pg1.id = "";
			pg2.id = "";
			pg3.id = "";
			pg4.id = "";
			pg5.id = "";
			pg6.id = "";
			pg7.id = "";
			pg8.id = "change1";
			pg8.style.borderRight = "none";
			l1.id = "song-listlist2";
			l2.id = "song-listlist2";
			l3.id = "song-listlist2";
			l4.id = "song-listlist2";
			l5.id = "song-listlist2";
			l6.id = "song-listlist2";
			l7.id = "song-listlist2";
			l8.id = "song-listlist";
		}
		//音乐播放条部分
		var lay = data.Music;
		console.log(lay)
		var song_name = document.getElementById("song")
		var singer = document.getElementById("singer")
		var play_pic = document.getElementById("playBar_img");
		var ad = document.getElementById("ad")
		var btn = document.getElementById("btn")
		var btn_prev = document.getElementById("btn_prev")
		var btn_next = document.getElementById("btn_next")
		var time1 = document.getElementById("time1")
		var time2 = document.getElementById("time2")
		//						var playBar_black=document.getElementById("playBar_black");
		var playBar_red = document.getElementById("playBar_red");
		var playBar_btn = document.getElementById("playBar-main-pbar-btn");
		
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
		btn.onclick = function() {
			if(indexx < 0) indexx = 0
			ad.src = "mp3/" + lay[indexx].song_name + ".mp3";

			if(btn.id == "btn") {
				ad.play()
				btn.style.backgroundPosition = "0px -164px"
				song.innerHTML = lay[indexx].song_name
				singer.innerHTML = lay[indexx].singer
				play_pic.src = lay[indexx].pic
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
						playBar_red.style.width = (ad.currentTime / ad.duration) * 493 + "px";
						playBar_btn.style.left = (ad.currentTime / ad.duration) * 493 - 16 + "px";
						if(ad.currentTime >= 60) {
							var m = Math.floor(ad.currentTime / 60)
							var str = "0" + m + ":";

							var s = Math.floor(ad.currentTime) - m * 60
							str += s;

						} else {
							if(ad.currentTime < 10) {
								str = "00:" + "0" + Math.floor(ad.currentTime)
							} else {
								str = "00:" + Math.floor(ad.currentTime)
							}

						}
						time1.innerText = str;
					}, 800)

				}
				btn.id = "pause"
			} else {
				ad.pause()
				btn.style.backgroundPosition = "0px -203px"
				btn.id = "btn"
			}
		}
		//上一曲
		btn_prev.onclick = function() {
			indexx--;
			if(indexx < 0) {
				indexx = 0
			}
			ad.src = "mp3/" + lay[indexx].song_name + ".mp3";
			song.innerHTML = lay[indexx].song_name
			singer.innerHTML = lay[indexx].singer
			play_pic.src = lay[indexx].pic
			ad.play()
		}
		//下一曲
		btn_next.onclick = function() {
			indexx++;
			song.innerHTML = lay[indexx].song_name
			singer.innerHTML = lay[indexx].singer
			play_pic.src = lay[indexx].pic
			ad.src = "mp3/" + lay[indexx].song_name + ".mp3";

			ad.play()
			if(indexx == lay.length - 1) {
				indexx = -1
			}
		}
	}
}