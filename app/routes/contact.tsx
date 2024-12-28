// import { SendHorizontal } from "lucide-react";
// import { DecoderText } from "~/components/decoder-text";
// import { Button } from "~/components/ui/button";
// import { Input } from "~/components/ui/input";

// export default function Contact() {
//   return (
//     <div className="h-screen flex items-center justify-center flex-col gap-4">
//       <h1 className="text-2xl text-foreground tracking-widest font-semibold">
//         <DecoderText text={"Diga olá"} delay={500} />
//       </h1>

//       <div className="gap-4 flex flex-col">
//         <Input type="email" placeholder="Seu e-mail" />
//         <Input type="text" placeholder="Mensagem" />
//       </div>

//       <Button className="bg-purple-400 gap-2">
//         <SendHorizontal /> Envie sua mensagem
//       </Button>
//     </div>
//   );
// }

export default function Contact() {
  return (
    <div className="h-[87vh] flex flex-col justify-center items-center gap-4">
      <img src="/assets/anime-eto.gif" alt="gif" width="300" height="300" />
      <h1 className="text-2xl font-bold">Em breve...</h1>
      <span>Página em desenvolvimento</span>
    </div>
  );
}
