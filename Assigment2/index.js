const ReactAppFromCDN = ()=>{
    return (
        <div style={{padding:"20px",width:"530px",border:"1px solid gray"}}>
            <h1 style={{ color: 'black', fontSize: '28px', marginBottom:"25px" }}>Learn Web Development</h1>
            <p>"Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.". <br /><br />

The text also says that the aim of this area of MDN is to take you from "beginner" to "comfortable" and from there, you should be able to start making your way, learning from the <a href="#" style={{color:"blue"}}>rest of MDN</a>, and other intermediate to advanced resources that assume a lot of previous knowledge. <br /><br />

The text concludes by saying that if you are a complete beginner, web development can be challenging, but they will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. <br /><br /></p>
                    </div>

    )
 }
   
 ReactDOM.render(<ReactAppFromCDN />, document.querySelector('#root'));