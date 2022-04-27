var arr_cont=document.getElementById("arr_container");
var input_arr_size=document.getElementById("arr_size");
var array_size=input_arr_size.value;
var input_generate=document.getElementById("arr_gen");
var bars=[];
var bars_size=[];
var margin_size;
var algo_buttons=document.querySelectorAll(".algorithms button");
var input_arr_speed=document.getElementById("arr_speed"),array_speed=input_arr_speed.value;

arr_cont.style="flex-direction:row";
input_generate.addEventListener("click",create_array);
input_arr_size.addEventListener("input",update_array);

/*   function for creating a new array */

function create_array(){
    arr_cont.innerHTML="";
    for(var i=0;i<array_size;i++){
        bars_size[i]=Math.floor(Math.random()*0.5*(input_arr_size.max - input_arr_size.min))+10;
        bars[i]=document.createElement("div");
        arr_cont.appendChild(bars[i]);
        margin_size=0.1;
        bars[i].style=" margin : 0% " + margin_size + "%; background-color:blue; width:"+(100/array_size-(2*margin_size))+"%; height:" +(bars_size[i]) + "%;";
    }
}

/*   function for updating array size    */
function update_array(){
    array_size=input_arr_size.value;
    create_array();
}

window.onload=update_array();

for(var i=0;i<algo_buttons.length;i++){
    algo_buttons[i].addEventListener("click",runalgo);
}

/*   function for disabling other buttons while one algorithm is runnning  */
function disable_buttons(){
    input_arr_size.disabled=true;
    input_generate.disabled=true;
    input_arr_speed.disabled=true;
    for(var i=0;i<algo_buttons.length;i++){
        algo_buttons[i].disabled=true;      
    }
}
 
/*       function to run the choosen algorithm      */

function runalgo(){
    disable_buttons();
    this.classList.add("button_selected");
    switch(this.innerHTML){
        case "Bubble":bubble_sort();break;
        case "Selection":selection_sort();break;
        case "Insertion":insertion_sort();break;
        case "Merge":merge_sort();break;
        case "Quick":quick_sort();break;
        case "Heap":heap_sort();break;
    }
}

