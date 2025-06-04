import "./App.css";
import { useState } from "react";
import { Select, Option } from "./components/ui/select";

const plans = [
  {
    name: "Basic",
    price: 16,
    benefits: [
      "Access of any 3 app",
      "Up to 10 artboards",
      "Up to 5 fonts and graphics",
      "Call forwarding",
      "5 TB cloud storage",
    ],
  },
  {
    name: "Professional",
    price: 24,
    benefits: [
      "Access of any 10 app",
      "Up to 30 artboards",
      "Up to 100 fonts and graphics",
      "Call forwarding and scheduling",
      "15 TB cloud storage",
    ],
  },
  {
    name: "Enterprise",
    price: 40,
    benefits: [
      "Access of all apps",
      "Unlimited artboards",
      "Unlimited fonts and graphics",
      "Call forwarding and scheduling",
      "35 TB cloud storage",
    ],
  },
];

//Descomente o componente <Option/> para ver o erro no browser

function App() {
  const [selected, setSelected] = useState(1);

  return (
    <>
      {/* <Option optionValue={0}>Option fora do Select</Option> */}

      <Select value={selected} onOptionChange={setSelected}>
        {plans.map((plan, index) => (
          <Option
            key={index}
            optionValue={index}
            className="flex-1 flex flex-col p-6 gap-4 rounded-2xl bg-neutral-200 text-start border max-w-2xs"
          >
            <div className="text-neutral-800">
              <p className="font-medium text-lg">{plan.name}</p>
              <p className="font-medium text-3xl">${plan.price}</p>
            </div>
            <div className="bg-border w-full shrink-0 h-px bg-neutral-300 rounded-full"></div>
            <div className="text-neutral-600 flex flex-col gap-2 text-base">
              {plan.benefits.map((benefit, index) => (
                <p key={index}>{benefit}</p>
              ))}
            </div>
            <div className="bg-border w-full shrink-0 h-px bg-neutral-300 rounded-full"></div>
            <div>
              <button className="w-full rounded-lg border border-transparent px-5 py-2 text-base cursor-pointer bg-indigo-600 text-neutral-200">
                Choose {plan.name}
              </button>
            </div>
          </Option>
        ))}
      </Select>
    </>
  );
}

export default App;
