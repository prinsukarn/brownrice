import React from 'react';
import Hero from '../Components/Hero';
import ClientSection from '../Components/ClientSection';
import Service from '../Components/Service';
import Aboutus from '../Components/Aboutus';
import FAQ from '../Components/FAQ';
import Contact from '../Components/Contact';
import Testimonials from '../Components/Testimonials';
import Tabs from '../Components/Tabs';

function Home(props) {
    return (
        <div>
            <Hero/>
            <Tabs/>
            <Service/>
            <ClientSection/>
                        <Aboutus/>
                        {/* <Testimonials/> */}
            <FAQ/>
            <Contact/>
        </div>
    );
}

export default Home;