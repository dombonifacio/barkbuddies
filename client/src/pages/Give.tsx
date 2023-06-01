import { Navbar } from "../components/NavbarComponent"


// form hooks and libraries
import { useForm } from "react-hook-form"
import * as yup from 'yup'

// allows us to work with yup and hook form at the same time
import { yupResolver } from '@hookform/resolvers/yup'

// api library
import { Axios } from "axios"

// interfaces
// import { Dog } from "../interface/Dog"

// types
import { CustomFormData } from '../types/CustomFormData'


export const Give = () => {
    // handleSubmit function handles the submit form button
    
    const schema = yup.object().shape({
        name: yup.string().required(),
        age: yup.number().positive().integer().required(),
        breed: yup.string().required(),
        description: yup.string().required(),
        image: yup.string()
    })
    
    const { register, handleSubmit, formState: { errors }} = useForm<CustomFormData>({
        resolver: yupResolver(schema)
        
    })

    // declare a function what will happen after handleSubmit executes
    const onSubmit = (data: CustomFormData) => {
        console.log(data)
        // add the dogs to our database here using axios
        // index.js server side has made an endpoint for creating dogs 
        // now we can access that endpoint using axios post to send data to our backend
    }

    return (
        <div className="linear-bg h-screen">
            <Navbar />

            <div className="w-[1160px] mx-auto bg-white">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Name" className="w-full" {...register("name")}/>
                    <p>{errors.name?.message}</p>
                    <input type="text" placeholder="Age" className="w-full" {...register("age")} />
                    <input type="text" placeholder="Breed" className="w-full" {...register("breed")}/>
                    <input type="text" placeholder="Description" className="w-full" {...register("description")}/>
                    <input type="file" {...register("image")}/>
                    <button type="submit" className="bg-blue-500">Submit</button>
                    
                </form>
              
            </div>

           
        </div>
    )
}