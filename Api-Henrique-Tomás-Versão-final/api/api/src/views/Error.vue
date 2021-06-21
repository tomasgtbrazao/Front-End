<template>
  <body>
    <div class="nada">
      <div class="container23">
        <div class="beer30">
          <div class="bubles">
            <div class="b1"></div>
            <div class="b2"></div>
            <div class="b3"></div>
            <div class="b4"></div>
            <div class="b5"></div>
            <div class="b6"></div>
            <div class="b7"></div>
            <div class="b8"></div>
            <div class="b9"></div>
          </div>
          <div class="beer3"></div>
          <div class="beer">
            <div class="ojos"><div class="iris"></div></div>
            <div class="ojos3"><div class="iris"></div></div>
            <div class="boca"></div>
            <div class="line"></div>
            <div class="rastro"></div>
          </div>
        </div>
      </div>
      <v-container>
        <div>
          <div class="error">404</div>
          <br /><br />
          <span class="info">BEER NOT FOUND</span>
          <img
            src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif"
            class="static"
          />
        </div>
        <div class="time-5"></div>
      </v-container>
    </div>
  </body>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Gilda+Display);

.nada {
  margin-top: -152px;
}

html {
  color: white;
  overflow: hidden;
  height: 100%;
  user-select: none;
}

.static {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0;
  padding: 0;
  top: -100px;
  opacity: 0.05;
  z-index: 230;
  user-select: none;
  user-drag: none;
}

.error {
  padding-top: 10px;
  text-align: center;
  font-family: "Gilda Display", serif;
  font-size: 95px;
  font-style: italic;
  text-align: center;
  width: 100px;
  height: 60px;
  line-height: 60px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -60px;
  right: 0;
  animation: noise 2s linear infinite;
  overflow: default;
}

.error:after {
  padding-top: 10px;
  content: "404";
  font-family: "Gilda Display", serif;
  font-size: 100px;
  font-style: italic;
  text-align: center;
  width: 150px;
  height: 60px;
  line-height: 60px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  color: rgb(255, 94, 0);
  animation: noise-1 0.2s linear infinite;
}

.info {
  padding-top: 10px;
  text-align: center;
  font-family: "Gilda Display", serif;
  font-size: 15px;
  font-style: italic;
  text-align: center;
  width: 200px;
  height: 60px;
  line-height: 60px;
  margin: auto;
  position: absolute;
  top: 140px;
  bottom: 0;
  left: 0;
  right: 0;
  animation: noise-3 1s linear infinite;
}

.error:before {
  align-content: center;
  padding-top: 10px;
  content: "404";
  font-family: "Gilda Display", serif;
  font-size: 100px;
  font-style: italic;
  text-align: center;
  width: 100px;
  height: 60px;
  line-height: 60px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  color: red;
  animation: noise-2 0.2s linear infinite;
}

@keyframes noise-1 {
  0%,
  20%,
  40%,
  60%,
  70%,
  90% {
    opacity: 0;
  }
  10% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.5;
    left: -6px;
  }
  80% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.6;
    left: 2px;
  }
}

@keyframes noise-2 {
  0%,
  20%,
  40%,
  60%,
  70%,
  90% {
    opacity: 0;
  }
  10% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.5;
    left: 6px;
  }
  80% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.6;
    left: -2px;
  }
}

@keyframes noise {
  0%,
  3%,
  5%,
  42%,
  44%,
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
  4.3% {
    opacity: 1;
    transform: scaleY(1.7);
  }
  43% {
    opacity: 1;
    transform: scaleX(1.5);
  }
}

@keyframes noise-3 {
  0%,
  3%,
  5%,
  42%,
  44%,
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
  4.3% {
    opacity: 1;
    transform: scaleY(4);
  }
  43% {
    opacity: 1;
    transform: scaleX(10) rotate(60deg);
  }
}

body {
  background: gray;
}
.container23 {
  position: relative;

  width: 400px;
  height: 550px;
  margin: 152px auto;
}
.beer30 {
  position: absolute;
  transform: rotate(-21deg) scale(0.9);
  margin: 70px -21px;
  animation: volar 7s alternate infinite;
}
.beer {
  position: absolute;
  width: 112px;
  height: 152px;
  background: #ffd800;
  border-right: 21px solid #fb8705;
  border-radius: 0 0 30px 30px;
  margin: 96px 119px;
}
.beer::before {
  content: "";
  position: absolute;
  width: 50px;
  height: 55px;
  border-radius: 100%;
  border-right: 9px solid #fb8705;
  margin: 40px 107px;
}
.beer3 {
  position: absolute;
  width: 142px;
  height: 152px;
  border: 7px solid black;
  border-radius: 0 0 35px 30px;
  margin: 90px 102px;
}
.beer3::before {
  content: "";
  position: absolute;
  width: 55px;
  height: 55px;
  border-radius: 100%;
  border: 7px solid black;
  transform: rotate(90deg);
  margin: 30px 112px;
}
.beer3::after {
  content: "";
  position: absolute;
  width: 50px;
  height: 25px;
  border-radius: 50px 50px 0 0;
  border: 7px solid black;
  transform: rotate(90deg);
  margin: 45px 117px;
}
.ojos,
.ojos3 {
  position: absolute;
  width: 21px;
  height: 21px;
  border-radius: 100%;
  background: black;
  animation: cerrar 3s alternate infinite;
}
.ojos {
  margin: 70px 30px;
}
.ojos3 {
  margin: 70px 80px;
}
.iris {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 100%;
  background: white;
  margin: 3px 3px;
}
.boca {
  position: absolute;
  width: 21px;
  height: 7px;
  border-radius: 0 0 12px 12px;
  border-bottom: 5px solid black;
  margin: 90px 55px;
}
.bubles {
  position: absolute;
  margin: 80px 121px;
  background: white;
  opacity: 1;
}
.b1,
.b2,
.b3,
.b4,
.b5,
.b6,
.b7,
.b8,
.b9 {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: white;
}
.b1 {
  margin: -12px 0px;
  animation: grow3 3s alternate infinite;
}
.b2 {
  margin: -30px 21px;
  animation: grow3 7s alternate infinite;
}
.b3 {
  margin: -12px 25px;
  animation: grow7 6s alternate infinite;
}
.b4 {
  margin: -30px 45px;
  animation: grow7 3s alternate infinite;
}
.b5 {
  margin: -12px 50px;
  animation: grow3 3s alternate infinite;
}
.b6 {
  margin: -30px 70px;
  animation: grow3 3s alternate infinite;
}
.b7 {
  margin: -12px 73px;
  animation: grow3 3s alternate infinite;
}
.b8 {
  margin: -12px 93px;
  animation: grow3 7s alternate infinite;
}
.b9 {
  margin: -40px 45px;
  animation: grow7 7s alternate infinite;
}
.rastro {
  position: absolute;
  width: 33px;
  height: 12px;
  border-radius: 12px;
  background: #fb8705;
  margin: 102px 125px;
  animation: volar3 7s alternate infinite;
}
.rastro::before {
  content: "";
  position: absolute;
  width: 55px;
  height: 12px;
  border-radius: 12px;
  background: #fb8705;
  margin: 13px 0px;
}
.rastro::after {
  content: "";
  position: absolute;
  width: 45px;
  height: 12px;
  border-radius: 12px;
  background: #fb8705;
  margin: 26px -5px;
}
.line {
  position: absolute;
  width: 7px;
  height: 12px;
  border-radius: 3px;
  background: white;
  margin: 9px 7px;
}
.line::before {
  content: "";
  position: absolute;
  width: 7px;
  height: 45px;
  border-radius: 3px;
  background: white;
  margin: 21px 0px;
}
.centro {
  padding-left: 40px;
  padding-top: 50px;
}
@keyframes grow3 {
  0%,
  25% {
    opacity: 1;
  }
  40%,
  50% {
    opacity: 0.7;
  }
  70%,
  80% {
    opacity: 1;
  }
  90%,
  100% {
    opacity: 0.7;
  }
}

@keyframes grow7 {
  0%,
  25% {
    opacity: 0.7;
  }
  40%,
  50% {
    opacity: 1;
  }
  70%,
  80% {
    opacity: 0.7;
  }
  90%,
  100% {
    opacity: 1;
  }
}

@keyframes volar {
  0% {
    transform: rotate(-21deg) scale(0.9) translateY(0px) translateX(-12px);
  }
  50% {
    transform: rotate(-21deg) scale(0.9) translateY(-12px) translateX(12px);
  }
}
@keyframes volar3 {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(0.7);
  }
}
@keyframes cerrar {
  0%,
  25% {
    opacity: 1;
  }
  35% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

.time-5 {
  --c1: #673b14;
  --c2: #f8b13b;
  margin-left: 850px;
  width: 40px;
  height: 80px;
  border-top: 4px solid var(--c1);
  border-bottom: 4px solid var(--c1);
  background: linear-gradient(
      90deg,
      var(--c1) 2px,
      var(--c2) 0 5px,
      var(--c1) 0
    )
    center/7px 8px no-repeat;
  display: grid;
  overflow: hidden;
  animation: t5-0 2s infinite linear;
}
.time-5::before,
.time-5::after {
  content: "";
  grid-area: 1/1;
  width: 75%;
  height: calc(50% - 4px);
  margin: 0 auto;
  border: 2px solid var(--c1);
  border-top: 0;
  border-radius: 0 0 40% 40%;
  -webkit-mask: linear-gradient(#000 0 0) bottom/4px 2px no-repeat,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  background: linear-gradient(var(--d, 0deg), var(--c2) 50%, #0000 0) bottom /
      100% 205%,
    linear-gradient(var(--c2) 0 0) center/0 100%;
  background-repeat: no-repeat;
  animation: inherit;
  animation-name: t5-1;
}

.time-5::after {
  transform-origin: 50% calc(100% + 2px);
  transform: scaleY(-1);
  --s: 3px;
  --d: 180deg;
}

@keyframes t5-0 {
  80% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0.5turn);
  }
}

@keyframes t5-1 {
  10%,
  70% {
    background-size: 100% 205%, var(--s, 0) 100%;
  }
  70%,
  100% {
    background-position: top, center;
  }
}
</style>
