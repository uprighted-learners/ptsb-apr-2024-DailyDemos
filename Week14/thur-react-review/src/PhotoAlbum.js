import { useState } from "react"

export default function PhotoAlbum(){
    // useState to track the currently selected photo

    // currentSelection - useState to create this variable

    //array of images
    const images = ["./images/grand_master.webp", "./images/snakes.webp"]    

    const [currentSelection, setCurrentSelection] = useState(0)

    // display selected photo

  

    return (
        <>
          {/* // 1.hard code to make sure image displays */}
            <img src={images[currentSelection]}/>
            {/*   // 2. create button to switch image */}
            {/* // 3. create handler code that switches image 
                    // check if end of array
                    // if so set currentSelection to 0
                    // else increment by 1
            */}
            <button>Next</button>
        </>
    )

  

   
       
}