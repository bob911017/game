function keyBoard(n){
	if (index==' '){
		findNum(n);
	}else if(document.getElementById('j'+n).style.background!='gray'){
		changeAns(n);		
	};
}
function answer(n){
	index=n;
	index1=n.split("")[0];
	index2=n.split("")[1];
	for (i = 1; i < 10; i++){
		for (j = 0; j < id.length; j++){
			document.getElementById(id[j]+i).style.background='#ffffff';
		};
	};	
	for (i = 1; i < 10; i++){
		document.getElementById(index1+i).style.background='#e2e7ed';
	};	
	var neighbor;
	for (i = 0; i < 3; i++){
		for ( j= 0; j < 3; j++){
			neighbor=connect[index1][i]+connect[index2][j];
			document.getElementById(neighbor).style.background='#e2e7ed';
		};
	};
	for (i = 3; i < 5; i++){
		for ( j= 3; j < 6; j++){
			neighbor=connect[index1][i]+connect[index2][j];
			document.getElementById(neighbor).style.background='#e2e7ed';
		};
	};
	document.getElementById(index).style.background='#bbdefb';
	oldColor='#bbdefb';
	document.getElementById('hintQuiz').style.display='none';
}
function findNum(n){
	for (i = 1; i < 10; i++){
		for (j = 0; j < id.length; j++){
			if (document.getElementById(id[j]+i).value==n){	
				document.getElementById(id[j]+i).style.background='#00CACA';
			}else{
				document.getElementById(id[j]+i).style.background='white'
			};
		};
	};
}
function changeAns(n){
	if (document.getElementById(index).style.background=='rgb(187, 222, 251)'){
		oldIndex1=oldIndex1+index1;
		oldIndex2=oldIndex2+index2;
		oldValue=oldValue+n;
	};	
	answer(index);
	document.getElementById(index).style.background='#bbdefb';
	if (document.getElementById(index).style.fontWeight!="bold"){
		if (n!=' '){
			n=Number(n);
			document.getElementById(index).value=n;
			document.getElementById(index).style.color='#4b91e2';
			for (i = 1; i < 10; i++){
				for (j = 0; j < id.length; j++){
					if (document.getElementById(id[j]+i).value==n){	
						if (document.getElementById(id[j]+i).style.background=='rgb(226, 231, 237)'){
							document.getElementById(index).style.color='red';
							document.getElementById(id[j]+i).style.background='#FFAAD5';
						}else{
							document.getElementById(id[j]+i).style.background='#00CACA';
						};
					};
				};
			};				
			document.getElementById(index).style.background='#bbdefb';
		}else{
			document.getElementById(index).value=n;
		};		
	}else{
		for (i = 1; i < 10; i++){
			for (j = 0; j < id.length; j++){
				if (document.getElementById(id[j]+i).value==n){	
					document.getElementById(id[j]+i).style.background='#00CACA';
				}else{
					document.getElementById(id[j]+i).style.background='white';
				};
			};
		};
	};	
}