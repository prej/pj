var parameters={
	target:'#myfunction',
	data:[{
		fn:'sin(x)',
		color:'red',
	}],
    grid:false,
    xAxis:{domain:[0,2*Math.PI]},
    yAxis:{domain:[-1,1]},
};

function myfun() {
  var f = document.querySelector("#fun").value;
  var xMin = document.querySelector("#xmin").value;
  var xMax = document.querySelector("#xmax").value;
  var yMin = document.querySelector("#ymin").value;
  var yMax = document.querySelector("#ymax").value;
  
  parameters.data[0].fn = f;
  parameters.xAxis.domain = [xMin, xMax];
  parameters.yAxis.domain = [yMin, yMax];
  
  functionPlot(parameters);
}

function myfun1(){
	//addintable("mini","7838550554");
	var naam=document.querySelector("#name").value;
	var no=document.querySelector("#info").value;
	addintable(naam,no);
}
function addintable(name,number){
	var table=document.querySelector("#addcontent");
	var newrow=table.insertRow();
	var naam=newrow.insertCell();
	naam.innerHTML+=name;
	var no=newrow.insertCell();
	no.innerHTML+=number;
}