
function addMenu (option){
    var player  = videojs(`${option.video_id}`);
    player.ready(function(){
    //toggle menu
    function toggleMenuDiv() {
        let x = document.getElementById("menu01");
        if (x.style.display === "none") {
        x.style.display = "block";
        } else {
        x.style.display = "none";
        }
    }
    function onUnfocus(){
        let y = document.getElementById("menu01");
        if (y.style.display === "block") {
            y.style.display = "none";
        }
        
    }
    var Button = videojs.getComponent('Button');
    var MyButton = videojs.extend(Button, {
        constructor: function() {
        Button.apply(this, arguments);
        this.addClass('fa');
        this.addClass('fa-dedent');
        },
        handleClick: function() {
            toggleMenuDiv();
        }
    });
    videojs.registerComponent('MyButton', MyButton);   
    player.getChild('controlBar').addChild('myButton');
    //Creating Menu
    var elem = document.createElement("div");
    elem.id = 'menu01';
    elem.innerHTML = ` <button class="actionButton" onclick="${option.action1}" >${option.nameOfButton1} </button>
    <button class="actionButton" onclick="${option.action2}"> ${option.nameOfButton2}</button> 
    <button class="actionButton" onclick="${option.action3}">${option.nameOfButton3} </button>`
    document.getElementsByClassName('vjs-control-bar')[0].appendChild(elem)
    document.getElementById("menu01").style.display = "none";
    var menuButton=document.getElementsByClassName("vjs-control vjs-button fa  fa-dedent")[0]
    //when blur event occurs 
    menuButton.addEventListener('blur',function(){
        setTimeout(function(){ onUnfocus(); }, 280);       
    })
        

    })
}
//Registering Plug-in
videojs.registerPlugin('addMenu',addMenu );