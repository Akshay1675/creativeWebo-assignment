import React from 'react'

const PaymentPartners = () => {
  return (
   <div className='flex flex-col items-center'>
        <h1
        className="mt-9 font-semibold text-[20px] leading-7 text-[#141414] "
        >Trusted Payment Partners</h1>
        <div className="mt-10 flex justify-center items-center gap-13 opacity-80">
          <img src="/images/Mastercard.png" alt="visa" className="h-6 object-contain" />
          <img src="/images/American Express.png" alt="mastercard" className="h-6 object-contain" />
          <img src="/images/image 13.png" alt="paypal" className="h-6 object-contain" />
          <img src="/images/Samsung_Pay_Logo.svg 1.png" alt="stripe" className="h-6 object-contain" />
          <img src="/images/image 47.png" alt="stripe" className="h-6 object-contain" />
          <img src="/images/1646514ab443f1fec4ed32bcad12ac9203f6ffb4.png" alt="stripe" className="h-6 object-contain" />
        </div>

    </div>
    
  )
}

export default PaymentPartners
