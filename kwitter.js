function addUser()
{
user_name  = document.getElementById("user_name").value ;

localStorage.setItem("user_name",user_name) ;

window.location = "kwitter_room.html" ;
}

function addRoom()
{
    room_name = document.getElementById("room_name").value ; 
    firebase.database().ref("/").child_name(room_name).update({
        purpose :"adding room name"
    }) ;
    localStorage.setItem("romm_name",room_name) ;
    window.location = "kwitter_page.html" ;
}

function redirectToRoomName()
{
    console.log(name) ;
    localStorage.setItem("room_name",name) ;
    window.location = "kwitter_page.html" ;
}