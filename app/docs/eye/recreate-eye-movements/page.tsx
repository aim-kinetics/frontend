import { permanentRedirect } from "next/navigation";

export default function LegacyEyePage() {
  permanentRedirect("/docs/input/visual-input#eye-hand-coordination");
}
