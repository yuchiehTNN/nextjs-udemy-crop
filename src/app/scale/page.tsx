import Hero from "@/components/hero";
import scaleImg from "/public/scale.jpg";

const ScalePage = () => {
  return (
    <Hero
      title="Scale your app to infinity and beyond!"
      imgData={scaleImg}
      imgAlt="steel factory"
    />
  );
};

export default ScalePage;
