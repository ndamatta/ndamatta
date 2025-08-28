import CardContainer from "../components/CardContainer";
import Job from "../components/Job";
import Education from "../components/Education";
import jobsData from "@/data/JobData.json";
import educationData from "@/data/EducationData.json";

export default function Career() {
  return (
    <CardContainer>
      <section className="flex-1 px-6 md:px-16 py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-3xl md:text-3xl font-bevan text-slate-800 mb-4">
            Career
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-lato text-slate-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            architecto, quaerat explicabo dolore quas velit repudiandae. Quidem
            sequi sed ab at non alias blanditiis, quasi esse fuga vel recusandae
            illo!
          </p>
        </div>

        {/* Jobs */}
        <div>
          <h2 className="text-3xl sm:text-3xl md:text-3xl font-bevan text-center mb-8 text-slate-800">
            Job Experiences
          </h2>

          <div className="relative pl-6 border-l-2 border-indigo-900">
            {jobsData.map((job, idx) => (
              <Job key={idx} {...job} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl sm:text-3xl md:text-3xl font-bevan text-center mb-8 text-slate-800">
            Education
          </h2>

          <div className="relative pl-6 border-l-2 border-indigo-900">
            {educationData.map((education, idx) => (
              <Education key={idx} {...education} />
            ))}
          </div>
        </div>
      </section>
    </CardContainer>
  );
}
