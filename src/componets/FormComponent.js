import React from 'react'

function FormComponent() {
  return (
    <div style={{width:'50%' , margin:' 50px auto' , backgroundColor:'#f8f9fa'  , padding:'20px' , borderRadius:'20px'}}>
    
    <form style={{width:'100%' , height:'50vh' , display:'flex' , flexDirection:'column' , justifyContent:'space-around'   }} classNameName=''>
      <div style={{display:'flex' , justifyContent:'space-between'}} className="form-row">
        <div style={{flex:'0.495'}}  className="form-group  col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
        </div>
        <div  style={{flex:'0.495'}} className="form-group  col-md-6">
          <label for="inputPassword4">Password</label>
          <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
        </div>
      </div>
      <div className="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div className="form-group">
        <label for="inputAddress2">Address 2</label>
        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
      </div>
      <div style={{display:'flex' , justifyContent:'space-between'}} className="form-row">
        <div style={{flex:'0.38'}} className="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div style={{flex:'0.38'}}className="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" className="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div style={{flex:'0.2'}} className="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
    </div>
  )
}

export default FormComponent