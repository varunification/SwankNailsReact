import React from 'react';
import ServiceImage from '../../assets/servicesleftpane.jpg'; // Adjust the path as needed

export default function Services() {
    return (
        <div className="container my-5">
            <div className="row flex">
                {/* Left Column - Image */}
                <div className="col-md-3 .bg-primary">
                    <img
                        src={ServiceImage}
                        alt="Service We Offer"
                        className="img-fluid rounded"
                    />
                </div>

                {/* Right Column - Services List */}
                <div className="col-md-9">
                    <h2 className="mb-4">Service We Offer</h2>
                    <div className="list-group">
                        <div className="list-group-item">
                            <h5 className="mb-1">Nail Art Design</h5>
                            <p className="mb-1">Creative and unique nail art designs tailored to your style.</p>
                        </div>
                        <div className="list-group-item">
                            <h5 className="mb-1">Manicures & Pedicures</h5>
                            <p className="mb-1">Relaxing and rejuvenating treatments for your hands and feet.</p>
                        </div>
                        <div className="list-group-item">
                            <h5 className="mb-1">Gel & Acrylic Nails</h5>
                            <p className="mb-1">High-quality gel and acrylic nail services for long-lasting beauty.</p>
                        </div>
                        <div className="list-group-item">
                            <h5 className="mb-1">Nail Repairs & Maintenance</h5>
                            <p className="mb-1">Professional nail repairs and maintenance to keep your nails in perfect condition.</p>
                        </div>
                        <div className="list-group-item">
                            <h5 className="mb-1">Special Occasion Nails</h5>
                            <p className="mb-1">Elegant and stunning nail designs for your special events.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}