Vue.component("result",{props:["title","image","content"],template:'\n    <div>\n      <h2>You got: <span class="highlight">{{ title }}</span></h2>\n      <img v-bind:src="image" class="result-image">\n      <p class="photo-credit">Twenty/20</p>\n      <p class="body-text" v-html="content"></p>\n    </div>\n  '});var quiz=new Vue({el:"#quiz",data:{questions:[{name:"steadyIncome",text:"I am only looking for steady income."},{name:"peoplePerson",text:"I consider myself a people person."},{name:"drive",text:"I can drive for long stretches and keep my focus."},{name:"physicalWork",text:"I can lift heavy boxes, assemble things, or clean a house."},{name:"skilled",text:"I'm skilled in music, sports, math, or another topic, and would love to share my knowledge."},{name:"fixingThings",text:"When someone needs something fixed around the house, they call me."},{name:"kids",text:"I like working with kids."},{name:"organized",text:"I'm highly organized."},{name:"comfortHome",text:"I prefer to work from the comfort of my own home."},{name:"lovesDogs",text:"I am comfortable handling multiple dogs at one time."},{name:"regularClients",text:"I prefer regular clients I can develop relationships with rather than one-shot deals."},{name:"menialTasks",text:"I don't mind doing menial tasks."},{name:"socialMedia",text:"I am good at, and enjoy using, social media."},{name:"groceryShopper",text:"I can stay calm in a busy grocery store."}],result:"",runnerUp:"",runnerUp2:"",showRideShareQuestion:!1,carYesNo:"",showAssistantQuestion:!1,computerYesNo:"",showError:"",showRideShare:"",showTutor:"",showShopper:"",showWalker:"",showHandler:"",showAssistant:""},computed:{},methods:{calculateResults:function(){this.reset();let e={rideShare:0,tutor:0,groceryShopper:0,dogWalker:0,taskHandler:0,virtualAssistant:0},t=this.questions;t[0].checked&&(e.rideShare++,e.tutor+=2,e.groceryShopper++,e.dogWalker+=2,e.virtualAssistant+=2),t[1].checked&&(e.rideShare++,e.tutor+=2,e.virtualAssistant++),t[2].checked&&(e.rideShare+=2),t[3].checked&&(e.taskHandler+=2),t[4].checked?e.tutor+=2:e.tutor-=20,t[5].checked&&(e.taskHandler+=2),t[6].checked&&(e.tutor+=2),t[7].checked&&(e.tutor++,e.groceryShopper++,e.virtualAssistant+=2),t[8].checked&&(e.tutor++,e.virtualAssistant+=2),t[9].checked&&(e.dogWalker+=2),t[10].checked&&(e.tutor+=2,e.dogWalker+=2,e.taskHandler++,e.virtualAssistant+=2),t[11].checked&&(e.rideShare+=2,e.groceryShopper+=2,e.dogWalker++,e.taskHandler+=2,e.virtualAssistant+=2),t[12].checked&&(e.virtualAssistant+=2),t[13].checked&&(e.groceryShopper+=2);let s,o="Ride-share: "+e.rideShare+"; Tutor: "+e.tutor+"; Grocery shopper: "+e.groceryShopper+"; Dog Walker: "+e.dogWalker+"; Task handler: "+e.taskHandler+"; Virtual assistant: "+e.virtualAssistant;console.log(o),-20==Object.values(e).reduce((e,t)=>e+t,0)?this.showError=!this.showError:(s=Object.keys(e).sort(function(t,s){return e[s]-e[t]||.5-Math.random()}),console.log(s),this.result=s[0],this.runnerUp=s[1],this.runnerUp2=s[2],this.showError=!1),"rideShare"==this.result?this.showRideShareQuestion=!this.showRideShareQuestion:"virtualAssistant"==this.result?this.showAssistantQuestion=!this.showAssistantQuestion:"tutor"==this.result?this.showTutor=!this.showTutor:"groceryShopper"==this.result?this.showShopper=!this.showShopper:"dogWalker"==this.result?this.showWalker=!this.showWalker:"taskHandler"==this.result&&(this.showHandler=!this.showHandler)},findFallback:function(e,t,s){"rideShare"==t||"virtualAssistant"==t?(this.showRideShareQuestion=!this.showRideShareQuestion,this.showAssistantQuestion=!this.showAssistantQuestion,"no"==this.carYesNo&&"no"==this.computerYesNo&&(e=s,this.hideQuestion())):(e=t,this.hideQuestion()),"tutor"==e?this.showTutor=!this.showTutor:"groceryShopper"==e?this.showShopper=!this.showShopper:"dogWalker"==e?this.showWalker=!this.showWalker:"taskHandler"==e&&(this.showHandler=!this.showHandler)},reset:function(){this.showRideShare=!1,this.showTutor=!1,this.showShopper=!1,this.showWalker=!1,this.showHandler=!1,this.showAssistant=!1,this.computerYesNo="",this.carYesNo="",this.hideQuestion()},hideQuestion:function(){this.showRideShareQuestion=!1,this.showAssistantQuestion=!1},resetAllButton:function(){this.reset(),this.hideQuestion();for(var e=0;e<this.questions.length;e++)this.questions[e].checked&&(this.questions[e].checked=!1)}}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJ0ZW1wbGF0ZSIsInF1aXoiLCJlbCIsImRhdGEiLCJxdWVzdGlvbnMiLCJuYW1lIiwidGV4dCIsInJlc3VsdCIsInJ1bm5lclVwIiwicnVubmVyVXAyIiwic2hvd1JpZGVTaGFyZVF1ZXN0aW9uIiwiY2FyWWVzTm8iLCJzaG93QXNzaXN0YW50UXVlc3Rpb24iLCJjb21wdXRlclllc05vIiwic2hvd0Vycm9yIiwic2hvd1JpZGVTaGFyZSIsInNob3dUdXRvciIsInNob3dTaG9wcGVyIiwic2hvd1dhbGtlciIsInNob3dIYW5kbGVyIiwic2hvd0Fzc2lzdGFudCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImNhbGN1bGF0ZVJlc3VsdHMiLCJ0aGlzIiwicmVzZXQiLCJzaWRlSHVzdGxlcyIsInJpZGVTaGFyZSIsInR1dG9yIiwiZ3JvY2VyeVNob3BwZXIiLCJkb2dXYWxrZXIiLCJ0YXNrSGFuZGxlciIsInZpcnR1YWxBc3Npc3RhbnQiLCJjaGVja2VkIiwic29ydGVkIiwicXVpelJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0IiwidmFsdWVzIiwicmVkdWNlIiwiYSIsImIiLCJrZXlzIiwic29ydCIsIk1hdGgiLCJyYW5kb20iLCJmaW5kRmFsbGJhY2siLCJoaWRlUXVlc3Rpb24iLCJyZXNldEFsbEJ1dHRvbiIsImkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBQSxJQUFBQyxVQUFBLFNBQUEsQ0FDQUMsTUFBQSxDQUFBLFFBQUEsUUFBQSxXQUNBQyxTQUFBLHdQQVdBLElBQUFDLEtBQUEsSUFBQUosSUFBQSxDQUNBSyxHQUFBLFFBQ0FDLEtBQUEsQ0FDQUMsVUFBQSxDQUNBLENBQUFDLEtBQUEsZUFBQUMsS0FBQSx3Q0FDQSxDQUFBRCxLQUFBLGVBQUFDLEtBQUEsc0NBQ0EsQ0FBQUQsS0FBQSxRQUFBQyxLQUFBLHFEQUNBLENBQUFELEtBQUEsZUFBQUMsS0FBQSw4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QUFwQixVQUFBOEMsR0FBQWpCLFVBQ0FULEtBQUFwQixVQUFBOEMsR0FBQWpCLFNBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlZ1ZS5jb21wb25lbnQoJ3Jlc3VsdCcsIHtcbiAgcHJvcHM6IFsndGl0bGUnLCAnaW1hZ2UnLCAnY29udGVudCddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXY+XG4gICAgICA8aDI+WW91IGdvdDogPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj57eyB0aXRsZSB9fTwvc3Bhbj48L2gyPlxuICAgICAgPGltZyB2LWJpbmQ6c3JjPVwiaW1hZ2VcIiBjbGFzcz1cInJlc3VsdC1pbWFnZVwiPlxuICAgICAgPHAgY2xhc3M9XCJwaG90by1jcmVkaXRcIj5Ud2VudHkvMjA8L3A+XG4gICAgICA8cCBjbGFzcz1cImJvZHktdGV4dFwiIHYtaHRtbD1cImNvbnRlbnRcIj48L3A+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5cbi8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgdmFyIHF1aXogPSBuZXcgVnVlKHtcbiAgICBlbDogJyNxdWl6JyxcbiAgICBkYXRhOiB7XG4gICAgICBxdWVzdGlvbnM6IFtcbiAgICAgICAge1wibmFtZVwiOiBcInN0ZWFkeUluY29tZVwiLCBcInRleHRcIjogXCJJIGFtIG9ubHkgbG9va2luZyBmb3Igc3RlYWR5IGluY29tZS5cIn0sXG4gICAgICAgIHtcIm5hbWVcIjogXCJwZW9wbGVQZXJzb25cIiwgXCJ0ZXh0XCI6IFwiSSBjb25zaWRlciBteXNlbGYgYSBwZW9wbGUgcGVyc29uLlwifSxcbiAgICAgICAge1wibmFtZVwiOiBcImRyaXZlXCIsIFwidGV4dFwiOiBcIkkgY2FuIGRyaXZlIGZvciBsb25nIHN0cmV0Y2hlcyBhbmQga2VlcCBteSBmb2N1cy5cIn0sXG4gICAgICAgIHtcIm5hbWVcIjogXCJwaHlzaWNhbFdvcmtcIiwgXCJ0ZXh0XCI6IFwiSSBjYW4gbGlmdCBoZWF2eSBib3hlcywgYXNzZW1ibGUgdGhpbmdzLCBvciBjbGVhbiBhIGhvdXNlLlwifSxcbiAgICAgICAge1wibmFtZVwiOiBcInNraWxsZWRcIiwgXCJ0ZXh0XCI6IFwiSSdtIHNraWxsZWQgaW4gbXVzaWMsIHNwb3J0cywgbWF0aCwgb3IgYW5vdGhlciB0b3BpYywgYW5kIHdvdWxkIGxvdmUgdG8gc2hhcmUgbXkga25vd2xlZGdlLlwifSxcbiAgICAgICAge1wibmFtZVwiOiBcImZpeGluZ1RoaW5nc1wiLCBcInRleHRcIjogXCJXaGVuIHNvbWVvbmUgbmVlZHMgc29tZXRoaW5nIGZpeGVkIGFyb3VuZCB0aGUgaG91c2UsIHRoZXkgY2FsbCBtZS5cIn0sXG4gICAgICAgIHtcIm5hbWVcIjogXCJraWRzXCIsIFwidGV4dFwiOiBcIkkgbGlrZSB3b3JraW5nIHdpdGgga2lkcy5cIn0sXG4gICAgICAgIHtcIm5hbWVcIjogXCJvcmdhbml6ZWRcIiwgXCJ0ZXh0XCI6IFwiSSdtIGhpZ2hseSBvcmdhbml6ZWQuXCJ9LFxuICAgICAgICB7XCJuYW1lXCI6IFwiY29tZm9ydEhvbWVcIiwgXCJ0ZXh0XCI6IFwiSSBwcmVmZXIgdG8gd29yayBmcm9tIHRoZSBjb21mb3J0IG9mIG15IG93biBob21lLlwifSxcbiAgICAgICAge1wibmFtZVwiOiBcImxvdmVzRG9nc1wiLCBcInRleHRcIjogXCJJIGFtIGNvbWZvcnRhYmxlIGhhbmRsaW5nIG11bHRpcGxlIGRvZ3MgYXQgb25lIHRpbWUuXCJ9LFxuICAgICAgICB7XCJuYW1lXCI6IFwicmVndWxhckNsaWVudHNcIiwgXCJ0ZXh0XCI6IFwiSSBwcmVmZXIgcmVndWxhciBjbGllbnRzIEkgY2FuIGRldmVsb3AgcmVsYXRpb25zaGlwcyB3aXRoIHJhdGhlciB0aGFuIG9uZS1zaG90IGRlYWxzLlwifSxcbiAgICAgICAge1wibmFtZVwiOiBcIm1lbmlhbFRhc2tzXCIsIFwidGV4dFwiOiBcIkkgZG9uJ3QgbWluZCBkb2luZyBtZW5pYWwgdGFza3MuXCJ9LFxuICAgICAgICB7XCJuYW1lXCI6IFwic29jaWFsTWVkaWFcIiwgXCJ0ZXh0XCI6IFwiSSBhbSBnb29kIGF0LCBhbmQgZW5qb3kgdXNpbmcsIHNvY2lhbCBtZWRpYS5cIn0sXG4gICAgICAgIHtcIm5hbWVcIjogXCJncm9jZXJ5U2hvcHBlclwiLCBcInRleHRcIjogXCJJIGNhbiBzdGF5IGNhbG0gaW4gYSBidXN5IGdyb2Nlcnkgc3RvcmUuXCJ9LFxuICAgICAgXSxcbiAgICAgIFxuICAgICAgcmVzdWx0OiAnJyxcbiAgICAgIHJ1bm5lclVwOiAnJyxcbiAgICAgIHJ1bm5lclVwMjogJycsXG5cbiAgICAgIHNob3dSaWRlU2hhcmVRdWVzdGlvbjogZmFsc2UsXG4gICAgICBjYXJZZXNObzogJycsXG4gICAgICBzaG93QXNzaXN0YW50UXVlc3Rpb246IGZhbHNlLFxuICAgICAgY29tcHV0ZXJZZXNObzogJycsXG5cbiAgICAgIHNob3dFcnJvcjogJycsXG5cbiAgICAgIHNob3dSaWRlU2hhcmU6ICcnLFxuICAgICAgc2hvd1R1dG9yOiAnJyxcbiAgICAgIHNob3dTaG9wcGVyOiAnJyxcbiAgICAgIHNob3dXYWxrZXI6ICcnLFxuICAgICAgc2hvd0hhbmRsZXI6ICcnLFxuICAgICAgc2hvd0Fzc2lzdGFudDogJydcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAvLyByZXN1bHRzIGdvIGhlcmVcblxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgLy8gZnVuY3Rpb25zIGdvIGhlcmVcbiAgICAgIGNhbGN1bGF0ZVJlc3VsdHM6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcblxuICAgICAgICBsZXQgc2lkZUh1c3RsZXMgPSB7IFxuICAgICAgICAgIHJpZGVTaGFyZTogMCxcbiAgICAgICAgICB0dXRvcjogMCxcbiAgICAgICAgICBncm9jZXJ5U2hvcHBlcjogMCxcbiAgICAgICAgICBkb2dXYWxrZXI6IDAsXG4gICAgICAgICAgdGFza0hhbmRsZXI6IDAsXG4gICAgICAgICAgdmlydHVhbEFzc2lzdGFudDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBxdWVzdGlvbnMgPSB0aGlzLnF1ZXN0aW9ucztcblxuICAgICAgICBpZiAocXVlc3Rpb25zWzBdLmNoZWNrZWQpIHtcbiAgICAgICAgICBzaWRlSHVzdGxlcy5yaWRlU2hhcmUrKztcbiAgICAgICAgICBzaWRlSHVzdGxlcy50dXRvcis9MjtcbiAgICAgICAgICBzaWRlSHVzdGxlcy5ncm9jZXJ5U2hvcHBlcisrO1xuICAgICAgICAgIHNpZGVIdXN0bGVzLmRvZ1dhbGtlcis9MjtcbiAgICAgICAgICBzaWRlSHVzdGxlcy52aXJ0dWFsQXNzaXN0YW50Kz0yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHF1ZXN0aW9uc1sxXS5jaGVja2VkKSB7XG4gICAgICAgICAgc2lkZUh1c3RsZXMucmlkZVNoYXJlKys7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudHV0b3IrPTI7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudmlydHVhbEFzc2lzdGFudCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHF1ZXN0aW9uc1syXS5jaGVja2VkKSB7XG4gICAgICAgICAgc2lkZUh1c3RsZXMucmlkZVNoYXJlKz0yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHF1ZXN0aW9uc1szXS5jaGVja2VkKSB7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudGFza0hhbmRsZXIrPTI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVlc3Rpb25zWzRdLmNoZWNrZWQpIHtcbiAgICAgICAgICBzaWRlSHVzdGxlcy50dXRvcis9MjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaWRlSHVzdGxlcy50dXRvci09MjA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVlc3Rpb25zWzVdLmNoZWNrZWQpIHtcbiAgICAgICAgICBzaWRlSHVzdGxlcy50YXNrSGFuZGxlcis9MjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChxdWVzdGlvbnNbNl0uY2hlY2tlZCkge1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnR1dG9yKz0yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHF1ZXN0aW9uc1s3XS5jaGVja2VkKSB7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudHV0b3IrKztcbiAgICAgICAgICBzaWRlSHVzdGxlcy5ncm9jZXJ5U2hvcHBlcisrO1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnZpcnR1YWxBc3Npc3RhbnQrPTI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVlc3Rpb25zWzhdLmNoZWNrZWQpIHtcbiAgICAgICAgICBzaWRlSHVzdGxlcy50dXRvcisrO1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnZpcnR1YWxBc3Npc3RhbnQrPTI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVlc3Rpb25zWzldLmNoZWNrZWQpIHtcbiAgICAgICAgICBzaWRlSHVzdGxlcy5kb2dXYWxrZXIrPTI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVlc3Rpb25zWzEwXS5jaGVja2VkKSB7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudHV0b3IrPTI7XG4gICAgICAgICAgc2lkZUh1c3RsZXMuZG9nV2Fsa2VyKz0yO1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnRhc2tIYW5kbGVyKys7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudmlydHVhbEFzc2lzdGFudCs9MjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChxdWVzdGlvbnNbMTFdLmNoZWNrZWQpIHtcbiAgICAgICAgICBzaWRlSHVzdGxlcy5yaWRlU2hhcmUrPTI7XG4gICAgICAgICAgc2lkZUh1c3RsZXMuZ3JvY2VyeVNob3BwZXIrPTI7XG4gICAgICAgICAgc2lkZUh1c3RsZXMuZG9nV2Fsa2VyKys7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudGFza0hhbmRsZXIrPTI7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudmlydHVhbEFzc2lzdGFudCs9MjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChxdWVzdGlvbnNbMTJdLmNoZWNrZWQpIHtcbiAgICAgICAgICBzaWRlSHVzdGxlcy52aXJ0dWFsQXNzaXN0YW50Kz0yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHF1ZXN0aW9uc1sxM10uY2hlY2tlZCkge1xuICAgICAgICAgIHNpZGVIdXN0bGVzLmdyb2NlcnlTaG9wcGVyKz0yO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHF1aXpSZXN1bHRzID0gXCJSaWRlLXNoYXJlOiBcIiArIHNpZGVIdXN0bGVzLnJpZGVTaGFyZSArICBcIjsgVHV0b3I6IFwiICsgc2lkZUh1c3RsZXMudHV0b3IgKyBcIjsgR3JvY2VyeSBzaG9wcGVyOiBcIiArIHNpZGVIdXN0bGVzLmdyb2NlcnlTaG9wcGVyICsgXCI7IERvZyBXYWxrZXI6IFwiICsgc2lkZUh1c3RsZXMuZG9nV2Fsa2VyICsgXCI7IFRhc2sgaGFuZGxlcjogXCIgKyBzaWRlSHVzdGxlcy50YXNrSGFuZGxlciArIFwiOyBWaXJ0dWFsIGFzc2lzdGFudDogXCIgKyBzaWRlSHVzdGxlcy52aXJ0dWFsQXNzaXN0YW50O1xuXG4gICAgICAgIGxldCBzb3J0ZWQ7IFxuXG4gICAgICAgIGNvbnNvbGUubG9nKHF1aXpSZXN1bHRzKVxuXG4gICAgICAgIGxldCB2YWx1ZUFycmF5ID0gT2JqZWN0LnZhbHVlcyhzaWRlSHVzdGxlcyk7XG4gICAgICAgIGxldCBzdW0gPSB2YWx1ZUFycmF5LnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApXG5cbiAgICAgICAgaWYgKHN1bSA9PSAtMjApIHtcbiAgICAgICAgICB0aGlzLnNob3dFcnJvciA9ICF0aGlzLnNob3dFcnJvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3J0ZWQgPSBPYmplY3Qua2V5cyhzaWRlSHVzdGxlcylcbiAgICAgICAgICAgICAgICAgICAgICAuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNpZGVIdXN0bGVzW2JdIC0gc2lkZUh1c3RsZXNbYV0gfHwgMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzb3J0ZWQpXG4gICAgICAgICAgdGhpcy5yZXN1bHQgPSBzb3J0ZWRbMF0sXG4gICAgICAgICAgdGhpcy5ydW5uZXJVcCA9IHNvcnRlZFsxXTtcbiAgICAgICAgICB0aGlzLnJ1bm5lclVwMiA9IHNvcnRlZFsyXTtcbiAgICAgICAgICB0aGlzLnNob3dFcnJvciA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucmVzdWx0ID09IFwicmlkZVNoYXJlXCIpIHtcbiAgICAgICAgICB0aGlzLnNob3dSaWRlU2hhcmVRdWVzdGlvbiA9ICF0aGlzLnNob3dSaWRlU2hhcmVRdWVzdGlvbjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc3VsdCA9PSBcInZpcnR1YWxBc3Npc3RhbnRcIikge1xuICAgICAgICAgIHRoaXMuc2hvd0Fzc2lzdGFudFF1ZXN0aW9uID0gIXRoaXMuc2hvd0Fzc2lzdGFudFF1ZXN0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzdWx0ID09IFwidHV0b3JcIikge1xuICAgICAgICAgIHRoaXMuc2hvd1R1dG9yID0gIXRoaXMuc2hvd1R1dG9yO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzdWx0ID09IFwiZ3JvY2VyeVNob3BwZXJcIikge1xuICAgICAgICAgIHRoaXMuc2hvd1Nob3BwZXIgPSAhdGhpcy5zaG93U2hvcHBlcjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc3VsdCA9PSBcImRvZ1dhbGtlclwiKSB7XG4gICAgICAgICAgdGhpcy5zaG93V2Fsa2VyID0gIXRoaXMuc2hvd1dhbGtlcjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc3VsdCA9PSBcInRhc2tIYW5kbGVyXCIpIHtcbiAgICAgICAgICB0aGlzLnNob3dIYW5kbGVyID0gIXRoaXMuc2hvd0hhbmRsZXJcbiAgICAgICAgfVxuXG4gICAgICB9LFxuICAgICAgZmluZEZhbGxiYWNrOiBmdW5jdGlvbiAocmVzdWx0LCBydW5uZXJVcCwgcnVubmVyVXAyKSB7XG5cbiAgICAgICAgICBpZiAocnVubmVyVXAgPT0gXCJyaWRlU2hhcmVcIiB8fCBydW5uZXJVcCA9PSBcInZpcnR1YWxBc3Npc3RhbnRcIikge1xuICAgICAgICAgICAgdGhpcy5zaG93UmlkZVNoYXJlUXVlc3Rpb24gPSAhdGhpcy5zaG93UmlkZVNoYXJlUXVlc3Rpb247XG4gICAgICAgICAgICB0aGlzLnNob3dBc3Npc3RhbnRRdWVzdGlvbiA9ICF0aGlzLnNob3dBc3Npc3RhbnRRdWVzdGlvbjtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhclllc05vID09IFwibm9cIiAmJiB0aGlzLmNvbXB1dGVyWWVzTm8gPT0gXCJub1wiKSB7XG4gICAgICAgICAgICAgIHJlc3VsdD1ydW5uZXJVcDI7XG4gICAgICAgICAgICAgIHRoaXMuaGlkZVF1ZXN0aW9uKCk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBydW5uZXJVcDtcbiAgICAgICAgICAgIHRoaXMuaGlkZVF1ZXN0aW9uKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHJlc3VsdCA9PSBcInR1dG9yXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1R1dG9yID0gIXRoaXMuc2hvd1R1dG9yO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09IFwiZ3JvY2VyeVNob3BwZXJcIikge1xuICAgICAgICAgICAgdGhpcy5zaG93U2hvcHBlciA9ICF0aGlzLnNob3dTaG9wcGVyO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09IFwiZG9nV2Fsa2VyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1dhbGtlciA9ICF0aGlzLnNob3dXYWxrZXI7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gXCJ0YXNrSGFuZGxlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dIYW5kbGVyID0gIXRoaXMuc2hvd0hhbmRsZXJcbiAgICAgICAgICB9IFxuXG4gICAgICB9LFxuICAgICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNob3dSaWRlU2hhcmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93VHV0b3IgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93U2hvcHBlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dXYWxrZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93SGFuZGxlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dBc3Npc3RhbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb21wdXRlclllc05vID0gJyc7XG4gICAgICAgIHRoaXMuY2FyWWVzTm8gPSAnJztcblxuICAgICAgICB0aGlzLmhpZGVRdWVzdGlvbigpO1xuICAgICAgfSxcbiAgICAgIGhpZGVRdWVzdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2hvd1JpZGVTaGFyZVF1ZXN0aW9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd0Fzc2lzdGFudFF1ZXN0aW9uID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgfSxcbiAgICAgIHJlc2V0QWxsQnV0dG9uOiBmdW5jdGlvbigpIHtcblxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuaGlkZVF1ZXN0aW9uKCk7XG5cbiAgICAgICAgZm9yICh2YXIgaT0wO2k8dGhpcy5xdWVzdGlvbnMubGVuZ3RoO2krKykge1xuICAgICAgICAgIGlmICh0aGlzLnF1ZXN0aW9uc1tpXS5jaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG5cbiAgICAgIH1cbiAgICB9XG4gIH0pXG4vLyB9LCAxMDAwKSJdfQ==
