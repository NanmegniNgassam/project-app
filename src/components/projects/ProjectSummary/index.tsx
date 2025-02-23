import { ProjectSummaryProps } from "./ProjectSummary.types";

const ProjectSummary = (props: ProjectSummaryProps) => {
  const { project } = props;
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by the Net Ninja</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
