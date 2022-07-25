import React from 'react';
import { Link } from 'gatsby';

const ActiviteItem = ({ activite }) => {

const {title, slug} = activite.node

return(

    <Link to = {`/activites/${slug}`}><div>{title}</div></Link> 

)

}



export default ActiviteItem