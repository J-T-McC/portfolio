<template>
  <section-break
      gradient-from="from-purple-400"
      gradient-via="via-pink-400"
      gradient-to="to-blue-500"
      animation="animate-gradient-xy">
  </section-break>
  <div id="about" class="relative" ref="container">
    <div v-if="mode.isDarkMode.value" class="stars z-0 hidden lg:block absolute top-0 left-0 w-full h-full"></div>
    <div v-if="mode.isDarkMode.value" class="twinkling z-0 hidden lg:block absolute top-0 left-0 w-full h-full"></div>
    <SvgUFO @mouseenter="randomizePosition()" v-if="mode.isDarkMode.value" class="z-10 opacity-25 absolute hidden lg:block h-10 w-10 transition-all animate-pulse" :style="pos"/>
    <div class="lg:bg-gradient-to-r light:from-white light:via-white light:to-gray-200 pt-6 lg:pt-0 dark:bg-gray-900 z-50 pb-10 lg:pb-0">
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

import CardRow from "@/components/reusable/CardRow";
import SectionBreak from "@/components/reusable/SectionBreak";
import useDarkMode from '@/hooks/useDarkMode'
import SvgUFO from '@/components/icons/SvgUFO'
import {ref} from 'vue'
import { isMobileOnly } from 'mobile-device-detect';

export default {
  name: "History",
  components: {
    SvgUFO,
    CardRow,
    SectionBreak
  },
  setup() {
    const mode = useDarkMode();
    const container = ref(null);

    const pos = ref({
      top: -1000,
    })

    const randomizePosition = () => {
      const duration = Math.ceil(Math.random() * 5) + 's';
      const offset = Math.random() < 0.5 ? -100 : 100;
      pos.value = {
        top: Math.random() * container.value?.offsetHeight + offset ?? -1000,
        left: Math.random() * container.value?.offsetWidth + offset ?? -1000,
        'animation-duration': duration,
        'transition-duration': duration,
      }
    }

    const setAnimationTimeout = () => {
      if(!isMobileOnly) {
        setTimeout(() => {
          if(mode.isDarkMode.value) {
            randomizePosition()
            setAnimationTimeout()
          }
        }, Math.ceil(Math.random() * 10000))
      }
    }

    setAnimationTimeout();

    return {
      randomizePosition,
      container,
      pos,
      mode,
      cards: [
        {
          header: 'Open to New Opportunities',
          date: 'Current',
          body: `Made the difficult decision to part ways with Sentis. As much as I love the team and culture,
          I felt this was a necessary step to focus my career on development and to put away some of the IT hats I have been wearing.
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
          of technical debt. Laravel and VueJS focused.`
        },
        {
          header: 'Sentis - Developer',
          date: 'April 2015-2018',
          body: `Pivoting away from our survey platform and into custom client portals. Throughout this period I was
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
@keyframes move-twink-back {
  from {background-position:0 0;}
  to {background-position:-10000px 5000px;}
}
@-webkit-keyframes move-twink-back {
  from {background-position:0 0;}
  to {background-position:-10000px 5000px;}
}
@-moz-keyframes move-twink-back {
  from {background-position:0 0;}
  to {background-position:-10000px 5000px;}
}
@-ms-keyframes move-twink-back {
  from {background-position:0 0;}
  to {background-position:-10000px 5000px;}
}

@keyframes move-clouds-back {
  from {background-position:0 0;}
  to {background-position:10000px 0;}
}
@-webkit-keyframes move-clouds-back {
  from {background-position:0 0;}
  to {background-position:10000px 0;}
}
@-moz-keyframes move-clouds-back {
  from {background-position:0 0;}
  to {background-position:10000px 0;}
}
@-ms-keyframes move-clouds-back {
  from {background-position: 0;}
  to {background-position:10000px 0;}
}

.stars {
  background: black url(https://res.cloudinary.com/ddaji66m6/image/upload/v1611800904/portfolio/stars_vcimcd.png) repeat top center;
  z-index:0;
}

.twinkling{
  background:transparent url(https://res.cloudinary.com/ddaji66m6/image/upload/v1611800910/portfolio/twinkling_qmxcrl.png) repeat top center;
  opacity: 0.6;
  z-index:1;

  -moz-animation:move-twink-back 300s linear infinite;
  -ms-animation:move-twink-back 300s linear infinite;
  -o-animation:move-twink-back 300s linear infinite;
  -webkit-animation:move-twink-back 300s linear infinite;
  animation:move-twink-back 300s linear infinite;
}
</style>