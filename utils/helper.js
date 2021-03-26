

//error function
exports.throwError = ({ message, status }) => {
    const error = new Error();
    error.message = message;
    error.status = status;
    throw error;
}



//configure multer
// exports.multerConfig = (multer) => {
//     return {
//             fileStorage: multer.diskStorage({
//                 destination: (req, file, cb) => {
//                     cb(null, 'images')
//                 },
//                 filename: (req, file, cb) => {
//                     cb(null, `${Date.now()}-${file.originalname}`);
//                 }
//             }),

//             fileFilter: (req, file, cb) => {
//                 if(file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.size <= 8000){
//                     cb(null, true)
//                 }else{
//                     cb(null, false);
//                 }
//             }

//     }
// }