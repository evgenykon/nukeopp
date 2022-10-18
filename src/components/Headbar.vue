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

            <NavbarItem href="/targets"><BxTargetLock/>&nbsp;War targets</NavbarItem>
            <NavbarItem href="/scenarios"><BxListOl/>&nbsp;War scenarios</NavbarItem>
            <NavbarItem href="/weapon"><GameIconsNuclearBomb/>&nbsp;Weapon Owners</NavbarItem>
            <NavbarItem href="/models"><GeoUiEarthEast/>&nbsp;Global Safety models</NavbarItem>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                    <GameIconsLifeBuoy/>&nbsp;How to survive
                </a>

                <div class="navbar-dropdown">
                    <NavbarItem href="/alarm-case"><GameIconsLightBackpack/>&nbsp;Alarm Case</NavbarItem>
                    <NavbarItem href="/first-aid"><GameIconsMedicalPackAlt/>&nbsp;First aid</NavbarItem>
                    <NavbarItem href="/cheatsheet"><GameIconsSurroundedShield />&nbsp;Survival Cheatsheet</NavbarItem>
                    <NavbarItem href="/stories"><GameIconsBackpack/>&nbsp;How to prepare</NavbarItem>
                </div>
            </div>

        </div>

        <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">Languages</a>

                <div class="navbar-dropdown">
                <a class="navbar-item">
                    <CifUs/>&nbsp;English
                </a>
                <!-- a class="navbar-item">
                    <CifRu/>&nbsp;Russian
                </a -->
                </div>
            </div>


        </div>
    </div>
    </nav>
</div>
</template>

<script setup lang="ts">
// https://github.com/antfu/unplugin-icons
import BxTargetLock from '~icons/bx/target-lock';
import BxListOl from '~icons/bx/list-ol'
import GameIconsNuclearBomb from '~icons/game-icons/nuclear-bomb'
import GameIconsSurroundedShield from '~icons/game-icons/surrounded-shield'
import GameIconsBackpack from '~icons/game-icons/backpack'
import GameIconsLightBackpack from '~icons/game-icons/light-backpack'
import GameIconsMedicalPackAlt from '~icons/game-icons/medical-pack-alt'
import GeoUiEarthEast from '~icons/geo/ui-earth-east'
import GameIconsLifeBuoy from '~icons/game-icons/life-buoy'
import CifUs from '~icons/cif/us'
import CifRu from '~icons/cif/ru'
</script>

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