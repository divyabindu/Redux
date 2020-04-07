import React from 'react';
import {connect} from 'react-redux';

class EmployeeList  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props.data)
        return ( 
            <>
             <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">age</th>
                    <th scope="col">gender</th>
                    <th scope="col">email</th>
                    <th scope="col">phoneNo</th>
                    </tr>
                </thead>
  <tbody>
      {
          this.props.data && this.props.data.map((data, key)=>{
              return (
                  <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.age}</td>
                      <td>{data.gender}</td>
                      <td>{data.email}</td>
                      <td>{data.phoneNo}</td>
                  </tr>
              )
          })
      }
  </tbody>
</table>
            </>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.credentials.data
    }
}
 
export default connect(mapStateToProps)(EmployeeList);