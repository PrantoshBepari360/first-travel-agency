import React from 'react';

const TourBooking = () => {
    return (
        <div className='mb-12'>
            <div className="relative rounded  bg-center bg-cover">
  <img
    className="w-full object-cover 	bg-bottom	 h-[300px] min-h-full"
    src="https://img.freepik.com/free-vector/flat-design-travel-background_23-2149193475.jpg?w=1380&t=st=1691429080~exp=1691429680~hmac=52ce111fa36acc6a2b422d07bf786ff13ea472a0d6c9de869f5d1c1c778b1601"
    alt=""
  />
  <div className="absolute top-0 rounded left-0 w-full h-full bg-black opacity-40"></div>
  <div className="container">
    <h2 className="xl:text-5xl mx-auto text-center lg:text-4xl text-3xl absolute top-0 left-0 w-full h-full flex items-center justify-center   text-white font-bold">
     Booking Tour....
    </h2>
  </div>
</div>
             <div className="lg:w-10/12	 mx-auto pt-12 w-full z-50  rounded   pb-8 border-none">
                <h2 className='text-center text-3xl font-bold'>Billing Details</h2>
    <form className="px-4">
     <div className="flex flex-col md:flex-row pt-6 items-center justify-between gap-4">
     <div className="mb-1  lg:w-1/2 w-full">
        <label
          className="block text-gray-700 text-sm font-bold "
          htmlFor="name"
        >
          First Name <span className="text-red-600 text-lg">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="first"
          placeholder="Your Name"
          className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-1 lg:w-1/2 w-full">
        <label
          className="block text-gray-700 text-sm font-bold "
          htmlFor="subject"
        >
          Last Name <span className="text-red-600 text-lg">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="last"
          placeholder="Last Name"
          className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
     </div>
     
<div className='flex flex-col md:flex-row  items-center justify-between gap-4'>
<div className="mb-1 lg:w-1/2 w-full">
        <label
          className="block text-gray-700 text-sm font-bold"
          htmlFor="name"
        >
          Billing Email  <span className="text-red-600 text-lg">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Billing Email Address"
          className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-1 lg:w-1/2 w-full">
        <label
          className="block text-gray-700 text-sm font-bold "
          htmlFor="subject"
        >
          Billing Mobile Number <span className="text-red-600 text-lg">*</span>
        </label>
        <input
          type="number"
          id="subject"
          name="number"
          placeholder="Billing Mobile Number *"
          className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
</div>
     <div  className="flex flex-col md:flex-row  items-center justify-between gap-4">
     <div className="mb-1 lg:w-1/2 w-full">
    <label class="block text-gray-700 text-sm font-bold " for="country">
Country <span className="text-red-600 text-lg">*</span>
</label>
<select id="country" name="country" class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
<option value="country1">Bangladesh</option>
<option value="country2">India</option>
<option value="country3">Australia</option>
<option value="country4">Canada</option>
<option value="country5">London</option>
</select>
    </div>
      
    <div className="mb-1 lg:w-1/2 w-full">
    <label class="block text-gray-700 text-sm font-bold " for="country">
    District <span className="text-red-600 text-lg">*</span>
</label>
<select id="country" name="country" class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
<option value="country1">Dhaka</option>
<option value="country2">Faridpur</option>
<option value="country3">Gazipur</option>
<option value="country4">Gopalganj</option>
<option value="country5">Jamalpur</option>
<option value="country5">Kishoreganj</option>
<option value="country5">Tangail</option>
<option value="country5">Bogura</option>
<option value="country5">Rajshahi</option>
<option value="country5">Rangpur</option>
<option value="country5">Jhenaidah</option>
<option value="country5">Kushtia</option>
<option value="country5">Khulna</option>
</select>
    </div>
     </div>

<div className='flex flex-col md:flex-row  items-center justify-between gap-4'>
<div className="mb-1 lg:w-1/2 w-full">
        <label
          className="block text-gray-700 text-sm font-bold"
          htmlFor="name"
        >
          Town / City  <span className="text-red-600 text-lg">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="city"
          placeholder="Town / City Name"
          className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-1 lg:w-1/2 w-full">
        <label
          className="block text-gray-700 text-sm font-bold "
          htmlFor="subject"
        >
          Street address <span className="text-red-600 text-lg">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="Street"
          placeholder="House number and street number *"
          className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
</div>
     
     

      <div className="flex">
        <button
          type="submit"
          className=" py-4 w-full mt-5 bg-[#22a5c3] font-bold text-xl text-white rounded"
        >
          Proceed To Book
        </button>
      </div>
    </form>
  </div>
        </div>
    );
};

export default TourBooking;