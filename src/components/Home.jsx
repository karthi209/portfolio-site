import React from 'react';

const Home = () => {
  return(
    <>
      <div className="split right" >
        <div className="coolPara centered">
           <p>I love building software, doesn't matter if it's a website or a low level kernel utiliy tool. I love the fact that we can write a bunch of instructions and the computer can execute them  flawlessly, as it's written. It's like having superpowers. </p>
           <p>I mostly spend my work time in building and maintaining platform infrastrucre for the teams acroos to use. In my typical day, I'll have my teminal open with k9s running, so I can always take a quickl peek at how things are going with the Kubernetes clusters. </p>
        </div>
      </div>
      <div className="split left">
        <p className="nameFunct">Karthikeyan Manimaran</p>
        <p className="roleFunct">DevOps Engineer, Web Developer plus a little bit of hardware programming :)</p>
      </div>
    </>
  );
};

export default Home;
