<template>
  <section-break
      gradient-from="from-purple-400"
      gradient-via="via-pink-400"
      gradient-to="to-blue-500"
      animation="animate-gradient-xy">
  </section-break>
  <div @mousemove="rotateShip" @click="moveShip" @keydown="fire" id="about" class="relative" ref="container">
    <div class="hidden lg:block h-full w-full absolute top-0 left-0" v-if="mode.isDarkMode.value && !isMobileOnly">
      <div v-if="score" class="gamify absolute top-2 left-2 z-10 text-white text-xl">SCORE: {{ score }}</div>
      <div class="stars z-0 absolute top-0 left-0 w-full h-full"></div>
      <div class="twinkling z-0 absolute top-0 left-0 w-full h-full"></div>
      <img src="https://res.cloudinary.com/ddaji66m6/image/upload/v1612058700/portfolio/spaceship_tlg2od.png" alt="ship" ref="ship" :style="shipPos" class="block ship absolute w-10 h-10 z-20 bg-white select-none"/>
      <SvgWeapon v-for="(weaponHit, index) in fired" :key="index" v-bind="{...weaponHit}"/>

      <SvgUFO
          ref="ufo"
          @click="ufoClicked"
          @mouseenter="randomizePosition"
          :style="ufoPos"
          :class="{'bg-red-600 rounded-full': hit}"
          class="absolute select-none hidden lg:block h-10 w-10 wobble transition-all cursor-crosshair"
      />

    </div>
    <div class="lg:bg-gradient-to-r from-white via-white to-gray-200 pt-6 lg:pt-0 dark:bg-gray-900 z-50 pb-5 lg:pb-0 transition-colors duration-500">
      <card-row
          v-for="(card, i) in cards"
          v-bind:key="card"
          :card="card"
          :reverse="i % 2 === 0"
          :delay="i">
      </card-row>
    </div>
  </div>
  <section-break
      gradient-from="from-purple-500 dark:from-blue-900"
      gradient-via="via-pink-200"
      gradient-to="to-blue-500"
      animation="animate-gradient-xy">
  </section-break>
</template>

<script>

import CardRow from '@/components/reusable/CardRow'
import SectionBreak from '@/components/reusable/SectionBreak'
import useDarkMode from '@/hooks/useDarkMode'
import SvgUFO from '@/components/icons/SvgUFO'
import { ref, reactive } from 'vue'
import { isMobileOnly } from 'mobile-device-detect'
import SvgWeapon from '@/components/icons/SvgWeapon'

export default {
  name: 'History',
  components: {
    SvgWeapon,
    SvgUFO,
    CardRow,
    SectionBreak
  },
  setup () {
    const mode = useDarkMode()
    const container = ref(null)
    const score = ref(0)
    const ufo = ref(null)
    const ship = ref(null)
    const hit = ref(false)

    const fired = reactive([])

    const ufoClicked = (event) => {
      score.value++
      hit.value = true
      fire(event)
      setTimeout(() => {
        hit.value = false
      }, 1000)
    }

    const ufoPos = ref({
      top: '-1000px',
    })
    const shipPos = reactive({
      top: '0px',
      left: '0px',
    })

    const randomizePosition = () => {
      const duration = Math.ceil(Math.random() * 3) + 's'
      const offset = Math.random() < 0.5 ? -100 : 100

      const maxSize = 75
      const size = Math.ceil(Math.random() * maxSize)
      let brightness = (size / maxSize) * 100
      brightness = brightness < 40 ? 40 : brightness

      const zIndexThreshold = 0.8

      const sizeStyles = {
        height: `${size}px`,
        width: `${size}px`,
        'z-index': size >= (maxSize * zIndexThreshold) ? 12 : 1,
        filter: `brightness(${brightness}%)`,
      }

      ufoPos.value = {
        top: (Math.random() * container.value?.offsetHeight + offset ?? -1000) + 'px',
        left: (Math.random() * container.value?.offsetWidth + offset ?? -1000) + 'px',
        'animation-duration': duration,
        'transition-duration': duration,
        ...sizeStyles
      }
    }

    const rotateShip = (event) => {
      const containerOffset = container.value.getBoundingClientRect()

      const pointerBox = ship.value.getBoundingClientRect(),
          centerY = pointerBox.top + ship.value.offsetHeight - containerOffset.top,
          centerX = pointerBox.left + ship.value.offsetWidth - containerOffset.left

      const radians = Math.atan2(event.x - centerX, (event.y - containerOffset.top) - centerY)
      const degree = (radians * (180 / Math.PI) * -1) + 180

      shipPos.transform = `rotate(${degree}deg)`
      shipPos['transition-duration'] = `0.1s`
    }

    const fire = (event) => {
      const containerOffset = container.value.getBoundingClientRect()
      fired.push({
        startX: shipPos.left,
        startY: shipPos.top,
        endX: event.x + 'px',
        endY: event.y - containerOffset.top + 'px',
      })

      setTimeout(() => {
        fired.shift()
      }, 200)
    }

    const moveShip = (event) => {
      if (ufo.value.$el === event.target) {
        fire(event)
      } else {
        const containerOffset = container.value.getBoundingClientRect()
        shipPos['transition-duration'] = '1s'
        shipPos.left = event.x + 'px'
        shipPos.top = event.y - containerOffset.top + 'px'
      }
    }

    const setAnimationTimeout = () => {
      setTimeout(() => {
        randomizePosition()
        setAnimationTimeout()
      }, Math.ceil(Math.random() * 10000))
    }

    if (!isMobileOnly) {
      setAnimationTimeout()
    }

    return {
      randomizePosition,
      ufoClicked,
      rotateShip,
      moveShip,
      fire,
      shipPos,
      ship,
      ufo,
      score,
      fired,
      hit,
      container,
      ufoPos,
      mode,
      isMobileOnly,
      cards: [
        {
          header: 'RocketPlan - Senior Backend Developer',
          date: 'April 2021-Current',
          body: `Got the opportunity to join a great team at RocketPlan Technologies as a Senior Backend Developer.`,
          callToAction: {
            label: 'More about RocketPlan',
            url: 'https://rocketplantech.com/'
          }
        },
        {
          header: 'Open to New Opportunities',
          date: 'January 2021-March 2021',
          body: `Made the difficult decision to part ways with Sentis. As much as I love the team and culture,
          I felt this was a necessary step to focus my career on development and to put away some of the roles I have been performing.
          Taking some time to learn and create a public github presence, hopefully contributing to the open source community in the process.`,
          callToAction: {
            label: 'View recent activity on GitHub!',
            url: 'https://github.com/J-T-McC'
          }
        },
        {
          header: 'Sentis - Head of Systems & Solutions',
          date: 'April 2018-January 2021',
          body: `Promoted to Head of Systems & Solutions and charged with overseeing the Development team and IT footprint.
          Completion of migration to AWS and company to AzureAD & O365.
          Improving upon & implementation of policies and procedures, automating repetitive company process and reduction
          of technical debt. Laravel and VueJS focused.`,
        },
        {
          header: 'Sentis - Developer',
          date: 'April 2015-2018',
          body: `Pivoting away from the survey platform and into custom client portals. Throughout this period I was
          introduced to my first frameworks & web servers. Working on a small team sometimes means wearing many hats.
          Taking on additional responsibilities to help spread the load. Introduced to Active Directory, Exchange and
          Asterisk. Personal focus remains on development.`
        },
        {
          header: 'Sentis - Survey Programmer',
          date: 'April 2013-2016',
          body: `Tasked with developing our ever evolving survey themes and question designs. Primarily a front-end roll
          focusing on product visuals, user experience and browser compatibility.
          Introduced to (┛ಠ_ಠ)┛彡Internet Explorer 8 ┻━┻.`
        },
        {
          header: 'Sentis - Call Centre Manager',
          date: 'April 2012-2014',
          body: `Overseeing the call centre operations.`
        }
      ]
    }
  },

}
</script>

<style scoped>
.ship {
  background: transparent;
}

@keyframes wobble {
  0%, 100% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg)
  }
}

@keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

.wobble {
  animation: wobble .3s infinite !important;
}

.stars {
  background: black url(https://res.cloudinary.com/ddaji66m6/image/upload/v1611800904/portfolio/stars_vcimcd.png) repeat top center;
  z-index: 0;
}

.twinkling {
  background: transparent url(https://res.cloudinary.com/ddaji66m6/image/upload/v1611800910/portfolio/twinkling_qmxcrl.png) repeat top center;
  opacity: 0.6;
  z-index: 1;

  -moz-animation: move-twink-back 300s linear infinite;
  -ms-animation: move-twink-back 300s linear infinite;
  -o-animation: move-twink-back 300s linear infinite;
  -webkit-animation: move-twink-back 300s linear infinite;
  animation: move-twink-back 300s linear infinite;
}
</style>