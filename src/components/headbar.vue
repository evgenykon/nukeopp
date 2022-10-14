<template>
    <b-navbar>
    <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <strong>☢️ Nuclear opposition</strong>
        </b-navbar-item>
        </template>
        <template #start>

            <b-navbar-item tag="router-link" :to="{ path: '/targets' }"><box-icon name='map-pin'></box-icon>&nbsp; War targets</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/scenarios' }"><box-icon name='detail'></box-icon>&nbsp; War scenarios</b-navbar-item>
            <!-- b-navbar-item tag="router-link" :to="{ path: '/weapon' }"><box-icon type='solid' name='user-rectangle'></box-icon>&nbsp; Who owns the weapon</b-navbar-item -->
        
            <b-navbar-item tag="router-link" :to="{ path: '/safety-models' }"><box-icon name='globe'></box-icon>&nbsp; Global Safety models</b-navbar-item>
            <b-navbar-dropdown label="How we can survive">
                <b-navbar-item tag="router-link" :to="{ path: '/alarm-case' }"><box-icon name='briefcase-alt-2'></box-icon>&nbsp; Alarm Case</b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/first-aid' }"><box-icon name='first-aid' ></box-icon>&nbsp; First aid</b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/cheatsheet' }"><box-icon name='key'></box-icon>&nbsp; Survival Cheatsheet</b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/stories' }"><box-icon name='book-reader'/>&nbsp; Stories about preparing</b-navbar-item>
            </b-navbar-dropdown>
        </template>
        <template #end>
            <b-navbar-dropdown label="Languages">
                <b-navbar-item>English</b-navbar-item>
                <!-- b-navbar-item>Russian</b-navbar-item -->
            </b-navbar-dropdown>
        </template>

    </b-navbar>
</template>


<script>
//import 'boxicons';
export default {
    data() {
        return {}
    }
}
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