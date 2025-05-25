import { LoginForm } from "@/components/login-form";
import FallingText from "@/components/reactbits/FallingText";

export default function Home() {
  return (
    <>
      <div className="flex min-h-svh w-full flex-col items-center justify-center p-6 md:p-10 bg-muted">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-hero-banner bg-cover bg-center bg-no-repeat -z-10 before:absolute before:inset-0 before:bg-black/70" /> */}
        <div className="w-full max-w-sm md:max-w-3xl relative z-20">
          <LoginForm />
        </div>
<div className="fixed inset-0 z-10 pt-[calc((100vh-515px)/9)] hidden min-[1200px]:flex">
          <FallingText
            text={`Largest Youth Makerspace. Impactful Change. Endless Innovation. That's SDG. `}
            highlightWords={[
              "Makerspace",
              "Change",
              "Innovation",
              "SDG",
              "Change",
              "Challenge",
            ]}
            highlightClass="highlighted"
            trigger="auto"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.3}
            fontSize="2rem"
            mouseConstraintStiffness={0.1}
          />
        </div>
      </div>
      <div className="fixed inset-0 z-5">
        {/* <AuroraBackground>
          <div />
        </AuroraBackground> */}
      </div>
    </>
  );
}
