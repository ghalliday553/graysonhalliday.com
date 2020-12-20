import React from 'react';

class ProjectOverview extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.projectOverviewText.map((text, ind) =>
                        <p className="ProjectOverview" key={ind}>{text}</p>
                )}
            </div>
        )
    }
}

export default ProjectOverview;