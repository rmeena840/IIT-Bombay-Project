// Creating Scene for the project
var points=0;
var equpower=0;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
camera.position.set(0, 0, 10);
camera.lookAt(new THREE.Vector3(0, 0, 0));
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-17, 7, 0));
geometry.vertices.push(new THREE.Vector3(17, 7, 0));
var line = new THREE.Line(geometry, material);
scene.add(line);
renderer.render(scene, camera);

var Project_Name = document.createElement('div');
Project_Name.style.position = 'absolute';
Project_Name.style.width = 10;
Project_Name.style.height = 10;
Project_Name.style.color = "white";
Project_Name.innerHTML = "Proeject-Name: Multiple lenses together";
Project_Name.style.top = 2 + 'px';
Project_Name.style.left = 20 + 'px';
Project_Name.style.face="verdana"
document.body.appendChild(Project_Name);

var Developer_Name = document.createElement('div');
Developer_Name.style.position = 'absolute';
Developer_Name.style.width = 10;
Developer_Name.style.height = 10;
Developer_Name.style.color = "white";
Developer_Name.innerHTML = "Developed by- Ravindra Kumar Meena";
Developer_Name.style.top = 2 + 'px';
Developer_Name.style.left = 450 + 'px';
document.body.appendChild(Developer_Name);


function submitans(){
  var getans = document.createElement('div');
  getans.style.position = 'absolute';
  getans.style.border = "thick solid #73AD21";
  getans.style.borderRadius = "20px"; //id=ans
  getans.innerHTML = '<div style="width:330px;height:45px;margin-top:10px;margin-left:10px;"><font size="5" face="verdana" color="green">Equivalent Power:</font><input disabled value=" 0" style="font-size:30px;color:red;background:lightyellow;border:0px none;" type="text" id="ans" size="2"></div>';
  getans.style.top = 550 + 'px';
  getans.style.left = 200 + 'px';
  getans.style.background="lightyellow";
  document.body.appendChild(getans);
}


  var nxtbutton = document.createElement('div');
  nxtbutton.id="nxtbutton1";
  nxtbutton.style.position='absolute';
  nxtbutton.style.width = 10;
  nxtbutton.style.height = 10;
  nxtbutton.style.top=545 + 'px';
  nxtbutton.style.left=720 + 'px';
  document.body.appendChild(nxtbutton);


function questions(){
  var question_div = document.createElement('div');
  question_div.style.position = 'absolute';
  question_div.id="howto";
  question_div.innerHTML = '<div style="width:1230px;height:440px;margin-top:30px;margin-left:2px;"></div>';
  question_div.style.top = 60 + 'px';
  question_div.style.left = 30 + 'px';
  question_div.style.border = "thick solid #73AD21";
  question_div.style.borderRadius = "25px"
  question_div.style.background="lightyellow";
  document.body.appendChild(question_div);
}

  var howto_play = document.createElement('div');
  howto_play.style.position = 'absolute';
  howto_play.id="htp";
  howto_play.innerHTML = '<div style="width:700px;height:250px;margin-top:40px;margin-left:50px;"><font face="Georgia" size="6" color="#4682b4">Welcome,<br>Before starting the test. Please read the concepts<br>from above by clicking on "Info" button. If you<br> need help, please click on "Help" button.<br>Best Of Luck.</font></div>';
  howto_play.style.top = 100 + 'px';
  howto_play.style.left = 180 + 'px';
  howto_play.style.border = "thick solid #73AD21";
  howto_play.style.borderRadius = "25px"
  howto_play.style.background="lightyellow";
  document.body.appendChild(howto_play);


var take_quiz = document.createElement('div');
take_quiz.id="take";
take_quiz.style.position='absolute';
take_quiz.innerHTML='<img src="PIE/images/quiz.png" id="take1" style="width:380px;height:80px;">';
take_quiz.style.width = 10;
take_quiz.style.height = 10;
take_quiz.style.top=470 + 'px';
take_quiz.style.left=380 + 'px';
document.body.appendChild(take_quiz);


//Generate random number from -5 to 5
function randomenumber() {

    var x = Math.floor((Math.random() * 11) - 5);
    return x;

}

var que=new Array(5);
var quename=new Array(5);
var power=new Array(3);
var addremove=new Array(5);
var lens=new Array(5);
function intialize_question(){
  var counter=0;
  while(counter<5){

    que[counter] = document.createElement('div');
    que[counter].style.position='absolute';
    que[counter].style.width = 10;
    que[counter].id="que"+counter;
    que[counter].style.height = 10;
    que[counter].style.top=100 + 'px';
    que[counter].style.left=100 +counter*240 + 'px';
    document.body.appendChild(que[counter]);

    quename[counter] = document.createElement('div');
    quename[counter].style.position = 'absolute';
    quename[counter].style.width = 10;
    quename[counter].id="quename"+counter;
    quename[counter].style.height = 10;
    quename[counter].style.color = "white";
    quename[counter].style.top = 70 + 'px';
    quename[counter].style.left = 160 + counter*240 + 'px';
    document.body.appendChild(quename[counter]);


    power[counter] = document.createElement('div');
    power[counter].style.position = 'absolute';
    power[counter].style.width = 10;
    power[counter].id="power"+counter;
    power[counter].style.height = 10;
    power[counter].style.color = "black";
    power[counter].style.top = 260 + 'px';
    power[counter].style.left = 160 + counter*240 + 'px';
    document.body.appendChild(power[counter]);

    addremove[counter] = document.createElement('div');
    addremove[counter].style.position = 'absolute';
    addremove[counter].style.width = 10;
    addremove[counter].id="addremove"+counter;
    addremove[counter].style.height = 10;
    addremove[counter].style.color = "black";
    addremove[counter].style.top = 300 + 'px';
    addremove[counter].style.left = 160 + counter*240 + 'px';
    document.body.appendChild(addremove[counter]);

    lens[counter] = document.createElement('div');
    lens[counter].style.position = 'absolute';
    lens[counter].style.width = 10;
    lens[counter].id="lens"+counter;
    lens[counter].style.height = 10;
    lens[counter].style.color = "black";
    lens[counter].style.top = 350 + 'px';
    lens[counter].style.left = 250 + counter*200 + 'px';
    document.body.appendChild(lens[counter]);

    counter++;
  }


    var horizontal = document.createElement('div');
    horizontal.style.position='absolute';
    horizontal.innerHTML='<hr style="width:950px;border-style:inset;border-width:2px;">';
    horizontal.style.width = 10;
    horizontal.style.height = 10;
    horizontal.style.top=410 + 'px';
    horizontal.style.left=270 + 'px';
    document.body.appendChild(horizontal);

    var horizontal = document.createElement('div');
    horizontal.id="take";
    horizontal.style.position='absolute';
    horizontal.innerHTML='<div style="width:330px;height:45px;margin-top:10px;margin-left:10px;"><font size="5" face="verdana" color="green">Assembled Lens:</font></div>';
    horizontal.style.width = 10;
    horizontal.style.height = 10;
    horizontal.style.top=390 + 'px';
    horizontal.style.left=40 + 'px';
    document.body.appendChild(horizontal);

    function updatepower() {
        var cost=0;
        for(var i=0;i<5;i++){
          var x = document.getElementById('que'+i);
          if (x.innerHTML == "") {
            cost+=Number(document.getElementById('aloo'+i).value);
          }

    }
      return cost;
  }

    document.getElementById("addremove0").addEventListener("click", function(){
          var x = document.getElementById('que0');
          if (x.innerHTML != "") {
            var y=document.getElementById('lens0');
            y.innerHTML=x.innerHTML;
            x.innerHTML="";
            document.getElementById("addremove0").innerHTML='<img src="PIE/images/remove.png" style="width:100px;height:50px;">';


            document.getElementById("ans").value=updatepower();
          } else {
              var y=document.getElementById('lens0');
              x.innerHTML=y.innerHTML;
              y.innerHTML="";
              document.getElementById("addremove0").innerHTML='<img src="PIE/images/add.png" style="width:90px;height:50px;">';

document.getElementById("ans").value=updatepower();
          }

    });
    document.getElementById("addremove1").addEventListener("click", function(){
      var x = document.getElementById('que1');
      if (x.innerHTML != "") {
        var y=document.getElementById('lens1');
        y.innerHTML=x.innerHTML;
        x.innerHTML="";
        document.getElementById("addremove1").innerHTML='<img src="PIE/images/remove.png" style="width:100px;height:50px;">';
document.getElementById("ans").value=updatepower();
      } else {
          var y=document.getElementById('lens1');
          x.innerHTML=y.innerHTML;
          y.innerHTML="";
          document.getElementById("addremove1").innerHTML='<img src="PIE/images/add.png" style="width:90px;height:50px;">';
          document.getElementById("ans").value=updatepower();
      }
    });

    document.getElementById("addremove2").addEventListener("click", function(){
      var x = document.getElementById('que2');
      if (x.innerHTML != "") {
        var y=document.getElementById('lens2');
        y.innerHTML=x.innerHTML;
        x.innerHTML="";
        document.getElementById("addremove2").innerHTML='<img src="PIE/images/remove.png" style="width:100px;height:50px;">';
document.getElementById("ans").value=updatepower();

      } else {
          var y=document.getElementById('lens2');
          x.innerHTML=y.innerHTML;
          y.innerHTML="";
          document.getElementById("addremove2").innerHTML='<img src="PIE/images/add.png" style="width:90px;height:50px;">';
          document.getElementById("ans").value=updatepower();
      }

    });

    document.getElementById("addremove3").addEventListener("click", function(){
      var x = document.getElementById('que3');
      if (x.innerHTML != "") {
        var y=document.getElementById('lens3');
        y.innerHTML=x.innerHTML;
        x.innerHTML="";
        document.getElementById("addremove3").innerHTML='<img src="PIE/images/remove.png" style="width:100px;height:50px;">';
document.getElementById("ans").value=updatepower();
      } else {
          var y=document.getElementById('lens3');
          x.innerHTML=y.innerHTML;
          y.innerHTML="";
          document.getElementById("addremove3").innerHTML='<img src="PIE/images/add.png" style="width:90px;height:50px;">';
          document.getElementById("ans").value=updatepower();
      }
    });

    document.getElementById("addremove4").addEventListener("click", function(){
      var x = document.getElementById('que4');
      if (x.innerHTML != "") {
        var y=document.getElementById('lens4');
        y.innerHTML=x.innerHTML;
        x.innerHTML="";
        document.getElementById("addremove4").innerHTML='<img src="PIE/images/remove.png" style="width:100px;height:50px;">';
document.getElementById("ans").value=updatepower();
      } else {
          var y=document.getElementById('lens4');
          x.innerHTML=y.innerHTML;
          y.innerHTML="";
          document.getElementById("addremove4").innerHTML='<img src="PIE/images/add.png" style="width:90px;height:50px;">';
          document.getElementById("ans").value=updatepower();
      }
    });

}

function putting_questions(){
  var counter=0;
  while(counter<5){
    var getnumber=randomenumber();
    equpower+=getnumber;
    if(getnumber>0){
      que[counter].innerHTML='<img src="PIE/images/1.png" style="width:170px;height:140px;">';
      quename[counter].innerHTML = '<font face="Georgia" size="4" color="#4682b4">Convex</font>';
      power[counter].innerHTML = '<font size="4" face="verdana" color="green">Power:</font><input id="aloo'+counter+'" value='+getnumber+' style="font-size:20px;color:red;background:lightyellow;border:0px none;" type="text" id="ans" size="2">';
      addremove[counter].innerHTML='<img src="PIE/images/add.png" style="width:90px;height:50px;">';
    }else{
      que[counter].innerHTML='<img src="PIE/images/2.png" style="width:170px;height:140px;">';
      quename[counter].innerHTML = '<font face="Georgia" size="4" color="#4682b4">Concave</font>';
      power[counter].innerHTML = '<font size="4" face="verdana" color="green">Power:</font><input id="aloo'+counter+'" value='+getnumber+' style="font-size:20px;color:red;background:lightyellow;border:0px none;" type="text" id="ans" size="2">';
      addremove[counter].innerHTML='<img src="PIE/images/add.png" style="width:90px;height:50px;">';
  }
  counter++;
}
}

document.getElementById("take").addEventListener("click", function(){

    var parent = document.getElementById("take");
    parent.parentNode.removeChild(parent);

    parent = document.getElementById("htp");
    parent.parentNode.removeChild(parent);

    questions();
    submitans();
    intialize_question();
    putting_questions();

    nxtbutton.innerHTML='<img src="PIE/images/reset.png" id="take1" style="width:80px;height:80px;">';
});


document.getElementById("nxtbutton1").addEventListener("click", function(){
  location.reload();
});



//Info button clicked
var info = document.createElement('div');
info.id="info";
info.style.position='absolute';
info.innerHTML='<img id="take1" src="PIE/images/ButtonInfo.png" style="width:25px;height:25px;"/>';
info.style.width = 10;
info.style.height = 10;
info.style.top=0 + 'px';
info.style.left=800 + 'px';
document.body.appendChild(info);

document.getElementById("info").addEventListener("click", function(){
      window.open("info.html");
});

//Help button clicked
var help = document.createElement('div');
help.id="help";
help.style.position='absolute';
help.innerHTML='<img src="PIE/images/ButtonHelp.png" style="width:25px;height:25px;">';
help.style.width = 10;
help.style.height = 10;
help.style.top=0 + 'px';
help.style.left=900 + 'px';
document.body.appendChild(help);

document.getElementById("help").addEventListener("click", function(){
    window.open("help.html");
});
