import type { Metadata } from "next";
import Job from "../components/Job";
import Education from "../components/Education";
import jobsData from "@/data/JobData.json";
import educationData from "@/data/EducationData.json";

export const metadata: Metadata = {
  title: "Career - Natanael da Matta",
  description:
    "Work experience and education history of Natanael da Matta, Full-Stack Developer.",
};

export default function Career() {
  return (
<section className="py-8 space-y-12 w-full">
        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bevan text-slate-800 mb-4">
            Career
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-lato leading-relaxed mx-auto text-slate-700">
            I've worked for different companies, <span className="font-semibold text-slate-900">both in person and remotely</span>, with teams around the world. I enjoy taking on new challenges and learning new technologies. 
          </p>
          <p className="text-base sm:text-lg md:text-xl font-lato leading-relaxed mx-auto text-slate-700">
            Here you'll find a <span className="font-semibold text-slate-900">timeline</span> of where I've worked.
          </p>

        </div>

        {/* Jobs */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bevan text-center mb-8 text-slate-800">
            Job Experiences
          </h2>

          <div className="relative pl-3 border-l-2 border-indigo-900">
            {jobsData.map((job, idx) => (
              <Job key={idx} {...job} />
            ))}
          </div>
        </div>

        <hr className="border-slate-300" />

        <div>
          <h2 className="text-2xl md:text-3xl font-bevan text-center mb-8 text-slate-800">
            Education
          </h2>

          <div className="relative pl-3 border-l-2 border-indigo-900">
            {educationData.map((education, idx) => (
              <Education key={idx} {...education} />
            ))}
          </div>
        </div>
      </section>
  );
}
