export class CalculatorView {
    constructor() {
        this.num1Input = document.getElementById("num1");
        this.num2Input = document.getElementById("num2");
        this.sumButton = document.getElementById("sumBtn");
        this.resultText = document.getElementById("result");
    }
    onSumClick(handler) {
        this.sumButton.addEventListener("click", () => {
            const a = Number(this.num1Input.value);
            const b = Number(this.num2Input.value);
            handler(a, b);
        });
    }
    displayResult(value) {
        this.resultText.textContent = `Resultado: ${value}`;
    }
}
