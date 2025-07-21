export class CalculatorView {
  num1Input: HTMLInputElement;
  num2Input: HTMLInputElement;
  sumButton: HTMLButtonElement;
  resultText: HTMLParagraphElement;

  constructor() {
    this.num1Input = document.getElementById("num1") as HTMLInputElement;
    this.num2Input = document.getElementById("num2") as HTMLInputElement;
    this.sumButton = document.getElementById("sumBtn") as HTMLButtonElement;
    this.resultText = document.getElementById("result") as HTMLParagraphElement;
  }

  onSumClick(handler: (a: number, b: number) => void): void {
    this.sumButton.addEventListener("click", () => {
      const a = Number(this.num1Input.value);
      const b = Number(this.num2Input.value);
      handler(a, b);
    });
  }

  displayResult(value: number): void {
    this.resultText.textContent = `Resultado: ${value}`;
  }
}
