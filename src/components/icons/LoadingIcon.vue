<template>
    <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
   </div>
</template>


<style scoped>
div {
    position: relative;
    width: 50%;
    display: flex;
    overflow: hidden;
    padding: 40px;
}
div span {
    position: absolute;
    left: 0;
    width: 15px;
    height: 15px;
    background-color: #383634;
    filter: drop-shadow(0 0 10px white);
    border-radius: 50%;
    animation: notleft 2s ease infinite;
}
span:nth-child(2) {
    animation-delay: .4s;
}
span:nth-child(3) {
    animation-delay: .5s;
}
span:nth-child(4) {
    animation-delay: .6s;
}
span:nth-child(5) {
    animation-delay: .7s;
}
@keyframes notleft{
    50% {
        left: 50%;
    }
    100% {
        left: 120%;
    }
}
</style>