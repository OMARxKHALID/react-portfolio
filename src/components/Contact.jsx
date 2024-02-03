import React from "react";
import Container from "./Container";
import { FadeIn } from "./FadeIn";
import { ContactIcon } from "./Icons";
import Socials from "./Socials";

function Contact() {
  return (
    <Container id="contact">
      <FadeIn>
        <div className="grid gap-x-2 gap-y-2 grid-cols-[1fr_0.7fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">
          <div className="flex items-center w-full max-w-[746px] flex-col items-start gap-x-8 gap-y-8 bg-[#131315] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
            <ContactIcon className="w-[112px] h-[112px] flex-[0_0_auto]" />
            <h1>
              Contact Us
            </h1>

          </div>
          <div className="flex flex-col justify-between items-stretch gap-x-8 gap-y-8 bg-[#131315] text-center p-12 rounded-3xl max-md:p-8">
            <div className="flex flex-col justify-center items-center mb-8 gap-3 max-md:mb-4">
              <h3 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
                Have a project in mind?
              </h3>
            </div>
            <a
              href="mailto:mirxaumar1212@gmail.com"
              className="min-h-[96px] bg-[#ff5e1a] transition-[background-color] duration-300 ease-[ease-out] text-[40px] leading-[48px] font-medium text-center tracking-[-0.01em] px-8 py-6 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-white"
            >
               contact me {" "}
               <span className=" animate-pulse">👋</span> 

            </a>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <Socials />
      </FadeIn>
    </Container>
  );
}

export default Contact;
