<template>
  <Layout>

    <div class="container">

      <Headbar></Headbar>

      <div class="content mt-4">

        <div class="notification bg-1">War scenarios</div>

        <h4>Popular mechanics <span class="tag">March 29, 2022</span></h4> 
        <p>
          <a href="https://www.popularmechanics.com/military/weapons/a39227264/what-nuclear-war-between-the-us-and-russia-could-look-like/" target="_blank">
            "This Is What a Nuclear War Between the U.S. and Russia Could Look Like"
          </a>
        </p>

        <vue-mermaid-string :value="caseA1" />
      </div>


    </div>
  </Layout>
</template>

<script>
import VueMermaidString from 'vue-mermaid-string';
import Headbar from "../components/headbar.vue";

export default {
  components: {VueMermaidString, Headbar},
  data() {
    return {
      caseA1: `
graph TB
p0[Ukrainian war..]
p0 --> p1[Russia escalates conflict..]
p0 --> n2[NATO involved into conflict..]
p1 --> p3[Russians military reserves is out..]
p3 --> p4[Russia attacks USA radars by Avangard...]
p4 --> p5[Russia attacks USA launchers by all forces...]
p5 --> p6[Russia starts dialog with USA]
n2 --> n3[USA counterforce strike...]
n3 ----> p6
p6 --> p7[Russia offers USA to surrender...]
p7 --> n4[USA strikes back...]
n4 --> p8[Russia strikes second time..]
p8 --> n5[USA totally destroyed..]
    `,
    }
  },
  methods: {
  }
}
</script>