<template>
<div class="container">
    <div class="content mt-4">
        <h3>Who owns the weapon</h3>
        
        <ContentWarning />

        <div class="tabs is-toggle">
            <ul class="ml-0">
                <li v-for="country of weaponCountries"><a v-bind:href="country.href"><span>{{country.country}}</span></a></li>
            </ul>
        </div>

    </div>
</div>
</template>

<script setup lang="ts">
const weaponCountries = useDocuments('~/docs/weapon')
</script>


