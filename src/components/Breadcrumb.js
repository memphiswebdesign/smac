import React from "react"
import { Link } from "gatsby";

function getCrumbClass(list, index) {
    return list.length - 1 === index ? "breadcrumb-item active" : "breadcrumb-item";
}

export default (props) => {

    return (
        <section className="page_title ds s-parallax s-overlay s-py-5">
            <div className="container">
                <div className="row">

                    <div className="divider-45"></div>

                    <div className="col-md-12 text-center">
                        <h1 className="bold">{ props.title }</h1>
                        <ol className="breadcrumb">
                            {props.list.map((item, index) => (
                                <li className={getCrumbClass(props.list, index)} key={ index }>
                                    {props.list.length - 1 === index ? (
                                        <span>{ item.name }</span>
                                    ) : (
                                        <Link to={ item.url }>{ item.name }</Link>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="divider-50"></div>

                </div>
            </div>
        </section>
    )
}
