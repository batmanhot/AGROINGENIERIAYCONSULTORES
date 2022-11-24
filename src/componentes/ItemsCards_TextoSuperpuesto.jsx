import React from 'react';

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function ItemsCards_TextoSuperpuesto() {
    return (
     <>   
       <div>
         <div class="card-group">

         <div class="card text-white p-2">
            <img src="https://cdn.pixabay.com/photo/2018/06/21/13/57/clouds-3488632__340.jpg" with='50%' height='100%' class="card-img" alt="Card image cap"/>
            <div class="card-img-overlay">
                <h5 class="card-title">SERVICIO 1</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>
            </div>
         </div>
 
         <div class="card text-white p-2">
            <img src="https://cdn.pixabay.com/photo/2018/06/21/13/57/clouds-3488632__340.jpg" with='50%' height='100%' class="card-img" alt="Card image cap"/>
            <div class="card-img-overlay">
                <h5 class="card-title">SERVICIO 2 </h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>
            </div>
         </div>
            
        {/* <div class="card">
             <img class="card-img-top" src="https://cdn.pixabay.com/photo/2018/06/21/13/57/clouds-3488632__340.jpg" with='50%' height='50%' alt="Card image cap"/>
             <Card.ImgOverlay>
             <div class="card-body">
               <h5 class="card-title">Titulo del Servicio 2 </h5>
               <p class="card-text">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora aut voluptas quidem magni labore non eaque esse ut ipsum repudiandae assumenda nobis veritatis eveniet, mollitia asperiores iusto, voluptate nesciunt alias.
               </p>              
 
               <Button variant="primary">Mas detalles</Button>                  
             </div>    
             </Card.ImgOverlay>
           </div>
           
 
           <div class="card">
 
             <img class="card-img-top" src="https://cdn.pixabay.com/photo/2018/06/21/13/57/clouds-3488632__340.jpg" with='50%' height='50%' alt="Card image cap"/>

             <Card.ImgOverlay>
             <div class="card-body">
               <h5 class="card-title">Titulo del Servicio 3</h5>
               <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora aut voluptas quidem magni labore non eaque esse ut ipsum repudiandae assumenda nobis veritatis eveniet, mollitia asperiores iusto, voluptate nesciunt alias.
               </p>
               <Button variant="primary">Mas detalles</Button>             
             </div>
             </Card.ImgOverlay>
           </div> */}
            {/* 
           <div class="card">
             <img class="card-img-top" src="https://cdn.pixabay.com/photo/2018/06/21/13/57/clouds-3488632__340.jpg" with='50%' height='50%' alt="Card image cap"/>             
             <div class="card-body">
               <h5 class="card-title">Titulo del Servicio 4</h5>
               <p class="card-text">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora aut voluptas quidem magni labore non eaque esse ut ipsum repudiandae assumenda nobis veritatis eveniet, mollitia asperiores iusto, voluptate nesciunt alias.
                 Doloribus reiciendis rerum eum quasi exercitationem inventore nemo, amet fugit autem quod est aperiam assumenda impedit, rem iste quidem placeat distinctio sint. Dolorum nihil quo ipsa reprehenderit nam a obcaecati?
                 Quaerat, ab enim rerum cumque repellendus quas dignissimos soluta optio eaque ipsum quasi incidunt harum amet, eveniet repudiandae deleniti, sint doloribus esse culpa iusto nobis? Ut ipsa maxime perferendis debitis?              
               </p>
               <Button variant="primary">Mas detalles </Button> 
             </div>                             
             </div> */}
 
         </div>      
       </div>
       </>
    );
}