import React from "react";
import Clients from "../widgets/Clients";
import Contact from "../widgets/Contact";
import Footer from "../widgets/Footer";
import Header from "../widgets/Header";
import Hero from "../widgets/Hero";
import HowItWorks from "../widgets/HowItWorks";
import Solution from "../widgets/Solution";
const Indexpage = () =>{
    return(
        <div className="container mx-auto p-4">
            <Header />
            <main className="mt-20">
                <Hero />
                <section className="md:p-20 mt-20">
                    <Solution />
                </section>
                <section className="md:p-20 mt-20">
                    <HowItWorks />
                </section>
                <section className="md:w-3/5 mt-20 mx-auto">
                    <Clients />
                </section>
                <section className="mt-20">
                    <Contact />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Indexpage