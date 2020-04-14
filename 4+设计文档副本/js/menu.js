window.onload = function () {

    
	
    // 隐藏菜单
    var obscure = document.querySelector(".navH span");
	
    var open = document.querySelector("#open");
	
    var ensconce = document.querySelector("#ensconce");
	
    obscure.onclick = function ()
	{
        open.style.marginLeft = "-300px";
		
		
	
		
        // setTimeout(function () {
        //     ensconce.style.display = "block";
        // }, 300)

    }
	
	
    //显示菜单
    var showC = document.querySelector("#ensconce h2");
    showC.onclick = function ()
	{
        open.style.marginLeft = "0px";
        // setTimeout(function () {
        //     ensconce.style.display = "none";
        // }, 300)

    }
}

