window.onload = function () {
    var oBox = document.getElementById('box'),
        disX = 0, disY = 0;
    var a = document.querySelector('.a');
    var b = document.querySelector('.b');
    oBox.onmousedown = function (e) {//点击的位置
       // console.log(e.clientX+','+e.clientY);
       // console.log(this.offsetLeft+","+this.offsetTop);
        disX = e.clientX - this.offsetLeft;
        disY = e.clientY - this.offsetTop;
        document.onmousemove = function (e) {
            oBox.style.left = (e.clientX - disX) + 'px';
            oBox.style.top = (e.clientY - disY) + 'px';
            a.style.left = (e.clientX - disX + 100) + 'px';
            b.style.top = (e.clientY - disY + 100) + 'px';
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };
        return false;
    };
};