import { CalculatorModel } from "./model.js";
import { CalculatorView } from "./view.js";

const model = new CalculatorModel();
const view = new CalculatorView();

view.onSumClick((a, b) => {
  const result = model.sum(a, b);
  view.displayResult(result);
});
