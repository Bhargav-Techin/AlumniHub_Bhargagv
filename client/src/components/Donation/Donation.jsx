import React from 'react';
import '../../css/donation.css';
import '../../css/alumniList.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { alumniData } from '../../utils/Links';
import AlumniCard from '../Alumni/AlumniCard';
import ProsAndCons from './ProsAndCons.jsx';
import DonationImpactSection from './DonationImpactSection.jsx';

const Donation = () => {
    return (
        <div className='donation'>
            <div>
                <h1 style={{ textAlign: 'center' }}>General Purpose Donation</h1>
                <p className='donation-para-1'>
                    Your donation is important to the Association in carrying out its work. It will go a long way in serving the causes mentioned in the Permissible End Uses (Bold) list of activities appearing in this page.

                    Donation is this category will be auto accepted and put in the mixed kitty for need based utilization around the year.

                    Donation flow as in existing website (improve as may be possible)
                </p>
                <p className='donation-para-1'>
                    Donation amount – Rs. 2500 to Rs. 1 lac
                </p>
            </div>
            <Button className='donation-button' variant="primary">Donate now</Button>

            <section className="alumni-list-section light">
                <Container>
                    <h1 className="alumni-heading mb-5 text-center">Our Distinguished Alumni</h1>
                    <Row>
                        {alumniData.map((alumni, i) => (
                            <Col xs={12} md={6} lg={4} className="mb-4" key={i}>
                                <AlumniCard alumni={alumni} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <ProsAndCons />
            <DonationImpactSection/>
        </div>
    );
};

export default Donation;
