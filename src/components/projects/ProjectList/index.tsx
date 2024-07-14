import ProjectSummary from "../ProjectSummary";
import { ProjectListProps } from "./ProjectList.types";

const ProjectList = (props: ProjectListProps) => {
  const { projects } = props;
  return (
    <div className="project-list section">
      {projects &&
        projects.map((project) => {
          return <ProjectSummary project={project} key={project.id} />;
        })}
    </div>
  );
};

export default ProjectList;
