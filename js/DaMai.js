var arr=[
	{
		"txt":"周杰伦2016“地表最强”世界巡回演唱会—嘉兴站",
		"img":"./img/1.jpg",
		"num":"01."
	},
	{
		"txt":"浦发银行信用卡“岳来越好”2016岳云鹏相声专场-杭州站",
		"img":"./img/2.jpg",
		"num":"02."
	},
	{
		"txt":"话剧《大先生》",
		"img":"./img/3.jpg",
		"num":"03."
	},
	{
		"txt":"2016年天空狂欢节（SKY CITY Carnival）",
		"img":"./img/4.jpg",
		"num":"04."
	},
	{
		"txt":"英国儿童海洋探险舞台剧《海底小纵队之火山大冒险》",
		"img":"./img/5.jpg",
		"num":"05."
	},
	{
		"txt":"2016马頔孤言寡语系列音乐会杭州站",
		"img":"./img/6.jpg",
		"num":"06."
	},
	{
		"txt":"2016杭州当代戏剧节",
		"img":"./img/7.jpg",
		"num":"07."
	},
	{
		"txt":"西戏国际艺术中心",
		"img":"./img/8.jpg",
		"num":"08."
	},
	{
		"txt":"程璧“我和小鸟和铃铛”2016全国巡回演唱会—杭州站",
		"img":"./img/9.jpg",
		"num":"09."
	},
	{
		"txt":"2016张惠妹乌托邦世界巡城演唱会-杭州站",
		"img":"./img/10.jpg",
		"num":"10."
	},
	{
		"txt":"陈绮贞Acoustic Cheer-ego 房间里的音乐会巡演 杭州站 ",
		"img":"./img/11.jpg",
		"num":"11."
	}];
var arr1=[
	{
		"tit":"非常林奕华舞台剧《心之侦探》",
		"imgSrc":"./img/01.jpg"
	},
	{
		"tit":"话剧《聆听弘一》",
		"imgSrc":"./img/02.jpg"
	},
	{
		"tit":"舞剧《夜宴》",
		"imgSrc":"./img/03.jpg"
	},
	{
		"tit":"小野丽莎2017杭州新年演唱会",
		"imgSrc":"./img/04.jpg"
	},
	{
		"tit":"俄罗斯皇家芭蕾团经典芭蕾舞剧《天鹅湖》世界巡演杭州站 ",
		"imgSrc":"./img/05.jpg"
	},
	{
		"tit":"白先勇青春版《牡丹亭》",
		"imgSrc":"./img/06.jpg"
	},
	{
		"tit":"天空之城—久石让·宫崎骏经典视听音乐会",
		"imgSrc":"./img/07.jpg"
	}];
function creatImg(array){
	for(var i=0;i<array.length;i++){
		var $txt=array[i].txt,
			$img=array[i].img,
			$num=array[i].num;
		$(".lst").append(
			"<li class=\"bgs bg-"+(i+1)+"\">"
			+"<a title="+$txt+">"
			+"<img src="+$img+">"
			+"</a>"
			+"</li>");
	}
	$(".shade").append(
			"<li class=\"item tm-1\">"+
				"<a title="+array[10].txt+">"+
					"<span class=\"num\"></span>"+
					"<span class=\"txt\"></span>"+
				"</a>"+
			"</li>"+
			"<li class=\"item tm-2\">"+
				"<a title="+array[0].txt+">"+
					"<span class=\"num\"></span>"+
					"<span class=\"txt\"></span>"+
				"</a>"+
			"</li>"+
			"<li class=\"item tm-3\">"+
				"<a title="+array[1].txt+">"+
					"<span class=\"num\"></span>"+
					"<span class=\"txt\"></span>"+
				"</a>"+
			"</li>");
}
creatImg(arr);

function creatRight(array){
	for(var i=0;i<array.length;i++){
		var $imgSrc=array[i].imgSrc,
			$tit=array[i].tit;
		$(".right-slide").append(
			"<li class=\"rbg-"+i+"\"><a>"
			+"<img src="+$imgSrc+" title="+$tit+"></a></li>");
		$(".nums").append("<span class=\"ic-"+i+"\"></span>");
	}
}
creatRight(arr1);

var rtm=null;
this._num=0;
function Rtb(){
	var index;
	index=this._num;
	this._num=index >6 ? 1 : ++index
	var No=this._num-1;
	$(".rbg-"+No).addClass("show").siblings().removeClass("show");
	$(".ic-"+No).addClass("on").siblings().removeClass("on");
	$(".city-num").text(this._num);
}
rtm=setInterval(Rtb,1000);
$(".right-slide").mouseenter(function(){
	clearInterval(rtm);
}).mouseleave(function(){
	rtm=setInterval(Rtb,1000);
})
$(".skip.prev").click(function(){

})
$(".skip.next").click(function(){
	Rtb();
})

var timer=null;
this._eq=0;
function tab(){
	var index,
		previousIndex, //设置轮播图前一个下标
		nextIndex;
		index=this._eq;
		this._eq=index >10 ? 1 : ++index;
	var exp=this._eq;
	previousIndex=exp > 1 ? exp-1  : 11;
	nextIndex=exp < 11 ? exp + 1 : 1; 

	console.log(previousIndex,exp,nextIndex);
	
	var num=(arr[exp-1].num);
	var txt=(arr[exp-1].txt);

	var bnum=(arr[previousIndex-1].num);
	var btxt=(arr[previousIndex-1].txt);

	var cnum=(arr[nextIndex-1].num);
	var ctxt=(arr[nextIndex-1].txt);

	$(".bgs.bg-"+exp).addClass("show").siblings().removeClass("show");
	$(".item.tm-2 a .num").text(num);
	$(".item.tm-2 a .txt").text(txt);
	$(".item.tm-1 a .num").text(bnum);
	$(".item.tm-1 a .txt").text(btxt);
	$(".item.tm-3 a .num").text(cnum);
	$(".item.tm-3 a .txt").text(ctxt);
}
timer=setInterval(tab,1000);
$(".banner").mouseenter(function(){
	$(".snow").css("display","block");
	clearInterval(timer);
}).mouseleave(function(){
	$(".snow").css("display","none");
	timer=setInterval(tab,1000);
})
$(".snow.prev").click(function(){

})
$(".snow.next").click(function(){
	tab();
})
/*var aPic=qs(document,".lst");
var aBg=qsa(document,".bgs");
// var aSnow=qsa(document,".snow");
var aLeft=qs(document,".prev");
var aRight=qs(document,".next");
var aShade=qs(document,".shade");
var aLi=aShade.getElementsByTagName("li");
aLi=Array.prototype.slice.call(aLi);
console.log(aLi instanceof Array);
var now=0,
	timer=null,
	ready=true;
function tab(){
	for(var i=0;i<aBg.length;i++){
		aBg[i].style.display="none";
	}
	aBg[now].style.display="block";
	aLi.shift();
}
aLeft.onclick=function(){
	if(now==0)
		now=10;
		now--;
		tab();
}
function tabRight(){
	now=(now+1)%aBg.length;
	tab();
}
aRight.onclick=tabRight;
timer=setInterval(tabRight,2000);
aLeft.onmouseover=function(){
	clearInterval(timer);
}
aLeft.onmouseout=function(){
	timer=setInterval(tabRight,2000);
}
aRight.onmouseover=function(){
	clearInterval(timer);
}
aRight.onmouseout=function(){
	timer=setInterval(tabRight,2000);
}
aPic.onmouseover=function(){
	aLeft.style.display="block";
	aRight.style.display="block";
	clearInterval(timer);
}
aPic.onmouseout=function(){
	timer=setInterval(tabRight,2000);
}*/
