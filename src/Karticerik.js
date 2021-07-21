import React, {useState} from 'react';

import './Karticerik.css';

//calisanlar dizi nesnesini aktardım
import {calisanlar} from './Calisanlar';

const Karticerik = () => {
                                 //index 0 şuan
    const  [index, setIndex] = useState(0);
    const {_id, isim, is, resim, aciklama} = calisanlar[index];//calisanlar içerisindeki her bir index e ata

    //ileri ve geri git buttonlarının functionunun sınırlandırılması
    const indexValue = (number) => {
        if(number  > calisanlar.length-1){
             return 0
        }
        
        if(number < 0){
            return calisanlar.length - 1
        }

        return number
    };

    //ileri git butonu functionu
    const ileri = () => {
           setIndex((index) => {
               let newIndex = index + 1;
               return indexValue(newIndex);          
           } )
    }

    //geri git butonu functionu 
    const geri = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return indexValue(newIndex);          
        } )
    }


    //paragrafı göster kapat functionu
   const  [goster, setGoster] = useState(true)
 
   const  metinGoster = () => {
            if(goster == true){
                 setGoster(!true);
            }
            else{
                setGoster(true);
            }
    }

   

    return( 
             <div className="content" key={_id}>

                    <div className="img-container">
                        <img src={resim} alt={isim} className="calisanFoto"/>
                    </div>

                    <h4 className="isim">  {isim} </h4> 

                    <p className="is">{is}</p>

                    <p style={{height : `${goster ?"50px" :"260px"}`, transition:"1s", overflow:"hidden"}} className="aciklama">{aciklama}</p>
                  

                   <div className="button-container ">
                       <i onClick={geri} className="m-2 btn btn-primary fa fa-angle-left"></i>   
                       <i onClick={ileri}   className="m-2 btn btn-primary fa fa-angle-right"></i>   
                  </div> 

                  <button onClick={metinGoster} className={goster ?"btn btn-success" :"btn btn-danger"}> 
                               {goster ?"Daha Fazla Oku..." :"Tamam"}
                   </button>


  
             </div>
    )
}

export default Karticerik;