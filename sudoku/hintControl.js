var hintAns,rand,hintFail;
var initialHint=0;
var OldHint='old';
function hint(mn){
	if (initialHint==1){
		if (document.getElementById('hintQuiz').style.display=='none'||OldHint!=mn){
			myHint[rand]['isLegal']=1;
		};
	}else{
		initialHint=1;
	};
	oldHint=mn;
	if (document.getElementById('hint'+mn).style.background!='rgb(60, 60, 60)'){
		if (document.getElementById(index).style.fontWeight!="bold"){
			hintFail='hint'+mn;
			document.getElementById('hintQuiz').style.display='block';
			rand=Math.floor(myHint.length*Math.random());
			document.getElementById('hintQue').innerHTML='A : '+myHint[rand]['q'];
			hintAns=myHint[rand]['CorrectAns'];
			for(i=0;i<4;i++){
				document.getElementById('hintA'+i).style.background='#005AB5';
				document.getElementById('hintA'+i).value=myHint[rand]['a'+i];				
			};
		};
	};
}
function getHint(n){
	document.getElementById(hintFail).style.background='#3c3c3c';
	if (n==hintAns&document.getElementById('hintA'+n).style.background!='green'){
		if (myHint[rand]['isLegal']==1){
			document.getElementById(index).value=correctAnswer[index1][index2-1];
			document.getElementById(index).style.fontWeight="bold";	
			document.getElementById(index).style.color='black';
		};
		document.getElementById('hintA'+n).style.background='green';
	};
	if (n!=hintAns){
		document.getElementById('hintA'+n).style.background='red';
		myHint[rand]['isLegal']=0;
	};
}
var myHintQ0={
	isLegal:1,
	q:'1+1=?',
	a0:'2',
	a1:'10',
	a2:'3',
	a3:'以上皆是',
	CorrectAns:0
}
var myHintQ1={
	isLegal:1,
	q:'一星期有幾天?',
	a0:'不知道',
	a1:'7天',
	a2:'你說呢?',
	a3:'Google啊!!!',
	CorrectAns:1
}
var myHint=[myHintQ0,myHintQ1]