let ele = document.getElementById("my-div");
let btnShow = document.querySelector("#show");
let btnHide = document.querySelector("#hide");
let containerAll = document.querySelector(".container");
let holder = ele.parentElement;

btnHide.onclick = function () {
    holder.remove();
}
btnShow.onclick = function () {
    containerAll.append(holder);
}

