//import images from '../lib/dummyData'


export const NEW_IMAGE = 'NEW_IMAGE'
//export const MOVE_IMAGE = 'MOVE_IMAGE'

export function newImage(image) {
  return {
    type: NEW_IMAGE,
    payload: image.id++
    // payload: image.id++
  }
}



// function newImages(images){
//   return images[i+1]
// }

// console.log(images)
// console.log(newImages(images[0]))

// export function moveImage() {
//     return {
//       type: MOVE_IMAGE,
//       payload: ""
//     }
//   }



// export function newImage(id,
//   title,
//   imageurl,
//   description,
//   price,
//   state) {
// return {
//   type: NEW_IMAGE,
//   payload: {
//       id,
//       title,
//       imageurl,
//       description,
//       price,
//       state
//   }
// }
// }
