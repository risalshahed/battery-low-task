import { createContext, useState } from "react";
import MultiStepForm from "../components/MultiStepForm";

export const multiStepContext = createContext();

export default function StepContext() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  function submitData(e) {
    e.preventDefault();
    setFinalData(prevFinalData => [...prevFinalData, userData]);
    setUserData('');
    setStep(1);
  }

  return (
    <multiStepContext.Provider value={{ step, setStep, userData, setUserData, finalData, setFinalData, submitData }}>
      <MultiStepForm />
    </multiStepContext.Provider>
  )
}