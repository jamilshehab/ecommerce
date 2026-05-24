import Breadcrumb from "../components/common/BreadCrumb";
import Vision from "../components/common/About/Vision";
import Mission from "../components/common/About/Mission";
import Story from "../components/common/About/Story";

export default function About() {
  return (
    <main>
      <Breadcrumb items={[{ label: "About Us" }]} />
      <Mission />
      <Vision />
      <Story />
    </main>
  );
}
