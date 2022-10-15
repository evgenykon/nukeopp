<template>
<div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <strong>☢️ Nuclear opposition</strong>
            </a>
        </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">

            <NavbarItem name="War targets" href="/targets" />
            <NavbarItem name="War scenarios" href="/scenarios" />
            <NavbarItem name="Who owns the weapon" href="/weapon" />
            <NavbarItem name="Global Safety models" href="/models" />

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                    How to survive
                </a>

                <div class="navbar-dropdown">
                    <NavbarItem name="Alarm Case" href="/alarm-case" />
                    <NavbarItem name="First aid" href="/first-aid" />
                    <NavbarItem name="Survival Cheatsheet" href="/cheatsheet" />
                    <NavbarItem name="How to prepare" href="/stories" />
                </div>
            </div>
        </div>

        <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">Languages</a>

                <div class="navbar-dropdown">
                <a class="navbar-item">
                    English
                </a>
                <a class="navbar-item">
                    Russian
                </a>
                </div>
            </div>


        </div>
    </div>
    </nav>
</div>

</template>

<style>
@media screen and (min-width: 1024px) {
    .navbar-item, .navbar-link {
        font-size: 12px;   
    }       
}
@media screen and (min-width: 1200px) {
    .navbar-item, .navbar-link {
        font-size: 14px;   
    }    
}
</style>