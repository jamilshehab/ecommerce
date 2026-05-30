import Breadcrumb from "../components/common/BreadCrumb";
import Vision from "../components/common/About/Vision";
import Mission from "../components/common/About/Mission";
import Story from "../components/common/About/Story";
import FollowUs from "../components/common/About/FollowUs";

export default function About() {
  return (
    <main>
      <Breadcrumb items={[{ label: "About Us" }]} />
      <Story />
      <Mission />
      <Vision />
      <FollowUs />
    </main>
  );
}
