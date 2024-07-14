import { Component } from "react";
import Notifications from "../Notifications";
import ProjectList from "../../projects/ProjectList";
import { connect } from "react-redux";
import { DashboardPropsType } from "./Dashboard.types";
import { Project } from "../../../store/reducers/projectReducer";

class Dashboard extends Component<DashboardPropsType> {
  render() {
    const { projects } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any): { projects: Project[] } => {
  return {
    projects: state.project.projects,
  };
};

export default connect(mapStateToProps)(Dashboard);
