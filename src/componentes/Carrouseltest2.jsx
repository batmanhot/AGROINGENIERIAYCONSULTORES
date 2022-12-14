
import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


import sembriodefresa  from '../imagen/Edificaciones_Carrousel.jpg'
import produccion  from '../imagen/fresa.jpg'
import agronoma  from '../imagen/Fresas_Carrousel.JPG'
import edificaciones  from '../imagen/geodesia.jpg'

import riegoporgoteo from '../imagen/corte segun diseño para instalar tuberia_Carrousel.jpg'
import topografia  from '../imagen/replanteo para riego tecnificado_Carrousel.jpg'
import pistas  from '../imagen/Pistas_Carrousel.jpeg'

const items = [
  {
    src: (sembriodefresa),
    altText: 'SEMBRIO DE FRESA',    
    caption: 'TOPOGRAFIA SUPERFICIAL - EDIFICACIONES',
    caption_2: 'TOPOGRAFIA SUPERFICIAL'
  },
  {
    src: (produccion),
    altText: 'SEMBRIO DE FRESA',
    caption: 'ALTA PRODUCCION DE CULTIVOS DE CANTIDAD Y CALIDAD',
    caption_2: 'ASESORIA PARA LA EXPORTACION'    
  },
  {
    src: (agronoma),
    altText: 'SEMBRIO DE FRESA',
    caption: 'SERVICIOS DE INGENIERIA AGRICOLA',
    caption_2: 'TECNICAS DE MEJORAS DE CULTIVOS'    
  },
  {
    src: (edificaciones),
    altText: 'SEMBRIO DE FRESA',
    caption: 'GEODESIA',
    caption_2: 'EDIFICACIONES'
  },
  {
    src: (riegoporgoteo),
    altText: 'SEMBRIO DE FRESA',
    caption: 'RIEGO POR GOTEO',
    caption_2: 'SERVICIO Y ASESORIA EN TECNICAS DE RIEGO POR GOTEO'    
  },
  {
    src: (topografia),
    altText: 'TOPOGRAFIA',
    caption: 'MEDICIONES TOPOGRAFICAS',
    caption_2: 'TOPOGRAFIA SUPERFICIAL Y SUBTERRANEO'    
  },
  {
    src: (pistas),
    altText: 'PISTAS',
    caption: 'PISTAS EN CARRETERA',
    caption_2: 'TOPOGRAFIA SUPERFICIAL Y SUBTERRANEO'    
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          

        //   <div className="col-sm-12">
        //         <div className="card bg-dark text-white" >
        //             <h5 className="card-header text-center bg-secondary text-white">LAS MEJORES CRITICAS DEL AÑO</h5>
        //             <div className="card-body" >
        //                 <img src={item.src} alt={item.altText} />
        //             </div>
        //          </div>
        //    </div>

        >          
         <div class='row'>
            <div class="container-fluid">
              <div className="col-xs-3 col-sm-4 col-md-8 col-lg-8 col-xl-12">
                  <div className="card bg-dark text-white rounded-0">
                      <div className="card-body col-xs-3 col-sm-4 col-md-8 col-lg-8 col-xl-12">
                      {/* width = "700rem" height="500rem" */}
                      {/* <img class="img-fluid redondearimagen border-dark text-center" src="https://i.postimg.cc/4xP74R77/Agronomia-cultivo-riegotecnificado.jpg" alt="Card image cap"/> */}
                        {/* <img class="img-fluid" src={item.src} alt={item.altText} width = "830px" height="490px"/> */}
                        <img  src={item.src} alt={item.altText} width = "830px" height="550px"/>
                        <CarouselCaption captionText={item.caption_2} captionHeader={item.caption} /> 
                      </div>
                  </div>
              </div>
            </div>
          </div>

          {/* <img src={item.src} alt={item.altText} /> */}
          {/* <CarouselCaption captionText={item.altText} captionHeader={item.caption} /> */}
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Example;