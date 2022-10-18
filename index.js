//  DATA AND TIME ####################################################################################
const getMonth = () => {
  let currentDate = new Date(),
    result = [],
    arr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    Month = currentDate.getMonth();
  result.push(arr[Month]);
  return result;
};

const getDaysOfWeek = () => {
  let currentDate = new Date(),
    result = [],
    arr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    Day = currentDate.getDay() - 1;
  result.push(arr[Day]);
  return result;
};

class Age {
  constructor(input) {
    this.clock = document.getElementById("clock");
    this.time = document.getElementById("time");
    this.para = document.getElementById("par");
    this.input = input;
    this.currentDate = new Date();
    this.Year = this.currentDate.getFullYear();
    this.Date = this.currentDate.getDate();
    this.Month = this.currentDate.getMonth();
    this.Hours = Math.floor(this.currentDate.getHours());
    this.Minutes = this.currentDate.getMinutes();
    this.Seconds = this.currentDate.getSeconds();
  }
  speak(input) {
    let ele = document.createElement("p");
    let tex = document.createTextNode(input);
    ele.appendChild(tex);
    this.time.appendChild(ele);
    // this.par.innerText("Good Evening")
    // console.log(`You are ${this.Year - this.input} years old`);
  }

  Time(line) {
    const zeroPad = (number) => {
      let string = String(number);
      string < 10 ? (string = "0" + string) : string;
      return string;
    };
    this.Hours % 12 === 0
      ? (this.time.innerText = `${zeroPad((this.Hours % 12) + 12)}:${zeroPad(
          this.Minutes
        )} `) //:${zeroPad(this.Seconds)${line}}
      : (this.time.innerText = `${zeroPad(this.Hours % 12)}:${zeroPad(
          this.Minutes
        )} `); //:${zeroPad(this.Seconds)${line}} ;

    // console.log(`${getDaysOfWeek()}-${getMonth()}-${this.Year}`);
    // console.log(`${this.currentDate.toLocaleDateString()}`);
  }
}
let Get2 = new Age(); //Number(prompt("Year")));
// Get2.speak();

class Timer extends Age {
  Run() {
    if (this.Hours == 24 || this.Hours <= 11) {
      Get2.Time();
      Get2.speak("AM");
    } else if (this.Hours === 12 || this.Hours <= 15) {
      Get2.Time();
      Get2.speak("PM");
    } else if (this.Hours > 15 && this.Hours < 20) {
      Get2.Time();
      Get2.speak("PM");
    } else {
      Get2.Time();
      Get2.speak("PM");
    }
  }
}
let runTimer = new Timer();
runTimer.Run();
setInterval(() => {
  window.location.reload(1);
}, 5000);
