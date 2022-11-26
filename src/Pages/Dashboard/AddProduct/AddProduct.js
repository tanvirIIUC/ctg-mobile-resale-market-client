import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext)


    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
          
        const seller = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const title = form.title.value;
        const place = form.place.value;
        const resalePrice = form.resaleprice.value;
        const orginalPrice = form.orginalprice.value;
        const description = form.description.value;
        const yearOfUse = form.year.value;
        const postTime = form.posttime.value;
        const img = form.img.value;
         const category = form.category.value;

         const condition = form.condition.value;
        
        // console.log(category)
        //  console.log(seller,email,phone,title,prresalepriceice,orginalprice,description,year,posttime,img,category,condition)
        const booking = {
            category_id: category,
            title,
            image:img,
            location:place,
            resalePrice,
            orginalPrice,
            postTime,
            sellerName:seller,
            yearOfUse,
            condition,
            email,
            phone,
            description

        }
        fetch('http://localhost:5000/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {



                    alert('Add successfull')


                    // refetch();
                }
                else {
                    alert(`${data.message}`)

                }

            })

    }
    return (
        <div className='w-1/2 container mx-auto'>
            <h1 className='text-center text-3xl font-bold'>Add</h1>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-2 my-10  '>
                <input name='name' type="text" defaultValue={user?.displayName} disabled className="input input-bordered  " />
                <input name='email' type="email" defaultValue={user?.email} disabled className="input input-bordered w-full " />

                <input name='title' type="text" placeholder="title" required className="input input-bordered w-full " />
                <input name='resaleprice' type="number" placeholder="resaleprice" required className="input input-bordered w-full " />
                <input name='orginalprice' type="number" placeholder="orginalprice" required className="input input-bordered w-full " />
                <input name='description' type="text" placeholder="description" required className="input input-bordered w-full " />
                <input name='phone' type="text" placeholder="phone" required className="input input-bordered w-full " />
                <input name='place' type="text" placeholder="place" required className="input input-bordered w-full " />
                <input name='year' type="text" placeholder="Year of use" required className="input input-bordered w-full " />
                <input name='posttime' type="text" placeholder="Post time" required className="input input-bordered w-full " />
               
                <input name='img' type="text" placeholder="image link" required className="input input-bordered w-full " />
                <select name='category' className="select select-bordered w-full  ">
                    <option selected >Category</option>
                    <option value="01">Samsung</option>
                    <option value="02">Iphone</option>
                    <option value="03">Xiaomi</option>

                </select>
                <select name='condition' className="select select-bordered w-full  ">
                    <option selected >Condition</option>
                    <option value="excellent">excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>

                </select>
                <input type="submit" value='submit' className="btn btn-primary w-full text-white  " />
            </form>
        </div>
    );
};

export default AddProduct;