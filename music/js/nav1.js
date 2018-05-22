
			window.onload = function() {
				var myajax = new XMLHttpRequest();
				myajax.open("GET", "home.json", true)
				myajax.send()
				myajax.onreadystatechange = function() {
					if(myajax.readyState == 4 && myajax.status == 200) {
						var search_text=document.getElementById("search_text");
						search_text.onclick=function(){
							search_text.placeholder=""
						}
						search_text.onkeydown=function(){
							if(search_text.value=="chenyi")
							{location.href="search.html";
								search_text.value=" "
						}							
						}
					var data = JSON.parse(myajax.response)
						//登录页面
						var login=document.getElementById("login");
						var top_button=document.getElementById("top_button")
						var login_list=data.userList;
						var right_top_text=document.getElementById("right_top_text")
							//login.innerHTML="Hi";
							//location.href="login.html";
							var arr=document.cookie.split(";");
							for (var a=0;a<arr.length;a++) {
							//通过=分割每个cookie项，得到键值数组
							var newarr=arr[a].split("=");
							
							if(newarr[0]=="name"){
								//得到代表用户名的newarr
								login.innerHTML="Hello"
								for (var b=0;b<login_list.length;b++) {
									if(newarr[1]==login_list[b].name){
									var ccc= top_button.innerHTML=login_list[b].ppp
									//console.log(ccc)
									right_top_text.innerHTML=login_list[b].words
									}
								}
								
							}
					}

						var banners = data.Banners;
						var banner = document.getElementById("img");
						var banner_bg = document.getElementById("banner");

						//设置定时器，每3秒轮播一次
						var timer1 =window.setInterval(change, 2000)
						var index = 0;
						function change() {
							banner.style.backgroundImage = banners[index].banner;
							banner_bg.style.backgroundImage = banners[index].banner_bg;

							var circle = document.getElementsByClassName("aa");
							for(var j = 0; j <=5; j++) {
								circle[j].style.backgroundPosition = "-4px -350px"
							}

							var circle1 = document.getElementById("a" + index)
							circle1.style.backgroundPosition = "-21px -350px";
							index++;						
							if(index > 5) index = 0;
						}
						
						var banner_left=document.getElementById("banner_left");
						banner_left.onclick=function(){
							clearInterval(timer1)
							index--;
							
							if(index==-1){
								index=banners.length-1
							}
							//console.log(index)
							banner.style.backgroundImage = banners[index].banner;
							banner_bg.style.backgroundImage = banners[index].banner_bg;

							var circle = document.getElementsByClassName("aa");
							for(var j = 0; j <=5; j++) {
								circle[j].style.backgroundPosition = "-4px -350px"
							}

							var circle1 = document.getElementById("a" + index)
							circle1.style.backgroundPosition = "-21px -350px";
							//setInterval(timer1)
						}
						
						var banner_right=document.getElementById("banner_right");
						banner_right.onclick=function(){
							clearInterval(timer1)
							index++;
							
							if(index==banners.length){
								index=0
							}
							
							banner.style.backgroundImage = banners[index].banner;
							banner_bg.style.backgroundImage = banners[index].banner_bg;

							var circle = document.getElementsByClassName("aa");
							for(var j = 0; j <=5; j++) {
								circle[j].style.backgroundPosition = "-4px -350px"
							}

							var circle1 = document.getElementById("a" + index)
							circle1.style.backgroundPosition = "-21px -350px";
							//setInterval(timer1)
						}
						
						//热门推荐部分Ajax导入
						var introduces = data.Introduce;

						var introduce_img = document.getElementsByClassName("introduce_pic");
						var introduce_text = document.getElementsByClassName("introduce_text");
						var introduce_number = document.getElementsByClassName("nav_text");
						//var banner_bg = document.getElementById("banner");
						for (var i=0;i<8;i++) {
							introduce_img[i].style.backgroundImage = introduces[i].img;
							var aaabbb= introduce_text[i].innerHTML = introduces[i].text;
							//console.log(aaabbb)
							introduce_number[i].innerHTML = introduces[i].number;
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
						var playBar_black=document.getElementById("playBar_black");
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
						var timer1=	setInterval(function() {
								playBar_red.style.width=(ad.currentTime/ad.duration)*playBar_black.offsetWidth+"px";
								playBar_btn.style.left=(ad.currentTime/ad.duration)*playBar_black.offsetWidth-16+"px";
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
								btn.id = "btn"
							}
						}
						
						
						//上一曲
						btn_prev.onclick = function() {
							indexx--;
							if(indexx <0) {
								indexx =1
							}
							ad.src = "mp3/" + arr[indexx].song_name+".mp3";
							
							//歌曲名字、歌手名、图片替换
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
						
						
						
						//黑色部分var scroll = document.getElementById('scroll');
						//var playBar_black=document.getElementById("playBar_black");					    
					    //红色部分var mask = document.getElementById('mask');
					    //var playBar_red=document.getElementById("playBar_red");
					    //上面的按钮var bar = document.getElementById('bar');
					    //var playBar_btn=document.getElementById("playBar-main-pbar-btn");
					    var barleft = 0;
					    playBar_btn.onmousedown = function(event){
					    	//clearInterval(timer1)
					      var event = event || window.event;
					      var leftVal = event.clientX - this.offsetLeft;
					      
					      var that = this;
					       // 拖动一定写到 down 里面才可以
					      document.onmousemove = function(event){
					        var event = event || window.event;
					        barleft = event.clientX - leftVal;     
					        if(barleft < 0)
					          barleft = 0;
					        else if(barleft > playBar_black.offsetWidth - playBar_btn.offsetWidth)
					        barleft = playBar_black.offsetWidth - playBar_btn.offsetWidth;
					        playBar_red.style.width = barleft +'px' ;
					        that.style.left = barleft-16 + "px";
					        //console.log(barleft)
					        //console.log(ad.duration)
					        var u=(barleft/playBar_black.offsetWidth)*ad.duration
					        
					        ad.currentTime=(barleft/playBar_black.offsetWidth)*ad.duration;
					        //console.log(ad.currentTime)
					       
					 
					        //防止选择内容--当拖动鼠标过快时候，弹起鼠标，bar也会移动，修复bug
					        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
					      }
					 
					    }
					    document.onmouseup = function(){
					    	
					      document.onmousemove = null; //弹起鼠标不做任何操作
					    }
						
						
						
						

			}

		}	
		}	
			
			
