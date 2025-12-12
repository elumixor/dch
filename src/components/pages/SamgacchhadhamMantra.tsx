import Mantra from "../Mantra";
import { usePageNavigation } from "../Layout/Navigation";
import "./Page.css";

export default function SamgacchhadhamMantra() {
  usePageNavigation({ prev: "kirtan", next: "meditation" });

  return <Mantra headingKey="page03.title" linesKey="page03.mantra" meaningKey="page03.meaning" />;
}
