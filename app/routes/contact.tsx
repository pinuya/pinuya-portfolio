import { SendHorizontal } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function Contact() {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-lg font-bold">Diga oi</h1>

      <div className="gap-4 flex flex-col">
        <Input type="email" placeholder="Seu e-mail" />
        <Input type="text" placeholder="Mensagem" />
      </div>

      <Button className="gap-2">
        <SendHorizontal /> Envie sua mensagem
      </Button>
    </div>
  );
}
