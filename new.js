//使用 instanceof 就是判断一个实例是否属于某种类型

class Line {
    constructor(x, y, cX, cY) {
        this.x = x;
        this.y = y;
        this.cX = cX;
        this.cY = cY;
    }

    getTop() {
        return (this.cY - this.y + 100) + 'px';
    }

    getLeft() {
        return (this.cX - this.x + 100) + 'px';
    }

}

class Box {
    constructor(x, y, cX, cY) {
        this.x = x;
        this.y = y;
        this.cX = cX;
        this.cY = cY;
    }

    getTop() {
        return this.cY - this.y;
    }

    getLeft() {
        return this.cX - this.x;
    }

    boxFree() {
        document.onmousemove = null;
        document.onmouseup = null;
    }
}


window.onload = function () {

    let oBox = document.getElementById('box'),
        disX = 0, disY = 0;
    let a = document.querySelector('.a');
    let b = document.querySelector('.b');

    oBox.onmousedown = function (e) {//点击的位置
        let box = new Box(this.offsetLeft, this.offsetTop, e.clientX, e.clientY);
        disX = box.getLeft();
        disY = box.getTop();
        //console.log(disX + ',' + disY);
        document.onmousemove = function (e) {

            let lineA = new Line(disX, disY, e.clientX, e.clientY);
            let lineB = new Line(disX, disY, e.clientX, e.clientY);
            box = new Box(disX, disY, e.clientX, e.clientY);

            oBox.style.left = box.getLeft() + 'px';
            oBox.style.top = box.getTop() + 'px';

            a.style.left = lineA.getLeft();
            b.style.top = lineB.getTop();
        };

        document.addEventListener('mouseup', box.boxFree);
    };
};
