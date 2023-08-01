//Heading
function myHeadBtn(){
    let a = document.getElementById("hbtn");
      a.style.display="none";

    let b = document.getElementById("mbtn");
      //b.style.display="none";

    let c = document.getElementById("Desbtn");
      //c.style.display="none";

    let y = document.getElementById("hdev");
    y.style.display="block";

  let itemDis = document.getElementById("item");
  if(a.style.display=="none" && b.style.display=="none" && c.style.display=="none"){
    itemDis.style.display="none";
  }

};

function hideHead(){
  let a = document.getElementById("hbtn");
    a.style.display="block";

  let b = document.getElementById("mbtn");
    //b.style.display="block";

  let c = document.getElementById("Desbtn");
    //c.style.display="block";

    let y = document.getElementById("hdev");
    y.style.display="none";

  let itemDis = document.getElementById("item");
  if(a.style.display=="block" || b.style.display=="block" || c.style.display=="block"){
    itemDis.style.display="block";
  } 
}


function myHeading(){
    var x = document.getElementById("hvalue").value;
    document.getElementById("head").innerHTML = x;
};

function colorChange(color){
  document.getElementById("head").style.color=color;
};

function textAlign(textA){
  document.getElementById("head").style.textAlign=textA;
};

// image
function myImgBtn(){
  let a = document.getElementById("hbtn");
    //a.style.display="none";

  let b = document.getElementById("mbtn");
    b.style.display="none";

  let c = document.getElementById("Desbtn");
    //c.style.display="none";

  let y = document.getElementById("mdev");
  y.style.display="block";

  let itemDis = document.getElementById("item");
  if(a.style.display=="none" && b.style.display=="none" && c.style.display=="none"){
    itemDis.style.display="none";
  }

};

function hideImg(){
  let a = document.getElementById("hbtn");
    //a.style.display="block";

  let b = document.getElementById("mbtn");
    b.style.display="block";

  let c = document.getElementById("Desbtn");
    //c.style.display="block";


  let y = document.getElementById("mdev");
  y.style.display="none";

  let itemDis = document.getElementById("item");
  if(a.style.display=="block" || b.style.display=="block" || c.style.display=="block"){
    itemDis.style.display="block";
  } 


};


///Image Upload

const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);
function uploadImage(){
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  imageView.src=imgLink;
};


///Image Download
const downTag = document.getElementById("downtag");
downTag.addEventListener('click', (event) => {
  const url = imageView.getAttribute('src');
  event.preventDefault();
  downloadImage(url);
})

function downloadImage(url) {
  fetch(url, {
    mode : 'no-cors',
  })
    .then(response => response.blob())
    .then(blob => {
    let blobUrl = window.URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.download = url.split(' ', 0 );
    a.href = blobUrl;
    document.body.appendChild(a);
    a.click();
    a.remove();
  })
}


//Description
function myDesBtn(){
  let a = document.getElementById("hbtn");
      //a.style.display="none";

    let b = document.getElementById("mbtn");
      //b.style.display="none";

    let c = document.getElementById("Desbtn");
      c.style.display="none";

  let y = document.getElementById("desdev");
    y.style.display="block";

  let itemDis = document.getElementById("item");
  if(a.style.display=="none" && b.style.display=="none" && c.style.display=="none"){
    itemDis.style.display="none";
  }

};

function hideDes(){
  let a = document.getElementById("hbtn");
    //a.style.display="block";

  let b = document.getElementById("mbtn");
    //b.style.display="block";

  let c = document.getElementById("Desbtn");
    c.style.display="block";

  let y = document.getElementById("desdev");
  y.style.display="none";

  let itemDis = document.getElementById("item");
  if(a.style.display=="block" || b.style.display=="block" || c.style.display=="block"){
    itemDis.style.display="block";
  } 

};

function description(){
  let dtext = document.getElementById("descrip").value;
  document.getElementById("dtext").innerHTML=dtext;
}

function mySpinn(){
  let spi = document.getElementById("spinn");
  spi.style.display="block";
}