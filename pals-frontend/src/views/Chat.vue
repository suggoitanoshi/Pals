<template>
    <div class="container-chat">
        <div class="container-header">
            <div class="pink"></div>
            <p>Mom</p>
        </div>
        <div class="container-menu"></div>
    </div>
</template>

<script>
    export default{
        name : 'Chat'
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    .container-header{
        display : flex;
        flex-flow : row;
        width : 70vw;
        height : 7vw;
        min-height:80px;
        border-bottom : 1px solid #C5C4C4;
        align-items: center;
        justify-items: center;
        
    }

    .pink{
        background-image: url("./pink.png");
        --scale: 0.26;
        min-width: calc(200px * var(--scale));
        min-height: calc(200px * var(--scale));
        background-size: contain;
        background-repeat: no-repeat;
        margin-left:40px;
    }

    p{
        font-family:'roboto',sans-serif;
        font-size:35px;
        margin-left:30px;
        color : #565656;
    }

</style>