function merge_partition(start,mid,end){
    var new_arr=[];
    var i=start;
    var j=mid+1;
    var k=0;
    div_update(bars[i],bars_size[i],"red");
    div_update(bars[j],bars_size[j],"red");
    while(i<=mid && j<=end){
        
        if(bars_size[i]<=bars_size[j]){
            new_arr[k]=bars_size[i];
            i++;
        }
        else{
            new_arr[k]=bars_size[j];
            j++;
        }
        k++;
    }
    if(i<=mid){
    while(i<=mid){
        new_arr[k]=bars_size[i];
        i++;k++;
    }}
    if(j<=end){
    while(j<=end){
        new_arr[k]=bars_size[j];
        j++;k++;
    }}
    for(var tutu=0;tutu<k;tutu++){
        div_update(bars[start], bars_size[start],"yellow");
        bars_size[start]=new_arr[tutu];
        div_update(bars[start],bars_size[start],"green");
        start+=1;
    }
}
function merge(start,end){
    if(start<end){
        var mid=Math.floor((start+end)/2);      
        merge(start,mid);
        merge(mid+1,end);
        merge_partition(start,mid,end);
    }   
}
function merge_sort(){
    c_delay=0;
    merge(0,array_size-1);
    enable_buttons();
}