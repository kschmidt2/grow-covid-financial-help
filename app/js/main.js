// Vue.component('result', {
//   props: ['title', 'image', 'content'],
//   template: `
//     <div>
//       <h2><span class="highlight">{{ title }}</span></h2>
//       <p class="body-text" v-html="content"></p>
//     </div>
//   `
// })

// setTimeout(function(){
  var quiz = new Vue({
    el: '#quiz',
    data: {
      questions: [
        {"name": "laidOff", "text": "I was laid off or furloughed."},
        {"name": "freelancer", "text": "I am a freelancer or independent contractor who’s out of work."},
        {"name": "sickLeave", "text": "I have Covid-19, or am caring for someone who does, and don’t have access to sick leave through my employer."},
        {"name": "dependent", "text": "I had to quit my job to take care of a dependent due to the closure of schools, day cares, or another facility."},
        {"name": "newJob", "text": "I was supposed to begin a new job, but the start date was delayed or canceled ."},
        {"name": "quarantine", "text": "I must self-quarantine due to Covid-19 exposure and cannot work."},
        {"name": "earnerDied", "text": "The primary earner in my household has died from Covid-19."},
        {"name": "smallBiz", "text": "I am a small-business owner and my business has been hurt."},
        {"name": "shutDown", "text": "My employer shut down."},
        {"name": "wagesCut", "text": "I still have a job but my hours or wages have been cut."},
        {"name": "rent", "text": "I cannot afford my rent or mortgage payment."},
        {"name": "studentLoans", "text": "I cannot afford to make my student loan payments."},
        {"name": "food", "text": "I’m having trouble affording food and paying for other expenses."},
        {"name": "healthInsurance", "text": "I’ve lost my health insurance."},
        {"name": "withdrawal", "text": "I’d like to make a withdrawal from a retirement account to pay for expenses."},
      ],

      showUnemployment: '',
      showFreelancer: '',
      showSmallBiz: '',
      showRent: '',
      showStudentLoans: '',
      showFood: '',
      showHealthInsurance: '',
      showWithdrawal: '',
    

      showError: '',

    },
    computed: {
      // results go here

    },
    methods: {
      // functions go here
      calculateResults: function() {

      let questions = this.questions;

      if (questions[0].checked) {
        this.showUnemployment = true;
      }

      if (questions[1].checked) {
        this.showUnemployment = true;
        this.showFreelancer = true;
      }

      if (questions[2].checked) {
        this.showUnemployment = true;
      }

      if (questions[3].checked) {
        this.showUnemployment = true;
      }

      if (questions[4].checked) {
        this.showUnemployment = true;
      } 

      if (questions[5].checked) {
        this.showUnemployment = true;
      }

      if (questions[6].checked) {
        this.showUnemployment = true;
      }

      if (questions[7].checked) {
        this.showSmallBiz = true;
      }

      if (questions[8].checked) {
        this.showUnemployment = true;
      }

      if (questions[9].checked) {
        this.showUnemployment = true;
      }

      if (questions[10].checked) {
        this.showRent = true;
      }

      if (questions[11].checked) {
        this.showStudentLoans = true;
      }

      if (questions[12].checked) {
        this.showFood = true;
      }

      if (questions[13].checked) {
        this.showHealthInsurance = true;
      }

      if (questions[14].checked) {
        this.showWithdrawal = true;
      }

        // this.reset();

      },
      reset: function() {
        this.showRideShare = false;
        this.showTutor = false;
        this.showShopper = false;
        this.showWalker = false;
        this.showHandler = false;
        this.showAssistant = false;
        this.computerYesNo = '';
        this.carYesNo = '';

        this.hideQuestion();
      },
      resetAllButton: function() {

        this.reset();
        this.hideQuestion();

        for (var i=0;i<this.questions.length;i++) {
          if (this.questions[i].checked) {
            this.questions[i].checked = false;
          }
            
            
        }


      }
    }
  })
// }, 1000)