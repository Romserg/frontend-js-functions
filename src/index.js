function min(Arr){
	if(Arr===undefined){
	return;
	} else {
		var minEl;
		for(var i=0;i<Arr.length;i++){
 			if (typeof Arr[i] == 'number'){
   				if (minEl===undefined ){
     			minEl = Arr[i];
    			continue;
   				}
   				if(minEl>=Arr[i]){   		
  				minEl=Arr[i];}
  				}
			
		}
		return minEl;
	}
}

function max(Arr){
	if(Arr===undefined){
	return;
	} else {
		var maxEl=Arr[0];
		for(var i=0;i<Arr.length;i++){
			if(Arr[i]>=maxEl)
			maxEl=Arr[i]
			}
		return maxEl;
	}
}

function sum(){
	if(arguments===undefined){
	return;
	} else {
		var summ=0;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i] !== 'number')
			continue;
			summ+=arguments[i];
		}
		return summ;
	}
}


console.log(min([]));
console.log(max());
console.log(sum());
