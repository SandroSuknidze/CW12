

function key_down(e){
    console.log("down")
    console.log(e);
    console.log("Key -> "+e.key);
    console.log("keyCode -> "+e.keyCode);
    console.log("--------------")
    borderin = document.getElementById("border-in");
    if (e.key == 'ArrowRight'){
        borderin.style.width = "150px"
    }

    else if (e.key == 'ArrowLeft'){
        borderin.style.width = "50px"
        borderin.style.backgroundColor = 'red'
    }

    else if (e.key == 'ArrowDown'){
        borderin.style.height = "150px"
        borderin.style.backgroundColor = 'cyan'
    }

    else if (e.key == 'ArrowUp'){
        borderin.style.height = "50px"
        borderin.style.backgroundColor = 'red'
    }

    if (e.key == 'd'){
        borderin.style.marginLeft = "448px"
    }

    else if (e.key == 's'){
        borderin.style.marginTop = "348px"
    }

    else if (e.key == 'a'){
        borderin.style.marginRight = "448px"
    }

    else if (e.key == 'w'){
        borderin.style.marginBottom = "348px"
    }
}


document.getElementById("info").addEventListener("keydown", function (e){
    key_down(e)
})