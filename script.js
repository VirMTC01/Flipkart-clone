






// function advt_slider(present_id,n){

//     let i;
//     if(present_id==1)
//     {
//         document.getElementById("i"+present_id).classList.add="visible";
//         for(i=2;i<=n;i++)
//         {
//             document.getElementById("i"+i).classList.add="invisible";

//         }
//     }
//     else{
//         p=present_id;
//         for(i=1;i<=n;i++)
//         {
//             document.getElementById("i"+i).classList.add="invisible";

//         }
//         document.getElementById("i"+p).classList.add="visible";
//     }
// }

var present_id=1;
var n=4;
document.getElementById("i"+present_id).classList.add("visible");
function ad_prev(){
    if(present_id==1)
    {
        present_id=4;
        for(i=1;i<=n;i++)
        {
            document.getElementById("i"+i).classList.remove="visible";

        }
        document.getElementById("i"+present_id).classList.add="visible";

    }
    else{
        present_id=present_id-1;
        for(i=1;i<=n;i++)
        {
            document.getElementById("i"+i).classList.remove="visible";

        }
        document.getElementById("i"+present_id).classList.add="visible";
    }
};
function ad_next(){
    if(present_id==4)
    {
        present_id=1;
        for(i=1;i<=n;i++)
        {
            document.getElementById("i"+i).classList.remove="visible";

        }
        document.getElementById("i"+present_id).classList.add="visible";

    }
    else{
        present_id=present_id+1;
        for(i=1;i<=n;i++)
        {
            document.getElementById("i"+i).classList.remove="visible";

        }
        document.getElementById("i"+present_id).classList.add="visible";
    }
};


// nav-sm
// document.getElementById("sm-menu-btn").style.display="none";
document.getElementById("li-nav").style.display="none";
document.getElementById("sm-menu-btn").onmouseenter=function(){
    document.getElementById("li-nav").style.display="flex";
}
document.getElementById("sm-menu-btn").onmouseleave=function(){
    document.getElementById("li-nav").style.display="none";
}