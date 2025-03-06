import React from 'react'
import rocket from '../../assets/images/ico_rocket.png'
import img_space from '../../assets/images/img_nft.png'
import img_animakid from '../../assets/images/img_artist_avatar.png'
const Dicover = () => {
  return (
    <div className='w-[1050px]  my-[80px] mx-auto flex justify-center gap-[30px] '>
         <div className='flex-1'>
             <h1 className='text-[67px] font-bold text-white'>Discover digital art & Collect NFTs</h1>
             <p className='text-[22px] text-white leading-[35.2px]'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
             <button className='mt-[30px] bg-[#A259FF] flex items-center gap-3 py-[19px] px-[50px] w-[224px] rounded-[20px] '>
              <img src={rocket} alt="" />
              <span className='text-[16px] leading-[22.4px] font-bold text-white'>Get Started</span>
             </button>
             <div className='flex gap-[30px] items-center mt-[30px]'>
               <div>
                <p className='font-bold text-[28px] text-white leading-[39.2px]'>240k+</p>
                <p className='font-[400] text-[24px]  leading-[38.38px] text-white'>Total Sale</p>
               </div>
               <div>
                <p className='font-bold text-[28px] text-white leading-[39.2px]'>100k+</p>
                <p className='font-[400] text-[24px]  leading-[38.38px] text-white'>Auctions</p>
               </div> <div>
                <p className='font-bold text-[28px] text-white leading-[39.2px]'>240k+</p>
                <p className='font-[400] text-[24px]  leading-[38.38px] text-white'>Artists</p>
               </div>
             </div>
         </div>
         <div className='flex-1'>
            <div className='overflow-hidden'>
              <img src={img_space} alt="" />
            </div>
            <div className='bg-[#3b3b3b] rounded-b-[20px]'>
              <h5 className='font-semibold text-[22px] leading-[30.8px] text-white pt-[22px] pb-[10px] px-5'>Space Walking</h5>
              <div className='flex gap-3 pb-[22px] px-5 '>
                <span>
                  <img className='size-6' src={img_animakid} alt="" />
                </span>
                <span className='font-[400] text-[16px] text-white leading-[22.4px]'>
                  Animakid
                </span>
              </div>
            </div>
            
         </div>
    </div>
  )
}

export default Dicover
