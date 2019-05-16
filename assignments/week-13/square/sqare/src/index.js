import React from 'react';
import ReactDOM from 'react-dom';

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.number}</td>
                <td> {this.props.number * this.props.number}</td>

            </tr>);
    }
}



class TableBody extends React.Component {
    render() {
        let tableRow = [];
        for (var i = 1; i <= 1000; i++) {
            tableRow.push(<TableRow number={i} />)
        }
        return (<body>
            {tableRow}
        </body>);
    }

}




class Table extends React.Component {
    render() {
        return (
            <table className="table-striped">
                <TableHead />
                <TableBody />
            </table>
        );
    }
}



class TableHead extends React.Component {
    render() {

        return (
            <table>
                <tr>
                    <th>number</th>
                    <th>square</th>
                </tr>
            </table>

        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <h2>number and square </h2>

        );
    }
}





class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <Header />
                        <Table />
                        <TableHead/>
                        <button type="button" class="btn btn-primary">Primary</button>

                    </div>
                </div>
            </div>
        );



    }
}


ReactDOM.render(<App />, document.getElementById('root'));







