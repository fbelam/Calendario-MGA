const calendar = document.querySelector(".calendar");
    date = document.querySelector(".date");
    daysContainer = document.querySelector(".days");
    prev = document.querySelector(".prev");
    next = document.querySelector(".next"),
    todayBtn = document.querySelector(".today-btn"),
    gotoBtn = document.querySelector(".goto-btn"),
    dateInput = document.querySelector(".date-input");

let today = new Date();
let activeDay;
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
    const nextDays = 7 - lastDay.getDay() - 1;

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
            days += `<div class="day next-date ">${j}</div>`;
        }

    daysContainer.innerHTML = days;     
}



function prevMonth() {
    month --;
    if (month <0 ) {
        month = 11;
        year --;
    }
    initCalendar();
}

//next month

function nextMonth() {
    month ++;
    if (month>11) {
        month = 0;
        year ++;
}
    initCalendar();
}


prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

initCalendar();

todayBtn.addEventListener("click", () =>{
    today = new Date();
    month = today.getMonth();
    year = today.getFullYear();
    initCalendar();
})

dateInput.addEventListener("input", (e) => {
    //permitir apenas números remover qualquer outra coisa
    dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
    if (dateInput.value.length === 2) {
    //adicione uma barra de dois números inseridos
    dateInput.value += "/";
    }
    if (dateInput.value.length > 7) {
        //não permitir mais de 7 caracteres
        dateInput.value = dateInput.value.slice(0, 7);
    }
})