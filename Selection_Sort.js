function selection_sort(){   
    c_delay=0; 
    for(var i=0;i<array_size;i++){
        var min_idx=i;
        for(var j=i+1;j<array_size;j++){
            div_update(bars[j],bars_size[j],"yellow");
            if(bars_size[j]<bars_size[min_idx]){
                div_update(bars[j],bars_size[j],"red");
                div_update(bars[min_idx],bars_size[min_idx],"red");
                var temp=bars_size[min_idx];
                bars_size[min_idx]=bars_size[j];
                bars_size[j]=temp;
            }
            div_update(bars[min_idx],bars_size[min_idx],"blue");
            div_update(bars[j],bars_size[j],"blue");
        }
        div_update(bars[i],bars_size[i],"green");
    }
    
    enable_buttons();
}