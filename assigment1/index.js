const ReactAppFromCDN = ()=>{
    return (
        <div style={{padding:"20px",width:"530px",border:"1px solid gray"}}>
            <h1 style={{ color: 'black', fontSize: '28px', marginBottom:"25px" }}>Topics Covered</h1>
            <p>The following is a list of all topics we cover in the MDN learning area</p>

            <a href="#" style={{color:"blue",fontSize: '20px'}}>Getting started with the web</a>
            <p style={{marginLeft:"15px"}}>Provides a practical introduction to web development for complete beginners</p>

            <a href="#" style={{color:"blue",fontSize: '20px'}}>HTML - Structuring the web</a>
            <p style={{marginLeft:"15px"}}>HTML is the language that we use to  structure the different parts of our content and define what their meaning or purpose is This topic teaches HTML in detail</p>

            <a href="#" style={{color:"blue",fontSize: '20px'}}>CSS - Styling the web</a>
            <p style={{marginLeft:"15px"}}>CSS is the language that we use to control our web content style and layout as well as adding behaviour like animation This topic provides comprehensive coverage of CSS</p>
        </div>

    )
 }
   
 ReactDOM.render(<ReactAppFromCDN />, document.querySelector('#root'));