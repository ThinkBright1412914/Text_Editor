import React from 'react'

export default function About(props) {

    // const[myStyle , setmyStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white',
    //     border : '1px solid white' 
    // })

    let myStyle = {
        color : props.mode === 'dark'?'white':'#042743',
        backgroundColor : props.mode === 'dark'?'rgb(36 74 104)':'white',
    }

    
  return (
    <div className ="container" style={{color : props.mode === 'dark'?'white':'#042743'}}>
        <h2 className ='my-3'>About us</h2>
         <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    Free to use
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                   Text editor can be use to copy, paste, convert to lowercase or uppercase the words without any trouble. There is no limitation in words.
                    </div>
            </div>
            </div>
            <div className="accordion-item ">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
              Analyze your text
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                Text editor Analysis, also known as Content Analysis, is a research method for deriving useful information from a text. With our powerful Text editor tool, you can document a project, user problem or other textual information in a rich-text document editor, and then extract model elements from the text.
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
               Browser compatible
                </button>
            </h2>
                 <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                Text editor has the ability to appear fully functional on different browsers that are available in the market. 
                </div>
             </div>
            </div>
        </div>
     
  </div>
  )
  }
