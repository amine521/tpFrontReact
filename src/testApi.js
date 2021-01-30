import React from 'react';


class TestApi extends React.Component{

    urlin ="http://localhost:8080/";


        state = {
            response : [],
            name : "\"default\"",
            r :"",
            initialMessage :""
    }

    url ="http://localhost:8080/greeting/"+this.state.name;




    componentDidMount() {
        fetch(this.urlin).then(res => {console.log(res);
            res.text()
                .then(res2 => this.setState({ initialMessage : res2}))
        })


    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log('submitted');
            this.url = "http://localhost:8080/greeting/"+this.state.name+"";
            fetch(this.url).then(res => res.text())
                .then(res2 => {
                    console.log(typeof res2);
                    console.log(res2);
                    this.setState({r : res2})
                })
    }

    handleNameChange = (e) =>{
        this.setState({name : e.target.value})
    }

    render(){
        return(
            <div >


                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                      <input  className="form-control" type="text"  placeholder="saisir votre nom" onChange={this.handleNameChange}/>
                         <p>le nom à envoyer au serveur : {" "+this.state.name}</p>
                    <button  className="form-control" className="btn-primary" >envoyer</button>
                    </div>
                </form>

                <p>resultat from server:

                    {this.state.r}

                </p>
            </div>
        );

    }

}

export default TestApi;
