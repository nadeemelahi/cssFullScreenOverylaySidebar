
/* 
 * copyright March 2025
 * author: Nadeem Elahi
 * nadeem.elahi@gmail.com
 * nad@3deem.com
 */

"use strict";

canvasBgFillTest();
function canvasBgFillTest(){
	var canvas = document.getElementById("cnv");
	var width = window.innerWidth,
		height = window.innerHeight;
	canvas.style.width = width;
	canvas.style.height = height;

	var ctx = canvas.getContext("2d");

	ctx.fillStyle = "#366";
	ctx.fillRect( 0  , 0 , width , height ) ;
}

sidebar();
function sidebar(){

	var nm = [ "toggleSidebar" , "closeSidebar" ]		, 
		et_sidebar = document.getElementById("sidebar") ;

	window.addEventListener("click",clickh,false);
	function clickh(evt){
		if(!evt) var evt = window.event			;

		if ( evt.target.id == nm[0] ) {

			et_sidebar.style.left = "0px"		;

		} else if ( evt.target.id == nm[1] ) {

			et_sidebar.style.left = "-300px"	;

		}
	}
}

