import React,{Component} from 'react'
import {Card, CardImg,CardText,CardBody, CardTitle} from 'reactstrap'

class DishDetail extends Component {

    constructor(props) {
        super(props)
    }

    renderComments = (comments) => {
      if ( comments !== null ) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>--{comment.author},{comment.date}</p>
                            </li>
                        )   
                    })}
                </ul> 
            </div>
          )
      } else {
          <div></div>
      }
      
    };

    renderDish = (dish) => {
        if( dish !== null ) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" object src={dish.image} alt={dish.image}/>
                        <CardBody>
                            <CardTitle >{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }  
    }
  
    render() {

        return(
            <div className='row'>
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish.comments)}             
            </div>
        )
    }
}

export default DishDetail;