import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from "../components/Breadcrumb";
import InfoBanner from "../components/InfoBanner";


export default () => {
    return (
        <Layout>

        	<Breadcrumb list={[{name: 'home', url: '/'}, {name: 'Programs', url: '/programs'}, {name: 'Class Schedule', url: '/class-schedule'}]} title={"Class Schedule"}/>

        	<section className="ds s-py-40 s-py-md-60 summer-camp-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1 col-lg-2"></div>
                        <div className="col-md-5">
							<h3>Monday</h3> 
							<p><strong className="color-main2">4:30-5:15</strong> White and Yellow belts<br />
							<strong className="color-main2">5:15-6:00</strong> Orange/Green/Purple<br />
							<strong className="color-main2">6:00-6:45</strong> Hyper Pro Training<span className="color-main">**</span><br />
							<strong className="color-main2">6:45-7:30</strong> Blue through Poom<br />
							<strong className="color-main2">7:30-8:00</strong> Adult/Teen Fitness<span className="color-main">*</span><br />
							<strong className="color-main2">8:00-8:30</strong> Adult/Teen TKD<span className="color-main">***</span></p>
							<div className="divider-20"></div>
                        </div>
                        <div className="col-md-5">
                        	<h3>Tuesday</h3>
							<p><strong className="color-main2">4:30-5:00</strong> Lil' Dragons<br />
							<strong className="color-main2">5:00-5:45</strong> Orange/Green/Purple<br />
							<strong className="color-main2">5:45-6:30</strong> Hyper Fight Club<span className="color-main">**</span><br />
							<strong className="color-main2">6:30-7:15</strong> Black belts/Rec Black<br />
							<strong className="color-main2">7:15-7:45</strong> Adult/Teen Fitness Class<span className="color-main">*</span><br />
							<strong className="color-main2">7:45-8:15</strong> Adult/Teen Fitness TKD<span className="color-main">***</span></p>
                        </div>
                        {/*<div className="col-md-1"></div>*/}
					</div>
					<div className="divider-20"></div>
					<div className="row">
                        <div className="col-md-1 col-lg-2"></div>
                        <div className="col-md-5">
                        	<h3>Wednesday</h3>
							<p><strong className="color-main2">4:30-5:15</strong> Orange/Green/Purple belts<br />
							<strong className="color-main2">5:15-6:00</strong> White and Yellow belts<br />
							<strong className="color-main2">6:00-6:45</strong> Blue through Poom<br />
							<strong className="color-main2">6:45-7:30</strong> Rec Black</p>
							<div className="divider-20"></div>
						</div>
                        <div className="col-md-5">
                        	<h3>Thursday</h3>
							<p><strong className="color-main2">4:30-5:00</strong> Lil' Dragons<br />
							<strong className="color-main2">5:00-5:45</strong> White & Yellow Belts<br />
							<strong className="color-main2">5:45-6:30</strong> Blue through Poom<br />
							<strong className="color-main2">6:30-7:15</strong> Black Belts/Rec Black<br />
							<strong className="color-main2">7:15-7:45</strong> Adult/Teen Fitness<span className="color-main">*</span><br />
							<strong className="color-main2">7:45-8:15</strong> Adult/Teen TKD<span className="color-main">***</span></p>
						</div>
                        {/*<div className="col-md-1"></div>*/}
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-18">
                    		<hr />
							<p><em><span className="color-main">*</span> Fitness is a stand-alone class for those just wanting fitness. If you are taking the TKD class you must take fitness class prior to your class.<br />
							<span className="color-main">**</span> Black belts are welcome to take the Hyper classes as part of the black belt program. You are required to purchase the proper attire and gear needed.<br />
							<span className="color-main">***</span> Teen class includes kids 12 and up.</em></p>
						</div>
                        <div className="col-md-2"></div>
					</div> 
				</div>
			</section>

            <InfoBanner color={"red"} />

        </Layout>
    );
} 
