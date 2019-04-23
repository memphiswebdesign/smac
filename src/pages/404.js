import React from "react"
import Layout from '../components/Layout';

export default () => {
    return (
        <Layout>
            <section className="ds s-py-60 s-py-md-90 error-404 not-found page_404">
				<div className="container">
					<div className="row">
						<div className="d-none d-lg-block divider-110"></div>
						<div className="col-sm-12 text-center">
							<header className="page-header">
								<h2>
									404
									<span className="oops grey">Ooops!</span>
								</h2>
								<h3>
									Sorry Page Not Found!
								</h3>
							</header>

							<div className="page-content">
								<p>
									<a href="/" className="btn btn-maincolor">BACK TO HOMEPAGE</a>
								</p>
							</div>
						</div>
						<div className="d-none d-lg-block divider-110"></div>
					</div>
				</div>
			</section>
        </Layout>
    );
}
