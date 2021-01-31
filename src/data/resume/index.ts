import { ResumeCategory } from "../../types/resumeCategory";
import education from "./education";
import work from "./work";
import projects from "./projects";
import skills from "./skills";
import extra from "./extracurriculars";

const categories: ResumeCategory[] = [education, work, projects, skills, extra];

export default categories;
