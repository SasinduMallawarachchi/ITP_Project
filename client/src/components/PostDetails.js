import React,{Component} from 'react';
import axios from 'axios';
import Logo from './logo.png';

export default class PostDetails extends Component {
  
  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });

        console.log(this.state.post);

      }
    });
  }

    render() {
     


      const {topic,description,postCategory,availability,price,image} = this.state.post;

      return (

        <div>



<nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
  
              <a className="navbar-brand" href="/" style={{color:"green"}}><img src={Logo} style={{width:'200px', height:'90px', marginLeft:'30px'}}></img></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex">
                        <input id="searchNav" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}/>
                    </form>
                    
                </div>

              </div>
          </nav>





        

        <div className="divPossionPostDetails" id="displayform">
        <div style={{marginTop:'10px'}}>
        <h2 style={{marginBottom:'30px', color:'black', fontSize:'50px'}}>{topic}</h2>
              


    <dl className="row" style={{marginLeft:'25%'}}>
        
        <dt className="col-sm-3">Description</dt>
        <dd className="col-sm-9">{description}</dd>

        <dt className="col-sm-3">Post Category</dt>
        <dd className="col-sm-9">{postCategory}</dd>

        <dt className="col-sm-3">Post Availability</dt>
        <dd className="col-sm-9">{availability}</dd>

        <dt className="col-sm-3">Post price</dt>
        <dd className="col-sm-9">{price}</dd>

    </dl>
    </div>

    <center>
        <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" style={{ width: '40%', height: '40%' }} src={image}/>
        </div>
    </center>

    
    </div>
        
    <button className="continue" type="button"><a href="/" style={{textDecoration:'none',color:'white'}}>CONTINUE</a></button>
  </div>
      )
    }
  }