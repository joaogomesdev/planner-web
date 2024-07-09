import { MapPin, Calendar, ArrowRight } from "lucide-react";
export function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">
          Convide seus amigos e planeje sua próxima viagem!
        </p>

        <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="z-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Para onde vais?"
              className="bg-transparent text-lg placeholder-zinc-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="z-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Quando?"
              className="bg-transparent text-lg placeholder-zinc-400"
            />
          </div>

          <div className="w-px h-6 bg-zinc-800"></div>

          <button className="bg-lime-300 rounded-lg py-2 px-5 text-lime-950 font-medium flex items-center gap-2 hover:bg-lime-400">
            Continue
            <ArrowRight className="size-5 text-lime-950" />
          </button>
        </div>
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}
