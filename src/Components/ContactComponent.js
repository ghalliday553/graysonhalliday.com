import React from 'react';

class ProjectComponent extends React.Component {
    test = 0
    render() {
        return (
            <div>
                <div className="ContactText">
                    <a href="mailto: graysonhalliday@gmail.com">graysonhalliday@gmail.com</a>
                    <p>778-700-4951</p>
                </div>
                    <hr></hr>
                <div className="ContactText">
                    <a href="https://github.com/ghalliday553">GitHub</a>
                </div>
            </div>
        )
    }
}

export default ProjectComponent;