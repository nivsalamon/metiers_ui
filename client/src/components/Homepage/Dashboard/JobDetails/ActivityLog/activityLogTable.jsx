import React from 'react';
import axios from 'axios';

class ActivityLogTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      reset: true
    }
  }

  componentWillMount() {
    const context = this;
    axios.post('http://localhost:3003/historyLog', {
      job_id: this.props.job_id
    }).then(function(response) {
      context.props.addActivityLog(response.data);
    })
  }


  render () {
    return (
    <div>
      <table className="table activity-log-table">
        <thead>
          <tr>
            {this.props.header.map((field, i) => 
              <td className="table-row-header" key={i}>{field.name}</td>
            )}
            </tr>
        </thead>
        <tbody className="tbody">
        {this.props.activityLogData.map((item, i) => 
        <tr key={i}>
          <td>{item.name}</td>
          <td>{item.timeStamp.split('T')[0]}</td>  
          <td>{item.timeStamp.split('T')[1]}</td>    
        </tr>
        )}
        </tbody>
    </table>
  </div>

    )
  }
}

export default ActivityLogTable;