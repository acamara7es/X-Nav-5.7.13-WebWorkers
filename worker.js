self.onmessage = function(event) {
    var salida = buscarPrimos(event.data);
    postMessage(salida);
}

function buscarPrimos(num) {
    var n = 1;
    var counter = 0;
    primelist = [];
    search: while (n < num) {
        n += 1;
        for (var i = 2; i <= Math.sqrt(n); i += 1)
            if (n % i == 0)
                continue search;
        primelist[counter]=n;
        counter++;
        if(counter==300){
            counter = 0;
            postMessage(primelist)
            primelist=[];
        }
    }
    primelist[counter]=-1;
	return primelist;
}
