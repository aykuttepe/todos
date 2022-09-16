

export  const loginvalid=(fullName)=>{
    console.log(fullName)
    if(fullName.lenght===2){
        throw new Error("Kullanıcı Adı Çok Kısa")
    }
}






// import * as Yup from 'yup'

// const loginvalid = Yup.object().shape({
//     fullName:Yup.string().min(2,"Too Short!").required("required")
// });

// export default loginvalid;