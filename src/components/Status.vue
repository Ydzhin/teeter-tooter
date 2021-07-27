<template>
  <section class="status">
    <div class="status__score">
      <div class="ur">
      <p><strong>Total Weight: </strong>{{ totalDroppedShapesWeight }} KG</p>
      <p><strong>Total Moment: </strong>{{ fallingShapes[0] && fallingShapes[0].weight }} KG</p>
    </div>
    </div>
    <div class="status__buttons">
      <button class="btn second" @click="toggleSimulation">{{ isGamePaused ? 'Play' : 'pause' }}</button>
      <button class="btn first" @click="initGame">Replay</button>
    </div>
       <div class="pc">
    <div class="status__score">
      <p><strong>Total Weight: </strong>{{ totalRandomShapesWeight }} KG</p>
      <p><strong>Total Moment: </strong>X KG</p>
    </div>
       </div>
  </section>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import { SPACE_KEY } from '@/constVariables';
export default {
  computed: {
    ...mapState([ 
        'droppedShapes',
        'fallingShapes',
        'isGamePaused', 
        'isModalShown',
        'randomlyPlacedShapes'
    ]),

    totalDroppedShapesWeight() {
        return this.getTotalWeight(this.droppedShapes);
    },

    totalRandomShapesWeight() {
        return this.getTotalWeight(this.randomlyPlacedShapes);
    }
  },
  created() {
    window.addEventListener('keydown', this.handleSpaceClick);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleSpaceClick);
  },
  methods: {
    ...mapActions([ 'initGame' ]),
    ...mapMutations([ 'toggleSimulation' ]),

    getTotalWeight(shapes = []) {
        return shapes.reduce((total, current) => total += current.weight, 0);
    },

    handleSpaceClick(event) {
        event.preventDefault();
        if (event.keyCode === SPACE_KEY && !this.isModalShown) {
            this.toggleSimulation();
        }
    }
  }
}
</script>

<style lang="scss" scoped>
.status {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn {
  box-sizing: border-box;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #e74c3c;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-self: center;
      -ms-flex-item-align: center;
          align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
.btn:hover, .btn:focus {
  color: #fff;
  outline: 0;
}

.first {
  -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  display:inline-block;
   margin-right:5px;
}
.first:hover {
  box-shadow: 0 0 40px 40px #e74c3c inset;
}

.second {
  display:inline-block;
   margin-right:5px;
  border-radius: 3em;
  border-color: #1abc9c;
  color: #fff;
  background-image: -webkit-linear-gradient(left, rgba(26, 188, 156, 0.6), rgba(26, 188, 156, 0.6) 5%, #1abc9c 5%, #1abc9c 10%, rgba(26, 188, 156, 0.6) 10%, rgba(26, 188, 156, 0.6) 15%, #1abc9c 15%, #1abc9c 20%, rgba(26, 188, 156, 0.6) 20%, rgba(26, 188, 156, 0.6) 25%, #1abc9c 25%, #1abc9c 30%, rgba(26, 188, 156, 0.6) 30%, rgba(26, 188, 156, 0.6) 35%, #1abc9c 35%, #1abc9c 40%, rgba(26, 188, 156, 0.6) 40%, rgba(26, 188, 156, 0.6) 45%, #1abc9c 45%, #1abc9c 50%, rgba(26, 188, 156, 0.6) 50%, rgba(26, 188, 156, 0.6) 55%, #1abc9c 55%, #1abc9c 60%, rgba(26, 188, 156, 0.6) 60%, rgba(26, 188, 156, 0.6) 65%, #1abc9c 65%, #1abc9c 70%, rgba(26, 188, 156, 0.6) 70%, rgba(26, 188, 156, 0.6) 75%, #1abc9c 75%, #1abc9c 80%, rgba(26, 188, 156, 0.6) 80%, rgba(26, 188, 156, 0.6) 85%, #1abc9c 85%, #1abc9c 90%, rgba(26, 188, 156, 0.6) 90%, rgba(26, 188, 156, 0.6) 95%, #1abc9c 95%, #1abc9c 100%);
  background-image: linear-gradient(to right, rgba(26, 188, 156, 0.6), rgba(26, 188, 156, 0.6) 5%, #1abc9c 5%, #1abc9c 10%, rgba(26, 188, 156, 0.6) 10%, rgba(26, 188, 156, 0.6) 15%, #1abc9c 15%, #1abc9c 20%, rgba(26, 188, 156, 0.6) 20%, rgba(26, 188, 156, 0.6) 25%, #1abc9c 25%, #1abc9c 30%, rgba(26, 188, 156, 0.6) 30%, rgba(26, 188, 156, 0.6) 35%, #1abc9c 35%, #1abc9c 40%, rgba(26, 188, 156, 0.6) 40%, rgba(26, 188, 156, 0.6) 45%, #1abc9c 45%, #1abc9c 50%, rgba(26, 188, 156, 0.6) 50%, rgba(26, 188, 156, 0.6) 55%, #1abc9c 55%, #1abc9c 60%, rgba(26, 188, 156, 0.6) 60%, rgba(26, 188, 156, 0.6) 65%, #1abc9c 65%, #1abc9c 70%, rgba(26, 188, 156, 0.6) 70%, rgba(26, 188, 156, 0.6) 75%, #1abc9c 75%, #1abc9c 80%, rgba(26, 188, 156, 0.6) 80%, rgba(26, 188, 156, 0.6) 85%, #1abc9c 85%, #1abc9c 90%, rgba(26, 188, 156, 0.6) 90%, rgba(26, 188, 156, 0.6) 95%, #1abc9c 95%, #1abc9c 100%);
  background-position: 0 0;
  background-size: 100%;
  -webkit-transition: background 300ms ease-in-out;
  transition: background 300ms ease-in-out;
}
.second:hover {
  background-position: 100px;
}
// }
//   .ur{
   
//     width: 10%;
//     height: auto;
//      position: fixed;
//     bottom: 10%;
//     left: 1%;
//     background-size:auto;
//     background-color: #DBEDED;
//     border-radius: 1em;
//     margin-left: 1%;
//     display: block;
//     float: left;
//     align-items: center;
//     border-color: #1abc9c;
//     border: 3px;
//   }
//   .pc {
//      width: 10%;
//     position: fixed;
//     bottom: 10%;
//     right: 1%;
//      background-size:auto;
//     background-color: #DBEDED;
//     border-radius: 1em;
//     margin-left: 1%;
//     display: block;
//     float: left;
//     align-items: center;
//     border-color: #1abc9c;
//     border: 3px;
//   }
</style>
