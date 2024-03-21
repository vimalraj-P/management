import React from 'react'
import './price.css'

function Price() {
    const data = [
        {
            name: "FREE",
            price: "0",
            user: "Singlr Users",
            storage:"5GB Storage",
        },
        {
            name: "PLUS",
            price: "9",
            user: "5 Users",
            storage:"50GB Storage",
        },
        {
            name: "PRO",
            price: "49",
            user: "Unlimited Users",
            storage:"150GB Storage",
        },
    ]
  return (
   <>
   <section class="pricing py-5">
  <div class="container">
    <div class="row">
      {/* <!-- Free Tier --> */}
      {
        data.map((list)=>{
            return  <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">{list.name}</h5>
            <h6 class="card-price text-center">${list.price} <span class="period">/month</span></h6>
                <hr/>
                <ul class="fa-ul">
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>{list.name==="FREE" ? list.user : <b>{list.user}</b> }</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>{list.storage} </li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Unlimited Public Projects</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Community Access</li>
                  <li class={list.name==="FREE"?"text-muted":""}><span class="fa-li"><i class={list.name==="FREE"?"fa fa-times":"fa fa-check"}></i></span>Unlimited
                    Private Projects</li>
                  <li class={list.name==="FREE"?"text-muted":""}><span class="fa-li"><i class={list.name==="FREE"?"fa fa-times":"fa fa-check"}></i></span>Dedicated
                    Phone Support</li>
                  <li class={list.name==="FREE"?"text-muted":""}><span class="fa-li"><i class={list.name==="FREE"?"fa fa-times":"fa fa-check"}></i></span>{list.name==="PRO"&&<b>unlimited</b>} Free Subdomain
                  </li>
                  <li class={list.name==="PRO"?"":"text-muted"}><span class="fa-li"><i class={list.name==="PRO"?"fa fa-check":"fa fa-times"}></i></span>Monthly Status
                    Reports</li>
                </ul>
                <div class="d-grid">
                  <a href="#" class="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>
        })
      }
     
      {/* <!-- Plus Tier --> */}
    
    </div>
  </div>
</section>
   </>
  )
}

export default Price