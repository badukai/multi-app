import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <section className="page404">
            <div className="container">
                <div class="center-div">
                    <h2>404</h2>
                    <h3>Page Not Found</h3>
                    <Link to="/" className="btn btn-danger">
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
}
