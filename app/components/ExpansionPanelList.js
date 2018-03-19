import React from 'react';
import ExpansionPanel from "./ExpansionPanel";

class ExpansionPanelList extends React.Component {
    props: Props;

    render() {
        return (
            <div>
                { this.props.list.map(pane => <ExpansionPanel />)}
            </div>
        );
    }
}

export default ExpansionPanels;