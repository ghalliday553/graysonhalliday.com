import React from 'react';

class ProjectDescription extends React.Component {
    render() {
        return (
            <div>
                <p class="ProjectFunctionalityTitle">Core Functionality:</p>
                <div class="ProjectFunctionalityList">
                    <ul>
                    {this.props.projectDescriptionList.map((text, ind) =>
                        <li key={ind}>{text}</li>
                    )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ProjectDescription;