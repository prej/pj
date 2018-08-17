var a=["spider","home","money","blah","function","same","smart","him","output","input"];
var b,ans,count=0;
var x,y,score=0;
var bar,tm;
function progress(){
  bar=document.querySelector(".bar div");
    var percentage=(score/5)*100;
    bar.style.width=percentage +"%";
}
function progresstm(){
    bar=document.querySelector(".bartm div");
    var percentage=((nwtm-tm)/10)*100;
    bar.style.width=percentage +"%";
}

function myfun(){
	//console.log(a[Math.floor((Math.random()*10))]);
	//console.log(Math.floor((Math.random()*10)));
	ans=Math.floor((Math.random()*10))
	b=document.querySelector("#space");
	b.innerHTML=a[ans];
	tm=new Date();
}
function answer(){
	x=document.querySelector("#ansInput").value;
	//x ki value y m show hogi;ye jayda jaruri nhi h
	  y=document.querySelector("#ansSpace");
	  y.innerHTML=x;
	//ans check krne k liye
	check(ans,x);
}
function check(ques,ans){
	//for correct ans
	if (a[ques]==ans){
		y.innerHTML+="<br>correct!";
		score++;
		progress();
		//to run this for 5 times
		if(count<5){
			x.value="";
			count++;
			myfun();
		}
		//for ending game
		if(count>=5)
			y.innerHTML+="<br>game finish;)"+"<br>score:"+score;
	}
}

funtion timeDiff(){
    var newtm=new Date();
    if((newtm-tm)<10){
        newtm=new Date();
    }
    else{
        myfun();
    }
}
function init(){
	console.log("page loaded.")
}