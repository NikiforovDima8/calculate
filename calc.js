const display = document.querySelector(".display");
const btns = document.querySelectorAll(".btn-1");
const btnLog1 = document.querySelectorAll(".js-btn");


btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    let iText = e.target.textContent;
    if (iText === "x") {
      iText = "*";
    }
    if (iText === "÷") {
      iText = "/";
    }
    if (iText === "AC") {
      display.value = "";
    }
    if (iText === "C") {
      display.value = display.value.slice(0, -1);
    }
    if (iText !== "C" && iText !== "AC" && iText !== "=") {
      display.value += iText;
    }
    if (iText === "=") {
      display.value = eval(display.value);
    }
    console.log(iText);
  });
});



btnLog1.forEach((item) => {
  item.addEventListener("click", (e) => {
    let iText = e.target.textContent
    if (iText === "sin") {
      sin();
    }
    if (iText === "cos") {
      cos();
    }
    if (iText === "tan") {
      tan();
    }
    if (iText === "x²") {
      pow();
    }
    if (iText === "√") {
        sqrt();
      }
  });
});

const sin = () => {
   display.value = console.log(Math.sin((display.value)));
     console.log(typeof display.value)
    };

   sin()
   
    const cos = () => {
      display.value = Math.cos(display.value);
    };
    const tan = () => {
      display.value = Math.cos(display.value);
    };
    const pow = () => {
      display.value = Math.pow(display.value, 2);
    };
    const sqrt = () => {
      display.value = Math.sqrt(display.value, 2);
    };

console.log(btnLog1)


const aa=Math.sin('0')

console.log(aa)

