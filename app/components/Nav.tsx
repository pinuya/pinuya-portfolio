import { ModeToggle } from "~/components/mode-togle";

export default function Nav() {
  return (
    <header className="px-4 lg:px-6 h-14 flex self-end">
      <div className="flex items-center justify-center">
        <ModeToggle />
      </div>
    </header>
  );
}
