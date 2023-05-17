import Container from "@/ui/components/container/Container";
import Typography from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import { RiPlayCircleLine } from "react-icons/ri";

const CurrentCourseCtaView = () => {
  return (
    <div className="bg-gray-300">
      <Container className="flex flex-col justify-center items-center py-24 space-y-5 text-center">
        <div className="flex flex-col items-center justify-center pb-20 space-y-2">
          <Typography
            variant="h2"
            component="h2"
            weight="medium"
            className="mb-2.5"
          >
            Formations React.js gratuite
          </Typography>
          <Typography
            variant="lead"
            weight="medium"
            component="h3"
            className="mb-5 "
          >
            Apprends à coder l’app des singes codeurs{" "}
          </Typography>
          <Typography
            variant="caption3"
            component="p"
            className="mb-16"
            theme="gray"
          >
            Si tu veux un CV plus sexy que ton ex, suis cette formation complète
            !
          </Typography>
        </div>
        <a href="/#" target="_blank">
          <div className="w-[1000px]  relative bg-gray-400 rounded h-[626px]">
            <div className=" flex flex-col items-center justify-center gap-2 relative h-full bg-gray z-10 rounded opacity-0 hover:opacity-95 text-white animate ">
              <RiPlayCircleLine size={42} />
              <Typography
                variant="caption2"
                theme="white"
                className="uppercase"
                weight="medium"
              >
                Lire la formation
              </Typography>
            </div>
            <Image
              src="/assets/images/formation.jpg"
              alt="Formation coders Monkeys"
              fill
              className="object-cover object-center rounded"
            />
          </div>
        </a>
      </Container>
    </div>
  );
};

export default CurrentCourseCtaView;
