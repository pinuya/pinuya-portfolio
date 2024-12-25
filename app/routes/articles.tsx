import { motion, useScroll } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { DecoderText } from "~/components/decoder-text";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Skeleton } from "~/components/ui/skeleton";

export default function Articles() {
  const defaultAnimation = (duration: number) => {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration },
    };
  };

  const textAnimation = defaultAnimation(2);

  return (
    <div className="h-[87vh] flex items-center justify-center">
      <div className="flex flex-col sm:flex-row sm:space-x-4 w-full max-w-7xl">
        <div className="flex-1 px-4 sm:px-0">
          <motion.div {...textAnimation} className="space-y-2 mb-4">
            <h1 className="self-start text-xl font-bold text-foreground tracking-widest uppercase">
              <DecoderText text={"Últimos Artigos"} delay={500} />
            </h1>
          </motion.div>

          <Separator />

          <div className="flex flex-col space-y-3 mt-4">
            <div className="text-muted-foreground">Em breve</div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full sm:w-[450px]" />
              <Skeleton className="h-16 w-full sm:w-[400px]" />
              <Button variant={"ghost"} className="text-muted-foreground">
                <ChevronRight /> Leia Mais
              </Button>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden w-full sm:w-[800px] sm:h-[700px] h-[400px] cursor-pointer mt-6 sm:mt-0">
          <img
            src="/assets/code.gif"
            alt="gif"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex flex-col items-center justify-end ml-4 gap-3">
            <span className="text-sm text-purple-500 self-start">data</span>
            <h1 className="text-white text-3xl sm:text-5xl font-bold text-center self-start">
              titulo
            </h1>
            <p className="text-gray-300 line-clamp-2 max-w-[600px] sm:max-w-[700px] self-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              quas debitis commodi sint. Vitae eaque eius nostrum, quo ullam
              aperiam eos beatae saepe? Doloremque ratione nemo, quae eveniet
              sunt asperiores!
            </p>
            <Button variant={"ghost"} className="text-purple-500 self-start">
              <ChevronRight /> Leia Mais
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
