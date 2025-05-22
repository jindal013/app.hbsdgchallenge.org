import { LoginForm } from "@/components/login-form";

export default function Home() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-hero-banner bg-cover bg-center bg-no-repeat -z-10 before:absolute before:inset-0 before:bg-black/70" /> */}
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
