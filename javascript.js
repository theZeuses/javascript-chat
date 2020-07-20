function login(){
  var user=document.getElementById('UserNum').value;
  var pass=document.getElementById('pass').value;

  var chat=document.getElementById('chat');
  var writer=document.getElementById('writer');

  var password="";
  var client = new XMLHttpRequest();
  client.open('GET', 'pass.txt');
  client.onreadystatechange = function()
  {
      if( client.responseText != '' )
      {
          var txt = client.responseText.split("\n");
          password = txt[0];
      }
  }
  client.send();
  if(pass==password){
    writer.style.display="block";
    chat.style.display="none";
    console.log("sdd");
  }
}
