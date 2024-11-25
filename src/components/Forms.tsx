import React, { FormEvent, useState } from 'react'
import {  FieldValues, useForm } from 'react-hook-form'




// applying validation in forms, using react hook


const Forms = () => {
  
 const{register, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = (data: FieldValues ) => console.log(data)


  return (
     <form onSubmit={handleSubmit (onSubmit)}>
      <div className="mb-3"><label htmlFor="name" className="form-label">Name</label>
        <input {...register('name', {required:true, minLength:3})} id='name' type="text" className="form-control"/>
         {errors.name?.type==='required'&&<p>The name field is required.</p>},
          { errors.name?.type==='minLength'&&<p>The name must be at least 3 characters</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
        <input {...register('age')} id='age'type="text" className="form-control"/>
        </div>
        <button className='btn btn-secondary' type='submit'>submit</button>
     </form>
  )
}

export default Forms



