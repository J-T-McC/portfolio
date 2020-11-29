<template>
  <div id="about">
    <section-break
        gradient-from="from-purple-400"
        gradient-via="via-pink-400"
        gradient-to="to-blue-500"
        animation="animate-gradient-xy">
    </section-break>
    <div class="lg:bg-gradient-to-r from-white via-white to-gray-200 pt-6 lg:pt-0">
      <card-row
          v-for="(card, i) in cards"
          v-bind:key="card"
          :header="card.header"
          :date="card.date"
          :body="card.body"
          :reverse="i % 2 === 0"
          :index="i">
      </card-row>
      <section-break
          gradient-from="from-purple-200"
          gradient-via="via-pink-200"
          gradient-to="to-blue-500"
          animation="animate-gradient-xy">
      </section-break>
    </div>
  </div>
</template>

<script>

import CardRow from "@/components/reusable/CardRow";
import SectionBreak from "@/components/reusable/SectionBreak";

export default {
  name: "History",
  components: {
    CardRow,
    SectionBreak
  },
  setup() {
    return {
      cards: [
        {
          header: 'Sentis - Head of Systems & Solutions',
          date: 'April 2018-current',
          body: `Promoted to Head of Systems & Solutions and charged with overseeing the Development team and IT footprint.
          Completion of migration to AWS and company to Azure/O365. Company now has full remote work capabilities.
          Improving upon & implementation of policies and procedures, automating repetitive company process and reduction
          of technical debt. Laravel and VueJS focused.`
        },
        {
          header: 'Sentis - Developer',
          date: 'April 2015-2018',
          body: `Pivoting away from our survey platform and into custom client portals. Throughout this period I was
          introduced to my first frameworks & AWS. Working on a small team sometimes means wearing many hats.
          Taking on additional responsibilities to help spread the load. Introduced to Active Directory, Exchange and
          Asterisk. Personal focus remains on development.`
        },
        {
          header: 'Sentis - Survey Programmer',
          date: 'April 2013-2016',
          body: `Tasked with developing our ever evolving survey themes and question designs. Primarily a front-end roll
          focusing on product visuals, user experience and browser compatibility. My first introduction to LAMP stack.
          Also introduced to (┛ಠ_ಠ)┛彡Internet Explorer 8 ┻━┻. Have officially begun my journey as a developer.`
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

</style>