import Mantra from "../Mantra";
import { usePageNavigation } from "../Layout/Navigation";
import "./Page.css";

export default function SupremeCommand() {
  usePageNavigation({ prev: "guru-puja", next: "svadhyaya" });

  return <Mantra headingKey="page08.title" linesKey="page08.mantra" />;
}
