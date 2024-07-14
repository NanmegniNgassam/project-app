import { useParams } from "react-router-dom";

const ProjectDetails = (props: unknown) => {
  const { id } = useParams();

  return (
    <div>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              sunt voluptatem sit repellat. Illum aliquid repudiandae commodi,
              quod ad minus porro possimus nostrum quidem veniam ab eum,
              exercitationem deserunt hic.
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by the Net Ninja</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
