import React from 'react';
import Collage1 from '../../Assets/Images/mix-image.png'
import Collage2 from '../../Assets/Images/collage-2.png'
import Collage3 from '../../Assets/Images/collage-3.png'
import Collage4 from '../../Assets/Images/collage-4.png'
import Collage5 from '../../Assets/Images/Collage5.png'
import Collage6 from '../../Assets/Images/Collage6.png'
import Collage7 from '../../Assets/Images/Collage7.png'
import Collage8 from '../../Assets/Images/Collage8.png'
import './Collage.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Collage = () => {
    return (
        <div className='Collage'>
            <div> <img src={Collage1} alt="" width="100%" /></div>
            <div className="row mt-4">
                <div className="col-md-8">
                    <img src={Collage2} alt="" width="100%" height="100%" />
                </div>
                <div className="col-md-4">
                    <img src={Collage3} alt="" width="100%" className='id-image' />
                </div>
            </div>
            <div className='mt-4'> <img src={Collage4} alt="" width="100%" /></div>
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="Collage5">
                        <img src={Collage5} alt="" />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="Collage6">
                        <img src={Collage6} alt="" />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="Collage7">
                        <img src={Collage7} alt="" />
                    </div>
                </div>

            </div>
            <div className='mt-4'> <img src={Collage8} alt="" width="100%" /></div>
        </div>
    );
};

export default Collage;
