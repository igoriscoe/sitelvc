import Hero from "@/components/sections/Hero";
import CourseOverview from "@/components/sections/CourseOverview";
import CoursePillars from "@/components/sections/CoursePillars";
import TheoryAndPractice from "@/components/sections/TheoryAndPractice";
import InstructorPreview from "@/components/sections/InstructorPreview";
import NextEditionSection from "@/components/sections/NextEditionSection";
import FAQPreview from "@/components/sections/FAQPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CourseOverview />
      <CoursePillars />
      <TheoryAndPractice />
      <InstructorPreview />
      <NextEditionSection />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
