<script>
    document.getElementById("menu-button").addEventListener("click", ()=> {
        document.getElementById("menu-bar").classList.toggle("open");
    });
</script>



<template>
    <div class = "navbar-under"></div>
    <nav class = "navbar">
        <button class = "menu-button" id = "menu-button">Menu</button>
        <div class = "title">
            Drone Cones
        </div>
        <div class = "links">
            <a href="order">Order</a>
            <a href="droneHome">Drones</a>
            <a href="/">Signout</a>
        </div>
    </nav>
    <div class = "menu-bar" id = "menu-bar">
        <a href="order">Order</a>
        <a href="droneHome">Drones</a>
        <a href="/">Signout</a>
    </div>
</template>