import React from "react"
import Layout from '../components/Layout';
import Breadcrumb from "../components/Breadcrumb";
import InfoBanner from "../components/InfoBanner";


export default () => {
    return (
        <Layout>

        	<Breadcrumb list={[{name: 'home', url: '/'}, {name: 'private lessons', url: '/private-lessons'}]} title={"Private Lessons"}/>

        	<section className="ds s-py-60 s-py-md-90 summer-camp-section">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-3">
                            <img src="/images/gallery/private-lessons-bw.jpg" alt={""}/>
                        </div>
                        <div className="col-md-6">
                            <h4 className="mb-4">SMAC Private Lessons</h4>
                            <p>Private Lessons are a great tool to help those who are losing confidence due to challenges they may be facing in certain areas of their training. They also help those who are competitive and want to take their training to another level. Regardless of what your looking for, private lessons can help you in any area. Privates are also a great way to learn weapons, tricking, etc along with material that is not part of traditional Taekwondo. All of our instructors are qualified to help and the prices vary depending on the instructors rank and experience. Contact an instructor to schedule your first private lesson!!</p>
                        </div>
                    </div>
				</div> 
			</section>

            <InfoBanner color={"red"} />

        </Layout>
    );
} 
