import React from 'react'

export class Step {
  stepName: string = '';
  stepContent: React.ReactNode = <></>;

  constructor(stepName: string, stepContent: React.ReactNode) {
    this.stepName = stepName;
    this.stepContent = stepContent;
  }
}

export interface StepperProps {
  layout: "vertical" | "horizontal",
  steps: Step[],
  currentStep: number;
}

export default function Stepper({ ...props }: StepperProps) {
  return (
    <div className="w-full p-4 flex justify-start">
      <div className={`flex w-full relative ${props.layout == 'vertical' ? 'flex-col' : 'flex-row'}`}>
        <div className='z-0 absolute left-[18px] border-l-4 border-primary h-full'>&nbsp;</div>
        {
          props.steps.map((step, index) => {
            return (
              <div className="flex w-full flex-col" key={step.stepName}>
                <div className="z-10 flex min-w-max my-10 items-center" key={step.stepName}>
                  <div className='w-10 aspect-square flex justify-center items-center text-xl font-bold rounded-full bg-primary text-white' key={step.stepName}>
                    {index + 1}
                  </div>
                  {/* <div className='text-lg text-primary font-medium px-4'>
                    {
                      step.stepName
                    }
                  </div> */}
                </div>

                <div className='pl-20 min-w-full'>
                  <div className='rounded-xl p-4 w-full shadow-[0_0px_7px_rgba(0,0,0,0.4)]'>
                    {
                      step.stepContent
                    }
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}
