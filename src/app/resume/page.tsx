import type { Metadata } from "next";
import { Resume } from "@/components/Resume";

export const metadata: Metadata = {
  title: "Resume",
  description: "View or download my resume.",
};

export default function ResumePage() {
  return <Resume />;
}
