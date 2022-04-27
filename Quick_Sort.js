function partition(lo,hi){
    var pivot=bars_size[hi];
    var i=lo-1;
    for(var j=lo;j<=hi-1;j++){
        if(bars_size[j]<pivot){
            i+=1;
            div_update(bars[i],bars_size[i],"red");
            div_update(bars[j],bars_size[j],"red");
            var temp=bars_size[i];
            bars_size[i]=bars_size[j];
            bars_size[j]=temp;
            div_update(bars[i],bars_size[i],"blue");
            div_update(bars[j],bars_size[j],"blue");
        }
    }
    div_update(bars[i+1],bars_size[i+1],"red");
    div_update(bars[hi],bars_size[hi],"red");
    var temp1=bars_size[i+1];
    bars_size[i+1]=bars_size[hi];
    bars_size[hi]=temp1;
    div_update(bars[i+1],bars_size[i+1],"blue");
    div_update(bars[hi],bars_size[hi],"blue");
    return (i+1);
}

function quick(lo , hi){
    if(lo<hi){
        var pi=partition(lo,hi);
        div_update(bars[pi],bars_size[pi],"green");
        quick(lo,pi-1);
        quick(pi+1,hi);
    }
    else
    div_update(bars[lo],bars_size[lo],"green");
}

function quick_sort(){
    c_delay=0;    
    quick(0,array_size-1);
    enable_buttons();
}