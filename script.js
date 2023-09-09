const calendar = document.querySelector(".calendar");
    date = document.querySelector(".date");
    daysContainer = document.querySelector(".days");
    prev = document.querySelector(".prev");
    next = document.querySelector(".next");

let today = new Date();
let activeDay;
let day = today.getDay();
let month = today.getMonth();
let year = today.getFullYear();

const months = [
    "Janeiro",
    "Fevereiro",
    "Marco",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];




//funcao pra add dias 

function initCalendar() {
 //para obter os dias do mês anterior e do mês atual, todos os dias e os dias restantes do próximo mês
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 1+lastDay.getDay();

   console.log(nextDays)
//atualizar data no topo do calendário

date.innerHTML = months[month] + " " + year;


//add os dias no dom

     let days = "";

     //dias do mes anterior

     for (let x = day; x > 0; x--) {
         days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
       }

         //dias do mes atual
         for(let i = 1; i <= lastDate; i++) {
            //se o dia for hoje add a class Today
             if(
             i === new Date().getDate()&& 
             year === new Date().getFullYear() && 
             month === new Date().getMonth()
             ) 
             {
            days += `<div class="day today">${i}</div>`;
             }
             // add o os dias restantes
             else{
                days += `<div class="day" >${i}</div>`;
            }
         }

        //dias do proximo mes 

        for (let j = 1; j <= nextDays; j++) {
            days += `<div class="day next-date">${j}</div>`;
        }

    daysContainer.innerHTML = days;     
}


initCalendar();