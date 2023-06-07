const link=document.getElementById('link');
const download_btn=document.getElementById('download_btn');
const generate_btn=document.getElementById('generate_btn');
const sizes=document.getElementById('sizes');
const qr_body=document.querySelector('.qr_body')

generate_btn.addEventListener('click',(e)=>{
      e.preventDefault();
      generateQRcode();
});

function generateQRcode(){
    qr_body.innerHTML="";
 
    if(link.value!=""){
    qr_body.classList.add('grid');
    }
    else{
        qr_body.classList.remove('grid');
        alert('Enter text or URL to generate');
    }

     new QRCode(qr_body, {
        text: link.value,
        width: sizes.value/2,
        height: sizes.value/2,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}

sizes.addEventListener('change',()=>{
       if(link.value!=""){
          generateQRcode();  
          //taki jaise size change ho apne aap generate event fire ho jaye
       }
});

download_btn.addEventListener('click',()=>{
    let img=document.querySelector('.qr_body img');
    console.log(img);
    if(img!=null){
        const imgAtr=img.getAttribute('src');
        download_btn.setAttribute('href',imgAtr);
    }

    else{
        alert('Firstly Generate then Download');
        
        return;
    }
});