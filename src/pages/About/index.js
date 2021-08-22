import React from 'react'

//import images
import Ingredients from './../../assets/Images/About-picture.JPG'
import Food from './../../assets/Images/Food.png'

const About = () => (
    <>
        <div className="container bg-white">
            <h1 className="text-center p-3">What is in my fridge?</h1>
            <div className="row">
                <div className="col-6">
                    <img src={Ingredients} alt=""/>
                </div>
                <div className="col-6">
                    <h4>Find recipes using what you have</h4>
                    <p className="w-75">
                        Find recipes that use as many of the
                        ingredients you have available as
                        possible while limiting missing
                        ingredients.
                    </p>
                    <div className="d-flex flex-column ">
                        <img src={Food} alt="" className="w-50 m-auto rounded-top"/>
                        <div className="w-50 bg-primary text-white text-center m-auto p-3 rounded-bottom">Cheesy Salami</div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default About;