import {Formik,Form,Field} from 'formik'
import axios from 'axios'
import {useRouter} from 'next/router'
import { ArrowBack } from '@mui/icons-material'
import Link from 'next/link'
function add() {
const router = useRouter()
  return (
    <div className='p-4'>
        <div className='flex'>

            <div className='flex-1'>
            <Link href='/seller'>
                 <ArrowBack className='text-gray-800'/>
            </Link>
            </div>
            <div className='flex-1 text-center'>New Product</div>
            <div className='flex-1'></div>
        </div>
        <div>
            <Formik
                initialValues={{
                    title: "",
                    imgUrl: "",
                    subTitle: "",
                    description: "",
                    price: 0,
                    available: 0,
                    rating: Math.floor(3+ Math.random()*5) + (Math.floor(Math.random()*10)/10),
                    timeTaken: 0,
                    bestSeller: 0,
                    units: '',
                    count: 0,
                    category: ''
                }}
                onSubmit = {async (values)=>{
                    try{
                        axios.post(`${BASE_URI}/api/products`,values).then(()=>{
                            router.push('/seller')
                        })

                    }catch(err){
                        console.log(err)
                    }
                }}
            >
                {({values,isSubmitting,handleChange}) => (
                    <Form>
                        <div className='mb-4 w-full mx-auto flex flex-col items-center'>
                            <div className='mb-2 w-full flex flex-col items-start'>
                                <label className='text-sm text-gray-500 font-medium' htmlFor="title">Title</label>
                                <input className='rounded-lg border w-full outline-none px-4 py-2' type={'text'} name='title' onChange={handleChange} value={values.title}/>
                            </div>
                            <div className='mb-2 w-full flex flex-col items-start'>
                                <label className='text-sm text-gray-500 font-medium' htmlFor="subTitle">Subtitle</label>
                                <input className='rounded-lg border w-full outline-none px-4 py-2' type={'text'} name='subTitle' onChange={handleChange} value={values.subTitle}/>
                            </div>
                       
                            <div className='mb-2 w-full flex flex-col items-start'>
                                <label className='text-sm text-gray-500 font-medium' htmlFor="description">Description</label>
                                <input className='w-full rounded-lg border outline-none px-4 py-2' type={'text'} name='description' onChange={handleChange} value={values.description}/>
                            </div>
                            <div className='mb-2 w-full flex flex-col items-start'>
                                <label className='text-sm text-gray-500 font-medium' htmlFor="imgUrl">Image URL</label>
                                <input className='w-full rounded-lg border outline-none px-4 py-2' type={'text'} name='imgUrl' onChange={handleChange} value={values.imgUrl}/>
                            </div>
                        
                            <div className='mb-2 w-full flex flex-col items-start'>
                                <label className='text-sm text-gray-500 font-medium' htmlFor="price">Price</label>
                                <input className='w-full rounded-lg border outline-none px-4 py-2' type={'number'} name='price' onChange={handleChange} value={values.price}/>
                            </div>
                            <div className='mb-2 w-full flex flex-col items-start'>
                                <label className='text-sm text-gray-500 font-medium' htmlFor="available">Available</label>
                                <input className='w-full rounded-lg border outline-none px-4 py-2' type={'number'} name='available' onChange={handleChange} value={values.available}/>
                            </div>
                        
                            <div className='mb-2 w-full flex flex-col items-start'>
                                <label className='text-sm text-gray-500 font-medium' htmlFor="Units">Units</label>
                                <input className='w-full rounded-lg border outline-none px-4 py-2' type={'text'} name='units' onChange={handleChange} value={values.units}/>
                            </div>
                            <div className='w-full flex flex-col items-start'>
                                <label className='text-sm text-gray-500 font-medium' htmlFor="rating">Category</label>
                                <input className='w-full rounded-lg border outline-none px-4 py-2' type={'text'} name='category' onChange={handleChange} value={values.category}/>
                            </div>
                        </div>
          
                        <div className='mt-5 flex items-center justify-center'>
                            <button type='submit' disabled={isSubmitting} className='px-4 py-2 shadow-md text-white rounded-lg bg-orange-500 shadow-orange-500/50'>Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    </div>
  )
}

export default add