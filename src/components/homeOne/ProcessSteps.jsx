import React from 'react'
import Container from "../common/Container";
import Responsive from "../common/Responsive";
import { prcessStepsArr } from "../helper/processStepsArrObj";



const ProcessSteps = () => {
  return (
    <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-primary">
      <Container size={"lg"}>
        <div>
             <h2 className="headingTwo text-center max-w-[944px] font-bold text-bg-secondaryTwo mx-auto">
            3 Simple Steps to Accelerate Your Business Growth
          </h2>
              {/* Tab List */}
          <div className="py-[30px] md:py-[40px] lg:py-[60px]">
            <Responsive.Flex as="ul" gap="5px">
              {prcessStepsArr.map((step) => {
                return (
                  <li
                    key={step.id}
                    className={`py-[12px] md:py-[15px] lg:py-[19px] text-bg-secondaryTwo text-center rounded-[6px] flex-1 border border-[#ffffff1b] hover:bg-secondary hover:border-transparent transition duration-400 ease-in-out text-xs sm:text-sm lg:text-base cursor-pointer  ${showStep === step.stepLabel ?  " bg-secondary" :""} `}
                    onClick={() => setShowStep(step.stepLabel)}
                  >
                    {step.title}
                  </li>
                );
              })}
            </Responsive.Flex>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProcessSteps