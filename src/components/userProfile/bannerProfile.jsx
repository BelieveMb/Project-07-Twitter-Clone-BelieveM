import React from 'react'
import ImageBanner from '../../images/bannerCNN.jpg';
import ImageProfil from '../../images/profilCNN.jpg';
import Button from '../freeComponents/Button';


function BannerProfile({AllData}) {
  const userProfil = AllData;

  return (
      <div className='bannerImage'>
          <img src={userProfil.bannerImg} alt="banner of profile's cnn " />
          <div className="profilPhoto">
            <img src={userProfil.avatar} alt="image of profil's CNN" />
            <div className='btnAction'>
              <div>
                <svg fill="#fff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"></path> <path d="M351.938,224C334.266,224,320,238.297,320,255.969S334.266,288,351.938,288C369.672,288,384,273.641,384,255.969 S369.672,224,351.938,224z"></path> <path d="M255.938,224C238.266,224,224,238.297,224,255.969S238.266,288,255.938,288C273.672,288,288,273.641,288,255.969 S273.672,224,255.938,224z"></path> <path d="M160,224c-17.688,0-32,14.297-32,31.969S142.312,288,160,288c17.656,0,32-14.359,32-32.031S177.656,224,160,224z"></path> </g> </g></svg>              </div>
                <Button btnContent={"Follow"}/>
              </div>
          </div>
      </div>

  )
}

export default BannerProfile