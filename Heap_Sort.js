
function heapify(n,i){
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;
    if(l < n && bars_size[l] > bars_size[largest])
        largest = l;
    if(r < n && bars_size[r] > bars_size[largest])
        largest = r;
    if(largest != i){
        div_update(bars[largest],bars_size[largest],"red");
        div_update(bars[i],bars_size[i],"red");
        var temp = bars_size[i];
        bars_size[i] = bars_size[largest];
        bars_size[largest] = temp;
        div_update(bars[largest],bars_size[largest],"blue");
        div_update(bars[i],bars_size[i],"blue");
        heapify(n,largest);
    }
}

function heap_sort(){
    c_delay=0;
    var n=array_size;
    for(var i = Math.floor(n/2) - 1; i >= 0; i--)
        heapify(n,i);
    for (var i = n-1; i>0; i--){
        div_update(bars[0],bars_size[0],"red");
        div_update(bars[i],bars_size[i],"red");
        var temp = bars_size[0];
        bars_size[0] = bars_size[i];
        bars_size[i] = temp;
        div_update(bars[0],bars_size[0],"green");
        div_update(bars[i],bars_size[i],"green");
        heapify(i,0);
    }
    enable_buttons();
}