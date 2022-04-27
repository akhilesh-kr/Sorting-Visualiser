function bubble_sort(){
    c_delay=0;
    for(var i=0;i<array_size-1;i++){
        for(var j=0;j<array_size-i-1;j++){
            div_update(bars[j],bars_size[j],"yellow");
            if(bars_size[j]>bars_size[j+1]){
                div_update(bars[j],bars_size[j],"red");
                div_update(bars[j+1],bars_size[j+1],"red");

                var temp=bars_size[j];
                bars_size[j]=bars_size[j+1];
                bars_size[j+1]=temp;             
            }
            div_update(bars[j],bars_size[j],"blue");
            div_update(bars[j+1],bars_size[j+1],"blue");
        }
        div_update(bars[j],bars_size[j],"green");
    }
    div_update(bars[0],bars_size[0],"green");
    enable_buttons();
}