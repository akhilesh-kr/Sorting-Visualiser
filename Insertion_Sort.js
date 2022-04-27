function insertion_sort(){
    c_delay=0;
    for(var i=1;i<array_size;i++){
        var key=bars_size[i];
        div_update(bars[i],bars_size[i],"yellow");
        var j=i-1;
        while(j>=0 && bars_size[j]>key){
            div_update(bars[j],bars_size[j],"red");
            div_update(bars[j+1],bars_size[j+1],"red");
            bars_size[j+1]=bars_size[j];
            div_update(bars[j],bars_size[j],"blue");
            div_update(bars[j+1],bars_size[j+1],"blue");
            --j;
        }
        bars_size[j+1]=key;
        for(var tutu=0;tutu<=i;tutu++){
            div_update(bars[tutu],bars_size[tutu],"green");
        }
    }
    enable_buttons();
}