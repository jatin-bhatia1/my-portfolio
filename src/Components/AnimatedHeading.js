import React from "react";
import Typewriter from 'typewriter-effect/dist/core';

function AnimatedHeading() {
    return{
        <Typewriter
                                            onInit={(typewriter) => {
                                                typewriter.typeString('Hello World!')                                                
                                                .pauseFor(2500)
                                                .deleteAll()
                                                .start();
                                            }}
                                        />
    }
}