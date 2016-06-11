var daftar = [];
var y=0;
function simpan(){
	cl();
	x = document.querySelector('.ergebe').innerHTML;
	daftar[y] = x;
	sv();
	y++;
	console.log(daftar[daftar.length-1]+daftar[daftar.length-1].length);
}
function show(){
	x = document.querySelector('.list');
	temp = "";
	if(daftar.length>=1){
	for(i=0;i<daftar.length;i++){
		a = daftar[i];
		b = a.replace(/\s/g, '');
		temp +="<div class='item' style='background:"+b+"'>"+a+"</div><br/>";
	}	
	x.innerHTML = temp;
	}else{
		x.innerHTML = '<div class="warn padding"><i class="icon ion-nuclear"></i>  Belum Ada History Warna</div>';
	}
}
function dapatkan(r,g,b){
       var mysheet=document.styleSheets[2]
    		var totalrules=mysheet.cssRules? mysheet.cssRules.length : mysheet.rules.length;
    
       mysheet.deleteRule(totalrules-1)
       mysheet.insertRule('.rgb{background-color:rgb( '+r+' , '+g+' , '+b+' )}', totalrules-1);
}
function sv(){
	  x = document.querySelector('.s-status');
	  x.innerHTML = "<div class='padding'>Color Has Been Saved<br>"+daftar[daftar.length-1] +"</div>"
	  }

   function cl(){
  r = document.querySelector('.r').value;
  g = document.querySelector('.g').value;
  b = document.querySelector('.b').value;
  x = document.querySelector('.s-status');
  x.innerHTML='';
  dapatkan(r,g,b);

}

function exit(){
	daftar =[];
	navigator.app.exitApp();
}