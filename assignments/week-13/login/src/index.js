import React from 'react';
import ReactDOM from 'react-dom';



class TableHead extends React.Component {
    render() {

        return (
            <table>
                <tr>
                    <th>Login page</th></tr>
           
           
                

            </table>

        );
    }
}
class TableBody extends React.Component {
    render() {
        return (<body><tr>

<th>
<td>email<input type="email" name="email"/></td><br></br>
<td>password<input type="password" name="pass"/></td>
</th><br></br><br></br><br></br>

</tr>
        </body>);
    }

}


class Table extends React.Component
{
    render()
    {
     return(

                    <table className="table-striped">

                        <TableHead />
                        <TableBody />
                    </table>
        
        
        
        

        );

    }
}
class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        {/* <Header /> */}
                        <Table />
                        <TableHead/>
                        <button type="button">submit</button>
                        
                    </div>
                </div>
            </div>
        );



    }
}


ReactDOM.render(<App />, document.getElementById('root'));
