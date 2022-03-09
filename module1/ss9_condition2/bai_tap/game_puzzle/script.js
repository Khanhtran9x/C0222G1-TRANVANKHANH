let img1Array = new Array();
img1Array[0] = new Image();
img1Array[0].src = "img/funny-cat1_part1x1.jpg";
img1Array[1] = new Image();
img1Array[1].src = "img/monkey_part1x1.jpg";
img1Array[2] = new Image();
img1Array[2].src = "img/panda_swap_part1x1.jpg";

let img2Array = new Array();
img2Array[0] = new Image();
img2Array[0].src = "img/funny-cat1_part2x1.jpg";
img2Array[1] = new Image();
img2Array[1].src = "img/monkey_part2x1.jpg";
img2Array[2] = new Image();
img2Array[2].src = "img/panda_swap_part2x1.jpg";

let img3Array = new Array();
img3Array[0] = new Image();
img3Array[0].src = "img/funny-cat1_part3x1.jpg";
img3Array[1] = new Image();
img3Array[1].src = "img/monkey_part3x1.jpg";
img3Array[2] = new Image();
img3Array[2].src = "img/panda_swap_part3x1.jpg";

let img4Array = new Array();
img4Array[0] = new Image();
img4Array[0].src = "img/funny-cat1_part4x1.jpg";
img4Array[1] = new Image();
img4Array[1].src = "img/monkey_part4x1.jpg";
img4Array[2] = new Image();
img4Array[2].src = "img/panda_swap_part4x1.jpg";

let img5Array = new Array();
img5Array[0] = new Image();
img5Array[0].src = "img/funny-cat1_part5x1.jpg";
img5Array[1] = new Image();
img5Array[1].src = "img/monkey_part5x1.jpg";
img5Array[2] = new Image();
img5Array[2].src = "img/panda_swap_part5x1.jpg";




function changeImage1() {
    let i = Math.floor(Math.random() * 3);
    document.getElementById("img1").src = img1Array[i].src;
    check(i);
}

function changeImage2() {
    let i = Math.floor(Math.random() * 3);
    document.getElementById("img2").src = img2Array[i].src;
    check(i);
}

function changeImage3() {
    let i = Math.floor(Math.random() * 3);
    document.getElementById("img3").src = img3Array[i].src;
    check(i);
}

function changeImage4() {
    let i = Math.floor(Math.random() * 3);
    document.getElementById("img4").src = img4Array[i].src;
    check(i);
}

function changeImage5() {
    let i = Math.floor(Math.random() * 3);
    document.getElementById("img5").src = img5Array[i].src;
    check(i);
}

function check(i) {
    let a = document.getElementById('img1').src;
    let b = document.getElementById('img2').src;
    let c = document.getElementById('img3').src;
    let d = document.getElementById('img4').src;
    let e = document.getElementById('img5').src;
    if (a == img1Array[i].src) {
        if (b == img2Array[i].src) {
            if (c == img3Array[i].src) {
                if (d == img4Array[i].src) {
                    if (e == img5Array[i].src) {
                        document.getElementById("content").style.backgroundColor = 'green';
                    }
                }
            }
        }
    }

}
