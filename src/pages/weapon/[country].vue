<template>
    <div class="container">
        <div class="content mt-4">
            <h3>Who owns the weapon</h3>
            
            <ContentWarning />
        
            <div class="tabs is-toggle">
                <ul class="ml-0">
                    <li v-for="item of weaponCountries" v-bind:class="{'is-active':item.country===data.country}">
                        <a v-bind:href="item.href"><span>{{item.country}}</span></a>
                    </li>
                </ul>
            </div>

            <div class="card">
                <div class="card-content">
                    <div class="content">
                        <h5>{{data.country}}</h5>
    
                        <div class="columns">
                            <div class="column" v-for="item in data.owners">
                                
                                <WeaponOwner v-bind:title="item.name" v-bind:portrait="item.portrait">
                                    {{item.title}}
                                </WeaponOwner>
    
                            </div>
    
                        </div>
                            
                    </div>
                </div>
            </div>
    
        </div>
    </div>
</template>

<script setup lang="ts">
const weaponCountries = useDocuments('~/docs/weapon');
const page = defineProps<{ data: any }>()

const { frontmatter } = usePage()
frontmatter.title = page.data.country + ' / Weapon owners';
</script>


<script lang="ts">


export default definePageComponent({

  async getStaticPaths () {

    const pages = useDocuments('~/docs/weapon').value;

    return pages.map(item => {
        return {params: {country: item.page}, props: {
            data: item.frontmatter
        }};
    });
  },
});

</script>

