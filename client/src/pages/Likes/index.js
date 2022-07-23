// this will just print likes from a stored array to a page formatted the same as home.

// currently, this is the same code from searchPhotos.js. the idea would be that we would pull 
// from the liked photos saved array and print to the page in the same format as the search engine

// import React, { useState } from "react"
// import Unsplash, { toJson } from "unsplash-js"

// const unsplash = new Unsplash({
//   accessKey: "d4TUY8acyblsAg9WAHwzRunq-AEvEMD5SMuvzB4uhXk",
// })

// function MyLoves() {
// *** we can alter this function to pull from a saved photos array

//   const [query, setQuery] = useState("")
//   const [pics, setPics] = useState([])

//   const searchPhotos = async (e) => {
//     e.preventDefault()
//     console.log("Submitting the Form")
//     unsplash.search
//       .photos(query, 1, 20)
//       .then(toJson)
//       .then((json) => {
//         setPics(json.results)
//         // console.log(json)
//       })
//   }

//   return (
//     <>

      {/* in the return, we can change the mapping to pull from an 
      imported model/saved array of photo URLs. most of this 
      shouldn't have to change aside from where pics/pic is 
      being routed, as we want the URLs of the saved photos 
      to generate */}

      {/* <div className="card-list">
        {pics.map((pic) => (
          <div className="card" key={pic.id}>
              <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
              ></img>
          </div>
        ))}
        
      </div>
    </>
  )
}

export default MyLoves; */}