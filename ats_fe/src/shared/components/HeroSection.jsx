import React from 'react';

const HeroSection = () => {
    return (
        <div
            className="position-relative text-white pt-3 py-2 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #667eea 0%, #4A3AFF 100%)' }}
        >
            <div className="container position-relative text-center my-4 z-index-1">
                <h1 className="display-4 fw-bold mb-3">Join Our Team</h1>
                <p className="text-white-50 fs-5 mb-4">Discover exciting opportunities and build your career with us</p>

                <div className="mx-auto bg-white rounded-pill shadow p-2 d-flex align-items-center mb-4" style={{ width: '650px' }}>
                    <div className="d-flex align-items-center px-3 flex-grow-1 text-muted">
                        <i className="bi bi-search me-2"></i>
                        <input
                            type="text"
                            className="form-control border-0 bg-transparent p-2 text-dark shadow-none"
                            placeholder="Search by job title, skill or keyword..."
                        />
                    </div>
                    <button className="btn rounded-pill px-4 py-2 text-white fw-medium" style={{ backgroundColor: '#4A3AFF' }}>Search</button>
                </div>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                    {['All Departments', 'All Locations', 'All Types'].map((filter, index) => (
                        <button key={index}
                            className="btn border border-white border-opacity-25 text-white rounded-3 px-4 py-2 dropdown-toggle d-flex align-items-center gap-2"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(5px)' }}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeroSection;